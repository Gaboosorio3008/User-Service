import mongoose from "mongoose";

const {Schema, model} = mongoose;

const userSchema = new Schema({
    _id: {type:String, _id: false},
    nombres: {type:String, require: true, minLength: 2, maxLength: 20},
    apellidos:{type:String, require: true, minLength: 2, maxLength: 20},
    edad:{type:String, require: true, minLength: 1, maxLength: 3},
    pais:{type:String, require: true, minLength: 2, maxLength: 20},
    Rol:{type:String, require: true, minLength: 2, maxLength: 10},
    email:{type:String, require: true, unique: true},
    password:{type:String, require: true},

})  

const userModel = model('user', userSchema)

export default userModel
