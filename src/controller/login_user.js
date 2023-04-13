import userModel from "../schema/schema_user.js";
import { compare } from 'bcrypt';
import { SignJWT } from 'jose';

//Verificar Email y password

const LoginControler = async (req, res) => {

    const { email, password } = req.body
    const existingEmail = await userModel.findOne({ email }).exec();
    if (!existingEmail) return res.status(401).send('Credenciales de registro incorrectas')

    const checkpassword = await compare(password, existingEmail.password)

    if (!checkpassword) return res.status(401).send('Credenciales de registro incorrectas')

    const jwtConstructor = new SignJWT({ id: existingEmail._id });

    const encoder = new TextEncoder()

    const jwtcode = await jwtConstructor
        .setProtectedHeader({
            alg: 'HS256',
            typ: 'JWT',
        }).setIssuedAt().setExpirationTime('1d').sign(encoder.encode(process.env.JWT_PRIVATE_KEY))


    return res.status(200).send({ jwtcode })

}



export default LoginControler 





