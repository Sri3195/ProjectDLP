package com.axis.personalloanapi.kafka

import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class EmailProcessorService(private val mailSender: JavaMailSender) {

    fun processEmail(email:Email):Mono<Void>{
        return Mono.fromRunnable {
            val message= SimpleMailMessage()
            message.setTo(email.to)
            message.setSubject(email.subject)
            message.setText(email.body)
            mailSender.send(message)
            //println("email sent")
        }
    }
}