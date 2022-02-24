package store.organic.organicrestapi.service;

import store.organic.organicrestapi.model.Order;
import store.organic.organicrestapi.model.request.OrderCreationRequest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface OrderService {
    List<Order> getAll();
    void createOrder(OrderCreationRequest orderCreationRequest);
}
