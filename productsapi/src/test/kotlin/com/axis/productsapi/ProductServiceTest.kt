package com.axis.productsapi

import com.axis.productsapi.model.Products
import com.axis.productsapi.repository.ProductsRepository
import com.axis.productsapi.service.ProductsService
import com.axis.productsapi.service.ProductsServiceImpl
import org.junit.jupiter.api.BeforeEach

import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.test.StepVerifier


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductServiceTest {

    @Autowired
    lateinit var productsService: ProductsServiceImpl

    @Autowired
    lateinit var productsRepository: ProductsRepository

    @BeforeEach
    fun setUp(){
        productsRepository=Mockito.mock(ProductsRepository::class.java)
        productsService= ProductsServiceImpl(productsRepository)
    }

    @Test
    fun testGetAllProducts(){
        val products= listOf<Products>(Products("124","Auto Loan" ,"This helps you to have your own vehicle","Check Eligibility"), Products("125","Personal Loan","Fulfill your wishes","Check Eligibility"))

        Mockito.`when`(productsRepository.findAll()).thenReturn(Flux.fromIterable(products))

        StepVerifier.create(productsService.getAllProducts())
            .expectSubscription()
            .expectNextSequence(products)
            .verifyComplete()
    }

    @Test
    fun testSaveProduct(){
        val product=Products("126","Education Loan","Dreams come true","Check Eligibility")
        Mockito.`when`(productsRepository.save(product)).thenReturn(Mono.just(product))

        StepVerifier.create(productsService.saveProduct(product))
            .expectSubscription()
            .expectNext(product)
            .verifyComplete()
    }


}