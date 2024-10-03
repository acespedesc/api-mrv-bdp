
import { format } from 'date-fns';
import { DocumentoAuxCal } from '../models/documento_aux_cal.js';

export const getDocumentoAuxCal = async (req, res) => {
    try {
        const { ecoCircularId } = req.params;
        
        const doc = await DocumentoAuxCal.findAll({
            where: {
                ecoCircularId: ecoCircularId // Filtra por provedorId
            }
        });
        // Mapea los resultados para incluir el contenido como base64 (opcional)
        const archivosConContenido = doc.map(doc => ({
            id: doc.id,
            nombre: doc.nombre,
            ecoCircularId: doc.ecoCircularId,
            fecha_subida: doc.fecha_subida,
            //contenido: doc.contenido
            contenidoB64: doc.contenido.toString('base64'), // Convierte el Buffer a base64 (opcional)
        }));
    

        // Devuelve los archivos en formato JSON
        res.json(archivosConContenido);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}




export const createDocumentoAuxCal = async (req, res) => {
    const fechaActual = new Date();
    const fechaFormateada = format(fechaActual, 'yyyy-MM-dd');
    const { nombre, contenido, ecoCircularId, fecha_subida } = req.body;
    const conten = req.file.buffer;

    try {
        const newDoc = await DocumentoAuxCal.create({
            nombre: nombre,
            contenido: conten,
            ecoCircularId: ecoCircularId,
            fecha_subida: fechaFormateada

        });

        newDoc.save();
        console.log(newDoc)
        res.json(newDoc);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

export const deleteDocumentoAuxCal = async (req, res) => {
    try {
        const { id } = req.params;
        await DocumentoAuxCal.destroy({
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