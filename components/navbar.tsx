import Link from "next/link"
import Image from "next/image"
import { FaRegEdit, FaRegMoon, FaUserAlt } from "react-icons/fa"




const Nav = () => {
    return (
        <nav className='flex-between sticky top-0 left-0 w-full rounded-3xl p-1 mb-14 h-16'>
            <Link href="/">
                <p className="font-normal text-lg">草加</p>
            </Link>

            <div className="flex gap-14">
                <FaRegEdit className="mt-1" />
                <FaRegMoon className="mt-[5px]"/>
                <FaUserAlt className="mt-[5px]"/>
            </div>
        </nav>
    )
}

export default Nav
