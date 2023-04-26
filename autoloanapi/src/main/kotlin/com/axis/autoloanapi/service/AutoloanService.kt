package com.axis.autoloanapi.service

import com.axis.autoloanapi.model.Autoloan
import com.axis.autoloanapi.repository.AutoloanRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono
@Service
class AutoloanService(
    @Autowired
    var autoloanRepository: AutoloanRepository
) {
    fun saveCustomer(autoloan: Autoloan):Mono<Autoloan>{
        return autoloanRepository.save(autoloan)
    }

    fun updateCustomer(id:String,autoloan: Autoloan):Mono<Autoloan>{
        return autoloanRepository.existsById(id).filter { it==true }.flatMap {
            autoloanRepository.save(autoloan)
        }
    }

    fun getCustomerById(id:String):Mono<Autoloan>{
        return autoloanRepository.findById(id)
    }
}