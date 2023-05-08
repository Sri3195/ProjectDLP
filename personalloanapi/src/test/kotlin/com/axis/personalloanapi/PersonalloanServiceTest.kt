package com.axis.personalloanapi

import com.axis.personalloanapi.model.Personalloan
import com.axis.personalloanapi.respository.PersonalloanRepository
import com.axis.personalloanapi.service.PersonalloanServiceImpl
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import reactor.core.publisher.Mono
import reactor.test.StepVerifier

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PersonalloanServiceTest {

    @Autowired
    lateinit var personalloanRepository: PersonalloanRepository

    @Autowired
    lateinit var personalloanServiceImpl: PersonalloanServiceImpl

    val customer=Personalloan("9618434122",9618434122,"Salaried","4-5 lakhs","icici-bank","Axis","hyderabad","owned-by-parents-siblings","2-3 Lakhs","Srilakshmi Bhukya","srigmail.com","female","2023-05-24",878987,"BLEPL3236M")

    @BeforeEach
    fun setUp(){
        personalloanRepository=Mockito.mock(PersonalloanRepository::class.java)
        personalloanServiceImpl= PersonalloanServiceImpl(personalloanRepository)
    }

    @Test
    fun testSaveCustomer(){
        //val customer=Personalloan("9492126766",9492126766,"salaried","upto 1 lakh","axis bank","axis","hyderabad","owned by parents/siblings","upto 1 lakh","Srilakshmi","bhukyasri3195@gmail.com","female","2001-05-08",521178,"BLEPL3236M")

        Mockito.`when`(personalloanRepository.save(customer)).thenReturn(Mono.just(customer))

        StepVerifier.create(personalloanServiceImpl.saveCustomer(customer))
            .expectSubscription()
            .expectNext(customer)
            .verifyComplete()

    }

    @Test
    fun testUpdateCustomer(){
        //val customer=Personalloan("9618434122",9618434122,"salaried","upto 1 lakh","axis bank","axis","hyderabad","owned by parents/siblings","upto 1 lakh","Srilakshmi","bhukyasri3195@gmail.com","female","2001-05-08",521178,"BLEPL3236M")
        val updatedCustomer= Personalloan("9618434122",9618434122,"salaried","upto 5 lakh","axis bank","axis","hyderabad","owned by parents/siblings","upto 1 lakh","Srilakshmi","bhukyasri3195@gmail.com","female","2001-05-08",521178,"BLEPL3236M")

        Mockito.`when`(personalloanRepository.save(updatedCustomer)).thenReturn(Mono.just(updatedCustomer))

        val result=personalloanServiceImpl.updateCustomer("9618434122",updatedCustomer).block()

        Mockito.verify(personalloanRepository,Mockito.times(1)).existsById("9618434122")
        Mockito.verify(personalloanRepository,Mockito.times(1)).save(updatedCustomer)
        Assertions.assertNotNull(result)
        Assertions.assertEquals(updatedCustomer,result)
    }

    @Test
    fun testGetCustomerById(){
        Mockito.`when`(personalloanRepository.findById("9618434122")).thenReturn(Mono.just(customer))

        StepVerifier.create(personalloanServiceImpl.getCustomerById("9618434122"))
            .expectSubscription()
            .expectNext(customer)
            .verifyComplete()

    }
}
