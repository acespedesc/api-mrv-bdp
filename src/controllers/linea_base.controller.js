import { LineaBase } from "../models/linea_base.js";


export const getLineaBase = async (req, res) => {
    try {
        const lin = await LineaBase.findAll()
        res.json(lin)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createLineaBase = async (req, res) => {
    const { proyecto,tipo_linea_base, tecnologia, tipo_tecnologia, unidad_medida, medida, fecha_registro, fecha_actualizacion } = req.body;

    try {
        const newLineaBase = await LineaBase.create({
            proyecto:proyecto,
            tipo_linea_base: tipo_linea_base,
            tecnologia: tecnologia,
            tipo_tecnologia: tipo_tecnologia,
            unidad_medida: unidad_medida,
            medida: medida,
            fecha_registro: fecha_registro,
            fecha_actualizacion: fecha_actualizacion

        });

        newLineaBase.save();
        console.log(newLineaBase)
        res.json(newLineaBase);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const updateLineaBase = async (req, res) => {
    try {
        const { id } = req.params;
        const { proyecto,tipo_linea_base, tecnologia, tipo_tecnologia, unidad_medida, medida,fecha_registro, fecha_actualizacion } = req.body;
        const lb = await LineaBase.findByPk(id)
        lb.proyecto = proyecto
        lb.tipo_linea_base=tipo_linea_base
        lb.tecnologia = tecnologia
        lb.tipo_tecnologia = tipo_tecnologia
        lb.unidad_medida = unidad_medida
        lb.medida = medida
        lb.fecha_registro = fecha_registro
        lb.fecha_actualizacion = fecha_actualizacion

        await lb.save();

        res.json(lb);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const deleteLineaBase = async (req, res) => {
    try {
        const { id } = req.params;
        await LineaBase.destroy({
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
