"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react"
import { Calendar } from "./ui/calendar"
import { Loader } from "lucide-react"

type CalendarProps = {
    date?: Date,
    setDate: any,
}

const CalendarControls = ({date,setDate}: CalendarProps) =>{

    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(false);

    const handleSelectDate = () =>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },1000);
        setSelected(true);
    }
  return (
    <Dialog>
      <DialogTrigger >
            <Button className="px-3 font-normal tracking-wide bg-transparent border border-gray-500 hover:bg-light-2
                hover:text-dark-2 text-dark-2 shadow-none" type="button">
                    Set Reminder
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-sf">
        <DialogHeader>
          <DialogTitle>Set Reminder</DialogTitle>
          <DialogDescription>
            Please select a date you want to keep the reminder on.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
                <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
        />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSelectDate}>{loading ? <Loader /> : "Select" && selected ? "Selected" : "Select" }</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CalendarControls
