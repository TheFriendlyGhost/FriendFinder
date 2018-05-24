//Gonna start commenting so I understand this better, and can explain whats going on
//Require the path package, allows us to use __dirname, and path functions, resulting in full file paths
var path = require("path")

//keeping our various route files seperate, so need to export them to the main js file
module.exports = function(app){

	//get to the root/landing page
	app.get("/", function (req,res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	//get to the survey page
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("*", function(req, res) {
	    res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};