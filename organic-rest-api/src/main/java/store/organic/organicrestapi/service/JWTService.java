package store.organic.organicrestapi.service;

import store.organic.organicrestapi.model.User;
import store.organic.organicrestapi.model.UserPrincipal;

import org.springframework.stereotype.Component;

@Component
public interface JWTService {

    String generateToken(User user);

    UserPrincipal parseToken(String token);
}
