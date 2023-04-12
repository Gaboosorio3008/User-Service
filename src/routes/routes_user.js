import { Router } from "express";
import userLoginControl from "../controller/registro.js";

const userRoutes= Router();

// Registrar usuario

userRoutes.post('/registrar', userLoginControl);

// Actualizar usuario

userRoutes.patch('/actualizar');

// Borrar usuario

userRoutes.delete('/borrar');

//buscar Usuario

userRoutes.get('/buscar');

export default userRoutes

