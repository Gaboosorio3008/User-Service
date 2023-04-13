import userModel from "../schema/schema_user.js";
import { compare } from "bcrypt";

const ActualizarEmailUser = async (req, res) => {
    const { id } = req;
    const { email, password } = req.body

    const existinguser = await userModel.findById(id).exec()
    if (!existinguser)  return res.status(404).send('usuario no encontrado') 

    const checkpassword = await compare(password, existinguser.password)
    if (!checkpassword) return res.status(401).send('Credenciales de registro incorrectas')

    existinguser.email = email;

    await existinguser.save();

    return res.send('Email del usuario actualizado');   




}

export default ActualizarEmailUser