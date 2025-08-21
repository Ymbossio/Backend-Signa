import { Router } from "express";
import { getOneBrands, getAllBrands, createBrands, deleteBrands, updateBrands } from "../controllers/brands.controllers.js";

const router = Router();


router
    .get('/brandsAll', getAllBrands)
    .get('/brandsOne/:id', getOneBrands)
    .post('/brandsCreate', createBrands)
    .put('/brandsUpdate/:id', updateBrands)
    .delete('/brandsDelete/:id', deleteBrands)
export default router;