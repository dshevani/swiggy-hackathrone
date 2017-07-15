package com.hackathon.hodor.controller;

import com.hackathon.hodor.utils.JsonUtil;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by vikas.yaligar on 15/07/17.
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/restaurant")
public class RestaurantController {

    @RequestMapping(value = "/{slug}/item/{item_name}", method = RequestMethod.GET)
    public ResponseEntity<?> getItemDetails(@PathVariable("slug") String slug, @PathVariable("item_name") String itemName) {

        return ResponseEntity.ok(JsonUtil.serializeJson(facility));


    }

}
