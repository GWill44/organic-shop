package store.organic.organicrestapi.model.request;

import store.organic.organicrestapi.model.OrderItem;

import java.util.List;

public class AddOrderProductsRequest {

    Integer hash;
    List<OrderItem> orderProducts;

    public Integer getHash() {
        return hash;
    }
    public void setHash(Integer hash) {
        this.hash = hash;
    }

    public List<OrderItem> getOrderProducts() {
        return orderProducts;
    }
    public void setOrderProducts(List<OrderItem> orderProducts) {
        this.orderProducts = orderProducts;
    }
}
