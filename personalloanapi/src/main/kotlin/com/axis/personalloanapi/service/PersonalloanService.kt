package com.axis.personalloanapi.service

import com.axis.personalloanapi.model.Personalloan
import com.axis.personalloanapi.respository.PersonalloanRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class PersonalloanService(
    @Autowired
    var personalloanRepository: PersonalloanRepository
) {

    fun saveCustomer(personalloan: Personalloan):Mono<Personalloan>{
        return personalloanRepository.save(personalloan)
    }

    fun updateCustomer(id:String,personalloan: Personalloan):Mono<Personalloan>{
        return personalloanRepository.existsById(id).filter { it==true }.flatMap {
            personalloanRepository.save(personalloan)
        }
    }
    fun getCusomerById(id:String):Mono<Personalloan>{
        return personalloanRepository.findById(id)
    }
}