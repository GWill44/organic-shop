package store.organic.organicrestapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.organic.organicrestapi.model.Product;
import store.organic.organicrestapi.model.request.ProductCreationRequest;
import store.organic.organicrestapi.model.request.ProductUpdateRequest;
import store.organic.organicrestapi.repository.ProductRepository;

import java.util.List;
import java.util.Optional;


@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAll() {
        return productRepository.findAll();
    }
    public Optional<Product> getProduct(Long id) {
        return productRepository.findById(id);
    }
    public void createProduct(ProductCreationRequest productCreationRequest) {
        productRepository.save(new Product(
                productCreationRequest.getTitle(),
                productCreationRequest.getPrice(),
                productCreationRequest.getCategory(),
                productCreationRequest.getImageUrl()));
    }
    public void updateProduct(ProductUpdateRequest productUpdateRequest) {
        if (productRepository.findById(productUpdateRequest.getId()).isPresent()) {
            Product existingProduct = productRepository.findById(productUpdateRequest.getId()).get();

            existingProduct.setTitle(productUpdateRequest.getTitle());
            existingProduct.setPrice(productUpdateRequest.getPrice());
            existingProduct.setCategory(productUpdateRequest.getCategory());
            existingProduct.setUrl(productUpdateRequest.getImageUrl());

            productRepository.save(existingProduct);
        }
    }
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
