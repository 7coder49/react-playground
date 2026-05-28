'use client';

import { Dispatch, memo, SetStateAction, useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { debounce } from "next/dist/server/utils";

export default function UserList() {
    const [users, setUsers] = useState<any>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [filteredUsers, setFilteredUsers] = useState<any>([]);

    const getUserList = () => {
        fetch('http://localhost:3000/getAllUsers')
            .then(async(res)=>{
                const userList = await res.json();
                
                setUsers(userList.data)
                setFilteredUsers(userList.data)
            })
    }

    const filterUsers = debounce((text: string)=>{
        
        const filterData = users.filter((u)=>
            Object.values(u).some((v)=>
                String(v).toLowerCase().includes(text)
            )
        )

        setFilteredUsers(filterData);
    }, 900)

    useEffect(()=>{
        if(users.length === 0) return;
        filterUsers(searchText);
    }, [searchText])

    useEffect(()=>{
        getUserList();
    }, []);

    return (
        <div className="w-full">
            <div className="w-full">
                <SearchBox searchText={searchText} setSearchText={setSearchText}/>
            </div>
            <UserListTable users={filteredUsers}/>
        </div>
    )
}

const SearchBox = ({searchText, setSearchText}: {searchText: string, setSearchText: Dispatch<SetStateAction<string>>}) => {
    
    return (
        <div className="flex justify-end mb-10 w-full">
            <input 
                className="w-1/2 h-10 border border-gray-400 p-1"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            ></input>
        </div>
    )
}

const UserListTable = memo(function Users({users}: {users: any}){
    return(
        <>
            {
                users.length > 0 &&
                <Table className="border">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="border">ID</TableHead>
                            <TableHead className="border">Name</TableHead>
                            <TableHead className="border">Age</TableHead>
                            <TableHead className="border">Dept</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            users.map((user: any)=>(
                                <TableRow key={user.id}>
                                    <TableCell className="border">{user.id}</TableCell>
                                    <TableCell className="border">{user.name}</TableCell>
                                    <TableCell className="border">{user.age}</TableCell>
                                    <TableCell className="border">{user.dept}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            }
        </>
    )
})