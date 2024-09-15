import NewDrawer from "@components/newDrawer";
import { IconCalendar, IconEdit, IconEditCircle, IconHome, IconUser } from "@tabler/icons-react";
import { FaUserCircle } from "react-icons/fa";

export const BottomBarLinks = [
    {
      title: "Home",
      icon: ( <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/> ),
      href: "/",
    },
    {
        title: "Edit",
        icon: ( <IconEdit className="h-full w-full text-neutral-500 dark:text-neutral-300"/> ),
        href: "/new",
      },
      {
        title: "Reminder",
        icon: ( <IconCalendar className="h-full w-full text-neutral-500 dark:text-neutral-300"/> ),
        href: "/reminder",
      },
      {
        title: "Profile",
        icon: ( <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300"/> ),
        href: "/profile",
      },

  ];
