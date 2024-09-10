import { Client, Account, Databases, Storage, Avatars } from 'appwrite'


export const appwriteConfig = {
    url: process.env.APPWRITE_URL,
    projectId: process.env.TODO_PROJECT_ID,
    databaseId: process.env.TODO_DATABASE_ID,
    storageId: process.env.TODO_STORAGE_ID,
    userCollectionId: process.env.TODO_USER_COLLECTION_ID,
    todoCollectionId: process.env.TODO_TODO_COLLECTION_ID,
}

export const client = new Client();

client.setProject(appwriteConfig.projectId!);
client.setEndpoint(appwriteConfig.url!);




export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
