package store.organic.organicrestapi.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import store.organic.organicrestapi.error.IncorrectCredentialsException;
import store.organic.organicrestapi.model.User;
import store.organic.organicrestapi.model.request.UserLoginRequest;
import store.organic.organicrestapi.model.request.UserRegistrationRequest;
import store.organic.organicrestapi.service.JWTService;
import store.organic.organicrestapi.service.UserService;

import java.util.List;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JWTService jwtService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody UserRegistrationRequest userRegistrationRequest) {
        userService.createUser(userRegistrationRequest);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserLoginRequest userLoginRequest) throws IncorrectCredentialsException {
        boolean correctCredentials = userService.checkCredentials(userLoginRequest);
        HttpHeaders headers = new HttpHeaders();
        if(correctCredentials){
            User user = userService.getUserByUsername(userLoginRequest.getUsername());
            String token = jwtService.generateToken(user);
            headers.add("Token", token);
            return new ResponseEntity<>(headers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
    }
}
