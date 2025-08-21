import BrandsServices from "../services/brands.services.js";


const service = new BrandsServices();

export const createBrands = async (req, res) => {
    try {
        const response = await service.create(req.body)
        res.json({success: true, data: response})      
    } catch (error) {  
        res.status(500).json({success: false, message: error.message})
    }
}

export const getAllBrands = async (req, res) => {
    try {
        const response = await service.find()
        res.json({success: true, data: response})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const getOneBrands = async (req, res) => {
    try {
        const { id } = req.params
        
        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'ID is required' });
        }

        const response = await service.findOne(id)
        res.json({success: true, data: response})
        
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const updateBrands = async (req, res) => {
    try {
        const { id } = req.params
        const {brands, holder, state} = req.body

        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'ID is required' });
        }

        const response = await service.update(id, brands, holder, state)
        res.json({success: true, data: response})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const deleteBrands = async (req, res) => {
    try {
        const { id } = req.params

        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'ID is required' });
        }

        const response = await service.delete(id)
        res.json({success: true, data: "Record deleted successfully"})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}