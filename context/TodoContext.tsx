"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('read');
    const [isChecked, setIsChecked] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [flag, setFlag] = useState(false);
    const [allTodos, setAllTodos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<any>(null);
    return (
        <TodoContext.Provider value={{
            title, setTitle,
            description, setDescription,
            status, setStatus,
            isChecked, setIsChecked,
            //@ts-ignore
            date, setDate,
            flag, setFlag,
            allTodos, setAllTodos,
            selectedTodo,setSelectedTodo,
            isLoading, setIsLoading }}>
            {children}
        </TodoContext.Provider>
    );
};
