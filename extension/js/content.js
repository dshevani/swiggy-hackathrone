urls = window.location.href.split("/")
rest_name = urls[urls.length -1]

chrome.runtime.sendMessage({type: 'get_missing_menus', rest_name: rest_name}, function(response) {
	console.log("Blah...");
});

chrome.runtime.sendMessage({type: 'get_price', rest_name: rest_name}, function(response) {
	console.log("Blah2...");
});

chrome.runtime.sendMessage({type: 'get_rank', rest_name: rest_name}, function(response) {
	console.log("Blah3...");
});

window.onload = function () {
		var chart = new CanvasJS.Chart("chartContainer",
		{

			title:{
				text: "Orders Forecast",
				fontSize: 30
			},
                        animationEnabled: true,
			axisX:{

				gridColor: "Silver",
				tickColor: "silver",
				valueFormatString: "DD/MMM"

			},                        
                        toolTip:{
                          shared:true
                        },
			theme: "theme1",
			axisY: {
				gridColor: "Silver",
				tickColor: "silver"
			},
			legend:{
				verticalAlign: "center",
				horizontalAlign: "right"
			},
			data: [
			{        
				type: "line",
				showInLegend: true,
				lineThickness: 2,
				name: "Predicted orders",
				markerType: "square",
				color: "#F08080",
				dataPoints: [
				{x: new Date(2017, 4, 1,13), y: 1 },
{x: new Date(2017, 4, 1,14), y: 61 },
{x: new Date(2017, 4, 1,15), y: 68 },
{x: new Date(2017, 4, 1,16), y: 41 },
{x: new Date(2017, 4, 1,17), y: 48 },
{x: new Date(2017, 4, 1,18), y: 30 },
{x: new Date(2017, 4, 1,19), y: 2 },
{x: new Date(2017, 4, 1,20), y: 19 },
{x: new Date(2017, 4, 1,21), y: 25 },
{x: new Date(2017, 4, 1,22), y: 53 },
{x: new Date(2017, 4, 1,23), y: 61 },
{x: new Date(2017, 4, 2,0), y: 21 },
{x: new Date(2017, 4, 2,1), y: 13 },
{x: new Date(2017, 4, 2,13), y: 0 },
{x: new Date(2017, 4, 2,14), y: 68 },
{x: new Date(2017, 4, 2,15), y: 77 },
{x: new Date(2017, 4, 2,16), y: 55 },
{x: new Date(2017, 4, 2,17), y: 45 },
{x: new Date(2017, 4, 2,18), y: 17 },
{x: new Date(2017, 4, 2,19), y: 0 },
{x: new Date(2017, 4, 2,20), y: 4 },
{x: new Date(2017, 4, 2,21), y: 47 },
{x: new Date(2017, 4, 2,22), y: 86 },
{x: new Date(2017, 4, 2,23), y: 65 },
{x: new Date(2017, 4, 3,0), y: 49 },
{x: new Date(2017, 4, 3,1), y: 8 },
{x: new Date(2017, 4, 3,13), y: 0 },
{x: new Date(2017, 4, 3,14), y: 38 },
{x: new Date(2017, 4, 3,15), y: 43 },
{x: new Date(2017, 4, 3,16), y: 24 },
{x: new Date(2017, 4, 3,17), y: 17 },
{x: new Date(2017, 4, 3,18), y: 11 },
{x: new Date(2017, 4, 3,20), y: 0 },
{x: new Date(2017, 4, 3,21), y: 21 },
{x: new Date(2017, 4, 3,22), y: 37 },
{x: new Date(2017, 4, 3,23), y: 32 },
{x: new Date(2017, 4, 4,0), y: 13 },
{x: new Date(2017, 4, 4,13), y: 0 },
{x: new Date(2017, 4, 4,14), y: 46 },
{x: new Date(2017, 4, 4,15), y: 32 },
{x: new Date(2017, 4, 4,16), y: 12 },
{x: new Date(2017, 4, 4,17), y: 0 },
{x: new Date(2017, 4, 4,18), y: 16 },
{x: new Date(2017, 4, 4,19), y: 0 },
{x: new Date(2017, 4, 4,20), y: 1 },
{x: new Date(2017, 4, 4,21), y: 25 },
{x: new Date(2017, 4, 4,22), y: 50 },
{x: new Date(2017, 4, 4,23), y: 25 },
{x: new Date(2017, 4, 5,0), y: 33 },
{x: new Date(2017, 4, 5,13), y: 3 },
{x: new Date(2017, 4, 5,14), y: 55 },
{x: new Date(2017, 4, 5,15), y: 42 },
{x: new Date(2017, 4, 5,16), y: 28 },
{x: new Date(2017, 4, 5,17), y: 14 },
{x: new Date(2017, 4, 5,18), y: 0 },
{x: new Date(2017, 4, 5,19), y: 0 },
{x: new Date(2017, 4, 5,20), y: 16 },
{x: new Date(2017, 4, 5,21), y: 26 },
{x: new Date(2017, 4, 5,22), y: 53 },
{x: new Date(2017, 4, 5,23), y: 42 },
{x: new Date(2017, 4, 6,0), y: 4 },
{x: new Date(2017, 4, 6,14), y: 6 },
{x: new Date(2017, 4, 6,15), y: 38 },
{x: new Date(2017, 4, 6,16), y: 18 },
{x: new Date(2017, 4, 6,17), y: 18 },
{x: new Date(2017, 4, 6,18), y: 7 },
{x: new Date(2017, 4, 6,19), y: 21 },
{x: new Date(2017, 4, 6,20), y: 12 },
{x: new Date(2017, 4, 6,21), y: 26 },
{x: new Date(2017, 4, 6,22), y: 45 },
{x: new Date(2017, 4, 6,23), y: 13 },
{x: new Date(2017, 4, 7,0), y: 29 },
{x: new Date(2017, 4, 7,1), y: 6 },
{x: new Date(2017, 4, 7,13), y: 14 },
{x: new Date(2017, 4, 7,14), y: 31 },
{x: new Date(2017, 4, 7,15), y: 57 },
{x: new Date(2017, 4, 7,16), y: 12 },
{x: new Date(2017, 4, 7,17), y: 17 },
{x: new Date(2017, 4, 7,18), y: 25 },
{x: new Date(2017, 4, 7,19), y: 0 },
{x: new Date(2017, 4, 7,20), y: 16 },
{x: new Date(2017, 4, 7,21), y: 26 },
{x: new Date(2017, 4, 7,22), y: 51 },
{x: new Date(2017, 4, 7,23), y: 55 },
{x: new Date(2017, 4, 8,0), y: 23 },
{x: new Date(2017, 4, 8,1), y: 10 },
{x: new Date(2017, 4, 8,13), y: 0 },
{x: new Date(2017, 4, 8,14), y: 41 },
{x: new Date(2017, 4, 8,15), y: 48 },
{x: new Date(2017, 4, 8,16), y: 38 },
{x: new Date(2017, 4, 8,17), y: 33 },
{x: new Date(2017, 4, 8,18), y: 12 },
{x: new Date(2017, 4, 8,19), y: 9 },
{x: new Date(2017, 4, 8,20), y: 20 },
{x: new Date(2017, 4, 8,21), y: 15 },
{x: new Date(2017, 4, 8,22), y: 45 },
{x: new Date(2017, 4, 8,23), y: 40 },
{x: new Date(2017, 4, 9,0), y: 28 },
{x: new Date(2017, 4, 9,1), y: 19 },
{x: new Date(2017, 4, 9,13), y: 0 },
{x: new Date(2017, 4, 9,14), y: 74 },
{x: new Date(2017, 4, 9,15), y: 46 },
{x: new Date(2017, 4, 9,16), y: 32 },
{x: new Date(2017, 4, 9,17), y: 21 },
{x: new Date(2017, 4, 9,18), y: 0 },
{x: new Date(2017, 4, 9,19), y: 4 },
{x: new Date(2017, 4, 9,20), y: 10 },
{x: new Date(2017, 4, 9,21), y: 46 },
{x: new Date(2017, 4, 9,22), y: 55 },
{x: new Date(2017, 4, 9,23), y: 66 },
{x: new Date(2017, 4, 10,0), y: 45 },
{x: new Date(2017, 4, 10,1), y: 3 },
{x: new Date(2017, 4, 10,13), y: 10 },
{x: new Date(2017, 4, 10,14), y: 45 },
{x: new Date(2017, 4, 10,15), y: 45 },
{x: new Date(2017, 4, 10,16), y: 29 },
{x: new Date(2017, 4, 10,17), y: 26 },
{x: new Date(2017, 4, 10,20), y: 7 },
{x: new Date(2017, 4, 10,21), y: 9 },
{x: new Date(2017, 4, 10,22), y: 29 },
{x: new Date(2017, 4, 10,23), y: 33 },
{x: new Date(2017, 4, 11,0), y: 25 },
{x: new Date(2017, 4, 11,1), y: 7 },
{x: new Date(2017, 4, 11,13), y: 8 },
{x: new Date(2017, 4, 11,14), y: 49 },
{x: new Date(2017, 4, 11,15), y: 51 },
{x: new Date(2017, 4, 11,16), y: 27 },
{x: new Date(2017, 4, 11,17), y: 7 },
{x: new Date(2017, 4, 11,18), y: 0 },
{x: new Date(2017, 4, 11,19), y: 0 },
{x: new Date(2017, 4, 11,20), y: 15 },
{x: new Date(2017, 4, 11,21), y: 19 },
{x: new Date(2017, 4, 11,22), y: 38 },
{x: new Date(2017, 4, 11,23), y: 31 },
{x: new Date(2017, 4, 12,0), y: 49 },
{x: new Date(2017, 4, 12,1), y: 6 },
{x: new Date(2017, 4, 12,13), y: 0 },
{x: new Date(2017, 4, 12,14), y: 40 },
{x: new Date(2017, 4, 12,15), y: 48 },
{x: new Date(2017, 4, 12,16), y: 27 },
{x: new Date(2017, 4, 12,17), y: 21 },
{x: new Date(2017, 4, 12,18), y: 0 },
{x: new Date(2017, 4, 12,19), y: 0 },
{x: new Date(2017, 4, 12,20), y: 15 },
{x: new Date(2017, 4, 12,21), y: 15 },
{x: new Date(2017, 4, 12,22), y: 32 },
{x: new Date(2017, 4, 12,23), y: 41 },
{x: new Date(2017, 4, 13,0), y: 33 },
{x: new Date(2017, 4, 13,1), y: 12 },
{x: new Date(2017, 4, 13,14), y: 22 },
{x: new Date(2017, 4, 13,15), y: 53 },
{x: new Date(2017, 4, 13,16), y: 20 },
{x: new Date(2017, 4, 13,17), y: 22 },
{x: new Date(2017, 4, 13,18), y: 7 },
{x: new Date(2017, 4, 13,19), y: 9 },
{x: new Date(2017, 4, 13,20), y: 14 },
{x: new Date(2017, 4, 14,0), y: 0 },
{x: new Date(2017, 4, 14,1), y: 13 },
{x: new Date(2017, 4, 14,13), y: 17 },
{x: new Date(2017, 4, 14,14), y: 63 },
{x: new Date(2017, 4, 14,15), y: 76 },
{x: new Date(2017, 4, 14,16), y: 52 },
{x: new Date(2017, 4, 14,17), y: 47 },
{x: new Date(2017, 4, 14,18), y: 11 },
{x: new Date(2017, 4, 14,19), y: 21 },
{x: new Date(2017, 4, 14,20), y: 16 },
{x: new Date(2017, 4, 14,21), y: 52 },
{x: new Date(2017, 4, 14,22), y: 60 },
{x: new Date(2017, 4, 14,23), y: 63 },
{x: new Date(2017, 4, 15,0), y: 54 },
{x: new Date(2017, 4, 15,1), y: 15 },
{x: new Date(2017, 4, 15,13), y: 21 },
{x: new Date(2017, 4, 15,14), y: 45 },
{x: new Date(2017, 4, 15,15), y: 72 },
{x: new Date(2017, 4, 15,16), y: 66 },
{x: new Date(2017, 4, 15,17), y: 41 },
{x: new Date(2017, 4, 15,18), y: 27 },
{x: new Date(2017, 4, 15,19), y: 13 },
{x: new Date(2017, 4, 15,20), y: 9 },
{x: new Date(2017, 4, 15,21), y: 37 },
{x: new Date(2017, 4, 15,22), y: 41 },
{x: new Date(2017, 4, 15,23), y: 59 },
{x: new Date(2017, 4, 16,0), y: 35 },
{x: new Date(2017, 4, 16,1), y: 29 },
{x: new Date(2017, 4, 16,13), y: 19 },
{x: new Date(2017, 4, 16,14), y: 53 },
{x: new Date(2017, 4, 16,15), y: 63 },
{x: new Date(2017, 4, 16,16), y: 41 },
{x: new Date(2017, 4, 16,17), y: 43 },
{x: new Date(2017, 4, 16,18), y: 25 },
{x: new Date(2017, 4, 16,19), y: 15 },
{x: new Date(2017, 4, 16,20), y: 17 },
{x: new Date(2017, 4, 16,21), y: 47 },
{x: new Date(2017, 4, 16,22), y: 68 },
{x: new Date(2017, 4, 16,23), y: 94 },
{x: new Date(2017, 4, 17,0), y: 43 },
{x: new Date(2017, 4, 17,1), y: 15 },
{x: new Date(2017, 4, 17,13), y: 17 },
{x: new Date(2017, 4, 17,14), y: 51 },
{x: new Date(2017, 4, 17,15), y: 35 },
{x: new Date(2017, 4, 17,16), y: 32 },
{x: new Date(2017, 4, 17,17), y: 30 },
{x: new Date(2017, 4, 17,18), y: 14 },
{x: new Date(2017, 4, 17,19), y: 0 },
{x: new Date(2017, 4, 17,20), y: 8 },
{x: new Date(2017, 4, 17,21), y: 12 },
{x: new Date(2017, 4, 17,22), y: 32 },
{x: new Date(2017, 4, 17,23), y: 85 },
{x: new Date(2017, 4, 18,0), y: 21 },
{x: new Date(2017, 4, 18,1), y: 7 },
{x: new Date(2017, 4, 18,13), y: 10 },
{x: new Date(2017, 4, 18,14), y: 42 },
{x: new Date(2017, 4, 18,15), y: 38 },
{x: new Date(2017, 4, 18,16), y: 15 },
{x: new Date(2017, 4, 18,17), y: 7 },
{x: new Date(2017, 4, 18,18), y: 9 },
{x: new Date(2017, 4, 18,20), y: 6 },
{x: new Date(2017, 4, 18,21), y: 28 },
{x: new Date(2017, 4, 18,22), y: 21 },
{x: new Date(2017, 4, 18,23), y: 77 },
{x: new Date(2017, 4, 19,0), y: 41 },
{x: new Date(2017, 4, 19,1), y: 70 },
{x: new Date(2017, 4, 19,13), y: 8 },
{x: new Date(2017, 4, 19,14), y: 47 },
{x: new Date(2017, 4, 19,15), y: 36 },
{x: new Date(2017, 4, 19,16), y: 25 },
{x: new Date(2017, 4, 19,17), y: 9 },
{x: new Date(2017, 4, 19,18), y: 1 },
{x: new Date(2017, 4, 19,19), y: 0 },
{x: new Date(2017, 4, 19,20), y: 6 },
{x: new Date(2017, 4, 19,21), y: 30 },
{x: new Date(2017, 4, 19,22), y: 38 },
{x: new Date(2017, 4, 19,23), y: 53 },
{x: new Date(2017, 4, 20,0), y: 17 },
{x: new Date(2017, 4, 20,1), y: 8 },
{x: new Date(2017, 4, 20,13), y: 0 },
{x: new Date(2017, 4, 20,14), y: 54 },
{x: new Date(2017, 4, 20,15), y: 79 },
{x: new Date(2017, 4, 20,16), y: 187 },
{x: new Date(2017, 4, 20,17), y: 64 },
{x: new Date(2017, 4, 20,18), y: 8 },
{x: new Date(2017, 4, 20,19), y: 0 },
{x: new Date(2017, 4, 20,20), y: 15 },
{x: new Date(2017, 4, 20,21), y: 37 },
{x: new Date(2017, 4, 20,22), y: 37 },
{x: new Date(2017, 4, 20,23), y: 18 },
{x: new Date(2017, 4, 21,0), y: 31 },
{x: new Date(2017, 4, 21,1), y: 16 },
{x: new Date(2017, 4, 21,13), y: 4 },
{x: new Date(2017, 4, 21,14), y: 87 },
{x: new Date(2017, 4, 21,15), y: 85 },
{x: new Date(2017, 4, 21,16), y: 57 },
{x: new Date(2017, 4, 21,17), y: 18 },
{x: new Date(2017, 4, 21,18), y: 0 },
{x: new Date(2017, 4, 21,19), y: 19 },
{x: new Date(2017, 4, 21,20), y: 16 },
{x: new Date(2017, 4, 21,21), y: 47 },
{x: new Date(2017, 4, 21,22), y: 65 },
{x: new Date(2017, 4, 21,23), y: 94 },
{x: new Date(2017, 4, 22,0), y: 65 },
{x: new Date(2017, 4, 22,1), y: 14 }
				]
			},
			{        
				type: "line",
				showInLegend: true,
				name: "Orders",
				color: "#20B2AA",
				lineThickness: 2,

				dataPoints: [
				{x: new Date(2017, 4, 1,13), y: 5 - 5},
{x: new Date(2017, 4, 1,14), y: 52 - 5},
{x: new Date(2017, 4, 1,15), y: 70 - 5},
{x: new Date(2017, 4, 1,16), y: 53 - 5},
{x: new Date(2017, 4, 1,17), y: 38 - 5},
{x: new Date(2017, 4, 1,18), y: 24 - 5},
{x: new Date(2017, 4, 1,19), y: 11 - 5},
{x: new Date(2017, 4, 1,20), y: 18 - 5},
{x: new Date(2017, 4, 1,21), y: 35 - 5},
{x: new Date(2017, 4, 1,22), y: 48 - 5},
{x: new Date(2017, 4, 1,23), y: 57 - 5},
{x: new Date(2017, 4, 2,0), y: 31 - 5},
{x: new Date(2017, 4, 2,1), y: 20 - 5},
{x: new Date(2017, 4, 2,13), y: 4 - 5},
{x: new Date(2017, 4, 2,14), y: 64 - 5},
{x: new Date(2017, 4, 2,15), y: 75 - 5},
{x: new Date(2017, 4, 2,16), y: 43 - 5},
{x: new Date(2017, 4, 2,17), y: 36 - 5},
{x: new Date(2017, 4, 2,18), y: 16 - 5},
{x: new Date(2017, 4, 2,19), y: 2 - 5},
{x: new Date(2017, 4, 2,20), y: 13 - 5},
{x: new Date(2017, 4, 2,21), y: 59 - 5},
{x: new Date(2017, 4, 2,22), y: 75 - 5},
{x: new Date(2017, 4, 2,23), y: 71 - 5},
{x: new Date(2017, 4, 3,0), y: 46 - 5},
{x: new Date(2017, 4, 3,1), y: 11 - 5},
{x: new Date(2017, 4, 3,13), y: 5 - 5},
{x: new Date(2017, 4, 3,14), y: 39 - 5},
{x: new Date(2017, 4, 3,15), y: 48 - 5},
{x: new Date(2017, 4, 3,16), y: 33 - 5},
{x: new Date(2017, 4, 3,17), y: 10 - 5},
{x: new Date(2017, 4, 3,18), y: 7 - 5},
{x: new Date(2017, 4, 3,20), y: 11 - 5},
{x: new Date(2017, 4, 3,21), y: 24 - 5},
{x: new Date(2017, 4, 3,22), y: 37 - 5},
{x: new Date(2017, 4, 3,23), y: 36 - 5},
{x: new Date(2017, 4, 4,0), y: 20 - 5},
{x: new Date(2017, 4, 4,13), y: 3 - 5},
{x: new Date(2017, 4, 4,14), y: 50 - 5},
{x: new Date(2017, 4, 4,15), y: 42 - 5},
{x: new Date(2017, 4, 4,16), y: 17 - 5},
{x: new Date(2017, 4, 4,17), y: 10 - 5},
{x: new Date(2017, 4, 4,18), y: 7 - 5},
{x: new Date(2017, 4, 4,19), y: 5 - 5},
{x: new Date(2017, 4, 4,20), y: 9 - 5},
{x: new Date(2017, 4, 4,21), y: 28 - 5},
{x: new Date(2017, 4, 4,22), y: 46 - 5},
{x: new Date(2017, 4, 4,23), y: 34 - 5},
{x: new Date(2017, 4, 5,0), y: 25 - 5},
{x: new Date(2017, 4, 5,13), y: 6 - 5},
{x: new Date(2017, 4, 5,14), y: 47 - 5},
{x: new Date(2017, 4, 5,15), y: 37 - 5},
{x: new Date(2017, 4, 5,16), y: 29 - 5},
{x: new Date(2017, 4, 5,17), y: 26 - 5},
{x: new Date(2017, 4, 5,18), y: 3 - 5},
{x: new Date(2017, 4, 5,19), y: 1 - 5},
{x: new Date(2017, 4, 5,20), y: 6 - 5},
{x: new Date(2017, 4, 5,21), y: 27 - 5},
{x: new Date(2017, 4, 5,22), y: 54 - 5},
{x: new Date(2017, 4, 5,23), y: 39 - 5},
{x: new Date(2017, 4, 6,0), y: 16 - 5},
{x: new Date(2017, 4, 6,14), y: 12 - 5},
{x: new Date(2017, 4, 6,15), y: 36 - 5},
{x: new Date(2017, 4, 6,16), y: 16 - 5},
{x: new Date(2017, 4, 6,17), y: 10 - 5},
{x: new Date(2017, 4, 6,18), y: 12 - 5},
{x: new Date(2017, 4, 6,19), y: 10 - 5},
{x: new Date(2017, 4, 6,20), y: 15 - 5},
{x: new Date(2017, 4, 6,21), y: 37 - 5},
{x: new Date(2017, 4, 6,22), y: 43 - 5},
{x: new Date(2017, 4, 6,23), y: 11 - 5},
{x: new Date(2017, 4, 7,0), y: 24 - 5},
{x: new Date(2017, 4, 7,1), y: 7 - 5},
{x: new Date(2017, 4, 7,13), y: 6 - 5},
{x: new Date(2017, 4, 7,14), y: 43 - 5},
{x: new Date(2017, 4, 7,15), y: 50 - 5},
{x: new Date(2017, 4, 7,16), y: 21 - 5},
{x: new Date(2017, 4, 7,17), y: 18 - 5},
{x: new Date(2017, 4, 7,18), y: 15 - 5},
{x: new Date(2017, 4, 7,19), y: 5 - 5},
{x: new Date(2017, 4, 7,20), y: 7 - 5},
{x: new Date(2017, 4, 7,21), y: 30 - 5},
{x: new Date(2017, 4, 7,22), y: 45 - 5},
{x: new Date(2017, 4, 7,23), y: 64 - 5},
{x: new Date(2017, 4, 8,0), y: 31 - 5},
{x: new Date(2017, 4, 8,1), y: 8 - 5},
{x: new Date(2017, 4, 8,13), y: 6 - 5},
{x: new Date(2017, 4, 8,14), y: 31 - 5},
{x: new Date(2017, 4, 8,15), y: 56 - 5},
{x: new Date(2017, 4, 8,16), y: 36 - 5},
{x: new Date(2017, 4, 8,17), y: 21 - 5},
{x: new Date(2017, 4, 8,18), y: 11 - 5},
{x: new Date(2017, 4, 8,19), y: 13 - 5},
{x: new Date(2017, 4, 8,20), y: 9 - 5},
{x: new Date(2017, 4, 8,21), y: 20 - 5},
{x: new Date(2017, 4, 8,22), y: 43 - 5},
{x: new Date(2017, 4, 8,23), y: 48 - 5},
{x: new Date(2017, 4, 9,0), y: 16 - 5},
{x: new Date(2017, 4, 9,1), y: 15 - 5},
{x: new Date(2017, 4, 9,13), y: 5 - 5},
{x: new Date(2017, 4, 9,14), y: 62 - 5},
{x: new Date(2017, 4, 9,15), y: 55 - 5},
{x: new Date(2017, 4, 9,16), y: 38 - 5},
{x: new Date(2017, 4, 9,17), y: 23 - 5},
{x: new Date(2017, 4, 9,18), y: 6 - 5},
{x: new Date(2017, 4, 9,19), y: 9 - 5},
{x: new Date(2017, 4, 9,20), y: 20 - 5},
{x: new Date(2017, 4, 9,21), y: 44 - 5},
{x: new Date(2017, 4, 9,22), y: 52 - 5},
{x: new Date(2017, 4, 9,23), y: 64 - 5},
{x: new Date(2017, 4, 10,0), y: 48 - 5},
{x: new Date(2017, 4, 10,1), y: 13 - 5},
{x: new Date(2017, 4, 10,13), y: 4 - 5},
{x: new Date(2017, 4, 10,14), y: 46 - 5},
{x: new Date(2017, 4, 10,15), y: 42 - 5},
{x: new Date(2017, 4, 10,16), y: 27 - 5},
{x: new Date(2017, 4, 10,17), y: 20 - 5},
{x: new Date(2017, 4, 10,20), y: 16 - 5},
{x: new Date(2017, 4, 10,21), y: 21 - 5},
{x: new Date(2017, 4, 10,22), y: 36 - 5},
{x: new Date(2017, 4, 10,23), y: 34 - 5},
{x: new Date(2017, 4, 11,0), y: 24 - 5},
{x: new Date(2017, 4, 11,1), y: 10 - 5},
{x: new Date(2017, 4, 11,13), y: 5 - 5},
{x: new Date(2017, 4, 11,14), y: 52 - 5},
{x: new Date(2017, 4, 11,15), y: 46 - 5},
{x: new Date(2017, 4, 11,16), y: 24 - 5},
{x: new Date(2017, 4, 11,17), y: 6 - 5},
{x: new Date(2017, 4, 11,18), y: 1 - 5},
{x: new Date(2017, 4, 11,19), y: 4 - 5},
{x: new Date(2017, 4, 11,20), y: 6 - 5},
{x: new Date(2017, 4, 11,21), y: 29 - 5},
{x: new Date(2017, 4, 11,22), y: 33 - 5},
{x: new Date(2017, 4, 11,23), y: 37 - 5},
{x: new Date(2017, 4, 12,0), y: 41 - 5},
{x: new Date(2017, 4, 12,1), y: 11 - 5},
{x: new Date(2017, 4, 12,13), y: 5 - 5},
{x: new Date(2017, 4, 12,14), y: 48 - 5},
{x: new Date(2017, 4, 12,15), y: 41 - 5},
{x: new Date(2017, 4, 12,16), y: 24 - 5},
{x: new Date(2017, 4, 12,17), y: 16 - 5},
{x: new Date(2017, 4, 12,18), y: 7 - 5},
{x: new Date(2017, 4, 12,19), y: 4 - 5},
{x: new Date(2017, 4, 12,20), y: 15 - 5},
{x: new Date(2017, 4, 12,21), y: 15 - 5},
{x: new Date(2017, 4, 12,22), y: 38 - 5},
{x: new Date(2017, 4, 12,23), y: 38 - 5},
{x: new Date(2017, 4, 13,0), y: 25 - 5},
{x: new Date(2017, 4, 13,1), y: 22 - 5},
{x: new Date(2017, 4, 13,14), y: 13 - 5},
{x: new Date(2017, 4, 13,15), y: 42 - 5},
{x: new Date(2017, 4, 13,16), y: 24 - 5},
{x: new Date(2017, 4, 13,17), y: 11 - 5},
{x: new Date(2017, 4, 13,18), y: 10 - 5},
{x: new Date(2017, 4, 13,19), y: 5 - 5},
{x: new Date(2017, 4, 13,20), y: 10 - 5},
{x: new Date(2017, 4, 14,0), y: 1 - 5},
{x: new Date(2017, 4, 14,1), y: 15 - 5},
{x: new Date(2017, 4, 14,13), y: 14 - 5},
{x: new Date(2017, 4, 14,14), y: 52 - 5},
{x: new Date(2017, 4, 14,15), y: 75 - 5},
{x: new Date(2017, 4, 14,16), y: 48 - 5},
{x: new Date(2017, 4, 14,17), y: 35 - 5},
{x: new Date(2017, 4, 14,18), y: 20 - 5},
{x: new Date(2017, 4, 14,19), y: 11 - 5},
{x: new Date(2017, 4, 14,20), y: 11 - 5},
{x: new Date(2017, 4, 14,21), y: 50 - 5},
{x: new Date(2017, 4, 14,22), y: 61 - 5},
{x: new Date(2017, 4, 14,23), y: 53 - 5},
{x: new Date(2017, 4, 15,0), y: 45 - 5},
{x: new Date(2017, 4, 15,1), y: 14 - 5},
{x: new Date(2017, 4, 15,13), y: 10 - 5},
{x: new Date(2017, 4, 15,14), y: 51 - 5},
{x: new Date(2017, 4, 15,15), y: 72 - 5},
{x: new Date(2017, 4, 15,16), y: 55 - 5},
{x: new Date(2017, 4, 15,17), y: 42 - 5},
{x: new Date(2017, 4, 15,18), y: 18 - 5},
{x: new Date(2017, 4, 15,19), y: 7 - 5},
{x: new Date(2017, 4, 15,20), y: 7 - 5},
{x: new Date(2017, 4, 15,21), y: 37 - 5},
{x: new Date(2017, 4, 15,22), y: 42 - 5},
{x: new Date(2017, 4, 15,23), y: 53 - 5},
{x: new Date(2017, 4, 16,0), y: 26 - 5},
{x: new Date(2017, 4, 16,1), y: 25 - 5},
{x: new Date(2017, 4, 16,13), y: 10 - 5},
{x: new Date(2017, 4, 16,14), y: 62 - 5},
{x: new Date(2017, 4, 16,15), y: 69 - 5},
{x: new Date(2017, 4, 16,16), y: 42 - 5},
{x: new Date(2017, 4, 16,17), y: 39 - 5},
{x: new Date(2017, 4, 16,18), y: 19 - 5},
{x: new Date(2017, 4, 16,19), y: 17 - 5},
{x: new Date(2017, 4, 16,20), y: 17 - 5},
{x: new Date(2017, 4, 16,21), y: 47 - 5},
{x: new Date(2017, 4, 16,22), y: 64 - 5},
{x: new Date(2017, 4, 16,23), y: 90 - 5},
{x: new Date(2017, 4, 17,0), y: 40 - 5},
{x: new Date(2017, 4, 17,1), y: 24 - 5},
{x: new Date(2017, 4, 17,13), y: 13 - 5},
{x: new Date(2017, 4, 17,14), y: 51 - 5},
{x: new Date(2017, 4, 17,15), y: 39 - 5},
{x: new Date(2017, 4, 17,16), y: 39 - 5},
{x: new Date(2017, 4, 17,17), y: 19 - 5},
{x: new Date(2017, 4, 17,18), y: 5 - 5},
{x: new Date(2017, 4, 17,19), y: 3 - 5},
{x: new Date(2017, 4, 17,20), y: 6 - 5},
{x: new Date(2017, 4, 17,21), y: 22 - 5},
{x: new Date(2017, 4, 17,22), y: 30 - 5},
{x: new Date(2017, 4, 17,23), y: 79 - 5},
{x: new Date(2017, 4, 18,0), y: 18 - 5},
{x: new Date(2017, 4, 18,1), y: 6 - 5},
{x: new Date(2017, 4, 18,13), y: 11 - 5},
{x: new Date(2017, 4, 18,14), y: 49 - 5},
{x: new Date(2017, 4, 18,15), y: 41 - 5},
{x: new Date(2017, 4, 18,16), y: 20 - 5},
{x: new Date(2017, 4, 18,17), y: 17 - 5},
{x: new Date(2017, 4, 18,18), y: 8 - 5},
{x: new Date(2017, 4, 18,20), y: 9 - 5},
{x: new Date(2017, 4, 18,21), y: 35 - 5},
{x: new Date(2017, 4, 18,22), y: 29 - 5},
{x: new Date(2017, 4, 18,23), y: 66 - 5},
{x: new Date(2017, 4, 19,0), y: 37 - 5},
{x: new Date(2017, 4, 19,1), y: 62 - 5},
{x: new Date(2017, 4, 19,13), y: 8 - 5},
{x: new Date(2017, 4, 19,14), y: 59 - 5},
{x: new Date(2017, 4, 19,15), y: 44 - 5},
{x: new Date(2017, 4, 19,16), y: 28 - 5},
{x: new Date(2017, 4, 19,17), y: 17 - 5},
{x: new Date(2017, 4, 19,18), y: 10 - 5},
{x: new Date(2017, 4, 19,19), y: 5 - 5},
{x: new Date(2017, 4, 19,20), y: 9 - 5},
{x: new Date(2017, 4, 19,21), y: 41 - 5},
{x: new Date(2017, 4, 19,22), y: 44 - 5},
{x: new Date(2017, 4, 19,23), y: 42 - 5},
{x: new Date(2017, 4, 20,0), y: 29 - 5},
{x: new Date(2017, 4, 20,1), y: 18 - 5},
{x: new Date(2017, 4, 20,13), y: 7 - 5},
{x: new Date(2017, 4, 20,14), y: 61 - 5},
{x: new Date(2017, 4, 20,15), y: 86 - 5},
{x: new Date(2017, 4, 20,16), y: 187 - 5},
{x: new Date(2017, 4, 20,17), y: 62 - 5},
{x: new Date(2017, 4, 20,18), y: 20 - 5},
{x: new Date(2017, 4, 20,19), y: 7 - 5},
{x: new Date(2017, 4, 20,20), y: 5 - 5},
{x: new Date(2017, 4, 20,21), y: 35 - 5},
{x: new Date(2017, 4, 20,22), y: 48 - 5},
{x: new Date(2017, 4, 20,23), y: 30 - 5},
{x: new Date(2017, 4, 21,0), y: 25 - 5},
{x: new Date(2017, 4, 21,1), y: 12 - 5},
{x: new Date(2017, 4, 21,13), y: 12 - 5},
{x: new Date(2017, 4, 21,14), y: 77 - 5},
{x: new Date(2017, 4, 21,15), y: 77 - 5},
{x: new Date(2017, 4, 21,16), y: 45 - 5},
{x: new Date(2017, 4, 21,17), y: 13 - 5},
{x: new Date(2017, 4, 21,18), y: 4 - 5},
{x: new Date(2017, 4, 21,19), y: 15 - 5},
{x: new Date(2017, 4, 21,20), y: 14 - 5},
{x: new Date(2017, 4, 21,21), y: 56 - 5},
{x: new Date(2017, 4, 21,22), y: 58 - 5},
{x: new Date(2017, 4, 21,23), y: 97 - 5},
{x: new Date(2017, 4, 22,0), y: 75 - 5},
{x: new Date(2017, 4, 22,1), y: 15 - 5}
				]
			}

			
			],
          legend:{
            cursor:"pointer",
            itemclick:function(e){
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              	e.dataSeries.visible = false;
              }
              else{
                e.dataSeries.visible = true;
              }
              chart.render();
            }
          }
		});

