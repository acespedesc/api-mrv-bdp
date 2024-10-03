import {Usuario} from '../models/usuario.js' 
import bcrypt from 'bcryptjs'
import {createAccesoToken} from '../utils/jwt.js'

export const getUsuarios= async(req,res)=>{
    try {
        const usuario = await Usuario.findAll()
        res.json(usuario)
        
    } catch (error) {
        return res.status(500).json({ message : error.message });
    }
}

export const createUsuario= async (req,res)=>{

    const {nombre, apellido_paterno, apellido_materno, nro_documento, usuario, correo, contraseña, fecha_registro, fecha_actualizacion} = req.body;

    try {

        const contraseñaHash = await bcrypt.hash(contraseña,10) //Encriptamos contraseña 
        const newUsuario = await Usuario.create({
            nombre : nombre,
            apellido_paterno : apellido_paterno,
            apellido_materno : apellido_materno,
            nro_documento : nro_documento,
            usuario : usuario,
            correo : correo,
            contraseña : contraseñaHash,
            fecha_registro : fecha_registro,
            fecha_actualizacion : fecha_actualizacion
        });

        const UsuSaved= await newUsuario.save();
        
        const token = await createAccesoToken({id: UsuSaved._id});          

        res.cookie('token',token)
            res.json({
                message: "Usuario Creado Exitosamente",
            })

            //genera token con expiracion de un dia
        //res.json(newUsu);
    } catch (error) {
        return res.status(500).json({ message : error.message});
    }
    
}

export const login = async (req,res)=>{

    const { correo, contraseña} = req.body;

    try {
            console.log(correo);
            const userFound = await Usuario.findOne({ where: {correo}});// buscamos usuario por correo

            if(!userFound) return res.status(400).json({ message: "No existe el usuario"});
            
            
        const isdMatch = await bcrypt.compare(contraseña, userFound.contraseña);//comparamos y verificamos contresña
        
            //console.log(isdMatch)
        if(!isdMatch) return res.status(400).json({message:"Contraseña Incorrecta"});
         
        const token = await createAccesoToken({id: userFound.id});          
        console.log(userFound.id)
        console.log(token)
        //res.status("token",token);
        /*res.status(200).send({
            //signed_user: user,
            token: token
          })*/
        //localStorage.setItem("token",token);
        res.header('token',token)
            res.json({
                id:userFound.id,
                nombre:userFound.usuario,
                /*correo:userFound.correo,*/
                "token":token
            })

            //genera token con expiracion de un dia
        //res.json(newUsu);
    } catch (error) {
        return res.status(500).json({ message : error.message});
    }
    
};

export const logout = (req, res)=>{
    res.cookie('token',"",{
            expires:new Date(0)
    })
    return res.sendStatus(200);
};

export const deleteUsuario = async (req,res)=>{
    try {
        const {id} = req.params;
        await Usuario.destroy({
            where:{
                id
            }
        });
        //console.log(req.params.id);
        res.sendStatus(204);
    } catch (error) {

        return res.status(500).json({message : error.message });
    }
};

export const updateUsuario = async (req,res)=>{
    try {
        const {id} =req.params;
        const {nombre, apellido_paterno, apellido_materno, nro_documento, usuario, correo, contraseña, fecha_registro, fecha_actualizacion} =req.body;
        const usu = await Usuario.findByPk(id)
        usu.nombre = nombre
        usu.apellido_paterno = apellido_paterno
        usu.apellido_materno = apellido_materno
        usu.nro_documento = nro_documento
        usu.usuario = usuario
        usu.correo = correo
        usu.contraseña = contraseña
        usu.fecha_registro = fecha_registro
        usu.fecha_actualizacion = fecha_actualizacion
           
        await usu.save();
    
        res.json(usu);
    } catch (error) {
        return res.status(500).json({ message : error.message });   
    }

};



