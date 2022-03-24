package store.organic.organicrestapi.service;

import org.springframework.stereotype.Component;
import store.organic.organicrestapi.model.OrderItem;

import java.util.List;

@Component
public interface OrderProductsService {
    void addProducts(Long orderId, List<OrderItem> orderProducts);
}
