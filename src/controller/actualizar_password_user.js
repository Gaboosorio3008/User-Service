import userModel from "../schema/schema_user.js";
import { compare, hash } from "bcrypt";
import salt from "../const/salt.js";

const ActualizarPasswordUser = async (req, res) => {
    const { id } = req;
    const { oldPassword, newPassword } = req.body

    const existinguser = await userModel.findById(id).exec()
    if (!existinguser)  return res.status(404).send('usuario no encontrado') 

    const checkpassword = await compare(oldPassword, existinguser.password)
    if (!checkpassword) return res.status(401).send('Credenciales de registro incorrectas')

    const hashedPassword = await hash(newPassword, salt);
    existinguser.password = hashedPassword;

    await existinguser.save();

    return res.send('Contraseña del usuario actualizada');



}

export default ActualizarPasswordUser