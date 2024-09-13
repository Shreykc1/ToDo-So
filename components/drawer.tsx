"use client";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import TodoInput from "./todo-inputs";
import Notebook from "./notebook";
import { useEffect, useState } from "react";
import { useTodoContext } from "@context/TodoContext";
import { useUserContext } from "@context/AuthContext";

const TodoDrawer = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { title, setTitle, isChecked, setIsChecked, status, setStatus, date, setDate, description, setDescription, flag, setFlag, allTodos, setAllTodos } = useTodoContext();
    const { user, isLoading } = useUserContext();
    const [todos, setTodos] = useState(allTodos);
    const [selectedTodo, setSelectedTodo] = useState(null);
    console.log("todos",todos)
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }


    // const handleTodoClick = (todo:any) => {
    //     setTitle(todo.title);
    //     setDescription(todo.description);
    //     setStatus(todo.status);
    //     setIsChecked(todo.isChecked);
    //     setDate(new Date(todo.date));
    //     setFlag(todo.flag);
    //     setSelectedTodo(todo);
    // };



    return (
        <>
            {todos.map((todo, index) => (
                <Drawer key={index}>
                    <DrawerTrigger
                        className="w-full"
                        // onClick={() => handleTodoClick(todo)}
                    >
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
                    {selectedTodo === todo && (
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
                    )}
                </Drawer>
            ))}
        </>
    );
};

export default TodoDrawer;


{/* <Drawer>
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
</Drawer> */}
