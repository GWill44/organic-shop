package store.organic.organicrestapi.service;

import store.organic.organicrestapi.model.OrderDetails;
import store.organic.organicrestapi.model.request.AddOrderDetailsRequest;
import store.organic.organicrestapi.repository.OrderDetailsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;

@Service
public class OrderDetailsServiceImpl implements OrderDetailsService {

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    public void addDetails(AddOrderDetailsRequest addOrderDetailsRequest) {
        orderDetailsRepository.save(
                new OrderDetails(
                        addOrderDetailsRequest.getUser(),
                        addOrderDetailsRequest.getDate(),
                        addOrderDetailsRequest.getFirstName(),
                        addOrderDetailsRequest.getLastName(),
                        addOrderDetailsRequest.getAddressLine1(),
                        addOrderDetailsRequest.getAddressLine2(),
                        addOrderDetailsRequest.getCity(),
                        addOrderDetailsRequest.getPostCode()
                )
        );
    }
    public Long getOrderId(Date date){
        return orderDetailsRepository.findByDate(date).get().getOrder_id();
    }
}
