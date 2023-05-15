package com.axis.personalloanapi.service

import com.axis.personalloanapi.model.Personalloan
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.kafka.core.KafkaTemplate
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Service

@Service
class KafkaProducer{

    @Autowired
    lateinit var kafkaTemplate: KafkaTemplate<String,Personalloan>

    @Autowired
    lateinit var javaMailSender: JavaMailSender

    //@Autowired
    var logger = LoggerFactory.getLogger(KafkaProducer::class.java)


    fun sendLoanSactionedEmail(customer:Personalloan)
    {
        val message= SimpleMailMessage()
        message.setTo(customer.email)
        message.setText("You have applied for Personal Loan in DigiLend Platform -- \n Here are the details of your application: \n  Name: ${customer.fullName}\n Contact: ${customer.phNo}\n Email: ${customer.email}\n Loan Amount: ${customer.loanAmount}");
        message.setSubject("Personal Loan Application has been Submitted-DigiLend");

        javaMailSender.send(message)
    }

    fun sendloanSactionedMessage(customer: Personalloan){
        logger.info("Loan Application submitted by customer ${customer}")
        kafkaTemplate.send("loan-sanctioned",customer);
        sendLoanSactionedEmail(customer)
    }

}