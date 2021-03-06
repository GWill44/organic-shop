package store.organic.organicrestapi.repository;

import store.organic.organicrestapi.model.OrderDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {

    OrderDetails findByHash(Integer hash);
}
