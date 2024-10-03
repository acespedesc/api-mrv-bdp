import { RegionesInstalacion } from "../models/regiones_instalacion.js";


export const getRegionesInstalacion = async (req, res) => {
    try {
        const reg = await RegionesInstalacion.findAll()
        res.json(reg)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createRegionesInstalacion = async (req, res) => {
    const { region, ghi, pvout, fecha_registro, fecha_actualizacion } = req.body;

    try {
        const newReg = await RegionesInstalacion.create({
            region: region,
            ghi: ghi,
            pvout: pvout,
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

export const updateRegionesInstalacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { region, ghi, pvout, fecha_registro, fecha_actualizacion } = req.body;
        const reg = await RegionesInstalacion.findByPk(id)
        reg.region = region
        reg.ghi = ghi
        reg.pvout = pvout
        reg.fecha_registro = fecha_registro
        reg.fecha_actualizacion = fecha_actualizacion

        await reg.save();

        res.json(reg);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const deleteRegionesInstalacion = async (req, res) => {
    try {
        const { id } = req.params;
        await RegionesInstalacion.destroy({
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
