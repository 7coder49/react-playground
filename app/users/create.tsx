import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UserCreation() {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const handleSave = async (e: any) => {
        const user = await fetch('http://localhost:3000/createUser',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(e),
        })
        const userRes = await user.json();
        if(userRes.status === true){
            toast.success(userRes.message);
            reset();
        }else{
            toast.error('Please fill the valid data');
        }
    };

    return (
        <div className="h-[calc(100vh - 3rem)] w-screen flex justify-center items-center p-20 gap-10">
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
                    className="border rounded m-2 p-3 bg-blue-500 text-white"
                    type="submit"
                >
                    Submit
                </button>
                </form>
            </div>
            <div className="flex-1">
                
            </div>
        </div>
    )
}