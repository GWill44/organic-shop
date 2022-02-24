package store.organic.organicrestapi.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import store.organic.organicrestapi.model.Order;
import store.organic.organicrestapi.model.request.OrderCreationRequest;
import store.organic.organicrestapi.service.OrderService;

import java.util.List;

@RestController
@RequestMapping(value = "/api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Order>> getOrders() {
        List <Order> orderList = orderService.getAll();
        return new ResponseEntity<>(orderList, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> createOrder(@RequestBody OrderCreationRequest orderCreationRequest) {
        orderService.createOrder(orderCreationRequest);
        return ResponseEntity.ok().build();
    }
}