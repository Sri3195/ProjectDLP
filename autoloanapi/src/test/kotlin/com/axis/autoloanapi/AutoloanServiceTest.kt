package com.axis.autoloanapi

import com.axis.autoloanapi.model.Autoloan
import com.axis.autoloanapi.repository.AutoloanRepository
import com.axis.autoloanapi.service.AutoloanServiceImpl
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import reactor.core.publisher.Mono
import reactor.test.StepVerifier

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AutoloanServiceTest {

    @Autowired
    lateinit var autoloanRepository: AutoloanRepository

    @Autowired
    lateinit var autoloanServiceImpl: AutoloanServiceImpl

    val customer= Autoloan("9492126766",9492126766,"New","mumbai","Hyundai","1 week", "3 lakhs","3 years","Salaried")

    @BeforeEach
    fun setUp(){
        autoloanRepository=Mockito.mock(AutoloanRepository::class.java)
        autoloanServiceImpl= AutoloanServiceImpl(autoloanRepository)
    }

    @Test
    fun testSaveCusomer(){
        Mockito.`when`(autoloanRepository.save(customer)).thenReturn(Mono.just(customer))

        StepVerifier.create(autoloanServiceImpl.saveCustomer(customer))
            .expectSubscription()
            .expectNext(customer)
            .verifyComplete()
    }

    @Test
    fun testUpdateCustomer(){
        val updatedCustomer=Autoloan("9492126766",9492126766,"Used One","mumbai","Hyundai","3 weeks","3 lakhs","3 years","salaried")
        Mockito.`when`(autoloanRepository.save(updatedCustomer)).thenReturn(Mono.just(updatedCustomer))

        /*StepVerifier.create(autoloanServiceImpl.updateCustomer("9492126766",updatedCustomer))
            .expectSubscription()
            .expectNext(updatedCustomer)
            .verifyComplete()*/
        val result=autoloanServiceImpl.updateCustomer("9492126766",updatedCustomer).block()
        Mockito.verify(autoloanRepository,Mockito.times(1)).existsById("9492126766")
        Mockito.verify(autoloanRepository,Mockito.times(1)).save(updatedCustomer)
        Assertions.assertNotNull(result)
        Assertions.assertEquals(updatedCustomer,result)

    }

    @Test
    fun testGetCustomerById(){
        Mockito.`when`(autoloanRepository.findById("9492126766")).thenReturn(Mono.just(customer))
        StepVerifier.create(autoloanServiceImpl.getCustomerById("9492126766"))
            .expectSubscription()
            .expectNext(customer)
            .verifyComplete()
    }
}