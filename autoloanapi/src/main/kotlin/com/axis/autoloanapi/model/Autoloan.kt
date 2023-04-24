package com.axis.autoloanapi.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Autoloan(
    @Id
    val id:String?,
    val phNo:String,
    val vehicleType:String,
    val residingCity:String,
    val brandType:String,
    val timePeriod:String,
    val loanAmount:String,
    val loanPeriod:String,
    val empType:String,

)
