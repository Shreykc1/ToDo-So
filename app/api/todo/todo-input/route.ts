import { appwriteConfig, databases } from "@app/api/config";
import { revalidatePath } from "next/cache";

export const POST = async (request: any) => {
    const { id, isChecked, status } = await request.json();
    try {
        const handleChange = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.todoCollectionId,
            id,
            {
                checked: isChecked,
                status
            }
        );
        if(!handleChange) throw Error;
        revalidatePath('/');

        return new Response(JSON.stringify({
            success:true,
            message: "Todo updated successfulyl!"
        }), { status:200 });
    } catch (error) {
        console.log(error)
        return new Response(`Error while updating Todo ${error}`, { status:500 });
    }
}
