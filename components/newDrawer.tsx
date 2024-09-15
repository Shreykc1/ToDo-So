"use client"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import TodoInput from "./todo-inputs"
import Notebook from "./notebook"
import { useEffect, useState } from "react"
import { FaRegEdit } from "react-icons/fa"
import NewNotebook from "./newNotebook"



const NewDrawer = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }


    return (
            <>
                <div className="sm:hidden block font-sf p-4">
                <NewNotebook />
            </div>

            {
                <div className="max-sm:hidden block w-4">
                     <Drawer>
            <DrawerTrigger>
                <FaRegEdit className="mt-1"/>
            </DrawerTrigger>
            <DrawerContent className="h-3/4 bg-light-2 border-none font-sf p-4">
                <NewNotebook />
            </DrawerContent>
        </Drawer>
                </div>
            }
            </>

    )
}

export default NewDrawer
