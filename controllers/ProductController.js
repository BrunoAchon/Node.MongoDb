const { render } = require('express/lib/response')
const Product = require('../models/Product')

module.exports = class ProductController{
    static async getProducts(req, res){
        const products = await Product.getProducts()
        res.render('products/all', { products })
    }

    static async getProduct(req, res){
        const id = req.params.id
        const product = await Product.getProductById(id)
        res.render('products/product', { product })
    }

    static createProduct(req, res){
        res.render('products/create')
    }

    static createProductPost(req, res){
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description

        const product = new Product(name, image,price, description)
        product.save()

        res.redirect('/products')
    }

    static async removeProdutctPost(req, res){
        const id = req.params.id
        await Product.removeProdutctById(id)
        res.redirect('/products')
    }

    static async editProduct(req, res){
        const id = req.params.id
        const product = await Product.getProductById(id)
        res.render('products/edit', { product })
    }

    static async editProductPost(req, res){
        const id = req.body.id
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description

        const product = new Product(name, image, price, description)
        await product.updateProductById(id)

        //res.redirect('/') // verificar erros
        res.redirect('/products')

    }
}