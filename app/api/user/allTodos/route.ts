import { databases, appwriteConfig } from "@app/api/config";
import { Query } from "appwrite";

export const POST = async (request: any) =>{
    const { userId } = await request.json();
    try {

        const allTodos = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.todoCollectionId,
            [Query.equal("user",userId), Query.orderAsc("$createdAt")]
        );
        if (!allTodos) throw Error;
        return new Response(JSON.stringify(allTodos.documents), { status:200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status:500 })
    }
}
