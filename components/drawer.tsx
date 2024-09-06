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
import TodoInput from "./todo-inputs"
import Notebook from "./notebook"
import { useEffect, useState } from "react"

type TodoDrawerProps = {
                title : any,
                setTitle : any,
                isChecked : any,
                setIsChecked : any,
                status : any,
                setStatus : any,
                date:any,
                setDate:any
}

const TodoDrawer = ({
                title,
                setTitle,
                isChecked,
                setIsChecked,
                status,
                setStatus,
                date,
                setDate
}: TodoDrawerProps) => {

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
                <TodoInput
                title={title}
                setTitle={setTitle}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                status={status}
                setStatus={setStatus}
                date={date}
                setDate={setDate}
                />
            </DrawerTrigger>
            <DrawerContent className="h-3/4 bg-light-2 border-none font-sf p-4">
                <Notebook
                title={title}
                setTitle={setTitle}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                status={status}
                setStatus={setStatus}
                date={date}
                setDate={setDate}
                />
            </DrawerContent>
        </Drawer>



    )
}

export default TodoDrawer
