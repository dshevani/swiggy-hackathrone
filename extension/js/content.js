urls = window.location.href.split("/")
rest_name = urls[urls.length -1]

chrome.runtime.sendMessage({type: 'get_missing_menus', rest_name: rest_name}, function(response) {
	console.log("Blah...");
});

chrome.runtime.sendMessage({type: 'get_price', rest_name: rest_name}, function(response) {
	console.log("Blah2...");
});

delay(2000);
chrome.runtime.sendMessage({type: 'improve_taste', rest_name: rest_name}, function(response) {
	console.log("Blah3...");
});

chrome.runtime.onMessage.addListener(
 function(request, sender) {

 	if (request.type == "get_missing_menus") {
	  	items = request.message.items;
	  	string = ""
	  	for (var i = items.length - 1; i >= 0; i--) {
	  		string += "<tr> \
					<td>" + items[i].name+"</td> \
					<td><span class=\"icon-swgy-rupee item-price\"> </span>" + items[i].price + "</td> \
				</tr>";
	  	}
	  	content = "\
		<div >\
			<h1 style=\"text-align: center;\">Menus recomended</h1>\
			<table class=\"table\"> \
				<thead> \
					<tr> \
						<th>Item Name</th> \
						<th>Cost</th> \
					</tr> \
				</thead> \
				<tbody> " + string + "</tbody> \
			</table>\
		</div>";
				
		$( content ).insertBefore( ".restaurant-items-wrapper" );
	} else if (request.type == "get_price") {
		item_prices = request.message;
		final_map = {}
		for (var i = item_prices.length - 1; i >= 0; i--) {
			final_map[item_prices[i].itemName] = item_prices[i].recommendedPrice
		}
		update_cost(final_map);
	} else if (request.type == "improve_taste") {
		items = request.message;
		final_map = {};
		for (var i = items.length - 1; i >= 0; i--) {
			final_map[items[i]] = 1;
		}
		taste_increase(final_map);
	}
  });


function update_cost(price_map) {
	$(".food-item").each(function (index) {
		var item_name = $(this).find("h5").text().trim();
		if (price_map[item_name] != undefined) {
			console.log($(this).find(".item-price").html());
			var price = $(this).find(".item-price").text().trim();
			var new_price = price_map[item_name];
			$(this).find(".item-price:eq(1)").html(price + "<br /> <span style=\"color: red\">Recommended Price:" + new_price + "<span>")
		}
	})
}

function taste_increase(items) {
	console.log("get taste ");
	console.log(items);
	$(".food-item").each(function (index) {
		var item_name = $(this).find("h5").text().trim();
		if (items[item_name] != undefined) {
			var price = $(this).find(".item-price").text().trim();
			$(this).find(".item-price:eq(1)").html(price + "<br /> <button type=\"button\" class=\"btn btn-danger btn-xs\">Improve Taste</button>")
		}
	})
}

function delay(ms) {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while(ms_passed < ms) {
        var d = new Date();  // Possible memory leak?
        var ticks = d.getTime();
        ms_passed = ticks - cur_ticks;
        // d = null;  // Prevent memory leak?
    }
}

 // <button type=\"button\" class=\"btn btn-danger btn-xs\">Taste</button>