import { MaquinariaReciclaje } from "../models/maquinaria_reciclaje.js";

export const getMaquinariaReciclaje = async (req, res) => {
    try {
        const { residuoId } = req.params;
        
        const macRec = await MaquinariaReciclaje.findAll({
            where: {
                residuoId: residuoId 
            }
        });
        const maquinarias = macRec.map(macRec => ({
            id: macRec.id,
            nombre : macRec.nombre,
            fecha_registro : macRec.fecha_registro,
            fecha_actualizacion : macRec.fecha_actualizacion
        }));
        res.json(maquinarias)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createMaquinariaReciclaje = async (req, res) => {
    const { nombre, residuoId, fecha_registro, fecha_actualizacion} = req.body;

    try {
        const newMaq = await MaquinariaReciclaje.create({
            nombre : nombre,
            residuoId : residuoId,
            fecha_registro: fecha_registro,
            fecha_actualizacion: fecha_actualizacion

        });

        newMaq.save();
        console.log(newMaq)
        res.json(newMaq);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const updateMaquinariaReciclaje = async (req,res)=>{
    try {
        const {id} =req.params;
        const {nombre, residuoId, fecha_registro, fecha_actualizacion} =req.body;
        const maq = await MaquinariaReciclaje.findByPk(id)
        maq.nombre = nombre
        maq.residuoId = residuoId
        maq.fecha_registro = fecha_registro
        maq.fecha_actualizacion = fecha_actualizacion
        
        await maq.save();
    
        res.json(maq);
    } catch (error) {
        return res.status(500).json({ message : error.message });   
    }

};

export const deleteMaquinariaReciclaje = async (req,res)=>{
    try {
        const {id} = req.params;
        await MaquinariaReciclaje.destroy({
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