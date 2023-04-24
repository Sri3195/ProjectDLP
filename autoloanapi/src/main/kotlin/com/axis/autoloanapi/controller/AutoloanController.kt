package com.axis.autoloanapi.controller

import com.axis.autoloanapi.model.Autoloan
import com.axis.autoloanapi.repository.AutoloanRepository
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
class AutoloanController(
        @Autowired
        val autoloanRepository: AutoloanRepository
) {
    @PostMapping("/save")
    fun saveCustomer(@RequestBody autoloan: Autoloan):Mono<Autoloan>{
        return autoloanRepository.save(autoloan)

    }
    @GetMapping("/fetch")
    fun getCustomers():Flux<Autoloan>{
        return autoloanRepository.findAll()
    }

    @GetMapping("/find")
    fun getCustomerById(@RequestParam id:String):Mono<Autoloan>{
        return autoloanRepository.findById(id)
    }

}