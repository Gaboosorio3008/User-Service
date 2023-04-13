import userModel from '../schema/schema_user.js';
import { compare } from 'bcrypt';

const userDelete= async (req, res) => {
    const { id } = req;
    const { password } = req.body;

    const existingId = await userModel.findById(id).exec();
    if (!existingId)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const checkPassword = await compare(password, existingId.password);
    if (!checkPassword)
        return res.status(401).send({ errors: ['Credenciales incorrectas'] });

        existingId.deleteOne();

    return res.send('Usuario eliminado');
};

export default userDelete;