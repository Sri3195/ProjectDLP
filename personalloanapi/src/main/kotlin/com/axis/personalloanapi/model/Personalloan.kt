package com.axis.personalloanapi.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Personalloan(
    @Id
    val id:String?,
    val phNo:String?=null,
    val empType:String,
    val income:String,
    val bankAccount:String,
    val company:String,
    val residenceCity:String,
    val residenceType: String,
    val loanAmount:String,
    val fullName:String,
    val email:String,
    val gender:String,
    val dob:String,
    val pinCode:String,
    val panCard:String

)
