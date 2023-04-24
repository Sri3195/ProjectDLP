package com.axis.personalloanapi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.client.discovery.EnableDiscoveryClient

@EnableDiscoveryClient
@SpringBootApplication
class PersonalloanapiApplication

fun main(args: Array<String>) {
    runApplication<PersonalloanapiApplication>(*args)
}
