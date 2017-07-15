package com.hackathon.hodor;

import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;


@RestController
@EnableAutoConfiguration
public class MainController {

	private static Connection sqlConnection;
	
	public MainController() {
		try {
			sqlConnection = DriverManager.getConnection("jdbc:mysql://localhost:3306/swiggy?user=root&password=");
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
        
        MissingItem missingItem = new MissingItem();
        List<Item> items = new ArrayList<>();
        Item item = new Item(130,"Kshatriya Kebab");
        items.add(item);
        missingItem.setItems(items);
        return missingItem;
    }


}
