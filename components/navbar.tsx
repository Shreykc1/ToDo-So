"use client"
import Link from "next/link"
import Image from "next/image"
import { FaRegEdit, FaRegMoon, FaUserAlt } from "react-icons/fa"
import { signOutAccount } from "@utils/userActions"
import { Button } from "./ui/button"




const Nav = () => {

     const signOut = async() => {
        await signOutAccount();
    }
    return (
        <nav className='flex-between sticky top-0 left-0 w-full rounded-3xl p-1 mb-14 h-16'>
            <Link href="/">
                <p className="font-normal text-lg">草加</p>
            </Link>

            <div className="flex gap-14">
                <FaRegEdit className="mt-1" />
                <FaRegMoon className="mt-[5px]"/>
                <Button type="submit" onClick={signOut} >
                    <FaUserAlt className="mt-[5px]" />
                </Button>
            </div>
        </nav>
    )
}

export default Nav
