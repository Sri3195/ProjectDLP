package com.axis.personalloanapi.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Personalloan(
    @Id
    val id:String?,
    val phNo:Long?=null,
    val empType:String?=null,
    val income:String?=null,
    val bankAccount:String?=null,
    val company:String?=null,
    val residenceCity:String?=null,
    val residenceType: String?=null,
    val loanAmount:String?=null,
    val fullName:String?=null,
    val email:String?=null,
    val gender:String?=null,
    val dob:String?=null,
    val pinCode:Int?=null,
    val panCard:String?=null

)
