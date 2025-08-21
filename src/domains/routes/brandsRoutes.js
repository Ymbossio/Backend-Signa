import { Router } from "express";
import { getOneBrands, getAllBrands, createBrands, deleteBrands, updateBrands } from "../controllers/brands.controllers.js";

const router = Router();


router
    .get('/brands/', getAllBrands)
    .get('/brands/:id', getOneBrands)
    .post('/brands', createBrands)
    .put('/brands/:id', updateBrands)
    .delete('/brands/:id', deleteBrands)
export default router;