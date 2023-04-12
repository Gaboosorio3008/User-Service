console.clear()
import expressApp from './config/express.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();


const PORT = process.env.PORT;


const boostrap = async () => {

  await mongoose.connect(process.env.MONGODB_URL).then(() => console.log('Conectado a la base de datos'))

expressApp.listen(process.env.PORT, () => {
    console.log(`servidor levantado en el puerto ${PORT}`)
});

}

boostrap()

