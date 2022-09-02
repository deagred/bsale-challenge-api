import { Router } from "express";
import categoryRoutes from './category';
import productRoutes from './product';


const router = Router();

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);

export default router;


