package store.organic.organicrestapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.organic.organicrestapi.model.OrderItem;
import store.organic.organicrestapi.model.OrderProduct;
import store.organic.organicrestapi.model.request.AddOrderProductsRequest;
import store.organic.organicrestapi.repository.OrderProductsRepository;

@Service
public class OrderProductsServiceImpl implements OrderProductsService{

    @Autowired
    private OrderProductsRepository orderProductsRepository;

    public void addProducts(AddOrderProductsRequest addOrderProductsRequest){
        for (OrderItem orderItem : addOrderProductsRequest.getOrderProducts()) {
            orderProductsRepository.save(
                    new OrderProduct(
                            addOrderProductsRequest.getOrderId(),
                            orderItem.getId(),
                            orderItem.getQuantity()
                    )
            );
        }
    }
}
