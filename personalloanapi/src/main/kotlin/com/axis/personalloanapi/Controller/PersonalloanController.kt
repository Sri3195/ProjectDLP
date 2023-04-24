package com.axis.personalloanapi.Controller

import com.axis.personalloanapi.model.Personalloan
import com.axis.personalloanapi.respository.PersonalloanRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


@RestController
@RequestMapping("/v1")
class PersonalloanController(

    @Autowired
    val personalloanRepository: PersonalloanRepository
)
{
    @GetMapping("/fetch")
    fun getAllCustomers():Flux<Personalloan>{
        return personalloanRepository.findAll()
    }

    @PostMapping("/create")
    fun saveCustomer(@RequestBody personalloan: Personalloan):Mono<Personalloan>{
        return personalloanRepository.save(personalloan)
    }

    @GetMapping("/find")
    fun getCustomerById(@RequestParam id:String):Mono<Personalloan>{
        return personalloanRepository.findById(id)

    }

}