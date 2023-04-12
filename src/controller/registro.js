import { hash } from "bcrypt"
import userModel from "../schema/schema_user.js"
import salt from "../const/salt.js"

const userRegisterControl = async (req, res) => {
    const {_id, nombres, apellidos, edad, email, rol, pais, password  } = req.body

     //buscar id
    const existingUserID = await userModel.findById(_id).exec();
        if (existingUserID) 
        return res
        .status(409)
        .send({ errors: ['id registrado'] }) 

    //buscar email
    const existingUserEmail = await userModel.findOne({ email }).exec()
    if (existingUserEmail) 
    return res
    .status(409)
    .send({ errors: ['Email registrado'] })

    //registro de usuario

    const hassedUsuario = await hash(password, salt)

    const user = new userModel(
        {
            _id, 
            nombres, 
            apellidos, 
            edad, 
            email,
            rol, 
            pais, 
            password: hassedUsuario,
        }
    )

    await user.save()

    return res.status(200).send('usuario registrado con exito')


}

export default userRegisterControl
