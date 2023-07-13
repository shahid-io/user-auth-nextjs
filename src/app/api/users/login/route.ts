import User from "@/models/user-model";
import { connect } from "@/db-config/db-config";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
connect();

export async function POST(request: NextRequest) {
    try {
        console.log('-------login--------');

        const reqBody = await request.json();
        const { email, password } = await reqBody;
        console.log("user--------", reqBody);

        const user = await User.findOne({ email });
        console.log("fetched user-----------", user)    
        if (!user) {
            return NextResponse.json({ error: "User does not exists" }, { status: 400 })
        }
        /** check if password is correct */
        const validPassword = await bcryptjs.compare(password, user.password!);
        console.log("validPassword------------", validPassword)
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 })
        }
        /** token data */
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,
            { expiresIn: process.env.TOKEN_EXPIRY! }
        )

        const response = NextResponse.json({ message: "Login successful" }, { status: 200 })
        response.cookies.set('token', token, {
            httpOnly: true,
        })
        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}