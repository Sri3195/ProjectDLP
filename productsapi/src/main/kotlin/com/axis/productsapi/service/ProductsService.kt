package com.axis.productsapi.service

import com.axis.productsapi.model.Products
import com.axis.productsapi.repository.ProductsRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


interface ProductsService{
    fun saveProduct(product: Products):Mono<Products>
    fun getAllProducts():Flux<Products>
    fun getProductById(id:String):Mono<Products>


}