"use client"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


import { Button } from "./ui/button"
import TodoInput from "./todo-inputs"
import Notebook from "./notebook"
import { useEffect, useState } from "react"

const TodoDrawer = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }


    return (
        <Drawer>
            <DrawerTrigger className="w-full">
                <TodoInput />
            </DrawerTrigger>
            <DrawerContent className="h-3/4 bg-light-2 border-none font-sf p-4">
                <Notebook />
            </DrawerContent>
        </Drawer>



    )
}

export default TodoDrawer
