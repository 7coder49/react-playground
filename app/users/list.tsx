import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function UserList() {
    const [users, setUsers] = useState<any>([]);
    const [searchText, setSearchText] = useState<string>("");

    const getUserList = () => {
        fetch('http://localhost:3000/getAllUsers')
            .then(async(res)=>{
                const userList = await res.json();
                setUsers(userList)
            })
    }

    useEffect(()=>{
        getUserList();
    }, []);

    return (
        <div className="w-full">
            <div className="w-full">
                <SearchBox searchText={searchText} setSearchText={setSearchText}/>
            </div>
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
                     { users &&
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
        </div>
    )
}

const SearchBox = ({searchText}) => {
    return (
        <div className="flex justify-end mb-10 w-full">
            <input className="w-1/2 h-10 border border-gray-400 p-1"></input>
        </div>
    )
}   