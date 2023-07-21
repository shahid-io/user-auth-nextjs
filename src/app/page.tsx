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

      <article className="flex justify-center items-center mt-10">
        <div className="px-10 mx-10 text-white w-100 flex justify-center items-center p-4 rounded-lg shadow-lg">
          <h1 className="prose lg:prose-xl">User Authentication Service</h1>
        </div>
      </article>
      {/*  */}
      <div className="prose lg:prose-xl text-white m-10">
        <p className="mb-6">
          <span className="text-xl text-white font-semibold">1. Next.js and React:</span> The <span className="italic">next</span> and <span className="italic">react</span> dependencies are fundamental to building a Next.js application. Next.js is a popular framework for server-side rendering and static site generation in React. It provides powerful features for creating fast and scalable web applications. React, on the other hand, is a JavaScript library for building user interfaces, and it serves as the core of Next.js applications. With Next.js and React, developers can create interactive and dynamic web pages while optimizing performance.
        </p>
        <p className="mb-6">
          <span className="text-xl text-white font-semibold">2. Axios:</span> The <span className="italic">axios</span> library is a widely-used HTTP client for making API requests in JavaScript. It simplifies the process of sending asynchronous HTTP requests and handling responses, making it a popular choice for interacting with backend APIs. In this project, <span className="italic">axios</span> may be used to fetch data from external APIs or communicate with a server to retrieve data for the application.
        </p>
        <p className="mb-6">
          <span className="text-xl text-white font-semibold">3. Mongoose:</span> <span className="italic">mongoose</span> is an Object Data Modeling (ODM) library for MongoDB. It provides a higher-level abstraction for working with MongoDB databases, making it easier to define data models, perform CRUD operations, and interact with the database in a more organized manner. In this project, <span className="italic">mongoose</span> likely serves as the bridge between the Next.js application and the MongoDB database.
        </p>
        <p className="mb-6">
          <span className="text-xl text-white font-semibold">4. Tailwind CSS:</span> <span className="italic">tailwindcss</span> is a highly popular utility-first CSS framework. It provides a set of utility classes that can be combined to style HTML elements without writing custom CSS. Tailwind CSS allows developers to rapidly build and customize modern UI components with minimal effort. In this project, <span className="italic">tailwindcss</span> is likely used to style the user interface, create responsive layouts, and apply consistent design across the application.
        </p>
        <p className="mb-6">
          <span className="text-xl text-white font-semibold">5. JSON Web Token (JWT):</span> The <span className="italic">jsonwebtoken</span> library is used for generating and verifying JSON Web Tokens (JWT). JWT is a compact and secure way to transmit information between parties in a JSON object format. It is commonly used for user authentication and authorization in web applications. In this project, <span className="italic">jsonwebtoken</span> may be employed to create and verify tokens for user authentication and access control, ensuring secure and authenticated interactions between the server and clients.
        </p>
      </div>

      {/*  */}

    </main>
  )
}
