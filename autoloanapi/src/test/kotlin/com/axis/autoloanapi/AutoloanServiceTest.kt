package com.axis.autoloanapi

import com.axis.autoloanapi.model.Autoloan
import com.axis.autoloanapi.repository.AutoloanRepository
import com.axis.autoloanapi.service.AutoloanServiceImpl
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.InjectMocks
import org.mockito.Mockito
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import reactor.core.publisher.Mono
import reactor.test.StepVerifier

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AutoloanServiceTest {

    @Autowired
    //@InjectMocks
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

    /*@Test
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

    }*/

    @Test
    fun testUpdateCustomer(){
        //val customer=Personalloan("9618434122",9618434122,"salaried","upto 1 lakh","axis bank","axis","hyderabad","owned by parents/siblings","upto 1 lakh","Srilakshmi","bhukyasri3195@gmail.com","female","2001-05-08",521178,"BLEPL3236M")
        //val updatedCustomer= Personalloan("9618434122",9618434122,"salaried","upto 5 lakh","axis bank","axis","hyderabad","owned by parents/siblings","upto 1 lakh","Srilakshmi","bhukyasri3195@gmail.com","female","2001-05-08",521178,"BLEPL3236M")

        val id="9492126766"
        Mockito.`when`(autoloanRepository.existsById(id)).thenReturn(Mono.just(true))

        Mockito.`when`(autoloanRepository.save(customer)).thenReturn(Mono.just(customer))

        val result=autoloanServiceImpl.updateCustomer(id,customer)

        Mockito.verify(autoloanRepository).existsById(id)
      //  Mockito.verify(autoloanRepository).save(customer)

        StepVerifier.create(result)
            .expectNext(customer)
            .verifyComplete()
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