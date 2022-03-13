package store.organic.organicrestapi.model.request;

import store.organic.organicrestapi.model.OrderItem;

import java.util.List;

public class AddOrderProductsRequest {

    Long orderId;
    List<OrderItem> orderProducts;

    public Long getOrderId() {
        return orderId;
    }
    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public List<OrderItem> getOrderProducts() {
        return orderProducts;
    }
    public void setOrderProducts(List<OrderItem> orderProducts) {
        this.orderProducts = orderProducts;
    }
}
