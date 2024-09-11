"use client"
import { useRef, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { Checkbox } from "./ui/checkbox";
import { FaFlag, FaRegFlag } from "react-icons/fa6";
import CalendarControls from "./calendar";
import { formatDate } from "@utils/actions";
import { revalidatePath } from "next/cache";
import { useUserContext } from "@context/AuthContext";


const newNotebook = () => {
    const { user } = useUserContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('read');
    const [isChecked, setIsChecked] = useState(false);
    const [date, setDate] = useState();
    const [flag, setFlag] = useState(false);
    const formRef = useRef(null);


useGSAP(()=>{
    gsap.to(formRef.current,{
        opacity:1,
        duration:1,
    });
},[])




    const onNoteChange = (e:any) => {

        setDescription(e.target.value);
    }
    const onNoteHeadingChange = (e:any) => {
        setTitle(e.target.value);
    }

    const changeFlag = (e:any) => {
        e.preventDefault();
        setFlag((prev) => !prev);
    }


    const handleFormSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/todo',{
                method: "POST",
                body: JSON.stringify({
                    userId: user.id,
                    title: title,
                    description: description,
                    status: status,
                    isChecked: isChecked ,
                    date,
                    flag
                })
            });

            if (response.ok){
                alert("Todo created Successfully")
                revalidatePath('/');
            }

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='w-full h-screen font-normal base-regular'>
        <form className="flex flex-col opacity-0" onSubmit={handleFormSubmit} ref={formRef}>
            <div className="flex-between w-full">
            <Checkbox
                className='rounded-full mt-[1px]'
                priority={"high"}
                checked={isChecked}
                onCheckedChange={(checked:any) => {
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
                hover:text-dark-3 text-light-2 shadow-none" type="submit">
                    Save
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

export default newNotebook
