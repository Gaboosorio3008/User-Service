import { IDDTOSchema,
    PasswordDTOSchema 
} from "./DTO_Type.js";
import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';


const DTODeleteSchema = Type.Object(
    {
        _id: IDDTOSchema,
        password: PasswordDTOSchema

    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: ' objeto ingresado no es válido',
        },

    }
)

const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier')

ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ['email', 'uuid']);
addErrors(ajv);

const validateSchemaDTO = ajv.compile(DTODeleteSchema)

const userDeleteDTO = (req, res, next) => {

    const isDTOValid = validateSchemaDTO(req.body);

    if(!isDTOValid) return res.status(400).send({
        errors: validateSchemaDTO.errors.map((error) => error.message),
    });

    next();
}

export default userDeleteDTO