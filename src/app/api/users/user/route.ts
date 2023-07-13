import { getUserByToken } from "@/helpers/get-user-data";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user-model";
import { connect } from "@/db-config/db-config";

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = await getUserByToken(request)
        const user = await User.findById({ _id: userId }).select("-password")
        return NextResponse.json({ message: "User Found", data: user })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}
