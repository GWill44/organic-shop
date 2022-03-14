package store.organic.organicrestapi.service;

import org.springframework.stereotype.Component;

import store.organic.organicrestapi.model.request.AddOrderDetailsRequest;

import java.sql.Date;

@Component
public interface OrderDetailsService {
    void addDetails(AddOrderDetailsRequest addOrderDetailsRequest);
    Long getOrderId(Date date);
}
