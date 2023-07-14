import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user-model";
import { connect } from "@/db-config/db-config";
connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;
        console.log("token------------ --> " + token);
        const user = User.findOne(
            {
                verifyToken: token,
                verifyTokenExpiry: { $gt: Date.now() }
            })
        if (!user) {
            return NextResponse.json({ error: "Invalid token" }, { status: 400 })
        }
        console.log("User ------ ->" + user);
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        /** save the changes in db */
        await user.save();

        return NextResponse.json({
            message: "Email verified successfully",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
