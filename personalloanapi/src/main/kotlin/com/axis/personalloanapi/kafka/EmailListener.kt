package com.axis.personalloanapi.kafka

import org.apache.kafka.clients.consumer.ConsumerRecord
import org.springframework.kafka.annotation.KafkaListener
import org.springframework.stereotype.Component
import reactor.core.publisher.Mono
import java.util.function.Consumer

@Component
class EmailListener(
    private val emailProcessorService: EmailProcessorService
) {

    @KafkaListener(topics= ["personalLoan-email-topic"])
    fun listenEmailTopic(record:ConsumerRecord<String,Email>):Mono<Void>{
        return  emailProcessorService.processEmail(record.value())
    }

}