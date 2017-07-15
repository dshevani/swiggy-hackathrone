package com.hackathon.hodor;

import com.mysql.jdbc.Driver;
import org.springframework.boot.autoconfigure.*;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;


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
