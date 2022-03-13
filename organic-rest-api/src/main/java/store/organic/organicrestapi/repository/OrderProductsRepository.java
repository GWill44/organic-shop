package store.organic.organicrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import store.organic.organicrestapi.model.OrderProduct;


@Repository
public interface OrderProductsRepository extends JpaRepository<OrderProduct, Long> {
}
