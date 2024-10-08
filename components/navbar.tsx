"use client"
import Link from "next/link"
import Image from "next/image"
import { FaCalendar, FaEdit, FaRegEdit, FaRegMoon, FaUserAlt } from "react-icons/fa"
import { signOutAccount } from "@utils/userActions"
import { Button } from "./ui/button"
import { revalidatePath } from "next/cache"
import { Loader, LogOut, LogOutIcon } from "lucide-react"
import { useUserContext } from "@context/AuthContext"
import NewDrawer from "./newDrawer"
import { useRouter } from "next/navigation"
import { FaUser } from "react-icons/fa6"
import { ModeToggle } from "./ui/theme-button"
import ThemeToggle from "@provider/theme-provider"





const Nav = () => {
    const router = useRouter();
    const { user, isLoading } = useUserContext();
     const signOut = async() => {
        await signOutAccount();
    }
    const reminder = () => {
        router.push('/reminder')
    }
    const profile = () => {
        router.push('/profile')
    }
    return (
        <>
            <nav className='max-sm:hidden flex-between sticky top-0 left-0 w-full rounded-3xl p-1 mb-14 h-16'>
            <Link href="/">
                <p className="font-normal text-lg">草加</p>
            </Link>

            <div className="flex gap-14">
               { isLoading ? <Loader />
               :  <p className="mt-2">
                    hey, {user.name}
               </p>
               }

                <NewDrawer>
                    <FaRegEdit className="mt-3" />
                </NewDrawer>

               <button onClick={reminder}>
                    <FaCalendar />
               </button>

                {/* <FaRegMoon className="mt-[5px]"/> */}
                <ThemeToggle />


                <button onClick={profile}>
                    <FaUser />
               </button>

                <button type="submit" onClick={signOut} className="" >
                    <LogOut className="text-black h-5 w-5 mt-1" />
                </button>
            </div>
        </nav>

               {/* For mobile devices  */}
        {
            <nav className='sm:hidden flex-between sticky top-0 left-0 w-full rounded-3xl p-1 mb-14 h-16'>
            <Link href="/">
                <p className="font-normal text-lg text-gray-500 ">草加</p>
            </Link>

            <div className="flex gap-5">
               {isLoading ? <Loader />
               :  <p className="text-gray-500">
                    hey, {user.name}
               </p>
               }

            </div>
        </nav>
        }


        </>
    )
}

export default Nav
