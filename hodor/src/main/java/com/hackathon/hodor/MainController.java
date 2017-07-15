package com.hackathon.hodor;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.*;


@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "*", maxAge = 3600)
public class MainController {

	private static Connection sqlConnection;
	
	public MainController() {
		try {
			sqlConnection = DriverManager.getConnection("jdbc:mysql://localhost:3306/swiggy_hackathon?user=root&password=");
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
    @RequestMapping("/")
    String home() {
        PreparedStatement ps = null;
        ResultSet rs = null;

        try{
            ps = sqlConnection.prepareStatement("select * from area");
            rs = ps.executeQuery();
            while(rs.next()){
                System.out.println(rs.getString("name"));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }

        return "Hello World!";
    }

    @RequestMapping(value="/missing_item", method=RequestMethod.GET)
    public @ResponseBody Object getMissing(@RequestParam("name") String name) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        int area=0;
        String cuisine="";
        int restId=0;
        try{
            ps = sqlConnection.prepareStatement("select * from restaurants where name=\"" + name + "\"");
            rs = ps.executeQuery();
            while(rs.next()){
                area = rs.getInt("area_id");
                cuisine = rs.getString("cuisine");
                restId=rs.getInt("id");
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        if(area==0)
            return null;
        List<Item> items = new ArrayList<>();
        try{
            String sqlQuery = "select sum(quantity),item_price,m.`item_name`, r.`cuisine`,r.id from order_items o,restaurant_menu m,restaurants r " +
                    "where o.`item_id`=m.`id` and m.`restaurant_id`=r.`id` and item_price > 30 and r.id!="+ restId +" and r.`area_id`="+area+" and r.`cuisine` like \"" +cuisine +
                    "\" group by item_id order by sum(quantity) desc limit 5;";
            ps = sqlConnection.prepareStatement(sqlQuery);
            rs = ps.executeQuery();
            while(rs.next()){
                Item item = new Item(Math.round(rs.getFloat("item_price")),rs.getString("item_name"));
                items.add(item);
            }
        }catch(SQLException e){
            e.printStackTrace();
        }

        List<String> existingItems = new ArrayList<>();
        try{
            ps = sqlConnection.prepareStatement("select * from restaurant_menu where restaurant_id=" + restId);
            rs = ps.executeQuery();
            while(rs.next()){
                existingItems.add(rs.getString("item_name"));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }


        MissingItem missingItem = new MissingItem();
        List<Item> missingItems = new ArrayList<>();
        //remove duplicates
        Set<String> itemNameSet = new HashSet<>();
        for (Iterator<Item> iterator = items.iterator(); iterator.hasNext(); ) {
            Item item = iterator.next();
            if(itemNameSet.contains(item.getName())){
                iterator.remove();
            }else {
                itemNameSet.add(item.getName());
            }
        }

        for(Item item:items) {
            boolean found=false;
            for(String itemName :existingItems) {
                if(itemName.equals(item.getName())){
                    found=true;
                }
            }
            if(!found) {
                missingItems.add(item);
            }
        }
        missingItem.setItems(missingItems);
        return missingItem;
    }


}
