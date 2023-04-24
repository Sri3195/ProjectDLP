package com.axis.personalloanapi.respository

import com.axis.personalloanapi.model.Personalloan
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import org.springframework.stereotype.Repository
import reactor.core.publisher.Mono

@Repository
interface PersonalloanRepository:ReactiveMongoRepository<Personalloan,String> {
}