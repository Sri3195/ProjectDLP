package com.axis.productsapi

import com.axis.productsapi.model.Products
import com.axis.productsapi.repository.ProductsRepository
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mockito
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.MediaType
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.reactive.server.WebTestClient
import org.springframework.test.web.reactive.server.expectBody
import org.springframework.test.web.reactive.server.returnResult
import org.springframework.web.reactive.function.BodyInserters
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


@SpringBootTest(webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductControllerTest {
    @Autowired
    lateinit var webTestClient: WebTestClient;

    @Autowired
    lateinit var productsRepository: ProductsRepository;

    @Test
    fun saveProductTest() {
        val product = (Products("123", "Home Loan", "Get New Home", "CheckEligibility"))
        // Mockito.`when`(productsRepository.save(product)).thenReturn(Mono.just(product))
        productsRepository.save(product).block()

        val savedProduct = webTestClient.post()
            .uri("/v1/create")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(product)
            .exchange()
            .expectStatus().isOk
            .expectBody(Products::class.java)
            .returnResult().responseBody



        Assertions.assertThat(savedProduct).isEqualTo(product)

        //Mockito.verify(productsRepository).save(product)
    }

    @Test
    fun getProductById() {
        val product = (Products("123", "Home Loan", "Get New Home", "CheckEligibility"))
        // Mockito.`when`(productsRepository.save(product)).thenReturn(Mono.just(product)

        val returnedProduct = webTestClient.get()
            .uri("/v1/find?id=123")
            .exchange()
            .expectStatus().isOk
            .expectBody(Products::class.java)
            .returnResult().responseBody

        Assertions.assertThat(returnedProduct).isEqualTo(product)
    }
    /*@Test
    fun getAllProducts(){
        val product=Flux.just(Products("123","Home Loan","Get New Home","CheckEligibility"),Products("124","Personal Loan","Dream come true","Check Eligibility"))
        // Mockito.`when`(productsRepository.save(product)).thenReturn(Mono.just(product))
        //productsRepository.save(product).block()

        val returnedProduct=webTestClient.get()
            .uri("/v1/fetch")
            .exchange()
            .expectStatus().isOk
            .expectBody(Products::class.java)
            .returnResult().responseBody

        Assertions.assertThat(returnedProduct).isEqualTo(product)
    }*/

    @Test
    fun updateProductTest() {
        val product = (Products("123", "Home Loan", "Get New Home", "CheckEligibility"))
        // Mockito.`when`(productsRepository.save(product)).thenReturn(Mono.just(product))
        productsRepository.save(product).block()

        val updatedProduct = webTestClient.put()
            .uri("/v1/update?id=123")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(product)
            .exchange()
            .expectStatus().isOk
            .expectBody(Products::class.java)
            .returnResult().responseBody



        Assertions.assertThat(updatedProduct).isEqualTo(product)

        //Mockito.verify(productsRepository).save(product)
    }
    /*@Test
    fun getProducts() {
        val product = Flux.just(Products("124", "Auto Loan", "This helps you to have your own vehicle", "Check Eligibility"),Products("125","Personal Loan","Fulfill your wishes","Check Eligibility"))
        // Mockito.`when`(productsRepository.save(product)).thenReturn(Mono.just(product)

        val returnedProducts = webTestClient.get()
            .uri("/v1/fetch")
            .exchange()
            .expectStatus().isOk
            .expectBody(Products::class.java)
            .returnResult().responseBody

        Assertions.assertThat(returnedProducts).isEqualTo(product)
    */
}