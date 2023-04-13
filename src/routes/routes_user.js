import { Router } from "express";
import userRegisterControl from "../controller/registro_user.js";
import userRegisterDTO from "../DTO/DTO_User_register.js";
import UserProfile from "../controller/profile_user.js";
import LoginControler from "../controller/login_user.js"
import userloginDTO from "../DTO/DTO_User_login.js"; 
import userDelete from "../controller/borrar_user.js";
import userDeleteDTO from   "../DTO/DTO_User_Borrar.js"
import UserJWTDTO from "../DTO/user_JWT.js";
import ActualizarEmailUser from "../controller/actualizar_email_user.js"
import ActualizarEmailDTO from "../DTO/DTO_User_Email_actualizar.js"
import ActualizardatosUser from "../controller/actualizar_datos_user.js";
import userActualizarDatosDTO from "../DTO/DTO_User_Datos_actualizar.js";
import ActualizarPasswordUser from "../controller/actualizar_password_user.js";
import ActualizarPasswordDTO from "../DTO/DTO_User_Password_actualizar.js";

const userRoutes= Router();

// Registrar usuario

userRoutes.post('/registrar', userRegisterDTO, userRegisterControl);

//login usuario

userRoutes.post('/login',userloginDTO, LoginControler)

 
// Actualizar usuario

userRoutes.patch('/actualizar-email',UserJWTDTO, ActualizarEmailDTO, ActualizarEmailUser);

userRoutes.patch('/actualizar-password', UserJWTDTO, ActualizarPasswordDTO, ActualizarPasswordUser);

userRoutes.patch('/actualizar-datos',UserJWTDTO,userActualizarDatosDTO, ActualizardatosUser) 



// Borrar usuario

userRoutes.delete('/borrar',UserJWTDTO,userDeleteDTO, userDelete);

//perfil Usuario

userRoutes.get('/perfil' ,UserJWTDTO , UserProfile );

export default userRoutes

