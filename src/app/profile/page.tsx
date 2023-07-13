/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

/** user interface */
interface UserInterface {
    username: string;
    email: string;
}
const profile = () => {

    const [user, setUser] = useState<UserInterface | undefined>(undefined);
    const router = useRouter()
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("/api/users/user")
                setUser(response.data.data as UserInterface);
            } catch (error: any) {
                toast.error(error)
            }
        }
        fetchUser();
    }, [])
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error: any) {
            console.log(error.response.data.error);
            toast.error(error.response.data.error)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h1 className="font-extrabold">profile</h1>
            <div className="max-w-sm font-extrabold  lg:max-w-full bg-slate-700 text-white text-lg p-5 rounded-md">
                <h2 key={user?.username}>username - {user?.username}</h2>
                <h3 key={user?.email}>email - {user?.email}</h3>
            </div>
            <hr />
            <button
                onClick={logout}
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                LOGOUT
            </button>
        </div>
    )
}

export default profile