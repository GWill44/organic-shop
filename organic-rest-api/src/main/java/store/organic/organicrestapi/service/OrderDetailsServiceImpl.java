package store.organic.organicrestapi.service;

import store.organic.organicrestapi.model.OrderDetails;
import store.organic.organicrestapi.model.request.AddOrderDetailsRequest;
import store.organic.organicrestapi.repository.OrderDetailsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailsServiceImpl implements OrderDetailsService {

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    public List<OrderDetails> getAll() {
        return orderDetailsRepository.findAll();
    }

    public Long addDetails(AddOrderDetailsRequest addOrderDetailsRequest) {
        orderDetailsRepository.save(
                new OrderDetails(
                        addOrderDetailsRequest.getUser_id(),
                        addOrderDetailsRequest.getDate(),
                        addOrderDetailsRequest.getFirst_name(),
                        addOrderDetailsRequest.getLast_name(),
                        addOrderDetailsRequest.getAddress_line_1(),
                        addOrderDetailsRequest.getAddress_line_2(),
                        addOrderDetailsRequest.getCity(),
                        addOrderDetailsRequest.getPost_code()
                )
        );
        Long orderId = orderDetailsRepository.findByUser_id(addOrderDetailsRequest.getUser_id()).get().getOrder_id();
        return orderId;
    }
}
