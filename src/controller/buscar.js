import userModel from "../schema/schema_user.js";

const UserProfileSearch = async (req, res) => {
    const { _id } = req.params;

    const existinguser = await userModel.findById(_id).exec()
    if (!existinguser)  return res.status(404).send('usuario no encontrado') 

    const { nombres, apellidos, pais, edad, rol, email } = existinguser

    return res.send({_id, nombres, apellidos, pais, edad, rol, email })
    




}

export default UserProfileSearch