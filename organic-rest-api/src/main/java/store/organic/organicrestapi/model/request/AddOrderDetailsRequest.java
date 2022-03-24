package store.organic.organicrestapi.model.request;

import java.util.Date;

public class AddOrderDetailsRequest {

    private Long user;
    private Date date;
    private String firstName;
    private String lastName;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String postCode;

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

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddressLine1() {
        return addressLine1;
    }
    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }
    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }

    public String getPostCode() {
        return postCode;
    }
    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

}
