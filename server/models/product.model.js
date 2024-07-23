const mongoose = require('mongoose');

const colletionProducts = mongoose.Schema({
  title: {
    type: String, 
    required: [true, 'El campo title es requerido'],
    minlength: [3, 'Debe contener al menos 3 caracteres']
  },
  price: {
    type:Number,
    required: [true, 'El campo price es requerido'],
    minlength: [3, 'Debe contener al menos 3 caracteres']
  }, 
  description: {
    type:String,
    required: [true, 'El campo price es requerido'],
    minlength: [3, 'Debe contener al menos 3 caracteres']
  }
}, { timestamps: true });

const Products = mongoose.model('products', colletionProducts)
module.exports = Products;