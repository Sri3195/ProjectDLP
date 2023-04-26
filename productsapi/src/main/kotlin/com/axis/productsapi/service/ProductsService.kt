package com.axis.productsapi.service

import com.axis.productsapi.model.Products
import com.axis.productsapi.repository.ProductsRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class ProductsService(
    @Autowired
    var productsRepository: ProductsRepository
) {

    fun saveProduct(product: Products):Mono<Products>{
        return productsRepository.save(product)
    }

    fun getProducts():Flux<Products>{
        return productsRepository.findAll()
    }

    fun getProductsById(id:String):Mono<Products>{
        return productsRepository.findById(id)
    }

    fun updateProduct(id:String,product: Products):Mono<Products>{
        return productsRepository.existsById(id).filter { it==true }.flatMap {
            productsRepository.save(product)
        }
    }
}