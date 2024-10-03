import Sequelize from 'sequelize'

export  const sequelize = new Sequelize(
    'MRV_BDP',
    'postgres',
    'Mensaje1',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);
