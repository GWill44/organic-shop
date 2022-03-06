package store.organic.organicrestapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import store.organic.organicrestapi.model.Category;
import store.organic.organicrestapi.model.request.CategoryCreationRequest;
import store.organic.organicrestapi.service.CategoryService;

import java.util.List;

@RestController
@RequestMapping(value = "/api/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/all")
    public ResponseEntity<List<Category>> getOrders() {
        List <Category> categoryList = categoryService.getAll();
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> createOrder(@RequestBody CategoryCreationRequest categoryCreationRequest) {
        categoryService.createCategory(categoryCreationRequest);
        return ResponseEntity.ok().build();
    }
}
