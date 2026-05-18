import { useForm } from "react-hook-form";

export default function UserCreation() {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const handleSave = async (e: any) => {
        fetch('http://localhost:3000/createUser',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(e),
        });

        reset();
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