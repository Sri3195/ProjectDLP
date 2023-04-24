package com.axis.autoloanapi

import com.axis.autoloanapi.model.Autoloan
import com.axis.autoloanapi.repository.AutoloanRepository
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.reactive.server.WebTestClient

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AutoloanControllerTest {

    @Autowired
    lateinit var webTestClient: WebTestClient

    @Autowired
    lateinit var autoloanRepository: AutoloanRepository

    @Test
    fun saveCustomerTest(){
        val customer=(Autoloan("1","9618434122","New","Hyderabad","Hyundai","1 week","3 lakhs","3 years","salaried"))
        autoloanRepository.save(customer).block()

        val savedCustomer=webTestClient.post()
            .uri("/v1/save")
            .contentType(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus().isOk
            .expectBody(Autoloan::class.java)
            .returnResult().responseBody

        Assertions.assertThat(savedCustomer).isEqualTo(customer)

 }
    @Test
    fun getCustomerById(){
        val customer=Autoloan("1","9618434122","New","Hyderabad","Hyundai","1 week","3 lakhs","3 years","salaried")

        val returedCustomer=webTestClient.get()
            .uri("/v1/find?id=1")
            .exchange()
            .expectStatus().isOk
            .expectBody(Autoloan::class.java)
            .returnResult().responseBody

        Assertions.assertThat(returedCustomer).isEqualTo(customer)

    }
}