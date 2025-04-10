import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { ArrowDownUp, CircleUser, Search } from "lucide-react";
import { useState } from "react";
import { NewUserForm } from "../components/newuserform";

type organizationdatatype = {
    id: string;
    name: string;
}

const columnHelper = createColumnHelper<organizationdatatype>();

const columns = [
    columnHelper.accessor("id", {
        header: () => (<span>Sr No</span>),
        cell: info => (<p>{info.getValue()}</p>)
    }),
    columnHelper.accessor("name", {
        header: () => (<span >Organization</span>),
        cell: info => (<p>{info.getValue()}</p>)
    })
]

const data = [
    {
        id: "1",
        name: "FME Organizations Ltd"
    },
    {
        id: "2",
        name: "FME Organizations Ltd"
    },
    {
        id: "3",
        name: "FME Organizations Ltd"
    },
    {
        id: "4",
        name: "FME Organizations Ltd"
    },
    {
        id: "5",
        name: "FME Organizations Ltd"
    },
    {
        id: "6",
        name: "FME Organizations Ltd"
    }
]

export function Organizations() {

    const [isNewUserFormOpen, setIsNewUserFormOpen] = useState(false);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <>
            <div className="w-full h-full flex flex-col gap-10">
                <div className="w-full h-1/12 flex justify-between items-center text-[#494949] py-1 px-5">
                    <h2 className="font-semibold">Organizations Listing</h2>
                    <span className="text-gray-400"><span className="text-[#494949]">Admin/</span>Organzations List</span>
                </div>
                <div className="px-10">
                    <div className="w-full flex flex-col gap-6 shadow-2xl rounded-2xl">
                        <div className="flex justify-between px-3">
                            <h3 className="font-bold">Organizations</h3>
                            <div className="relative flex w-2/5 items-center">
                                <Search className="absolute z-10 left-2" />
                                <input className="absolute w-full bg-gray-200 rounded-xl py-1 pl-10" type="text" placeholder="Search Organizations here" />
                            </div>
                        </div>
                        <table className="w-full">
                            <thead className="bg-[#2A3042] text-white">
                                {
                                    table.getHeaderGroups().map(headergroup => (
                                        <tr>
                                            {
                                                headergroup.headers.map(header => (
                                                    <th className="py-2 font-semibold">
                                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                                    </th>
                                                ))
                                            }
                                            <th>Acciones</th>
                                        </tr>
                                    ))
                                }
                            </thead>
                            <tbody>
                                {
                                    table.getRowModel().rows.map(row => (
                                        <tr className="border-b border-gray-200">
                                            {
                                                row.getVisibleCells().map(cell => (
                                                    <td className="text-center py-2">
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </td>
                                                ))
                                            }
                                            <td className="flex justify-center gap-4 py-2">
                                                <button className="w-24 bg-[#007BFF] rounded-2xl text-white p-1 flex gap-2 text-sm justify-center items-center"><ArrowDownUp size={16} />Switch</button>
                                                <button className="w-24 bg-[#007BFF] rounded-2xl text-white p-1 flex gap-2 text-sm justify-center items-center" onClick={() => { setIsNewUserFormOpen(true) }}><CircleUser />Add user</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <NewUserForm isOpen={isNewUserFormOpen} onclose={() => { setIsNewUserFormOpen(false) }} />
        </>
    )
}