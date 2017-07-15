package com.hackathon.hodor.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.hackathon.hodor.utils.JsonUtil;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vikas.yaligar on 15/07/17.
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/restaurant")
@CrossOrigin(origins = "*", maxAge = 3600)
public class RestaurantController {

    private static Connection sqlConnection;

    public RestaurantController() {
        try {
            sqlConnection = DriverManager.getConnection("jdbc:mysql://localhost:3306/swiggy_hackathon?user=root&password=");
        } catch (Exception e) {
            // TODO: handle exception
        }
    }

    @RequestMapping(value = "/{slug}/items", method = RequestMethod.GET)
    public List<String> getItemDetails(@PathVariable("slug") String restName) throws JsonProcessingException {

        PreparedStatement ps = null;
        ResultSet rs = null;
        List<String> items = new ArrayList<>();

        try{
            ps = sqlConnection.prepareStatement("select rm.item_name as name from restaurants r " +
                    "inner join restaurant_menu rm on (r.id = rm.restaurant_id) where r.name = \"" + restName + "\" AND rm.`item_rating` <  r.avg_rating;");
            rs = ps.executeQuery();
            while(rs.next()){
                items.add(rs.getString("name"));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }

        return items;
    }

}
