package com.axis.autoloanapi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.client.discovery.EnableDiscoveryClient

@EnableDiscoveryClient
@SpringBootApplication
class AutoloanapiApplication

fun main(args: Array<String>) {
    runApplication<AutoloanapiApplication>(*args)
}
