import userModel from "../schema/schema_user.js";
import { compare } from "bcrypt";

const ActualizardatosUser = async (req, res) => {
    const { id } = req;
    const { nombres, apellidos, pais, edad, rol, password } = req.body

    const existinguser = await userModel.findById(id).exec()
    if (!existinguser)  return res.status(404).send('usuario no encontrado') 

    const checkpassword = await compare(password, existinguser.password)
    if (!checkpassword) return res.status(401).send('Credenciales de registro incorrectas')

    existinguser.nombres = nombres;
    existinguser.apellidos = apellidos;
    existinguser.pais = pais;
    existinguser.edad = edad;
    existinguser.rol = rol;
    

    await existinguser.save();

    return res.send('Datos Actualizados');   




}

export default ActualizardatosUser