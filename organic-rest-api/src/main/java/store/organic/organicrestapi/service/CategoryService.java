package store.organic.organicrestapi.service;

import org.springframework.stereotype.Component;
import store.organic.organicrestapi.model.Category;
import store.organic.organicrestapi.model.request.CategoryCreationRequest;

import java.util.List;

@Component
public interface CategoryService {

    List<Category> getAll();
    void createCategory(CategoryCreationRequest categoryCreationRequest);
}
