import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type newuserformprops = {
    isOpen: boolean;
    onclose: () => void;
}

export function NewUserForm({ isOpen, onclose }: newuserformprops) {

    const { register, handleSubmit, reset } = useForm();

    if (!isOpen) return null;

    function send(e: any) {
        if (e.fullname == "" || e.email == "") {
            Swal.fire({
                title: "Failed",
                text: "Failed to add new user to organization",
                icon: "error",
                width: "30vw",
                padding: "30px",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "w-60 bg-sky-600 rounded-3xl py-2 text-white"
                }
            })
        } else {
            Swal.fire({
                title: "Success",
                text: "Successfully a new user added to organization",
                icon: "success",
                width: "30vw",
                padding: "30px",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "w-60 bg-sky-600 rounded-3xl py-2 text-white"
                }
            })
        }
        reset();
        onclose();
    }

    return (
        <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
            <div className="bg-white text-slate-700 rounded-lg shadow-lg py-5 pb-7 px-10 z-20 h-fit w-1/4 relative flex flex-col gap-5">
                <h2 className="font-bold text-xl">Add new user</h2>
                <p className="text-gray-400">by adding a new user you are giving them permission to make changes.</p>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(send)}>
                    <div>
                        <label htmlFor="fullname" className="text-sky-600 font-semibold">READ CAREFULLY</label>
                        <div className="flex gap-2 justify-between border border-gray-300 rounded-xl p-3">
                            <label htmlFor="fullname" className="font-semibold">FME Organization</label>
                            <input type="radio" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="fullname" className="text-sky-600 font-semibold">FULL NAME</label>
                        <input type="text" placeholder="Yasser Diego Aquino Rivera" {...register("fullname")} className="py-2 px-1 rounded-lg border border-sky-600" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sky-600 font-semibold">EMAIL</label>
                        <input type="text" placeholder="dominio@example.com" {...register("email")} className="py-2 px-1 rounded-lg border border-sky-600" />
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" />
                        <label htmlFor="auth">I grant permission</label>
                    </div>
                    <button type="submit" className="w-full bg-sky-600 rounded-3xl py-2 text-white">Add new user</button>
                </form>
            </div>
        </div>
    )
}