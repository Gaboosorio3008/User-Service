import userModel from "../schema/schema_user.js";

const UserProfile = async (req, res) => {
    const { id } = req;

    const existinguser = await userModel.findById(id).exec()
    if (!existinguser)  return res.status(404).send('usuario no encontrado') 

    const {_id, nombres, apellidos, pais, edad, rol, email } = existinguser

    return res.send({_id, nombres, apellidos, pais, edad, rol, email })
    




}

export default UserProfile