const Products = require ('./../models/product.model');

//Añadir los productos
module.exports.createProduct = (req, res) =>{
  const  { title, price, description } = req.body
  Products.create( { title, price, description })
    .then((newProduct) => {
      return res.status(201).json(newProduct);
    })
    .catch((error) => {
        return res.status(400).json(error);
    });
}

//Obtener todos los productos
module.exports.allProducts = (req, res) => {
  Products.find()
      .then((productList) => {
          return res.status(200).json(productList);
      })
      .catch((error) => {
          return res.status(400).json(error);
      });
};

//Borrar producto
module.exports.deleteProduct = (req, res) =>{
  Products.findOneAndDelete({_id: req.params.id})
    .then(() => {
      return res.status(200).end();
    })
    .catch((error) => {
        return res.status(400).json(error);
    });
}


//Actualizar producto
module.exports.editProduct = (req, res) => {
  const  updateProduct={}
  const {title, price, description} = req.body

  if (title){
    updateProduct.title = title;
  }
  if (price){
    updateProduct.price = price;
  }
  if (description){
    updateProduct.description = description;
  }

  Products.findByIdAndUpdate({_id: req.params.id}, updateProduct, {new: true})
    .then((productId)=>{
      return res.status(200).json(productId)
    })
    .catch((error) => {
      return res.status(400).json(error);
  });
}
