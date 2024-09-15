"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TodoDrawer from "@components/drawer";
import { useUserContext } from "@context/AuthContext";
import { useTodoContext } from "@context/TodoContext";
import { Loader } from "lucide-react";
import { formatDate, getRandomValue } from "@utils/actions";
import { Separator } from "@components/ui/separator";
import { useGSAP } from "@gsap/react";

const Home = () => {
    const titleRef = useRef(null);
    const { user, isLoading } = useUserContext();
    const ikigaiRef = useRef(null);
    const ikigai = ['do what you love','do what what you are good at it','do the world need it','can you be paid for it'];
    const [quote, setQuote] = useState<string>("");
    const {
        allTodos,
        setAllTodos,
        isLoading: isTodoLoading,
        setIsLoading: setIsTodoLoading,
    } = useTodoContext();


    useGSAP(() => {
        gsap.to(titleRef.current, {
            y: 20,
            duration: 0.5,
            opacity: 1,
        });
    }, []);

    useGSAP(() => {
        gsap.from(ikigaiRef.current, {
            y: 50,
            duration: 0.2,
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

        setQuote(getRandomValue(ikigai));
    }, [user, isLoading, setAllTodos, setIsTodoLoading]);

    return (
        <div className="flex flex-col" suppressHydrationWarning>
            <h1 ref={titleRef} className="sm:text-7xl text-5xl font-bold opacity-0 font-neue">
                Todo - <span className="font-normal">草加</span>
            </h1>
                <h3 className="mt-10 ml-2 sm:text-xl text-lg font-light">Based on the principles of ikigai.</h3>


            {isTodoLoading ? (
                <div className="w-full h-[60vh] flex-center">
                    <Loader />
                </div>
            ) : (
                <div className="mt-40">
                    <div className="flex-between">
                    {/* @ts-ignore */}
                    <h3 className="sm:text-lg text-sm text-gray-400">{formatDate(Date.now())}</h3>
                    <h3 className="sm:text-lg text-sm text-gray-400 overflow-hidden h-6" ref={ikigaiRef}>{quote}</h3>
                    </div>
                    <Separator className="mt-2"/>
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
