"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TodoDrawer from "@components/drawer";
import { useUserContext } from "@context/AuthContext";
import { useTodoContext } from "@context/TodoContext";
import { Loader } from "lucide-react";

const Home = () => {
    const titleRef = useRef(null);
    const { user, isLoading } = useUserContext();
    const {
        allTodos,
        setAllTodos,
        isLoading: isTodoLoading,
        setIsLoading: setIsTodoLoading,
    } = useTodoContext();

    useEffect(() => {
        gsap.to(titleRef.current, {
            y: 20,
            duration: 0.5,
            opacity: 1,
        });
    }, []);

    useEffect(() => {
        setIsTodoLoading(true);
        const fetchTodos = async (userId: string) => {
            const response = await fetch("/api/user/allTodos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                }),
            });

            const data = await response.json();

            setAllTodos(data);
            setIsTodoLoading(false);
        };

        if (!isLoading && user?.id) {
            fetchTodos(user.id);
        }
    }, [user, isLoading, setAllTodos, setIsTodoLoading]);

    return (
        <div className="" suppressHydrationWarning>
            <h1 ref={titleRef} className="sm:text-7xl text-5xl font-bold opacity-0 font-neue">
                Todo - <span className="font-normal">草加</span>
            </h1>

            {isTodoLoading ? (
                <div className="w-full flex-center mt-44">
                    <Loader />
                </div>
            ) : (
                <div className="mt-44">
                    {allTodos.map((todo, index) => (
                       <div key={index} className="pt-5">
                             <TodoDrawer todo={todo} />
                       </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
