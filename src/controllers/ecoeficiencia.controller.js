import { Ecoeficiencia } from "../models/ecoeficiencia.js";
import { Usuario } from "../models/usuario.js";
import { sequelize } from "../config/database.js";
import { Region } from "../models/region.js";
import { Agencia } from "../models/agencia.js";
import { Caedec } from "../models/caedec.js";
import { Subcategoria } from "../models/subcategoria.js";
import { InvElegible } from "../models/inversion_elegible.js";



export const getEcoeficienciaById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la solicitud

    try {
        const eco = await Ecoeficiencia.findByPk(id, {
            include: [
                {
                    model: Usuario,
                    attributes: [
                        [sequelize.fn('CONCAT', sequelize.col('usuario.nombre'), ' ', sequelize.col('usuario.apellido_paterno'), ' ', sequelize.col('usuario.apellido_materno')), 'nombre_completo'],
                        'correo' // Campos del usuario que deseas incluir
                    ]
                },
               {
                model: Region,
                attributes: [[sequelize.col('nombre'), 'nombreRegion']] // Nombre de la región
                },
                {
                    model: Agencia,
                    attributes: [[sequelize.col('nombre'), 'nombreAgencia']]
                },
                {
                    model: Caedec,
                    attributes: [[sequelize.col('nombre'), 'nombreCaedec'], 'actividad']
                }
                ,
                {
                    model: Subcategoria,
                    attributes: [[sequelize.col('medida_estandar'), 'nombreSubcategoria']]
                },
                {
                    model: InvElegible,
                    attributes: [[sequelize.col('nombre'), 'nombreInvElegible'], 'categoria']
                }
            ]
        });

        if (!eco) {
            return res.status(404).json({ message: "Ecoeficiencia no encontrada" });
        }

        res.json(eco);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getEcoeficiencia = async (req, res) => {
    try {
        const eco = await Ecoeficiencia.findAll()
        res.json(eco)

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createEcoeficiencia = async (req, res) => {
    
        const { usuarioId, regionId, agenciaId, nro_solicitud, respaldo, caedecId, subcategoriaId, 
            inversionElegibleId, monto_inv_mn, monto_inv_me, produccion_energia_anual, reduccion_emisiones_anual,potencia_inst_sis,vida_util, fecha_registro, fecha_actualizacion } = req.body;

        try {
            const newEco = await Ecoeficiencia.create({
                usuarioId: usuarioId,
                regionId: regionId,
                agenciaId: agenciaId,
                nro_solicitud: nro_solicitud,
                respaldo: respaldo,
                caedecId: caedecId,
                subcategoriaId : subcategoriaId,
                inversionElegibleId: inversionElegibleId,
                monto_inv_mn: monto_inv_mn,
                monto_inv_me: monto_inv_me,
                produccion_energia_anual: produccion_energia_anual,
                reduccion_emisiones_anual: reduccion_emisiones_anual,
                potencia_inst_sis : potencia_inst_sis,
                vida_util : vida_util,
                fecha_registro: fecha_registro,
                fecha_actualizacion: fecha_actualizacion
            });

            newEco.save();
            console.log(newEco)
            res.json(newEco.id);
        } catch (error) {
            return res.status(500).json({ message: error.message });

        }
    
}

export const updateEcoeficiencia = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuarioId, regionId, agenciaId, nro_solicitud, respaldo, caedecId, subcategoriaId, inversionElegibleId, monto_inv_mn, monto_inv_me, produccion_energia_anual, reduccion_emisiones_anual,potencia_inst_sis,vida_util, fecha_registro, fecha_actualizacion } = req.body;
        const eco = await Ecoeficiencia.findByPk(id)
        eco.usuarioId= usuarioId
        eco.regionId = regionId
        eco.agenciaId = agenciaId
        eco.nro_solicitud = nro_solicitud
        eco.respaldo = respaldo
        eco.caedecId = caedecId
        eco.subcategoriaId = subcategoriaId
        eco.inversionElegibleId = inversionElegibleId
        eco.monto_inv_mn = monto_inv_mn
        eco.monto_inv_me = monto_inv_me
        eco.produccion_energia_anual = produccion_energia_anual
        eco.reduccion_emisiones_anual = reduccion_emisiones_anual
        eco.potencia_inst_sis = potencia_inst_sis
        eco.vida_util = vida_util
        eco.fecha_registro = fecha_registro
        eco.fecha_actualizacion = fecha_actualizacion

        await eco.save();

        res.json(eco);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const deleteEcoeficiencia = async (req, res) => {
    try {
        const { id } = req.params;
        await Ecoeficiencia.destroy({
            where: {
                id
            }
        });
        //console.log(req.params.id);
        res.sendStatus(204);
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
};





