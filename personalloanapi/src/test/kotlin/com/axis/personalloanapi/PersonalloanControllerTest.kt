package com.axis.personalloanapi

import com.axis.personalloanapi.model.Personalloan
import com.axis.personalloanapi.respository.PersonalloanRepository
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.reactive.server.WebTestClient

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PersonalloanControllerTest {
    @Autowired
    lateinit var webTestClient: WebTestClient

    @Autowired
    lateinit var personalloanRepository: PersonalloanRepository

    @Test
    fun saveCustomerTest(){
        val personalloanCustomer=(Personalloan("9618434122","9618434122","salaried","5-10 lakhs","sbi-bank","axis","hyderabad","owned-by-parents-siblings", "upt 1 lakh","Nagaraju","9492srilakshmi@gmail.com","male","18-04-1980","521156","crce87659j"))
        personalloanRepository.save(personalloanCustomer).block()

        val savedCustomer= webTestClient.post()
            .uri("/v1/create")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(personalloanCustomer)
            .exchange()
            .expectStatus().isOk
            .expectBody(Personalloan::class.java)
            .returnResult().responseBody

        Assertions.assertThat(savedCustomer).isEqualTo(personalloanCustomer)

    }

    @Test
    fun getCustomerById() {

        // Mockito.`when`(productsRepository.save(product)).thenReturn(Mono.just(product)
        val personalloanCustomer=(Personalloan("9618434122","9618434122","salaried","5-10 lakhs","sbi-bank","axis","hyderabad","owned-by-parents-siblings", "upt 1 lakh","Nagaraju","9492srilakshmi@gmail.com","male","18-04-1980","521156","crce87659j"))

        val returnedCustomer = webTestClient.get()
            .uri("/v1/find?id=9618434122")
            .exchange()
            .expectStatus().isOk
            .expectBody(Personalloan::class.java)
            .returnResult().responseBody

        Assertions.assertThat(returnedCustomer).isEqualTo(personalloanCustomer)
    }

}