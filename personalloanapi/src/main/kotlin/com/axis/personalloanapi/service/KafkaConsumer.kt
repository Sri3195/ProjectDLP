package com.axis.personalloanapi.service

import com.axis.personalloanapi.model.Personalloan
import org.slf4j.LoggerFactory
import org.springframework.kafka.annotation.KafkaListener
import org.springframework.stereotype.Service
import java.util.logging.Logger

@Service
class KafkaConsumer {
    val logger=LoggerFactory.getLogger(KafkaConsumer::class.java)

    @KafkaListener(topics=["loan-sanctioned"], groupId = "personal-loan-group")
    fun receivedLoanSanctionedMessage(customer:Personalloan)
    {
        logger.info("Personal Loan Application is submitted by a customer with the below details ${customer}")
    }
}