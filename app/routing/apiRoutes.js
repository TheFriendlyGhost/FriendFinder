//continuing this craze of commenting, how long can I keep it up? I'm not sure, pretty stoned, but I must perservere
//requiring our friends.js file, how can we do stuff with data if we don't have the data!?

var friendsData = require("../data/friends");

//Gotta export them routes
module.exports = function(app){
	//get request to our friends data
	app.get("/api/friends", function(req,res){
		res.json(friendsData);
	});

	//also wanna be able to post this data
	app.post("/api/friends", function(req,res){
		// console.log(req.body)
		//handle compatability here
		var newGuy = req.body;

		var minDiff = 100000;
		var bestMatch;

		friendsData.forEach(function(element){
			var sum = 0;
			for(var i = 0; i<element.scores.length; i++){
				sum += Math.abs(element.scores[i] - newGuy.scores[i]);
				// console.log(sum);
			}

			if(sum < minDiff){
				minDiff = sum;
				bestMatch = element;
			}
		});

		friendsData.push(req.body);
		res.json(bestMatch);
	});	
}