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
        val autoloanCustomer=(Autoloan("9618434122","9618434122","New","Hyd","Hyundai","1 week","3 lakshs","3 years", "salaried"))
        autoloanRepository.save(autoloanCustomer).block()

        val savedCustomer= webTestClient.post()
            .uri("/v1/create")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(autoloanCustomer)
            .exchange()
            .expectStatus().isOk
            .expectBody(Autoloan::class.java)
            .returnResult().responseBody

        Assertions.assertThat(savedCustomer).isEqualTo(autoloanCustomer)

    }

    @Test
    fun updateCustomerTest(){
        val autoloanCustomer=(Autoloan("9618434122","9618434122","Used One","Hyd","Hyundai","1 week","3 lakshs","3 years", "salaried"))
        autoloanRepository.save(autoloanCustomer).block()

        val savedCustomer= webTestClient.post()
            .uri("/v1/update?id=9618434122")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(autoloanCustomer)
            .exchange()
            .expectStatus().isOk
            .expectBody(Autoloan::class.java)
            .returnResult().responseBody

        Assertions.assertThat(savedCustomer).isEqualTo(autoloanCustomer)

    }
}
