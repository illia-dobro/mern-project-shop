import  asyncHandler from 'express-async-handler';
import Product from '../models/product-model.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const product = await Product.find({});
  res.json(product);
})

// @desc Fetch product
// @route GET /api/products/id
// @access Public
const getProductByID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if(product){
    res.json(product);
  }
  res.status(404);
  throw new Error('Resource not found')
})

export { getProducts, getProductByID }