package store.organic.organicrestapi.service;

import org.springframework.stereotype.Component;

import store.organic.organicrestapi.model.request.AddOrderDetailsRequest;

@Component
public interface OrderDetailsService {
    Integer addDetails(AddOrderDetailsRequest addOrderDetailsRequest);
    Long getOrderId(Integer hash);
}
