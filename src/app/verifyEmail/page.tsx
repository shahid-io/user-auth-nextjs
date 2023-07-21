"use client"

import axios from "axios"
import Link from "next/link"
import React, { useState, useEffect } from "react"

const verifyEmail = () => {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyEmail", { token })
            setVerified(true)
        } catch (error: any) {
            setError(true);
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    useEffect(() => {
        const urlToken = window.location.search.split("=");
        setToken(urlToken || "");
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-green-500 text-white">{token ? `${token}` : "empty token"}</h2>
            {verified && (
                <div>
                    <h2 className="text-2xl">Email Verified</h2>
                    <Link href="/login">
                        Login
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl">Email Verified</h2>
                    <Link href="/login">
                        Login
                    </Link>
                </div>
            )}
        </div>
    )
}

export default verifyEmail