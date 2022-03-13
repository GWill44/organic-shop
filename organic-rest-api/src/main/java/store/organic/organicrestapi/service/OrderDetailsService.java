package store.organic.organicrestapi.service;

import store.organic.organicrestapi.model.OrderDetails;
import org.springframework.stereotype.Component;
import store.organic.organicrestapi.model.request.AddOrderDetailsRequest;

import java.util.List;

@Component
public interface OrderDetailsService {
    List<OrderDetails> getAll();
    Long addDetails(AddOrderDetailsRequest addOrderDetailsRequest);
}
