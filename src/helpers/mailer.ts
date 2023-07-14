import nodemailer from "nodemailer"
import User from "@/models/user-model"
import bcryptjs from "bcryptjs"


export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        /** create hashed token */
        const hashedToken = await bcryptjs.hash(userId.toString(), parseInt(process.env.SALT_ROUNDS!));
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000
            }, { new: true, runValidators: true })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            })
        }
        var transport = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS,
            }
        });
        const mailOptions = {
            from: process.env.MAILTRAP_EMAIL_FROM,
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a>
                to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}</p>`
        }
        const mailResponse = await transport.sendEmail(mailOptions);
        return mailResponse;

    } catch (error: any) {
        throw new Error(error.message)
    }
}
