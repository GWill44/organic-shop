package store.organic.organicrestapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "user_ordered_products")
public class OrderProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    Long order_id;
    Long product_id;
    Long quantity;

    public OrderProduct(Long orderId, Long productId, Long quantity){
        this.order_id = orderId;
        this.product_id = productId;
        this.quantity = quantity;
    }
    public OrderProduct(){}

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrderId() {
        return order_id;
    }
    public void setOrderId(Long order_id) {
        this.order_id = order_id;
    }

    public Long getProductId() {
        return product_id;
    }
    public void setProductId(Long product_id) {
        this.product_id = product_id;
    }

    public Long getQuantity() {
        return quantity;
    }
    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
