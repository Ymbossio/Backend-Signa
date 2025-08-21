import { Brands, BrandsSchema } from './brands.model.js'

function setupModel (sequelize){
    Brands.init(BrandsSchema, Brands.config(sequelize))
}


export default setupModel;