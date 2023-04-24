package com.axis.productsapi.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Products(
    @Id
    val id:String?,
    val productName:String,
    val productBenefit:String,
    val productLink:String
)
