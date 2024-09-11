import { Client, Account, Databases, Storage, Avatars } from 'appwrite'


export const appwriteConfig = {
    url: process.env.APPWRITE_URL || "https://cloud.appwrite.io/v1",
    projectId: process.env.TODO_PROJECT_ID || "66d9ff7d000fdb089197",
    databaseId: process.env.TODO_DATABASE_ID || "66d9ffbd0021e03fde33",
    storageId: process.env.TODO_STORAGE_ID || "",
    userCollectionId: process.env.TODO_USER_COLLECTION_ID || "66e08d6e001c62bcc300",
    todoCollectionId: process.env.TODO_TODO_COLLECTION_ID || "66e08df4000626a2a24d",
}

export const client = new Client();

client.setProject(appwriteConfig.projectId!);
client.setEndpoint(appwriteConfig.url!);




export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
