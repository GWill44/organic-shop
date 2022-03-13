package store.organic.organicrestapi.service;

import org.springframework.stereotype.Component;
import store.organic.organicrestapi.model.request.AddOrderProductsRequest;

@Component
public interface OrderProductsService {
    void addProducts(AddOrderProductsRequest addOrderProductsRequest);
}
