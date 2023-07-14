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
        <hr/>
        </ul>
      </nav>
    </main>
  )
}
