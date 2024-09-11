"use client"
import Link from "next/link"
import Image from "next/image"
import { FaRegEdit, FaRegMoon, FaUserAlt } from "react-icons/fa"
import { signOutAccount } from "@utils/userActions"
import { Button } from "./ui/button"
import { revalidatePath } from "next/cache"
import { Loader, LogOut, LogOutIcon } from "lucide-react"
import { useUserContext } from "@context/AuthContext"
import NewDrawer from "./newDrawer"




const Nav = () => {
    const { user, isLoading } = useUserContext();
     const signOut = async() => {
        await signOutAccount();
        revalidatePath('/ ');
    }
    return (
        <nav className='flex-between sticky top-0 left-0 w-full rounded-3xl p-1 mb-14 h-16'>
            <Link href="/">
                <p className="font-normal text-lg">草加</p>
            </Link>

            <div className="flex gap-14">
               {isLoading ? <Loader />
               :  <p>
                    hey, {user.name}
               </p>
               }

                <NewDrawer />

                <FaRegMoon className="mt-[5px]"/>
                <button type="submit" onClick={signOut} className="" >
                    <LogOut className="text-black h-5 w-5 mt-1" />
                </button>
            </div>
        </nav>
    )
}

export default Nav
