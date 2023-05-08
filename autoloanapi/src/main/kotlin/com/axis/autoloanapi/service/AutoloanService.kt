package com.axis.autoloanapi.service

import com.axis.autoloanapi.model.Autoloan
import reactor.core.publisher.Mono

interface AutoloanService {
    fun saveCustomer(autoloan: Autoloan):Mono<Autoloan>
    fun getCustomerById(id:String):Mono<Autoloan>
    fun updateCustomer(id:String,autoloan: Autoloan):Mono<Autoloan>
}