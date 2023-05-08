package com.axis.productsapi

import com.axis.productsapi.controller.ProductsController
import com.axis.productsapi.model.Products
import com.axis.productsapi.repository.ProductsRepository
import com.axis.productsapi.service.ProductsService
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mockito
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.reactive.server.WebTestClient
import org.springframework.test.web.reactive.server.expectBody
import org.springframework.test.web.reactive.server.returnResult
import org.springframework.web.reactive.function.BodyInserters
import org.springframework.web.reactive.function.server.ServerRequest
import org.springframework.web.reactive.function.server.ServerResponse
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


@SpringBootTest(webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductControllerTest {

    @Autowired
    lateinit var productsController: ProductsController

    @Autowired
    lateinit var productsService: ProductsService

    @BeforeEach
    fun setUp(){
        productsService=Mockito.mock(ProductsService::class.java)
        productsController= ProductsController(productsService)
    }

    @Test
    fun testGetProductsFirstResult(){

        val products= Products("124","Auto Loan" ,"This helps you to have your own vehicle","Check Eligibility")
        //val products1=Products("125","Personal Loan","Fulfill your wishes","Check Eligibility")
        Mockito.`when`(productsService.getAllProducts()).thenReturn(Flux.just(products))

        //val request= Mockito.mock(ServerRequest::class.java)
        //val response=Mockito.mock(ServerResponse::class.java)

        val result=productsController.getProducts().blockFirst()
        Mockito.verify(productsService,Mockito.times(1)).getAllProducts()
        org.junit.jupiter.api.Assertions.assertNotNull(result)
       // org.junit.jupiter.api.Assertions.assertEquals(HttpStatus.OK,result.statusCode())
        org.junit.jupiter.api.Assertions.assertEquals(products,result)


    }
    @Test
    fun testGetProductsLastResult(){

        //val products= Products("124","Auto Loan" ,"This helps you to have your own vehicle","Check Eligibility")
        val products1=Products("125","Personal Loan","Fulfill your wishes","Check Eligibility")
        Mockito.`when`(productsService.getAllProducts()).thenReturn(Flux.just(products1))

        //val request= Mockito.mock(ServerRequest::class.java)
        //val response=Mockito.mock(ServerResponse::class.java)

        val result=productsController.getProducts().blockLast()
        Mockito.verify(productsService,Mockito.times(1)).getAllProducts()
        org.junit.jupiter.api.Assertions.assertNotNull(result)
        // org.junit.jupiter.api.Assertions.assertEquals(HttpStatus.OK,result.statusCode())
        org.junit.jupiter.api.Assertions.assertEquals(products1,result)


    }

    @Test
    fun testSaveProduct(){
        val product=Products("126","Education Loan","Dreams come true","Check Eligibility")

        Mockito.`when`(productsService.saveProduct(product)).thenReturn(Mono.just(product))

        val result=productsController.saveProduct(product).block()

        Mockito.verify(productsService,Mockito.times(1)).saveProduct(product)
        org.junit.jupiter.api.Assertions.assertNotNull(result)
        org.junit.jupiter.api.Assertions.assertEquals(product,result)
    }
}