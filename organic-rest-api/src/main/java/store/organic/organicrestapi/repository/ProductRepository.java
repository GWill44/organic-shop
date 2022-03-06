package store.organic.organicrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import store.organic.organicrestapi.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> { }
