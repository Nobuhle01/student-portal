package com.example.portal.controller;

import com.example.portal.model.Payment;
import com.example.portal.repository.PaymentRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    private final PaymentRepository repo;

    public PaymentController(PaymentRepository repo) {
        this.repo = repo;
    }

    // 💳 MAKE PAYMENT
    @PostMapping
    public Payment makePayment(@RequestBody Payment payment) {
        payment.setStatus("SUCCESS"); // mock external API success
        payment.setPaymentDate(LocalDateTime.now());
        return repo.save(payment);
    }

    // 📄 VIEW ALL PAYMENTS
    @GetMapping
    public List<Payment> getPayments() {
        return repo.findAll();
    }
}