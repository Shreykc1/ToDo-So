"use client"
import { useEffect, useRef, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { Checkbox } from "./ui/checkbox";
import { FaFlag, FaRegFlag } from "react-icons/fa6";
import CalendarControls from "./calendar";
import { Loader } from "lucide-react";

const Notebook = ({
    id,
    title,
    setTitle,
    isChecked,
    setIsChecked,
    status,
    setStatus,
    date,
    setDate,
    description,
    setDescription,
    flag,
    setFlag
}:TodoDrawerProps) => {


const formRef = useRef(null);
const [isSaving, setIsSaving] = useState(false);
const [isSelected, setIsSelected] = useState(false);

useGSAP(()=>{
    gsap.to(formRef.current,{
        opacity:1,
        duration:1,
    });
},[])



    const onNoteChange = (e:any) => {
        //@ts-ignore
        setDescription(e.target.value);
    }
    const onNoteHeadingChange = (e:any) => {
        //@ts-ignore
        setTitle(e.target.value);
    }

    const handleFormSubmit = async (e:any) => {
        e.preventDefault();
        await changeStatus(id!,isChecked,status,flag,title,description,date!)
    };


    const changeFlag = (e:any) => {
        e.preventDefault();
        //@ts-ignore
        setFlag((prev) => !prev);
    }


    const changeStatus = async (
        id: string,
        isChecked: boolean,
        status:string,
        flag:boolean,
        title:string,
        description:string,
        date:Date,
    ) => {
        setIsSaving(true);
        const response = await fetch("/api/todo/notebook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                isChecked,
                status,
                flag,
                title,
                description,
                date
            }),
        });
        setIsSaving(false);
        const data = await response.json();
        alert(data.message);
    };


  return (
    <div className='w-full h-screen font-normal base-regular'>
        <form className="flex flex-col opacity-0" onSubmit={handleFormSubmit} ref={formRef}>
            <div className="flex-between w-full">
            <Checkbox
                className='rounded-full mt-[1px]'
                checked={isChecked}
                onCheckedChange={(checked:any) => {
                    //@ts-ignore
                    setIsChecked(checked);
                }}
                onClick={(e) => e.stopPropagation()}
                 />
                <Input
                    placeholder="Enter title"
                    className="font-bold text-xl border-none shadow-none"
                    onChange={(e:any) => onNoteHeadingChange(e)}
                    value={title}
                />

                <p className="text-sm">{status}</p>

                <Button className="bg-transparent shadow-none text-black hover:bg-transparent" onClick={(e:any)=>changeFlag(e)}>
                    {flag ? <FaFlag /> : <FaRegFlag />}
                </Button>
            </div>


            <Textarea
            placeholder="Start making decisions..."
            onChange={(e:any) => onNoteChange(e)}
            className="border-none shadow-none"
            value={description}
            />

            <div className="flex-between w-full">
                <Button className="w-20 font-normal tracking-wide bg-dark-3 border border-gray-500 hover:bg-light-2
                hover:text-dark-3 text-light-2 shadow-none" type="submit" onClick={()=> setIsSelected(true)}>
                    {isSaving ? <Loader /> : "Done" && isSelected ? "Saved" : "Save"}
                </Button>



                <CalendarControls
                date={date}
                //@ts-ignore
                setDate={setDate}
                />


            </div>

        </form>
    </div>
  )
}

export default Notebook
