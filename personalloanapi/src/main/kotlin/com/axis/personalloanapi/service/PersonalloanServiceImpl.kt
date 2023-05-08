package com.axis.personalloanapi.service

import com.axis.personalloanapi.model.Personalloan
import com.axis.personalloanapi.respository.PersonalloanRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class PersonalloanServiceImpl
    (
    @Autowired
    var personalloanRepository: PersonalloanRepository
) : PersonalloanService{

    override fun saveCustomer(personalloan: Personalloan):Mono<Personalloan>{
        return personalloanRepository.save(personalloan)
    }

    override fun updateCustomer(id:String,personalloan: Personalloan):Mono<Personalloan>{
        return personalloanRepository.existsById(id).filter { it==true }.flatMap {
            personalloanRepository.save(personalloan)
        }
    }
    override fun getCustomerById(id:String):Mono<Personalloan>{
        return personalloanRepository.findById(id)
    }
}