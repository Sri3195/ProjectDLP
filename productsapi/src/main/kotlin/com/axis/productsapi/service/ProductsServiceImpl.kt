package com.axis.productsapi.service

import com.axis.productsapi.model.Products
import com.axis.productsapi.repository.ProductsRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class ProductsServiceImpl(
    @Autowired
    val productsRepository: ProductsRepository
) :ProductsService{
    override fun saveProduct(product: Products): Mono<Products> {
        return productsRepository.save(product)
    }

    override fun getAllProducts(): Flux<Products> {
        return  productsRepository.findAll()
    }

    override fun getProductById(id: String): Mono<Products> {
        return  productsRepository.findById(id)
    }
}