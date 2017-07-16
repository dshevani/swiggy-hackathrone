chrome.runtime.onMessage.addListener(function(message, sendResponse) {
	console.log("In background... !!!");
	console.log(message);
    if (message && message.type == 'get_missing_menus') {

    	$.ajax({
		  url: "http://172.16.120.190:8080/missing_item?name=" + message.rest_name,
		}).done(function(data) {
			chrome.tabs.getSelected(null, function(tab) {
			  console.log("Background script is sending a message to contentscript:'" + data +"'");
			  chrome.tabs.sendMessage(tab.id, {message: data, type: message.type});
			 });
		});
    } else if (message && message.type == 'get_price') {
    	$.ajax({
		  url: "http://172.16.120.190:8080/recommendations?restaurant_name=" + message.rest_name,
		}).done(function(data) {
			chrome.tabs.getSelected(null, function(tab) {
			  console.log("Background script is sending a message to contentscript:'" + data +"'");
			  chrome.tabs.sendMessage(tab.id, {message: data, type: message.type});
			 });
		});
    } else if (message && message.type == 'improve_taste') {
    	$.ajax({
		  url: "http://172.16.120.190:8080/restaurant/" + message.rest_name + "/items",
		}).done(function(data) {
			chrome.tabs.getSelected(null, function(tab) {
			  console.log("Background script is sending a message to contentscript:'" + data +"'");
			  chrome.tabs.sendMessage(tab.id, {message: data, type: message.type});
			 });
		});
    } else if (message && message.type == 'get_rank') {
    	$.ajax({
		  url: "http://172.16.120.190:8080/restaurant/" + message.rest_name + "/rank",
		}).done(function(data) {
			chrome.tabs.getSelected(null, function(tab) {
			  console.log("Background script is sending a message to contentscript:'" + data +"'");
			  chrome.tabs.sendMessage(tab.id, {message: data, type: message.type});
			 });
		});
    } else if (message && message.type == 'get_popularity') {
    	$.ajax({
    		url: "http://172.16.120.190:8080/get_popular?name=" + message.rest_name,
    	}).done(function(data) {
			chrome.tabs.getSelected(null, function(tab) {
			  console.log("Background script is sending a message to contentscript:'" + data +"'");
			  console.log(data);
			  chrome.tabs.sendMessage(tab.id, {message: data, type: message.type});
			 });
		});
    }
});