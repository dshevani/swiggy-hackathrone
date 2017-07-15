package com.hackathon.hodor;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class RecommendationController {

	private static Connection sqlConnection;

	public RecommendationController() {
		try {
			sqlConnection = DriverManager.getConnection("jdbc:mysql://localhost:3306/swiggy?user=root&password=");
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	@RequestMapping("/recommendations/")
	String home() {
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			ps = sqlConnection.prepareStatement("call GET_AREAS()");
			rs = ps.executeQuery();
			while(rs.next()){
				System.out.println(rs.getString("name"));
			}
		} catch(SQLException e){
			e.printStackTrace();
		}

		return "Hello World!";
	}

	@RequestMapping("/recommendations/{restaurant_id}")
	public List<RecommendationResult> getRecommendations(@PathVariable("restaurant_id") int restaurantId) {
		List<RecommendationResult> results = new ArrayList<RecommendationResult>();
		PreparedStatement ps = null;
		ResultSet rs = null;
		Map<String, Double> restaurantItems = null;
		try {
			ps = sqlConnection.prepareStatement("call GET_ITEMS_FOR(" + restaurantId + ")");
			rs = ps.executeQuery();
			restaurantItems = new HashMap<String, Double>();
			while(rs.next()){
				restaurantItems.put(rs.getString("item_name"), rs.getDouble("item_price"));
			}
			double max = 0, min = 0, avg = 0;
			for (Map.Entry<String, Double> entry : restaurantItems.entrySet()) {
				String itemName = entry.getKey();
				Double itemPrice = entry.getValue();
				ps = sqlConnection.prepareStatement("call GET_RECOMMENDATION_FOR(" + restaurantId + ",\"" + itemName +"\")");
				rs = ps.executeQuery();

				while(rs.next()){
					max = rs.getDouble("max");
					min = rs.getDouble("max");
					avg = rs.getDouble("avg");
					break;
				}
				if (avg > 0 && itemPrice > avg) {
					results.add(new RecommendationResult(itemName, itemPrice, Math.ceil(avg)));
				}                
			}

		} catch(SQLException e){
			e.printStackTrace();
		}
		Collections.sort(results, new Comparator<RecommendationResult>() {
			public int compare(RecommendationResult s1,RecommendationResult s2) {
				return (int)(Math.abs((s2.itemPrice - s2.recommendedPrice)) - Math.abs((s1.itemPrice - s1.recommendedPrice)));
			}
		});
		return results;
	}


	class RecommendationResult {
		String itemName;
		double itemPrice;
		double recommendedPrice;
		public RecommendationResult(String name, double itemPrice, double price) {
			this.itemName = name; this.itemPrice = itemPrice; this.recommendedPrice = price;
		}
		public String getItemName() {
			return itemName;
		}
		public void setItemName(String itemName) {
			this.itemName = itemName;
		}
		public double getRecommendedPrice() {
			return recommendedPrice;
		}
		public void setRecommendedPrice(double recommendedPrice) {
			this.recommendedPrice = recommendedPrice;
		}
		public double getItemPrice() {
			return itemPrice;
		}
		public void setItemPrice(double itemPrice) {
			this.itemPrice = itemPrice;
		}
	}

	

}
