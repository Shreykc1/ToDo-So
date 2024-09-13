import { appwriteConfig, databases } from "@app/api/config";
import { revalidatePath } from "next/cache";

export const POST = async (request: any) => {
    const { id, isChecked, status,flag,title,description,date } = await request.json();
    try {
        const handleChange = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.todoCollectionId,
            id,
            {
                checked: isChecked,
                status,
                flag,
                title,
                description,
                date
            }
        );
        if(!handleChange) throw Error;
        revalidatePath('/');

        return new Response(JSON.stringify({
            success:true,
            message: "Todo updated successfully!"
        }), { status:200 });
    } catch (error) {
        console.log(error)
        return new Response(`Error while updating NoteBook ${error}`, { status:500 });
    }
}
