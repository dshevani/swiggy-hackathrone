package com.hackathon.hodor.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Created by vikas.yaligar on 15/07/17.
 */
public class JsonUtil {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    public static String serializeJson(Object object) throws JsonProcessingException {
        ObjectMapper objectMapper = ObjectMapperProvider.INSTANCE.get();
        //For UTs
        if(null == objectMapper){
            objectMapper = OBJECT_MAPPER;
        }
        return objectMapper.writeValueAsString(object);
    }
}
