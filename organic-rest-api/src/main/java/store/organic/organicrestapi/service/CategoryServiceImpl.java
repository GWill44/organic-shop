package store.organic.organicrestapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import store.organic.organicrestapi.model.Category;
import store.organic.organicrestapi.model.request.CategoryCreationRequest;
import store.organic.organicrestapi.repository.CategoryRepository;


import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAll() {
        return categoryRepository.findAll();
    }
    public void createCategory(CategoryCreationRequest categoryCreationRequest) {
        categoryRepository.save(new Category(categoryCreationRequest.getCategory()));
    }
}
