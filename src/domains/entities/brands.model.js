import { Model, DataTypes } from "sequelize";

const BRANDS_TABLES = 'Brands';

export class Brands extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: BRANDS_TABLES,
            modelName: 'Brands',
            timestamps: false
        }
    }
}


export const BrandsSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    brands:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'brands'
    },
    holder:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'holder'
    },
    state:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'state',
        defaultValue: 'activo'
    }
}
