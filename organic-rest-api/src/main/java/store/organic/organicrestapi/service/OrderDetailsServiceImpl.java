package store.organic.organicrestapi.service;

import store.organic.organicrestapi.model.OrderDetails;
import store.organic.organicrestapi.model.request.AddOrderDetailsRequest;
import store.organic.organicrestapi.repository.OrderDetailsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailsServiceImpl implements OrderDetailsService {

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    public Integer addDetails(AddOrderDetailsRequest addOrderDetailsRequest) {
        Integer orderHash = addOrderDetailsRequest.hashCode();
        orderDetailsRepository.save(
                new OrderDetails(
                        addOrderDetailsRequest.getUser(),
                        addOrderDetailsRequest.getDate(),
                        addOrderDetailsRequest.getFirstName(),
                        addOrderDetailsRequest.getLastName(),
                        addOrderDetailsRequest.getAddressLine1(),
                        addOrderDetailsRequest.getAddressLine2(),
                        addOrderDetailsRequest.getCity(),
                        addOrderDetailsRequest.getPostCode(),
                        orderHash
                )
        );
        return orderHash;
    }
    public Long getOrderId(Integer hash){
        Long orderId = orderDetailsRepository.findByHash(hash).getOrder_id();
        System.out.println(orderId);
        return orderId;
    }
}
