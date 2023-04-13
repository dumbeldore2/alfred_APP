import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            require: true,
            min:2,
            max:100
        },
        email: {
            type:String,
            require: true,
            max:50,
            unique: true
        },
        password: {
            type:String,
            require: true,
            min:5,
            max:50,
            unique: true
        },
        city:String,
        provincie:String,
        country:String,
        role: {
            type: String,
            enum: ["user","admin","batman"],
            default:"admin"
        },
    },
    {
        timestamps:true
    }
);

const User = mongoose.model("User", userSchema);
export default User;