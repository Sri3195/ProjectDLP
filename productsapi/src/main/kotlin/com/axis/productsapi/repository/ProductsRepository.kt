package com.axis.productsapi.repository

import com.axis.productsapi.model.Products
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import org.springframework.stereotype.Repository

@Repository
interface ProductsRepository:ReactiveMongoRepository<Products,String> {
}