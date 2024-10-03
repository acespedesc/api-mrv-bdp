import express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import usuarioRoutes from './routes/usuario.routes.js'
import caedecRoutes from './routes/caedec.routes.js'
import subcategoriaRoutes from './routes/subcategoria.routes.js'
import inversion_elegible from './routes/inversion_elegible.routes.js'
import ecoeficienciaRoutes from './routes/ecoeficiencia.routes.js'
import regiones_intalacionRoutes from './routes/regiones_instalacion.routes.js'
import linea_base from './routes/linea_base.routes.js'
import precio_factor_tasa from './routes/precio_factor_tasa.routes.js'
import region from './routes/region.routes.js'
import agencia from './routes/agencia.routes.js'
import residuo from './routes/residuo.routes.js'
import fac_emi_tipo_residuo from './routes/fac_emi_tipo_residuo.routes.js'
import ods from './routes/ods.routes.js'
import circular from './routes/circular.routes.js'
import documento_aux_cla from './routes/documento_aux_cal.routes.js'
import maquinaria_reciclaje from './routes/maquinaria_reciclaje.routes.js'
const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(usuarioRoutes);
app.use(caedecRoutes);
app.use(subcategoriaRoutes);
app.use(inversion_elegible);
app.use(ecoeficienciaRoutes);
app.use(regiones_intalacionRoutes);
app.use(linea_base);
app.use(precio_factor_tasa);
app.use(region);
app.use(agencia);
app.use(residuo);
app.use(fac_emi_tipo_residuo);
app.use(ods);
app.use(circular);
app.use(documento_aux_cla);
app.use(maquinaria_reciclaje);

export default app;