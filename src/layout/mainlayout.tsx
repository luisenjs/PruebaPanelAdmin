import { Building2, Menu, Settings } from "lucide-react";
import { Organizations } from "../pages/organizations";

export function MainLayout() {
    return (
        <div className="h-screen w-screen flex">
            <aside className="w-1/5 h-full bg-[#2A3042] text-[#C3C0C0] flex flex-col gap-2 px-5">
                <div className="text-white w-full">
                    <img className="w-full max-h-26" src="/src/assets/logo.svg" alt="logo" />
                    <h2 className="w-full text-center font-semibold">Admin Panel</h2>
                </div>
                <h4>Menu</h4>
                <div>
                    <span className="flex gap-2 items-center"><Building2 size={16} />Organizations</span>
                </div>
            </aside>
            <div className="w-4/5 h-full">
                <header className="w-full h-1/12 bg-white flex justify-between items-center px-5">
                    <Menu />
                    <div className="flex gap-2 items-center">
                        <img className="aspect-square h-full" src="/src/assets/profile.svg" alt="profile" />
                        <span>Anne</span>
                        <Settings />
                    </div>
                </header>
                <main>
                    <Organizations />
                </main>
            </div>
        </div>
    )
}