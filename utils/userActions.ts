import { account, avatars, databases, appwriteConfig, storage } from '@app/api/config';
import { ID, Query } from 'appwrite';
import { revalidatePath } from 'next/cache';





// Function to fetch the current user's ID
async function getCurrentUserId(): Promise<string> {
    try {
        const currentUser = await account.get(); // Get the current user's information
        return currentUser.$id; // Return the user's ID
    } catch (error) {
        console.error("Failed to get current user's ID:", error);
        throw error;
    }
}

// Main function to delete the current user's session
export async function deleteAllActiveSessions() {
    try {
        // Fetch the current user's ID
        const userId = await getCurrentUserId();

        // Correctly list sessions for the current user
        const sessionsResponse = await account.listSessions();
        const sessions = sessionsResponse.sessions;

        // Assuming the current session is the latest one, or you have another criterion to identify it
        const currentSessionId = sessions[sessions.length - 1].$id; // Get the last session ID

        // Delete the identified session
        await account.deleteSession(currentSessionId);

        console.log("Current user's session deleted successfully.");
    } catch (error) {
        console.error("Failed to delete current user's session:", error);
    }
}



export async function createUserAccount(user: INewUser) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        user.email,
        user.password,
        user.name
      );

      if (!newAccount) throw Error
      const avatarUrl = avatars.getInitials(user.name);

      const newUser = await saveUserToDB({
        accountID: newAccount.$id,
        name: newAccount.name,
        email: newAccount.email,
        imageURL: avatarUrl,
      });

      return newUser;
    } catch (error) {
      console.log(error);
      return error;
    }
  }


export async function saveUserToDB(user:{
    accountID: string,
    email: string,
    name:string,
    imageURL: URL,
    username?: string,
}) {
    try{
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        )
        return newUser
    } catch(e){
        console.log(e)
    }
}


export async function signInAccount(email: string, password: string) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
            return session;
    } catch (e) {
        console.error(e);
        return null;
    }
}


export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");
    revalidatePath('/');
    return session
  } catch (error) {
    console.log(error)
  }
}

export async function adminSignOutAccount(){
    try {
            const session = await account.deleteSession("current")
            return session;
        }
    catch (error) {
        console.log(error)
    }
}




export async function getAccount() {
    try {
      const currentAccount = await account.get();

      return currentAccount;
    } catch (error) {
      console.log(error);
    }
  }



export async function getCurrentUser() {
    try {
      const currentAccount = await getAccount();

      if (!currentAccount) throw Error;

      const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("accountID", currentAccount.$id)]
      );

      if (!currentUser) throw Error;

      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }



  // ============================== GET USER BY ID
  export async function getUserById(userID: string) {
    try {
      const user = await databases.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        userID
      );

      if (!user) throw Error;

      return user;
    } catch (error) {
      console.log(error);
    }
  }









  export async function uploadFile(file: File) {
    try {
      const uploadedFile = await storage.createFile(
        appwriteConfig.storageId,
        ID.unique(),
        file
      );

      return uploadedFile;
    } catch (error) {
      console.log(error);
    }
  }

  // ============================== GET FILE URL
  export function getFilePreview(fileId: string) {
    try {
      const fileUrl = storage.getFilePreview(
        appwriteConfig.storageId,
        fileId,
        2000,
        2000,
        // "top"
        // 100
      );

      if (!fileUrl) throw Error;
      console.log(fileUrl)
      return fileUrl;
    } catch (error) {
      console.log(error);
    }
  }

  export async function deleteFile(fileId: string) {
    try {
      await storage.deleteFile(appwriteConfig.storageId, fileId);

      return { status: "ok" };
    } catch (error) {
      console.log(error);
    }
  }
