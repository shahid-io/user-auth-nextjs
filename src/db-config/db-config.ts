import mongoose from "mongoose";
export async function connect() {
    try {
        console.log('------------db-config----------');

        await mongoose.connect(`${process.env.MONGO_URL}user-auth-nextjs`);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB Connected Successfully");
        });
        connection.on("error", (err) => {
            console.log("Connection failed. Please make sure the URL is correct.", err);
            process.exit(1);
        });
    } catch (error) {
        console.log("Connection Failed!!!");
        console.log(error);
    }
}


