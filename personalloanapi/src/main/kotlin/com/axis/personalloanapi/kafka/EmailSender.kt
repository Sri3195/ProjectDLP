package com.axis.personalloanapi.kafka

import org.springframework.kafka.core.KafkaTemplate
import org.springframework.stereotype.Component
import reactor.core.publisher.Mono

//this is a producer for sending the email message
@Component
class EmailSender(
    private val kafkaTemplate: KafkaTemplate<String,Email>
) {
    fun sendEmail(email:Email):Mono<Void>{
        return Mono.fromRunnable {
            kafkaTemplate.send("personalLoan-email-topic",email)
        }
    }
}