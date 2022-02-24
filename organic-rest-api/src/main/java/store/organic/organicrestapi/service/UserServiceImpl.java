package store.organic.organicrestapi.service;

import store.organic.organicrestapi.model.request.UserLoginRequest;
import store.organic.organicrestapi.model.request.UserRegistrationRequest;
import store.organic.organicrestapi.repository.UserRepository;
import store.organic.organicrestapi.error.IncorrectCredentialsException;
import store.organic.organicrestapi.error.UserNotFoundException;
import store.organic.organicrestapi.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements  UserService {

    @Autowired
    private UserRepository userRepository;

    public void createUser(UserRegistrationRequest userRegistrationRequest) {
        User user = new User();
        Optional<User> byUsername = userRepository.findByUsername(userRegistrationRequest.getUsername());
        if (byUsername.isPresent()) {
            throw new RuntimeException("User already registered. Please use different username.");
        }
        user.setUsername(userRegistrationRequest.getUsername());
        user.setEmail(userRegistrationRequest.getEmail());
        user.setPassword(userRegistrationRequest.getPassword());
        userRepository.save(user);
    }

    public boolean checkCredentials(UserLoginRequest userLoginRequest) throws IncorrectCredentialsException {
        boolean credentialsMatch = false;
        Optional<User> userExists = userRepository.findByUsername(userLoginRequest.getUsername());
        if (userExists.isPresent() &&
                (getUserByUsername(userLoginRequest.getUsername()).getPassword()
                            .equals(userLoginRequest.getPassword()))) {
                credentialsMatch = true;
        }
        return credentialsMatch;
    }

    public User getUserByUsername(String username) throws IncorrectCredentialsException {
        return userRepository.findByUsername(username).orElseThrow(() -> new IncorrectCredentialsException());
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByID(Integer userId) throws UserNotFoundException {
        return userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException(userId.toString()));
    }

}
