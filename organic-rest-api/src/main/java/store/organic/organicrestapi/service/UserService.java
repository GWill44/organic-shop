package store.organic.organicrestapi.service;

import store.organic.organicrestapi.model.User;
import store.organic.organicrestapi.model.request.UserLoginRequest;
import store.organic.organicrestapi.model.request.UserRegistrationRequest;
import store.organic.organicrestapi.error.UserNotFoundException;
import store.organic.organicrestapi.error.IncorrectCredentialsException;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {

    List<User> getAllUsers();

    User getUserByID(Integer userId) throws UserNotFoundException;

    User getUserByUsername(String username) throws IncorrectCredentialsException;

    boolean checkCredentials(UserLoginRequest userLoginRequest) throws IncorrectCredentialsException;

    void createUser(UserRegistrationRequest userRegistrationRequest);
}
