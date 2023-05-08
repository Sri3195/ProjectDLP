package com.axis.personalloanapi.kafka

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/v1")
class EmailController(
    private val emailSender: EmailSender
)
{

    @PostMapping("/email")
    fun sendEmail(@RequestBody email: Email):Mono<Void>{
        return emailSender.sendEmail(email)
    }
}