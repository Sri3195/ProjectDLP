package com.axis.productsapi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.client.discovery.EnableDiscoveryClient

@EnableDiscoveryClient
@SpringBootApplication
class ProductsapiApplication

fun main(args: Array<String>) {
    runApplication<ProductsapiApplication>(*args)
}
