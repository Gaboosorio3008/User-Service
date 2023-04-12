import { Router } from "express";
import userRegisterControl from "../controller/registro.js";
import userRegisterDTO from "../DTO/DTO_User_register.js";
import UserProfileSearch from "../controller/buscar.js";

const userRoutes= Router();

// Registrar usuario

userRoutes.post('/registrar', userRegisterDTO, userRegisterControl);

// Actualizar usuario

userRoutes.patch('/actualizar');

// Borrar usuario

userRoutes.delete('/borrar');

//buscar Usuario

userRoutes.get('/buscar/:_id', UserProfileSearch );

export default userRoutes