chart.render();
}



delay(3000);
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
			<h1 style=\"text-align: center;\">Hot items in your area</h1>\
			<table class=\"table\"> \
				<thead> \
					<tr> \
						<th>Item Name</th> \
						<th>Cost</th> \
					</tr> \
				</thead> \
				<tbody> " + string + "</tbody> \
			</table>\
		</div>\
		<div id=\"chartContainer\" style=\"padding-bottom: 400px;\"></div>";
				
		$( content ).insertBefore( ".restaurant-items-wrapper:eq(1)" );
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
	} else if (request.type == "get_rank") {
		show_rank(request.message);
	}
  });


function update_cost(price_map) {
	$(".food-item").each(function (index) {
		var item_name = $(this).find("h5").text().trim();
		if (price_map[item_name] != undefined) {
			var price = $(this).find(".item-price").text().trim();
			var new_price = price_map[item_name];
			$(this).find(".item-price:eq(1)").html(price + "<br /> <span style=\"color: red\">Recommended Price:" + new_price + "<span>")
		}
	})
}

function show_rank(rank_array) {
	air = rank_array[0];
	local_rank = rank_array[1];
	var title = $("h1.title").find("span:eq(0)").text().trim();
	$("h1.title").find("span:eq(0)").html(title + "&nbsp; &nbsp;<button type=\"button\" class=\"btn btn-success btn-xs\">All India Rank: " + air + "</button> <button type=\"button\" class=\"btn btn-danger btn-xs\">Area Rank: " + local_rank + "</button>")
}

function taste_increase(items) {
	console.log("get taste ");
	console.log(items);
	$(".food-item").each(function (index) {
		var item_name = $(this).find("h5").text().trim();
		if (items[item_name] != undefined) {
			var price = $(this).find(".item-price:eq(1)").html();
			console.log("Pruce is: djioifjo")
			console.log(price);
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