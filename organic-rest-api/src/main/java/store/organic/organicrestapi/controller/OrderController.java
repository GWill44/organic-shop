package store.organic.organicrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import store.organic.organicrestapi.model.request.AddOrderDetailsRequest;
import store.organic.organicrestapi.model.request.AddOrderProductsRequest;
import store.organic.organicrestapi.service.OrderDetailsService;
import store.organic.organicrestapi.service.OrderProductsService;

import java.sql.Date;



@RestController
@RequestMapping(value = "/api/order")
public class OrderController {

    @Autowired
    private OrderDetailsService orderDetailsService;

    @Autowired
    private OrderProductsService orderProductsService;

    @GetMapping("/orderId/{date}")
    @PreAuthorize("hasRole('Admin')")
    public ResponseEntity<Long> getOrderId(@PathVariable(value = "date") Date date){
        Long orderId = orderDetailsService.getOrderId(date);
        return new ResponseEntity<>(orderId, HttpStatus.OK);
    }

    @PostMapping("/addDetails")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> addDetails(@RequestBody AddOrderDetailsRequest addOrderDetailsRequest) {
        orderDetailsService.addDetails(addOrderDetailsRequest);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/addProducts")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> addProducts(@RequestBody AddOrderProductsRequest addOrderProductsRequest) {
        orderProductsService.addProducts(addOrderProductsRequest);
        return ResponseEntity.ok().build();
    }
}
