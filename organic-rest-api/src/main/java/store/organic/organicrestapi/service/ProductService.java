package store.organic.organicrestapi.service;

import org.springframework.stereotype.Component;
import store.organic.organicrestapi.model.Product;
import store.organic.organicrestapi.model.request.ProductCreationRequest;
import store.organic.organicrestapi.model.request.ProductUpdateRequest;

import java.util.List;
import java.util.Optional;

@Component
public interface ProductService {
    List<Product> getAll();
    Optional<Product> getProduct(Long id);
    void createProduct(ProductCreationRequest productCreationRequest);
    void updateProduct(ProductUpdateRequest productUpdateRequest);
    void deleteProduct(Long id);
}
