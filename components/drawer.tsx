"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import TodoInput from "./todo-inputs";
import Notebook from "./notebook";
import { useEffect, useState } from "react";
import { useTodoContext } from "@context/TodoContext";

const TodoDrawer = ({ todo }:{todo:any}) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isChecked, setIsChecked] = useState(todo.isChecked);
    const [title, setTitle] = useState(todo.title);
    const [status, setStatus] = useState(todo.status);
    const [date, setDate] = useState(new Date(todo.date));
    const [description, setDescription] = useState(todo.description);
    const [flag, setFlag] = useState(todo.flag);

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
                    description={description}
                    setDescription={setDescription}
                    flag={flag}
                    setFlag={setFlag}
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
                    description={description}
                    setDescription={setDescription}
                    flag={flag}
                    setFlag={setFlag}
                />
            </DrawerContent>
        </Drawer>
    );
};

export default TodoDrawer;
