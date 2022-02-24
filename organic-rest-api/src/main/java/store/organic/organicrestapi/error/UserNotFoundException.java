package store.organic.organicrestapi.error;

public class UserNotFoundException extends Exception {

    public UserNotFoundException(String userId) {
        super("User '" + userId + "' was not found.");
    }
}
