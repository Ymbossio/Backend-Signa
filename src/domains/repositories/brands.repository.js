import { Brands } from '../entities/brands.model.js';

class BrandesRepository {
    constructor() {}
    
    async findAll() {
        return await Brands.findAll();
    }

    async findById(id) {
        return await Brands.findByPk(id);
    }

    async create(data) {
        return await Brands.create(data);
    }

    async update(id, data) {
        const row = await this.findById(id);
        if (row) {
            return await row.update(data);
        }
        throw new Error('Brand not found');
    }

    async delete(id) {
        const row = await this.findById(id);
        if (row) {
            return await row.destroy();
        }
        throw new Error('Brand not found');
    }
}

export default BrandesRepository;