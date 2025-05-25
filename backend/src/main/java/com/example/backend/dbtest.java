package com.example.backend;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class dbtest {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/todo_db";
        String username = "postgres";
        String password = "sharath@123";

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            if (connection != null) {
                System.out.println("Connected to the database successfully!");
            } else {
                System.out.println("Failed to connect to the database.");
            }
        } catch (SQLException e) {
            System.err.println("Error while connecting to the database: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
