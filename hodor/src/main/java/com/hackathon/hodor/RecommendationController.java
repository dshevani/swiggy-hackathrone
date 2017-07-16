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
import org.springframework.web.bind.annotation.*;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "*", maxAge = 3600)
public class RecommendationController {

	private static Connection sqlConnection;

	public RecommendationController() {
		try {
			sqlConnection = DriverManager.getConnection("jdbc:mysql://localhost:3306/swiggy_hackathon?user=root&password=");
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

	@RequestMapping("/recommendations")
	public List<RecommendationResult> getRecommendations(@RequestParam("restaurant_name") String restaurantName) {
		List<RecommendationResult> results = new ArrayList<RecommendationResult>();
		PreparedStatement ps = null;
		ResultSet rs = null;
		Map<String, Double> restaurantItems = null;
		try {
			ps = sqlConnection.prepareStatement("call GET_ITEMS_FOR(\"" + restaurantName + "\")");
			rs = ps.executeQuery();
			restaurantItems = new HashMap<String, Double>();
			while(rs.next()){
				String itemName = rs.getString("item_name");
				Double itemPrice = rs.getDouble("item_price");
				int restaurantId = rs.getInt("id");
				ps = sqlConnection.prepareStatement("call GET_RECOMMENDATION_FOR(" + restaurantId + ",\"" + itemName +"\")");
				ResultSet res = ps.executeQuery();
				double max, min, avg = 0;

				while(res.next()) {
					max = res.getDouble("max");
					min = res.getDouble("max");
					avg = res.getDouble("avg");
					if (avg > 0 && itemPrice > avg) {
						results.add(new RecommendationResult(itemName, itemPrice, Math.ceil(avg)));
					}
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
