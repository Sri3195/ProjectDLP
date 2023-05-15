package com.axis.personalloanapi.Controller

import com.axis.personalloanapi.model.Personalloan
import com.axis.personalloanapi.service.KafkaProducer
import com.axis.personalloanapi.service.PersonalloanServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono


@RestController
@RequestMapping("/v1")
class PersonalloanController(

    @Autowired
    val personalloanService: PersonalloanServiceImpl

)
{
    @Autowired
    lateinit var kafkaProducer: KafkaProducer

    @PostMapping("/create")
    fun saveCustomer(@RequestBody personalloan: Personalloan):Mono<Personalloan>{
      return personalloanService.saveCustomer(personalloan)

    }

    @PutMapping("/update")
    fun updateCustomer(@RequestParam id:String,@RequestBody personalloan: Personalloan):Mono<Personalloan>
    {
        return personalloanService.updateCustomer(id,personalloan)
    }
    @GetMapping("/find")
    fun getCustomerById(@RequestParam id:String):Mono<Personalloan>{
        return personalloanService.getCustomerById(id)

    }
    @PostMapping("/email")
    fun getLoanDetails(@RequestBody customer:Personalloan){
        kafkaProducer.sendloanSactionedMessage(customer);
    }



}