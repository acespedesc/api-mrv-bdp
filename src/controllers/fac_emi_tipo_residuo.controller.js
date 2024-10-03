import { FacEmiTipoResiduo } from "../models/fac_emi_tipo_residuo.js";


export const getFacEmiTipoResiduo = async (req, res) => {
    try {
        const { resId } = req.params;
        
        const feTipoRes = await FacEmiTipoResiduo.findAll({
            where: {
                residuoId: resId
            }
        });
        const feTipoResiduo = feTipoRes.map(resi => ({
            id:   resi.id,
            nombre : resi.nombre,
            fuente : resi.fuente,    
            unidad : resi.unidad,
            valor : resi.valor,
            fecha_registro : resi.fecha_registro,
            fecha_actualizacion : resi.fecha_actualizacion
        }));
        res.json(feTipoResiduo)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createFacEmiTipoResiduo = async (req, res) => {
    const { nombre, fuente, unidad, valor, residuoId, fecha_registro, fecha_actualizacion} = req.body;

    try {
        const newFacEmiTipoRes = await FacEmiTipoResiduo.create({
            nombre : nombre,
            fuente : fuente,
            unidad : unidad,
            valor : valor,
            residuoId : residuoId,
            fecha_registro: fecha_registro,
            fecha_actualizacion: fecha_actualizacion

        });

        newFacEmiTipoRes.save();
        console.log(newFacEmiTipoRes)
        res.json(newFacEmiTipoRes);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const updateFacEmiTipoResiduo = async (req,res)=>{
    try {
        const {id} =req.params;
        const {nombre, fuente, unidad, valor ,residuoId, fecha_registro, fecha_actualizacion} =req.body;
        const feTipoRes = await FacEmiTipoResiduo.findByPk(id)
        feTipoRes.nombre = nombre
        feTipoRes.fuente = fuente
        feTipoRes.unidad = unidad
        feTipoRes.valor = valor
        feTipoRes.residuoId = residuoId
        feTipoRes.fecha_registro = fecha_registro
        feTipoRes.fecha_actualizacion = fecha_actualizacion
        
        await feTipoRes.save();
    
        res.json(feTipoRes);
    } catch (error) {
        return res.status(500).json({ message : error.message });   
    }

};

export const deleteFacEmiTipoResiduo = async (req,res)=>{
    try {
        const {id} = req.params;
        await FacEmiTipoResiduo.destroy({
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


