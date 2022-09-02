import { Router } from "express";
import ApiError from "../middleware/ApiError";
import { filterObjectArray } from "../utils/filter";
import { getProducts } from "../utils/queries";
import { sortObjectArray } from "../utils/sort";

const productRoutes = Router();

productRoutes.get('/', async (req, res, next) => {
  try {
    let products = await getProducts();

    res.status(200).send(products);
  } catch (err) {
    next(err);
  }
});

productRoutes.get('/search', async (req, res, next) => {
  try {
    let { by, sort, value, sortBy } = req.query;
    let products = await getProducts();

    if (by && !value) {
      throw new ApiError('Invalid search value', 400, true);
    }

    if (value && !by) {
      by = 'name';
    }

    if (by && !sortBy) {
      sortBy = by;
    }

    products = filterObjectArray(products, by as string, value as string);

    if (sort) {
      products = sortObjectArray(products, sortBy as string, sort as string);
    }

    res.status(200).send(products);
  } catch (err) {
    next(err);
  }
});

export default productRoutes;
