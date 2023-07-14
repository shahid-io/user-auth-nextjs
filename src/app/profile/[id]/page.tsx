import React from 'react'

const userProfile = ({ params }: any) => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1 className='text-4xl'>Profile page
            <span className='p-2 ml-2 rounded bg-green-500'>{params.id}</span></h1>
        </div>
    )
}

export default userProfile