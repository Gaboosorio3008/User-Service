import { Type } from "@sinclair/typebox";

//ID

export const IDDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        Type:'debe ser un string',
        format:'formato incorrecto de ID (debe ser un uuid)'
    }   
})

export const NameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'Los Nombres deben tener al menos 2 caracteres de longitud',
        maxLength: 'Los Nombres deben tener como máximo 20 caracteres de longitud',
    },
})

export const ApellidoDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'Los Appellidos deben tener al menos 2 caracteres de longitud',
        maxLength: 'Los Apellidos deben tener como máximo 20 caracteres de longitud',
    },
})

export const PaisDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'el pais deben tener al menos 2 caracteres de longitud',
        maxLength: 'el pais deben tener como máximo 20 caracteres de longitud',
    },
})

export const EdadTOSchema = Type.String({
    minLength: 2,
    maxLength: 3,
    errorMessage: {
        minLength: 'La edad deben tener al menos 2 caracteres de longitud',
        maxLength: 'La Edad deben tener como máximo3 caracteres de longitud',
    },
})

export const EmailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        Type:'debe ser un string',
        format:'formato incorrecto de Email'
    }   
})

export const RolDTOSchema = Type.String({
    minLength: 2,
    maxLength: 10,
    errorMessage: {
        minLength: 'El Rol deben tener al menos 2 caracteres de longitud',
        maxLength: 'El Rol deben tener como máximo3 caracteres de longitud',
    },
})

export const PasswordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'El tipo de la contraseña no es válido, debe ser un string',
        format: 'El formato de la contraseña, debe contener una mayúscula, una minúcula y un número',
        minLength: 'la contraseña debe tener al menos 10 caracteres de longitud',
        maxLength: 'la contraseña debe tener como máximo 25 caracteres de longitud',
    },
})  




    
