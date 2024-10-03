import { Region } from "../models/region.js";

export const getRegion = async (req, res) => {
    try {
        const reg = await Region.findAll()
        res.json(reg)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createRegion = async (req, res) => {
    const { nombre, fecha_registro, fecha_actualizacion} = req.body;

    try {
        const newReg = await Region.create({
            nombre : nombre,
            fecha_registro: fecha_registro,
            fecha_actualizacion: fecha_actualizacion

        });

        newReg.save();
        console.log(newReg)
        res.json(newReg);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const updateRegion = async (req,res)=>{
    try {
        const {id} =req.params;
        const {nombre, fecha_registro, fecha_actualizacion} =req.body;
        const reg = await Region.findByPk(id)
        reg.nombre = nombre
        reg.fecha_registro = fecha_registro
        reg.fecha_actualizacion = fecha_actualizacion
        
        await reg.save();
    
        res.json(reg);
    } catch (error) {
        return res.status(500).json({ message : error.message });   
    }

};

export const deleteRegion = async (req,res)=>{
    try {
        const {id} = req.params;
        await Region.destroy({
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


