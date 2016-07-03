/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name" :  "Anas Al-Raheem",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "647-778-7899",
		"email" : "anas.al.raheem@mail.utoronto.ca",
		"github" : "AnasAl-Raheem",
		"linkedin" : "in/anasalraheem",
		"location" : "Toronto, ON"
		},
	"welcomeMessage" : "Howdy fella",
	"skills" : ["JavaScript", "HTML", "CSS", "Python", "Java", "C", "Verilog", "LaTeX"],
	"biopic" : "http://placekitten.com/250/250"
};

var education = {
	"schools" : [ {
		"name" : "Damascus University",
		"location" : "Damascus, Syria",
		"degree" : "Dentistry",
		"majors" : ["Dentistry"],
		"dates" : 2013,
		"url" : "http://damasuniv.edu.sy/english/"
	},
	{
		"name" : "University of Toronto",
		"location" : "Toronto, Canada",
		"degree" : "Honours Bacholer of Science",
		"majors" : ["Computer Science","Genome Biology"],
		"dates" : 2017,
		"url" : "https://www.utoronto.ca/"
	}
	],
	"onlineCourses" : [ {
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"date" : 2016,
		"url" : "https://www.udacity.com/course/javascript-basics--ud804"
	},
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"date" : 2016,
		"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	}]
};

var work = {
	"jobs" : [
		{
		"employer" : "UofT - New College Ristrar Office",
		"title" : "Asistant",
		"location" : "Toronto, ON",
		"dates" : "2013 - 2014",
		"description" : "Collaborated to meet deadlines"
	}]
};

var projects = {
	projects : [{
		"title" : "interactive Resume",
		"dates" : "2016 Summer",
		"description" : "Resume",
		"image" : ["http://placekitten.com/350/350", "http://placekitten.com/400/350"]
	}]
};

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
	}

	for (skill in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
	}
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
	}

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url));
	}
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
};

projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
		for (i in projects.projects[project].image) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].image[i]));
		}
	}
};

function inName(name) {
	var nameArray = name.trim().split(" ");
	var first = nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLowerCase();
	var last = nameArray[1].toUpperCase();
	return first + " " + last;
};

$("#lets-connect").append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
education.display();
work.display();
projects.display();