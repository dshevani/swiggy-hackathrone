package com.hackathon.hodor.dao;

import com.hackathon.hodor.model.Item;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vikas.yaligar on 15/07/17.
 */
public class RestaurantsDao extends BaseDao {

    public List<Item> getItem(String restaurantName, String itemName) {
        List<Item> items = new ArrayList<>();
        try{
            Connection con = getConnection();
            PreparedStatement ps = con.prepareStatement("select r.name as restaurant_name, r.item_name as item_name, r.item_price as item_price from restaurants r inner join restaurant_menu rm where rm.item_name LIKE \"" + itemName + "\" AND r.name = \"" + restaurantName + "\"");;
            ResultSet rs = ps.executeQuery();
            while(rs.next()) {
                Item item = new Item(rs.getString("name"))
                        items.add(item);
                rs.getString("name");
                System.out.println(rs.getString("name"));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}
