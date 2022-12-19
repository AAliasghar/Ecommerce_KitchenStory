package com.simplilearn.ecommerce.dao;

import com.simplilearn.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product,Long> {   // Entity type is product and primary key is long
    Page<Product> findByCategoryId (@RequestParam("id") Long id, Pageable pageable );
}
