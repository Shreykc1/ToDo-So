import { ID, Query } from "appwrite";
import { appwriteConfig, databases } from "../config";


export const POST = async (request: any) => {
    const { userId, title, description, status, isChecked,date,flag } = await request.json();
    try {
        const createTodo = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.todoCollectionId,
            ID.unique(),
            {
                user: userId,
                title,
                description,
                status,
                checked: isChecked,
                date,
                flag
            }
        );

        if(!createTodo) throw Error;

        return new Response("Post Created Successfully", { status:201 });
    } catch (error) {
        console.log(error)
        return new Response(`Error while creating Todo ${error}`, { status:500 });
    }
}


