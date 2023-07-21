"use client"
import { useRouter } from "next/navigation"
export default function Home() {
  const router = useRouter()
  return (
    <main className=''>
      <nav className="bg--100 text-black">
        <ul className="flex gap-5 p-5 font-extrabold">
          <li><button className="border-solid border-2 rounded text-white p-2 hover:bg-slate-100 hover:text-black" onClick={() => router.push("/login")}>Login</button></li>
          <li><button className="border-solid border-2 rounded text-white p-2 hover:bg-slate-100 hover:text-black" onClick={() => router.push("/signup")}>Signup</button></li>
          <hr />
        </ul>
      </nav>
      <div className="flex justify-center items-center">
        <div className="w-180 h-80 overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className="px-10 mx-10 text-white w-100 flex justify-center items-center bg-blue-600 p-4 rounded-lg shadow-lg">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias totam, ducimus dolores tenetur iste placeat harum eveniet nostrum dolor reprehenderit et aut magnam itaque nulla esse! Commodi, modi a!</p>
        </div>
      </div>



    </main>
  )
}
