package store.organic.organicrestapi.service;

import store.organic.organicrestapi.model.Order;
import store.organic.organicrestapi.model.request.OrderCreationRequest;
import store.organic.organicrestapi.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAll() {
        return orderRepository.findAll();
    }
    public void createOrder(OrderCreationRequest orderCreationRequest) {
        orderRepository.save(new Order(
                orderCreationRequest.getItem(),
                orderCreationRequest.getQuantity()));
    }
}
