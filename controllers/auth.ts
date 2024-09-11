import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { createUsers } from "./users";
import generateJWT from '../helpers/generate-jwt'


export const login = async (req: Request, res: Response) => {
  //obtener los datos del body
  const { email, password } = req.body;
  try {
    //buscar en la base de datos el usuario por su email
    const user = await User.findOne({ where: { email } });
    //comprobar que el usuario exista
    if (!user) {
      return res.status(404).json({
        msg: "El Usuario no registrado",
      });
    }

    //validar que la contraseña de la base de datos encryptada sea igual a la uqe se esta obteniendo del body
    const validPassword = bcrypt.compareSync(
      password,
      user.dataValues.password
    );
    if (!validPassword) {
      return res.status(401).json({
        msg: "Usuario o Contraseña incorrectos",
      });
    }

    //validacion de usuario activo
    if (!user.dataValues.state) {
      return res.status(401).json({
        msg: "el usuario esta inactivo",
      });
    }

    // Puedes incluir más información en el payload si es necesario
    const token = await generateJWT(user.dataValues.id);
    console.log(token)

    return res.status(200).json({
      msg: 'inicio de sesion exitoso',
      token
    });
  } catch (error) {
    console.error(error);
  }
};



// export const Register = async(req:Request, res:Response)=>{
//     const { document, names, lastname, email, celphone} = req.body;
//     try {
//         const user = await User.findOne({ where: { email } });
//         //comprobar que el usuario exista
//         if (user) {
//           return res.status(401).json({
//             msg: "El ya esta registrado",
//           });
//         }else{
//             createUsers
//         }
    
        
//     } catch (error) {
        
//     }
// }
