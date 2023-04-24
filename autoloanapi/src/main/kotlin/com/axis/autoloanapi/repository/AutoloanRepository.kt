package com.axis.autoloanapi.repository

import com.axis.autoloanapi.model.Autoloan
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import org.springframework.stereotype.Repository

@Repository
interface AutoloanRepository:ReactiveMongoRepository<Autoloan,String> {
}