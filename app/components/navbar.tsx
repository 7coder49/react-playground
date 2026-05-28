'use client';

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar(){
    const router = useRouter();
    const pathname = usePathname();
    const [activeNav, setactiveNav] = useState<string>(pathname);
    const changeNav = (path: string) =>{
        setactiveNav(path);
        router.push(path)
    }
    
    return(
        <div className="flex gap-20 h-12 w-full bg-gray-400 px-20 items-center">
            <button
                className={`h-8 px-2 cus-pointer rounded-sm ${activeNav === '/' ? 'border border-blue-900 bg-gray-500': ''}`}
                onClick={()=>changeNav('/')}
            >
                User List
            </button>
            <button
                className={`h-8 px-2 cus-pointer rounded-sm ${activeNav === '/users' ? 'border border-blue-900 bg-gray-500': ''}`}
                onClick={()=>changeNav('/users')}
            >
                User Creation
            </button>
        </div>
    )
}