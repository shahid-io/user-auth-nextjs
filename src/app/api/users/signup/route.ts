import { connect } from "@/db-config/db-config";
import User from "@/models/user-model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import dotenv from "dotenv"
dotenv.config()

connect();

export async function POST(request: NextRequest) {
    try {
        console.log('reqBody');
        const reqBody = await request.json();
        console.log(reqBody);
        const { username, email, password } = reqBody;

        /** check if user already exists */
        const existsUser = await User.findOne({ email })
        console.log(existsUser)
        if (existsUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }
        /** hash password */
        console.log(process.env.SALT_ROUNDS)
        const salt = await bcryptjs.genSalt(parseInt(process.env.SALT_ROUNDS!))
        const hashedPassword = await bcryptjs.hash(password, salt)

        const user = new User({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await user.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfullt",
            success: true,
            savedUser
        })

    } catch (error: any) {
        console.log(error);
        
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}