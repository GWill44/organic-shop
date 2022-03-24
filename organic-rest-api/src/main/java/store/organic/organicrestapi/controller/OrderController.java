package store.organic.organicrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import store.organic.organicrestapi.model.request.AddOrderDetailsRequest;
import store.organic.organicrestapi.model.request.AddOrderProductsRequest;
import store.organic.organicrestapi.service.OrderDetailsService;
import store.organic.organicrestapi.service.OrderProductsService;


@RestController
@RequestMapping(value = "/api/order")
public class OrderController {

    @Autowired
    private OrderDetailsService orderDetailsService;

    @Autowired
    private OrderProductsService orderProductsService;

    @PostMapping("/addDetails")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> addDetails(@RequestBody AddOrderDetailsRequest addOrderDetailsRequest) {
        Integer orderHash = orderDetailsService.addDetails(addOrderDetailsRequest);
        return new ResponseEntity<>(orderHash, HttpStatus.OK);
    }

    @PostMapping("/addProducts")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> addProducts(@RequestBody AddOrderProductsRequest addOrderProductsRequest) {
        Long orderId = orderDetailsService.getOrderId(addOrderProductsRequest.getHash());
        System.out.println(orderId);
        orderProductsService.addProducts(orderId, addOrderProductsRequest.getOrderProducts());
        return ResponseEntity.ok().build();
    }
}
