package com.axis.autoloanapi.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Autoloan(
    @Id
    val id:String?,
    val phNo:String?=null,
    val vehicleType:String?=null,
    val residingCity:String?=null,
    val brandType:String?=null,
    val timePeriod:String?=null,
    val loanAmount:String?=null,
    val loanPeriod:String?=null,
    val empType:String?=null,

)
