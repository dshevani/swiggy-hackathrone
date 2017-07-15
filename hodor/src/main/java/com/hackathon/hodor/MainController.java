package com.hackathon.hodor;

import com.mysql.jdbc.Driver;
import org.springframework.boot.autoconfigure.*;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.sql.*;


@RestController
@EnableAutoConfiguration
public class MainController {

    @RequestMapping("/")
    String home() {
        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try{
             con = DriverManager.getConnection("jdbc:mysql://localhost:3306/swiggy_hackathon?user=root&password=");
            ps = con.prepareStatement("select * from area");
            rs = ps.executeQuery();
            while(rs.next()){
                System.out.println(rs.getString("name"));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }

        return "Hello World!";
    }

}
