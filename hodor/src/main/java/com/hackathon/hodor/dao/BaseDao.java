package com.hackathon.hodor.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by vikas.yaligar on 15/07/17.
 */
public class BaseDao {

    protected Connection getConnection() throws SQLException {
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/swiggy_hackathon?user=root&password=");
    }
}
