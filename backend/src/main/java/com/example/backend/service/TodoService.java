package com.example.backend.service;

import com.example.backend.model.Todo;
import jakarta.persistence.Entity;

import java.util.List;
public interface TodoService {
    // Define the methods for the TodoService interface
    List<Todo> getAllTodos();
    Todo getTodoById(Long id);
    Todo createTodo(Todo todo);
    Todo updateTodo(Long id, Todo todo);
    void deleteTodo(Long id);
}
