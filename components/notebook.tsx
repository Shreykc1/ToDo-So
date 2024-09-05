"use client"
import { useRef, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const Notebook = () => {
const [note, setNote] = useState("");
const [noteHeading, setNoteHeading] = useState("");
const formRef = useRef(null);

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

    }

  return (
    <div className='w-full h-screen font-normal base-regular'>

        <form className="flex flex-col opacity-0" onSubmit={handleFormSubmit} ref={formRef}>
            <Input
                placeholder="Enter title"
                className="font-bold text-xl border-none shadow-none"
                onChange={(e:any) => onNoteHeadingChange(e)}
            />
            <Textarea
            placeholder="Start making decisions"
            onChange={(e:any) => onNoteChange(e)}
            className="border-none shadow-none"
            />

            <Button className="w-20 h-7" type="submit">
                Save
            </Button>

        </form>
    </div>
  )
}

export default Notebook
