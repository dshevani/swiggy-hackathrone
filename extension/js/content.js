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
		<tbody> \
			<tr> \
				<td>Panner Biryani</td> \
				<td><span class=\"icon-swgy-rupee item-price\"> </span>100</td> \
			</tr> \
			<tr> \
				<td>Panner Biryani</td> \
				<td><span class=\"icon-swgy-rupee item-price\"> </span> 100</td> \
			</tr> \
			<tr> \
				<td>Panner Biryani</td> \
				<td><span class=\"icon-swgy-rupee item-price\"> </span> 100</td> \
			</tr> \
			<tr> \
				<td>Panner Biryani</td> \
				<td><span class=\"icon-swgy-rupee item-price\"> </span> 100</td> \
			</tr> \
		</tbody> \
	</table>\
</div>"

$( content ).insertBefore( ".restaurant-items-wrapper" );

$(".food-item").each(function (index) {
	console.log($(this).find("h5").text().trim());
	var price = $(this).find(".item-price").text().trim();
	console.log(price + "(<span style=\"color: red\">200<span>)");
	console.log($(this).find(".item-price"));
	$(this).find(".item-price:eq(1)").html(price + "&nbsp; <span style=\"color: red\">200<span> <button type=\"button\" class=\"btn btn-danger btn-xs\">Taste</button>")
})