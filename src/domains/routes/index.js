import express,{Router} from "express";
import BrandsRouter from './brandsRoutes.js'


const RouterApi = (app) => {
    const router = Router()
    router.use('/v1', BrandsRouter);
    app.use(router);
};


export default RouterApi;