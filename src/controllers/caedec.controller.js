import {Caedec} from '../models/caedec.js' 

export const getCaedec = async (req, res) => {
    try {
        const cae = await Caedec.findAll() 
        res.json(cae)

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createCaedec = async (req, res) => {
    const { nombre, actividad, fecha_registro, fecha_actualizacion } = req.body;

    try {
        const newCaedec = await Caedec.create({
            nombre : nombre,
            actividad : actividad,
            fecha_registro : fecha_registro,
            fecha_actualizacion : fecha_actualizacion
        });

        newCaedec.save();
        console.log(newCaedec)
        res.json(newCaedec);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const updateCaedec = async (req,res)=>{
    try {
        const {id} =req.params;
        const {nombre, actividad, fecha_registro, fecha_actualizacion} =req.body;
        const cae = await Caedec.findByPk(id)
        cae.nombre = nombre
        cae.actividad = actividad
        cae.fecha_registro = fecha_registro
        cae.fecha_actualizacion = fecha_actualizacion
           
        await cae.save();
    
        res.json(cae);
    } catch (error) {
        return res.status(500).json({ message : error.message });   
    }

};

export const deleteCaedec = async (req,res)=>{
    try {
        const {id} = req.params;
        await Caedec.destroy({
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


