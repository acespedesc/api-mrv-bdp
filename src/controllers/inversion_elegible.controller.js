import { InvElegible } from "../models/inversion_elegible.js";
import { format } from 'date-fns';

export const getInversionElegible = async (req, res) => {
    try {
        const { subId } = req.params;
        
        const inv_ele = await InvElegible.findAll({
            where: {
                subcategoriaId: subId // Filtra por provedorId
            }
        });
        // Mapea los resultados para incluir el contenido como base64 (opcional)
        const inversionElegible = inv_ele.map(inv_ele => ({
            id: inv_ele.id,
            nombre : inv_ele.nombre,
            categoria : inv_ele.categoria,
            indicador_efi_ener : inv_ele.indicador_efi_ener,
            linea_base : inv_ele.linea_base,
            criterio_elegible : inv_ele.criterio_elegible,
            subcategoriaId: inv_ele.subcategoriaId,
            fecha_subida: inv_ele.fecha_subida,
            contenidoB64: inv_ele.img_elegible.toString('base64'), // Convierte el Buffer a base64 (opcional)
        }));
    

        // Devuelve los archivos en formato JSON
        res.json(inversionElegible);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createInvElegible = async (req, res) => {
    const fechaActual = new Date();
    const fechaFormateada = format(fechaActual, 'yyyy-MM-dd');
    const { nombre,categoria, indicador_efi_ener, linea_base, criterio_elegible,  img_elegible, subcategoriaId, fecha_subida } = req.body;
    const conten = req.file.buffer;

    try {
        const newInvElegible = await InvElegible.create({
            nombre : nombre,
            categoria : categoria,
            indicador_efi_ener : indicador_efi_ener,
            linea_base : linea_base,
            criterio_elegible : criterio_elegible,
            img_elegible : conten,
            subcategoriaId : subcategoriaId,
            fecha_subida: fechaFormateada

        });

        newInvElegible.save();
        console.log(newInvElegible)
        res.json(newInvElegible);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const deleteInvElegible = async (req, res) => {
    try {
        const { id } = req.params;
        await InvElegible.destroy({
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