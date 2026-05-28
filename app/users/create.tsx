import { useForm } from "react-hook-form";
import { toast } from "sonner";
import api from "../services/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

export default function UserCreation() {
    const [latestUser, setLatestUser] = useState<any>()
    const latestUserColumns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            type: 'number'
        },
        {
            field: 'name',
            headerName: 'Name',
            type: 'string'
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number'
        },
        {
            field: 'dept',
            headerName: 'Dept',
            type: 'string'
        }
    ]

    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const handleSave = async (e: any) => {
        const user = await api.post('/createUser', e)
        if(user.data.success === true){
            toast.success(user.data.message);
            reset();
        }else{
            toast.error('Please fill the valid data');
        }
    };

    const getLatestUser = async () =>{
        const user = await api.get('/getLatestUser');

        if(user.data.success === true){
            toast.success(user.data.message);
            console.log('ser.data',user.data);
            
            setLatestUser(user.data.data);
        }else{
            toast.error('Something went to wrong');
        }
    }

    return (
        <div className="h-[calc(100vh-3rem)] w-screen flex justify-center items-start p-20 gap-10">
            <div className="flex-1">
                <form onSubmit={handleSubmit(handleSave)} className="flex flex-col w-1/2">
                <input
                    className="border rounded m-2 p-3"
                    placeholder="Enter your name"
                    {...register("name")}
                />
                <input
                    className="border rounded m-2 p-3"
                    type="number"
                    placeholder="Enter your age"
                    {...register("age")}
                />
                <input
                    className="border rounded m-2 p-3"
                    placeholder="Enter your dept"
                    {...register("dept")}
                />
                <button
                    className="border rounded m-2 p-3 bg-gray-500 text-white"
                    type="submit"
                >
                    Submit
                </button>
                </form>
            </div>
            <div className="flex-1 flex flex-col gap-10">
                <button className="cursor-pointer bg-gray-500 px-1 border-gray-900"
                onClick={getLatestUser}>
                    Latest User
                </button>
                {
                   latestUser?.id &&
                    <DataGrid columns={latestUserColumns} rows={[latestUser]} className="!bg-gray-400"/>
                }
            </div>
        </div>
    )
}