import { sequelize } from "../config/database.js";
import { EconomiaCircular } from "../models/circular.js";
import { Usuario } from "../models/usuario.js";
import { Region } from "../models/region.js";
import { Agencia } from "../models/agencia.js";
import { Caedec } from "../models/caedec.js";

export const getEconomiaCircularById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la solicitud

    try {
        const ecoCir = await EconomiaCircular.findByPk(id, {
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
            ]
        });

        if (!ecoCir) {
            return res.status(404).json({ message: " Registro de Eco. Circular no encontrada" });
        }

        res.json(ecoCir);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export const getEconomiaCircular = async (req, res) => {
    try {
        const eco = await EconomiaCircular.findAll()
        res.json(eco)

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createEconomiaCircular = async (req, res) => {

    const { usuarioId, regionId, agenciaId, nro_solicitud, respaldo, caedecId, objetivo_operacion,
        tipos_tecnologia, metodo_estimacion, 
        destino_cap_inv_ope, tipo_empresa, ctd_empleos_gen, monto_credito_mn, monto_credito_me,
        ctd_residuos_rec, emision_gei_evi, fecha_registro, fecha_actualizacion } = req.body;

    try {
        const newEcoCir = await EconomiaCircular.create({
            usuarioId: usuarioId,
            regionId: regionId,
            agenciaId: agenciaId,
            nro_solicitud: nro_solicitud,
            respaldo: respaldo,
            caedecId: caedecId,
            objetivo_operacion: objetivo_operacion,
            tipos_tecnologia: tipos_tecnologia,
            metodo_estimacion: metodo_estimacion,
            destino_cap_inv_ope: destino_cap_inv_ope,
            tipo_empresa: tipo_empresa,
            ctd_empleos_gen: ctd_empleos_gen,
            monto_credito_mn: monto_credito_mn,
            monto_credito_me: monto_credito_me,
            ctd_residuos_rec: ctd_residuos_rec,
            emision_gei_evi: emision_gei_evi,
            fecha_registro: fecha_registro,
            fecha_actualizacion: fecha_actualizacion
        });

        newEcoCir.save();
        console.log(newEcoCir)
        res.json(newEcoCir.id);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }

}

export const deleteEconomiaCircular = async (req, res) => {
    try {
        const { id } = req.params;
        await EconomiaCircular.destroy({
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


