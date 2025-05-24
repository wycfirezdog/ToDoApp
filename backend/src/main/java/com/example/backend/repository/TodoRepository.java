package com.example.backend.repository;

import com.example.backend.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    // This interface will automatically provide CRUD operations for the Todo entity
    // No need to implement any methods here, Spring Data JPA will handle it
}
