import app from './app.js'
import { sequelize } from './config/database.js'
import './models/usuario.js'
import './models/caedec.js'
import './models/subcategoria.js'
import './models/inversion_elegible.js'
import './models/ecoeficiencia.js'
import './models/regiones_instalacion.js'
import './models/linea_base.js'
import './models/precio_factor_tasa.js'
import './models/region.js'
import './models/agencia.js'
import './models/residuo.js'
import './models/fac_emi_tipo_residuo.js'
import './models/ods.js'
import './models/index.js'
import './models/circular.js'
import './models/documento_aux_cal.js'
import './models/maquinaria_reciclaje.js'

const port = process.env.port || 3000;
const host  = ('RENDER' in process.env)? '0.0.0.0': 'localhost';
async function main() {

    try {
        await sequelize.sync({ force: false }); //creacion de estructura de bbdd postgres en base al modelo (sequelize) 
        await sequelize.authenticate();
        app.listen(host, port)
        console.log('escuchando puerto 3000', 3000)
    }
    catch (error) {
        console.error('Habilitar la conexion a la base de datos')
    }
}

main();

