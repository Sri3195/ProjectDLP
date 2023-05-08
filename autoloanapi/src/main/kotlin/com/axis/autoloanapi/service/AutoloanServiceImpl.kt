package com.axis.autoloanapi.service

import com.axis.autoloanapi.model.Autoloan
import com.axis.autoloanapi.repository.AutoloanRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono
@Service
class AutoloanServiceImpl(
    @Autowired
    var autoloanRepository: AutoloanRepository
) :AutoloanService{
    override fun saveCustomer(autoloan: Autoloan):Mono<Autoloan>{
        return autoloanRepository.save(autoloan)
    }

    override fun updateCustomer(id:String,autoloan: Autoloan):Mono<Autoloan>{
        return autoloanRepository.existsById(id).filter { it==true }.flatMap {
            autoloanRepository.save(autoloan)
        }
    }

    override fun getCustomerById(id:String):Mono<Autoloan>{
        return autoloanRepository.findById(id)
    }
}