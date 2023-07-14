/* eslint-disable react-hooks/rules-of-hooks */
"use client"

/** imports */
import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const signup = () => {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup", user)
            if (response.data.error) {
                toast.error(response.data.error)
                return;
            }
            toast.success(response.data.message)

            router.push("/login")
        } catch (error: any) {
            toast.error(error.response?.data.error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    })
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h1 className='text-center text-white font-extrabold'>{loading ? <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg> : "SIGNUP"}</h1>
            <hr className="mb-5" />

            <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"
                className="p-2 border border-gray-300 text-slate-700 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />

            <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
                className="p-2 border border-gray-300 text-slate-700 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />

            <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
                className="p-2 border border-gray-300 text-slate-700 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />
            <button onClick={onSignup} className="p-2 mb-4 text-white font-bold border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600">{buttonDisabled ? "No Signup" : "Signup"}</button>
            <Link href="/login" className="text-white italic underline hover:text-[#0f172a">Login</Link>
        </div>
    )
}

export default signup