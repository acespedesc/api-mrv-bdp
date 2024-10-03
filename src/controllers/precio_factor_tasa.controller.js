import { PrecioFatorTasa } from "../models/precio_factor_tasa.js";

export const getPrecioFatorTasa = async (req, res) => {
    try {
        const pft = await PrecioFatorTasa.findAll()
        res.json(pft)
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createPrecioFatorTasa = async (req, res) => {
    const { parametro, fuente, tipo, descripcion, unidad, valor, fecha_registro, fecha_actualizacion } = req.body;

    try {
        const newPft = await PrecioFatorTasa.create({
            parametro: parametro,
            fuente: fuente,
            tipo: tipo,
            descripcion: descripcion,
            unidad: unidad,
            valor: valor,
            fecha_registro: fecha_registro,
            fecha_actualizacion: fecha_actualizacion

        });

        newPft.save();
        console.log(newPft)
        res.json(newPft);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const updatePrecioFatorTasa = async (req, res) => {
    try {
        const { id } = req.params;
        const { parametro, fuente, tipo, descripcion, unidad, valor,fecha_registro, fecha_actualizacion } = req.body;
        const pft = await PrecioFatorTasa.findByPk(id)
        pft.parametro = parametro
        pft.fuente = fuente
        pft.tipo = tipo
        pft.descripcion = descripcion
        pft.unidad = unidad
        pft.valor = valor
        pft.fecha_registro = fecha_registro
        pft.fecha_actualizacion = fecha_actualizacion

        await pft.save();

        res.json();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const deletePrecioFatorTasa = async (req, res) => {
    try {
        const { id } = req.params;
        await PrecioFatorTasa.destroy({
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