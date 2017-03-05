/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skill = ["Java", "PHP", "Javascript", "C"];

var bio = {
    "Name" : "abhishek kundalia",
    "Role" : "Android Developer",
    "contacts" : {
        "mobile" : "9024241991",
        "email" : "abhishekundalia666@gmail.com",
        "github" : "https://github.com/AbhisheKundalia",
        "location" : "Bangalore, Karnataka IN"
    },
    "PicUrl" : "https://avatars1.githubusercontent.com/u/16782024?v=3&s=460",
    "Skill" : skill,
    "Message" : "Hi there you are welcomed here"
};
/*
var work = {
    "job" : [{},{}]
};
work.job[0].employer = "Accenture Solutions Pvt Ltd";
work.job[0].title = "Associate Software Engineer";
work.job[0].date = "2015-2017";
work.job[0].location = bio.Contact.location;
work.job[0].description = "A broad, general, and written statement of a specific job, based on the findings of a job analysis. It generally includes duties, purpose, responsibilities, scope, and working conditions of a job along with the job's title, and the name or designation of the person to whom the employee reports. Job description usually forms the basis of job specification.";

work.job[1].employer = "Deloitte";
work.job[1].title = "Business Technical Analyst";
work.job[1].date = "2017-2017";
work.job[1].location = bio.Contact.location;
work.job[1].description = "A broad, general, and written statement of a specific job, based on the findings of a job analysis. It generally includes duties, purpose, responsibilities, scope, and working conditions of a job along with the job's title, and the name or designation of the person to whom the employee reports. Job description usually forms the basis of job specification.";
*/
var work = {
    "jobs": [
        {
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LEAD Academy Charter High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jul 2012 - May 2013",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2009 - Jun 2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};

var education = {
    "schools" : [{
        "name": "Manipal University Jaipur",
        "degree" : "BCA",
        "dates" : "2012-2015",
        "location" : "Jaipur Rajasthan IN"
    }]
};

var project = {

};


var formattedName = HTMLheaderName.replace("%data%", bio.Name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.Role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.PicUrl);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.Message);

var formattedSName = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedSDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedSDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
var formattedSLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var internationalizeButton = '<button id="internationalize" type="button">Internationalize</button>';

$("#header").prepend(formattedRole).prepend(formattedName).append(formattedPic).append(formattedMsg);
$("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedLocation);
displayWork();

if(bio.Skill != null)
{
    $("#header").append(HTMLskillsStart);
    for(i in skill)
    {
        var formattedSkills = HTMLskills.replace("%data%", bio.Skill[i]);
        $("#skills").append(formattedSkills);
    }

}

function displayWork()
{
    for(i in work.jobs)
    {
        var formattedWEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedWdesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedWEmployer).append(formattedWTitle).append(formattedWDate).append(formattedWLocation).append(formattedWdesc);
    }
}

function inName(name) {
    var array = name.split(" ");
    array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1).toLowerCase();
    if(array[1] != null)
    {
        array[1] = array[1].toUpperCase();
    }
    return array.join(" ");
}



$("#internationalize").click(function () {
        var inname = inName(bio.Name);
        document.getElementById("name").innerHTML = inname;
});

$(document).click(function (loc) {
    logClicks(loc.pageX, loc.pageY);
});



$("#education").append(HTMLschoolStart).append(formattedSName).append(formattedSDegree).append(formattedSDates).append(formattedSLocation);
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
