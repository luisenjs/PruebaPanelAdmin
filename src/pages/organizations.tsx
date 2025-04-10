import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { ArrowDownUp, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, CircleUser, Search } from "lucide-react";
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
        name: "Organization two"
    },
    {
        id: "3",
        name: "Another one"
    },
    {
        id: "4",
        name: "FME Organizations Ltd"
    },
    {
        id: "5",
        name: "Another one"
    },
    {
        id: "6",
        name: "FME Organizations Ltd"
    },
    {
        id: "7",
        name: "FME Organizations Ltd"
    },
    {
        id: "8",
        name: "FME Organizations Ltd"
    },
    {
        id: "9",
        name: "Another one"
    },
    {
        id: "10",
        name: "Organization two"
    },
    {
        id: "11",
        name: "FME Organizations Ltd"
    },
    {
        id: "12",
        name: "Organization two"
    },
    {
        id: "13",
        name: "FME Organizations Ltd"
    },
    {
        id: "14",
        name: "FME Organizations Ltd"
    },
    {
        id: "15",
        name: "Another one"
    },
    {
        id: "16",
        name: "Another one"
    },
    {
        id: "17",
        name: "Organization two"
    },
    {
        id: "18",
        name: "FME Organizations Ltd"
    }
]

export function Organizations() {

    const [isNewUserFormOpen, setIsNewUserFormOpen] = useState(false);

    const [buscador, setbuscador] = useState("");

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            globalFilter: buscador
        },
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
        onGlobalFilterChange: setbuscador,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    });

    return (
        <>
            <div className="w-full h-full flex flex-col gap-10">
                <div className="w-full h-1/12 flex justify-between items-center text-[#494949] py-1 px-5">
                    <h2 className="font-semibold">Organizations Listing</h2>
                    <span className="text-gray-400"><span className="text-[#494949]">Admin/</span>Organzations List</span>
                </div>
                <div className="px-10 h-11/12">
                    <div className="w-full flex flex-col gap-6 shadow-2xl rounded-2xl">
                        <div className="flex justify-between px-3">
                            <h3 className="font-bold">Organizations</h3>
                            <div className="relative flex w-2/5 items-center">
                                <Search className="absolute z-10 left-2" />
                                <input className="absolute w-full bg-gray-200 rounded-xl py-1 pl-10" type="text" placeholder="Search Organizations here" onChange={(e) => { setbuscador(e.target.value) }} />
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
                    <div className='flex gap-3 items-center justify-end p-3'>
                        <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} className={`bg-gray-200 p-2 rounded-lg ${!table.getCanPreviousPage() && 'cursor-not-allowed opacity-60'}`}>
                            <ChevronsLeft className='size-6 text-gray-400' />
                        </button>
                        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className={`bg-gray-200 p-2 rounded-lg ${!table.getCanPreviousPage() && 'cursor-not-allowed opacity-60'}`}>
                            <ChevronLeft className='size-6 text-gray-400' />
                        </button>
                        <span> Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}</span>
                        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className={`bg-gray-200 p-2 rounded-lg ${!table.getCanNextPage() && 'cursor-not-allowed opacity-60'}`}>
                            <ChevronRight className='size-6 text-gray-400' />
                        </button>
                        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} className={`bg-gray-200 p-2 rounded-lg ${!table.getCanNextPage() && 'cursor-not-allowed opacity-60'}`}>
                            <ChevronsRight className='size-6 text-gray-400' />
                        </button>
                    </div>
                </div>
            </div>
            <NewUserForm isOpen={isNewUserFormOpen} onclose={() => { setIsNewUserFormOpen(false) }} />
        </>
    )
}