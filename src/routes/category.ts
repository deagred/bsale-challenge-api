import { Router } from "express";
import { conn } from "../db";


const categoryRoutes = Router();

categoryRoutes.get('/', async (req, res, next) => {
  try {
    const categories = await conn.query('SELECT * from category');

    res.status(200).send(categories);
  } catch (err) {
    next(err);
  }
});


export default categoryRoutes;
