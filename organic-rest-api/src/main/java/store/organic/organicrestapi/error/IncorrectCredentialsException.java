package store.organic.organicrestapi.error;

public class IncorrectCredentialsException extends Exception {

    public IncorrectCredentialsException() {
        super("Incorrect username or password.");
    }
}
