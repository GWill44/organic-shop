package store.organic.organicrestapi.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "user_order_products")
public class OrderProduct {

    @Id
    Long order_id;
    Long product_id;
    Long quantity;

    public OrderProduct(Long order_id, Long product_id, Long quantity){}

    public Long getOrder_id() {
        return order_id;
    }
    public void setOrder_id(Long order_id) {
        this.order_id = order_id;
    }

    public Long getProduct_id() {
        return product_id;
    }
    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public Long getQuantity() {
        return quantity;
    }
    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
