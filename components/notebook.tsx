"use client"
import { useRef, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { Checkbox } from "./ui/checkbox";
import { FaFlag, FaRegFlag } from "react-icons/fa6";



const Notebook = () => {
const [isChecked, setIsChecked] = useState(false);
const [note, setNote] = useState("");
const [noteHeading, setNoteHeading] = useState("");
const formRef = useRef(null);
const [flag, setFlag] = useState(false);
useGSAP(()=>{
    gsap.to(formRef.current,{
        opacity:1,
        duration:1,
    });
},[])




    const onNoteChange = (e:any) => {
        setNote(e.target.value);
    }
    const onNoteHeadingChange = (e:any) => {
        setNoteHeading(e.target.value);
    }

    const handleFormSubmit = () => {
        // TODO: CALL AN API FUNCTION TO SEND DATA & RevalidatePath
    }

    const changeFlag = () => {
        setFlag((prev)=>!prev);
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
                />

                <Button className="bg-transparent shadow-none text-black hover:bg-transparent" onClick={changeFlag}>
                    {flag ? <FaFlag /> : <FaRegFlag />}
                </Button>
            </div>
            <Textarea
            placeholder="Start making decisions..."
            onChange={(e:any) => onNoteChange(e)}
            className="border-none shadow-none"
            />

            <Button className="w-20 font-normal tracking-wide bg-transparent border border-gray-500 hover:bg-dark-3
            hover:text-white text-black shadow-none" type="submit">
                Save
            </Button>

        </form>
    </div>
  )
}

export default Notebook
