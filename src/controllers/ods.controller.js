import { Ods } from '../models/ods.js'


export const getOdsByEcoeficienciaId = async (req, res) => {
    const { ecoId } = req.params; // Obtener el id de Ecoeficiencia de los parámetros

    try {
        const ods = await Ods.findOne({ where: { ecoId } }); // Busca el ODS asociado a ecoId

        if (!ods) {
            return res.status(404).json({ message: "ODS no encontrado" });
        }
       // Definir la estructura de los ODS
       const odsData = [
        { key: 'fin_pobreza', imagen: 'assets/ods1.png', descripcion: 'Fin de la pobreza' },
        { key: 'hambre_cero', imagen: 'assets/ods2.png', descripcion: 'Hambre cero' },
        { key: 'salud_bienestar', imagen: 'assets/ods3.png', descripcion: 'Salud y bienestar' },
        { key: 'educacion_calidad', imagen: 'assets/ods4.png', descripcion: 'Educación de calidad' },
        { key: 'igualdad_genero', imagen: 'assets/ods5.png', descripcion: 'Igualdad de género' },
        { key: 'agua_limp_sanea', imagen: 'assets/ods6.png', descripcion: 'Agua limpia y saneamiento' },
        { key: 'enr_ase_nocon', imagen: 'assets/ods7.png', descripcion: 'Energía asequible y no contaminante' },
        { key: 'trab_dec_creeco', imagen: 'assets/ods8.png', descripcion: 'Trabajo decente y crecimiento económico' },
        { key: 'prod_con_res', imagen: 'assets/ods9.png', descripcion: 'Industria, innovación e infraestructura' },
        { key: 'reduc_desig', imagen: 'assets/ods10.png', descripcion: 'Reducción de las desigualdades' },
        { key: 'ciu_com_sos', imagen: 'assets/ods11.png', descripcion: 'Ciudades y comunidades sostenibles' },
        { key: 'vida_eco_terr', imagen: 'assets/ods12.png', descripcion: 'Producción y consumo responsables' },
        { key: 'vida_sub', imagen: 'assets/ods13.png', descripcion: 'Acción por el clima' },
        { key: 'paz_jus_instsol', imagen: 'assets/ods14.png', descripcion: 'Vida submarina' },
        { key: 'ind_ino_inf', imagen: 'assets/ods15.png', descripcion: 'Vida de ecosistemas terrestres' },
        { key: 'ali_lograr_obj', imagen: 'assets/ods16.png', descripcion: 'Paz, justicia e instituciones sólidas' },
        { key: 'acc_por_cli', imagen: 'assets/ods17.png', descripcion: 'Alianzas para lograr los objetivos' }
    ];

    // Filtrar los ODS que están en true en el objeto ods
    const odsList = odsData
        .filter(item => ods[item.key]) // Verifica si el ODS está activo
        .map(item => ({
            key: item.key,
            imagen: item.imagen,
            descripcion: item.descripcion
        }));

    res.json(odsList); // Envía la lista filtrada de ODS
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getOdsByEcoCircularId = async (req, res) => {
    const { ecoCircularId } = req.params; // Obtener el id de Ecoeficiencia de los parámetros

    try {
        const ods = await Ods.findOne({ where: { ecoCircularId } }); // Busca el ODS asociado a ecoId

        if (!ods) {
            return res.status(404).json({ message: "ODS no encontrado" });
        }
       // Definir la estructura de los ODS
       const odsData = [
        { key: 'fin_pobreza', imagen: 'assets/ods1.png', descripcion: 'Fin de la pobreza' },
        { key: 'hambre_cero', imagen: 'assets/ods2.png', descripcion: 'Hambre cero' },
        { key: 'salud_bienestar', imagen: 'assets/ods3.png', descripcion: 'Salud y bienestar' },
        { key: 'educacion_calidad', imagen: 'assets/ods4.png', descripcion: 'Educación de calidad' },
        { key: 'igualdad_genero', imagen: 'assets/ods5.png', descripcion: 'Igualdad de género' },
        { key: 'agua_limp_sanea', imagen: 'assets/ods6.png', descripcion: 'Agua limpia y saneamiento' },
        { key: 'enr_ase_nocon', imagen: 'assets/ods7.png', descripcion: 'Energía asequible y no contaminante' },
        { key: 'trab_dec_creeco', imagen: 'assets/ods8.png', descripcion: 'Trabajo decente y crecimiento económico' },
        { key: 'prod_con_res', imagen: 'assets/ods9.png', descripcion: 'Industria, innovación e infraestructura' },
        { key: 'reduc_desig', imagen: 'assets/ods10.png', descripcion: 'Reducción de las desigualdades' },
        { key: 'ciu_com_sos', imagen: 'assets/ods11.png', descripcion: 'Ciudades y comunidades sostenibles' },
        { key: 'vida_eco_terr', imagen: 'assets/ods12.png', descripcion: 'Producción y consumo responsables' },
        { key: 'vida_sub', imagen: 'assets/ods13.png', descripcion: 'Acción por el clima' },
        { key: 'paz_jus_instsol', imagen: 'assets/ods14.png', descripcion: 'Vida submarina' },
        { key: 'ind_ino_inf', imagen: 'assets/ods15.png', descripcion: 'Vida de ecosistemas terrestres' },
        { key: 'ali_lograr_obj', imagen: 'assets/ods16.png', descripcion: 'Paz, justicia e instituciones sólidas' },
        { key: 'acc_por_cli', imagen: 'assets/ods17.png', descripcion: 'Alianzas para lograr los objetivos' }
    ];

    // Filtrar los ODS que están en true en el objeto ods
    const odsList = odsData
        .filter(item => ods[item.key]) // Verifica si el ODS está activo
        .map(item => ({
            key: item.key,
            imagen: item.imagen,
            descripcion: item.descripcion
        }));

    res.json(odsList); // Envía la lista filtrada de ODS
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createOds = async (req, res) => {
    
        const { fin_pobreza, hambre_cero, salud_bienestar, 
                educacion_calidad, igualdad_genero,agua_limp_sanea, enr_ase_nocon, 
                trab_dec_creeco, ind_ino_inf, reduc_desig, ciu_com_sos, 
                prod_con_res, acc_por_cli, vida_sub, vida_eco_terr, paz_jus_instsol, 
                ali_lograr_obj, ecoId, ecoCircularId, fecha_registro, fecha_actualizacion } = req.body; // Extraer ecoId y el resto de datos

    try {
        const newOds = await Ods.create({ 
            fin_pobreza: fin_pobreza,
            hambre_cero: hambre_cero,
            salud_bienestar: salud_bienestar,
            educacion_calidad: educacion_calidad,
            igualdad_genero: igualdad_genero,
            agua_limp_sanea: agua_limp_sanea,
            enr_ase_nocon: enr_ase_nocon,
            trab_dec_creeco: trab_dec_creeco,
            ind_ino_inf: ind_ino_inf,
            reduc_desig: reduc_desig,
            ciu_com_sos: ciu_com_sos,
            prod_con_res: prod_con_res,
            acc_por_cli: acc_por_cli,
            vida_sub: vida_sub,
            vida_eco_terr: vida_eco_terr,
            paz_jus_instsol: paz_jus_instsol,
            ali_lograr_obj: ali_lograr_obj,
            ecoId: ecoId,
            ecoCircularId:ecoCircularId,
            fecha_registro:fecha_registro,
            fecha_actualizacion: fecha_actualizacion

         }); // Crear nuevo registro
         newOds.save();
       // console.log(newOds)
        //res.json(newOds);
        res.status(201).json(newOds); // Respuesta con el nuevo registro creado
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



