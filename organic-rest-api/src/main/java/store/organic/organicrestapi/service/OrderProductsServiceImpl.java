package store.organic.organicrestapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import store.organic.organicrestapi.model.OrderItem;
import store.organic.organicrestapi.model.OrderProduct;
import store.organic.organicrestapi.repository.OrderProductsRepository;

import java.util.List;

@Service
public class OrderProductsServiceImpl implements OrderProductsService{

    @Autowired
    private OrderProductsRepository orderProductsRepository;

    public void addProducts(Long orderId, List<OrderItem> orderProducts){
        for (OrderItem orderItem : orderProducts) {
            orderProductsRepository.save(
                    new OrderProduct(
                            orderId,
                            orderItem.getId(),
                            orderItem.getQuantity()
                    )
            );
        }
    }
}
