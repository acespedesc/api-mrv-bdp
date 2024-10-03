import { Agencia} from "../models/agencia.js"

export const getAgencia = async (req, res) => {
    try {
        const { regId } = req.params;
        
        const age = await Agencia.findAll({
            where: {
                regionId: regId // Filtra por provedorId
            }
        });
        const agencias = age.map(age => ({
            id: age.id,
            nombre : age.nombre,
            fecha_registro : age.fecha_registro,
            fecha_actualizacion : age.fecha_actualizacion
        }));
        res.json(agencias)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createAgencia = async (req, res) => {
    const { nombre, regionId, fecha_registro, fecha_actualizacion} = req.body;

    try {
        const newAge = await Agencia.create({
            nombre : nombre,
            regionId : regionId,
            fecha_registro: fecha_registro,
            fecha_actualizacion: fecha_actualizacion

        });

        newAge.save();
        console.log(newAge)
        res.json(newAge);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const updateAgencia = async (req,res)=>{
    try {
        const {id} =req.params;
        const {nombre, regionId, fecha_registro, fecha_actualizacion} =req.body;
        const age = await Agencia.findByPk(id)
        age.nombre = nombre
        age.regionId = regionId
        age.fecha_registro = fecha_registro
        age.fecha_actualizacion = fecha_actualizacion
        
        await age.save();
    
        res.json(age);
    } catch (error) {
        return res.status(500).json({ message : error.message });   
    }

};

export const deleteAgencia = async (req,res)=>{
    try {
        const {id} = req.params;
        await Agencia.destroy({
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


