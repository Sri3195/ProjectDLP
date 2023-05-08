package com.axis.personalloanapi

import com.axis.personalloanapi.Controller.PersonalloanController
import com.axis.personalloanapi.model.Personalloan
import com.axis.personalloanapi.service.PersonalloanService
import com.axis.personalloanapi.service.PersonalloanServiceImpl
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import reactor.core.publisher.Mono

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PersonalloanControllerTest {

    @Autowired
    lateinit var personalloanService: PersonalloanServiceImpl

    @Autowired
    lateinit var personalloanController: PersonalloanController

    val customer= Personalloan("9618434122",9618434122,"Salaried","4-5 lakhs","icici-bank","Axis","hyderabad","owned-by-parents-siblings","2-3 Lakhs","Srilakshmi Bhukya","srigmail.com","female","2023-05-24",878987,"BLEPL3236M")

    @BeforeEach
    fun setUp(){
        personalloanService=Mockito.mock(PersonalloanServiceImpl::class.java)
        personalloanController= PersonalloanController(personalloanService)
    }


    @Test
    fun testSaveCustomer(){
            Mockito.`when`(personalloanService.saveCustomer(customer)).thenReturn(Mono.just(customer))

            val result=personalloanController.saveCustomer(customer).block()

            Mockito.verify(personalloanService,Mockito.times(1)).saveCustomer(customer)
            Assertions.assertNotNull(result)
            Assertions.assertEquals(customer,result)
    }


    @Test
    fun testGetCustomerById(){
        Mockito.`when`(personalloanService.getCustomerById("9618434122")).thenReturn(Mono.just(customer))

        val result=personalloanController.getCustomerById("9618434122").block()

        Mockito.verify(personalloanService,Mockito.times(1)).getCustomerById("9618434122")
        Assertions.assertNotNull(result)
        Assertions.assertEquals(customer,result)
    }

    @Test
    fun testUpdateCustomer(){
        Mockito.`when`(personalloanService.updateCustomer("9618434122",customer)).thenReturn(Mono.just(customer))

        val result= personalloanController.updateCustomer("9618434122",customer).block()

        Mockito.verify(personalloanService,Mockito.times(1)).updateCustomer("9618434122",customer)
        Assertions.assertNotNull(result)
        Assertions.assertEquals(customer,result)
    }
}