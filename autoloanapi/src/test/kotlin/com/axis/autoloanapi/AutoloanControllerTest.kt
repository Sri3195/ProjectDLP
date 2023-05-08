package com.axis.autoloanapi

import com.axis.autoloanapi.controller.AutoloanController
import com.axis.autoloanapi.model.Autoloan
import com.axis.autoloanapi.service.AutoloanServiceImpl
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import reactor.core.publisher.Mono

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AutoloanControllerTest {

    @Autowired
    lateinit var autoloanServiceImpl: AutoloanServiceImpl

    @Autowired
    lateinit var autoloanController: AutoloanController

    val customer= Autoloan("9492126766",9492126766,"New","mumbai","Hyundai","1 week", "3 lakhs","3 years","Salaried")

    @BeforeEach
    fun setUp(){
        autoloanServiceImpl=Mockito.mock(AutoloanServiceImpl::class.java)
        autoloanController= AutoloanController(autoloanServiceImpl)

    }

    @Test
    fun testSaveCustomer(){
        Mockito.`when`(autoloanServiceImpl.saveCustomer(customer)).thenReturn(Mono.just(customer))

        val result=autoloanController.saveCustomer(customer).block()

        Mockito.verify(autoloanServiceImpl,Mockito.times(1)).saveCustomer(customer)
        Assertions.assertNotNull(result)
        Assertions.assertEquals(customer,result)
    }

    @Test
    fun testGetCusometById(){
        Mockito.`when`(autoloanServiceImpl.getCustomerById("9492126766")).thenReturn(Mono.just(customer))

        val result=autoloanController.getCustomerById("9492126766").block()

        Mockito.verify(autoloanServiceImpl,Mockito.times(1)).getCustomerById("9492126766")
        Assertions.assertNotNull(result)
        Assertions.assertEquals(customer,result)

    }

    @Test
    fun testUpdateCustomer(){
        Mockito.`when`(autoloanController.updateCustomer("9492126766",customer)).thenReturn(Mono.just(customer))

        val result=autoloanController.updateCustomer("9492126766",customer).block()

        Mockito.verify(autoloanServiceImpl,Mockito.times(1)).updateCustomer("9492126766",customer)
        Assertions.assertNotNull(result)
        Assertions.assertEquals(customer,result)
    }


}