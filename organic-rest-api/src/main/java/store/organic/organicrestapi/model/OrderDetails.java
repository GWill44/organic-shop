package store.organic.organicrestapi.model;

import javax.persistence.*;
import java.sql.Date;

@Entity(name = "user_order_details")
public class OrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long order_id;

    private Long user;
    private Date date;
    private String first_name;
    private String last_name;
    private String address_line_1;
    private String address_line_2;
    private String city;
    private String post_code;

    public OrderDetails(){}

    public OrderDetails(
            Long user, Date date, String first_name, String last_name,
            String address_line_1, String address_line_2, String city, String post_code){

        this.user = user;
        this.date = date;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address_line_1 = address_line_1;
        this.address_line_2 = address_line_2;
        this.city = city;
        this.post_code = post_code;
    }

    public Long getOrder_id() {
        return order_id;
    }
    public void setOrder_id(Long order_id) {this.order_id = order_id;
    }

    public Long getUser() {
        return user;
    }
    public void setUser(Long user) {this.user = user;
    }

    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }

    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getAddress_line_1() {
        return address_line_1;
    }
    public void setAddress_line_1(String address_line_1) {
        this.address_line_1 = address_line_1;
    }

    public String getAddress_line_2() {
        return address_line_2;
    }
    public void setAddress_line_2(String address_line_2) {
        this.address_line_2 = address_line_2;
    }

    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }

    public String getPost_code() {
        return post_code;
    }
    public void setPost_code(String post_code) {
        this.post_code = post_code;
    }

}
