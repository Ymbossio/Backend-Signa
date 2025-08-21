import BrandsRepository from '../repositories/brands.repository.js';

class BrandsServices {

    constructor() {
        this.brandsRepository = new BrandsRepository();
    }

    async find() {
        try { 
            const res = await this.brandsRepository.findAll();
            return res;
        } catch (error) {
            throw new Error('Error al obtener brandsRepository: ' + error.message);
        }
    }

    async findOne(id) {
        
        try {
            const res = await this.brandsRepository.findById(id);
            if(!res){
                throw new Error('Brand not found');
            }
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async create(data) {

        try {
            const res = await this.brandsRepository.create(data);
            return res;    
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async update(id, brands, holder, state) {


        try {
            const row = await this.findOne(id);
            if (row) {
                const res = await row.update({ brands, holder, state});
                return res;
            }
            throw new Error('Brand not found');
        } catch (error) {
            throw new Error('Error deleting brand: ' + error.message);
        }

    }

    async delete(id) {

        try {
            const row = await this.findOne(id);
            if (row) {
                const res = await row.destroy();
                return res;
            }
            throw new Error('Brand not found');
        } catch (error) {
            throw new Error('Error deleting brand: ' + error.message);
        }
    }
}

export default BrandsServices;