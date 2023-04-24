package com.axis.productsapi.controller

import com.axis.productsapi.model.Products
import com.axis.productsapi.service.ProductsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/v1")
class ProductsController(
    @Autowired
    val productsService: ProductsService
) {

    @GetMapping("/fetch")
    fun getProducts():Flux<Products>{
        return productsService.getAllProdcts()
    }

    @PostMapping("/create")
    fun saveProduct(@RequestBody product:Products): Mono<Products>{
        return productsService.saveProducts(product)
    }

    @PutMapping("/update")
    fun updateProoduct(@RequestBody product: Products,@RequestParam id:String) :Mono<Products>?{
        return productsService.updateProduct(product,id)
    }

    @DeleteMapping("/delete")
    fun deleteProduct(@RequestParam id:String):Mono<Void>{
        return  productsService.deleteProduct(id)

    }

    @GetMapping("/find")
    fun findProduct(@RequestParam id:String):Mono<Products>{
        return productsService.findProduct(id)
    }
}