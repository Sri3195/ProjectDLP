package com.axis.personalloanapi.config

import org.apache.kafka.clients.admin.NewTopic
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.kafka.config.TopicBuilder

@Configuration
class LoanSanctionedTopic {

    @Bean
    fun loanSantionedTopics():NewTopic{
        return TopicBuilder.name("loan-sanctioned")
            .partitions(1)
            .replicas(2)
            .build()
    }
}