package com.axis.productsapi.service

import com.axis.productsapi.model.Products
import com.axis.productsapi.repository.ProductsRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.mapping.Unwrapped.Empty
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


@Service
class ProductsService(
    @Autowired
    val productsRepository: ProductsRepository
) {
    //function to save products
    fun saveProducts( product:Products):Mono<Products>{
        return productsRepository.save(product)
    }

    fun getAllProdcts():Flux<Products>{
        return productsRepository.findAll()
    }

    fun updateProduct(product: Products,id:String) :Mono<Products>?{
        //val returnedproduct=productsRepository.findById(id)
         return productsRepository.existsById(id).filter {  it==true }.flatMap {
            productsRepository.save(product)
        }
    }

    fun deleteProduct(id:String): Mono<Void> {
        return productsRepository.deleteById(id)
    }

    fun findProduct(id:String):Mono<Products>{
        return productsRepository.findById(id)
    }
}
