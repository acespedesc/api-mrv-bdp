import { Residuo } from "../models/residuo.js";

export const getResiduos = async (req, res) => {
    try {
        const resi = await Residuo.findAll()
        res.json(resi)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createResiduo = async (req, res) => {
    const { clase, fecha_registro, fecha_actualizacion} = req.body;

    try {
        const newRes = await Residuo.create({
            clase: clase,
            fecha_registro: fecha_registro,
            fecha_actualizacion: fecha_actualizacion

        });

        newRes.save();
        console.log(newRes)
        res.json(newRes);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const updateResiduo = async (req,res)=>{
    try {
        const {id} =req.params;
        const {clase, fecha_registro, fecha_actualizacion} =req.body;
        const resi = await Residuo.findByPk(id)
        resi.clase = clase
        resi.fecha_registro = fecha_registro
        resi.fecha_actualizacion = fecha_actualizacion
        
        await resi.save();
    
        res.json(resi);
    } catch (error) {
        return res.status(500).json({ message : error.message });   
    }

};

export const deleteResiduo = async (req,res)=>{
    try {
        const {id} = req.params;
        await Residuo.destroy({
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


