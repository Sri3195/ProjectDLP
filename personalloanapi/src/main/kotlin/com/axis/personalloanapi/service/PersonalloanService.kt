package com.axis.personalloanapi.service

import com.axis.personalloanapi.model.Personalloan
import reactor.core.publisher.Mono

interface PersonalloanService {
    fun saveCustomer(personalloan: Personalloan):Mono<Personalloan>
    fun updateCustomer(id:String,personalloan: Personalloan):Mono<Personalloan>

    fun getCustomerById(id:String):Mono<Personalloan>
}