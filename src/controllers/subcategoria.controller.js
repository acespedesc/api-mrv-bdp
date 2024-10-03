import { Subcategoria } from "../models/subcategoria.js";

export const getSubcategorias = async (req, res) => {
    try {
        const sub = await Subcategoria.findAll()
        res.json(sub)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createSubcategoria = async (req, res) => {
    const { medida_estandar, fecha_registro, fecha_actualizacion} = req.body;

    try {
        const newSub = await Subcategoria.create({
            medida_estandar: medida_estandar,
            fecha_registro: fecha_registro,
            fecha_actualizacion: fecha_actualizacion

        });

        newSub.save();
        console.log(newSub)
        res.json(newSub);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const updateSubcategoria = async (req,res)=>{
    try {
        const {id} =req.params;
        const {medida_estandar, fecha_registro, fecha_actualizacion} =req.body;
        const sub = await Subcategoria.findByPk(id)
        sub.medida_estandar = medida_estandar
        sub.fecha_registro = fecha_registro
        sub.fecha_actualizacion = fecha_actualizacion
        
        await sub.save();
    
        res.json(sub);
    } catch (error) {
        return res.status(500).json({ message : error.message });   
    }

};

export const deleteSubcategoria = async (req,res)=>{
    try {
        const {id} = req.params;
        await Subcategoria.destroy({
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


