'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar(){
    const router = useRouter();
    const [activeNav, setactiveNav] = useState<number>(0);
    const changeNav = (id: number) =>{
        setactiveNav(id);
        if(id === 0){
            router.push('/');
            return;
        }
        router.push('/users')
    }


    return(
        <div className="flex gap-20 h-12 w-full bg-gray-400 px-20 items-center">
            <button
                className={`h-8 px-2 cus-pointer rounded-b-sm ${activeNav === 0 ? 'border border-black-900 bg-black-500': ''}`}
                onClick={()=>changeNav(0)}
            >
                User List
            </button>
            <button
                className={`h-8 px-2 cus-pointer rounded-b-sm ${activeNav === 1 ? 'border border-black-900 bg-black-500': ''}`}
                onClick={()=>changeNav(1)}
            >
                User Creation
            </button>
        </div>
    )
}