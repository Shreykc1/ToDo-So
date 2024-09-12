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
    const [title, setTitle] = useState('Water plants in the morning🌱');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('read');
    const [isChecked, setIsChecked] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [flag, setFlag] = useState(false);
    const [allTodos, setAllTodos] = useState<any[]>([]); // Add allTodos and setAllTodos

    return (
        <TodoContext.Provider value={{
            title, setTitle,
            description, setDescription,
            status, setStatus,
            isChecked, setIsChecked,
            //@ts-ignore
            date, setDate,
            flag, setFlag,
            allTodos, setAllTodos  // Provide allTodos and setAllTodos
        }}>
            {children}
        </TodoContext.Provider>
    );
};
