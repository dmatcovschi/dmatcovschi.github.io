

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [ 'ngRoute' ]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    // Pages
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/recruiters", {templateUrl: "partials/recruiters.html", controller: "PageCtrl", controller: "searchCompany"})
    .when("/companies", {templateUrl: "partials/recruiters.html", controller: "PageCtrl", controller: "searchCompany"})
    .when("/people", {templateUrl: "partials/people.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/feedbacklogin", {templateUrl: "partials/feedbacklogin.html", controller: "PageCtrl"})
    .when("/feedbackdisplay2", {templateUrl: "partials/feedbackdisplay.php", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    
    
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");



  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
 // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });
  $('#recruiters').ready(function(){
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
  });
function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
};

app.controller("searchCompany", function($scope){
	$scope.query = {};
	$scope.queryBy = '$';
	$scope.companies = [
		{
			"name" : "KPMG",
			"description" : "KPMG is one of the largest professional services companies in the world and one of the Big Four auditors, along with Deloitte, EY and PwC. Its global headquarters are located in Amsterdam, the Netherlands. KPMG employs 162,000 people and has three lines of services: audit, tax, and advisory. Its tax and advisory services are further divided into various service groups.",
			"link" : "http://www.nrc.nl/wp-content/uploads/2013/11/kpmg-logo.jpg",
			"facebook" : "https://www.facebook.com/KPMG",
			"linkedin" : "https://www.linkedin.com/company/kpmg",
			"twitter" : "https://twitter.com/kpmg",
			"googleplus" : "https://plus.google.com/106458718593123764181/posts"
		},
		{
			"name" : "Deloitte",
			"description" : "Deloitte is the brand under which tens of thousands of dedicated professionals in independent firms throughout the world collaborate to provide audit, consulting, financial advisory, risk management, tax and related services to select clients.",
			"link" : "http://farm4.staticflickr.com/3417/3369025249_62387e7d1e_z.jpg?zz=1",
			"facebook" : "https://www.facebook.com/deloitte",
			"linkedin" : "https://www.linkedin.com/company/deloitte",
			"twitter" : "https://twitter.com/deloitte",
			"googleplus" : "https://plus.google.com/+Deloitte/posts"
		},
		{
			"name" : "Symantec",
			"description" : "Symantec helps consumers and organizations secure and manage their information-driven world. Learn about the company, read what media and analysts have to say about Symantec, or find positions open in our team.",
			"link" : "http://cdn5.triplepundit.com/wp-content/uploads/2013/05/Symantec-Headquarters.jpg",
			"facebook" : "https://www.facebook.com/Symantec",
			"linkedin" : "https://www.linkedin.com/company/symantec",
			"twitter" : "https://twitter.com/symantec",
			"googleplus" : "https://plus.google.com/+symantec/posts"
		},
		{
			"name" : "Amazon",
			"description" : "With a mission to be Earth’s most customer-centric company, where customers can find and discover anything they might want to buy online, and endeavors to offer its customers the lowest possible prices, Amazon.com and other sellers offer millions of unique new, refurbished, and used items in categories such as books; movies; music & games; digital downloads; electronics & computers.",
			"link" : "http://a.abcnews.com/images/Business/AP_amazon_kab_140425_16x9_608.jpg",
			"facebook" : "https://www.facebook.com/Amazon",
			"linkedin" : "https://www.linkedin.com/company/amazon",
			"twitter" : "https://twitter.com/amazon",
			"googleplus" : "https://plus.google.com/+amazon/posts"
		},
		{
			"name" : "VMWare",
			"description" : "The pace of business is melting away rigid structures and requires a new model of IT—one that is fluid, instant and secure. VMware offers that model—Brave New IT, empowering customers to rapidly develop, automatically deliver and safely consume all applications, from traditional to cloud-native, on any device and to manage them through a unified platform.",
			"link" : "http://cdn.arstechnica.net/wp-content/uploads/2011/11/vmware_headquarters-4eb4083-intro.jpg",
			"facebook" : "https://www.facebook.com/vmware",
			"linkedin" : "https://www.linkedin.com/company/vmware",
			"twitter" : "https://twitter.com/VMware?",
			"googleplus" : "https://plus.google.com/+vmware/posts"
		},
		{
			"name" : "Oracle",
			"description" : "At Oracle, we want to help you shift that spending balance. We help you simplify your IT environment so that you can free up money, time, and resources to invest in innovation. We do this by providing hardware and software that’s engineered to work together, in the cloud or on premises.",
			"link" : "http://news.doddleme.com/wp-content/uploads/2012/09/oracle-building.jpg",
			"facebook" : "https://www.facebook.com/Oracle",
			"linkedin" : "https://www.linkedin.com/company/oracle",
			"twitter" : "https://twitter.com/oracle",
			"googleplus" : "https://plus.google.com/+Oracle/posts"
		},
		{
			"name" : "Salesforce",
			"description" : "Salesforce.com is a global cloud computing company headquartered in San Francisco, California. Though best known for its customer relationship management (CRM) product, Salesforce has also expanded into commercial applications of social networking through acquisition.",
			"link" : "https://dz2kgivhhny1y.cloudfront.net/content/uploads/2014/10/salesforce-2.jpg",
			"facebook" : "https://www.facebook.com/salesforce",
			"linkedin" : "https://www.linkedin.com/company/salesforce",
			"twitter" : "https://twitter.com/salesforce",
			"googleplus" : "https://plus.google.com/+Salesforce/posts"
		},
		{
			"name" : "Optimizely",
			"description" : "Optimizely is a firm that makes customer experience optimization software for companies. The Optimizely platform technology provides businesses the ability to conduct A/B testing, multipage, and multivariate testing that may be used for making data-driven decisions.",
			"link" : "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/11190147_1634590883425805_1433452728_n.jpg",
			"facebook" : "https://www.facebook.com/optimizely",
			"linkedin" : "https://www.linkedin.com/company/optimizely",
			"twitter" : "https://twitter.com/optimizely",
			"googleplus" : "https://plus.google.com/+optimizely/posts"
		},
		{
			"name" : "Arista Networks",
			"description" : "Arista Networks is a computer networking company headquartered in Santa Clara, California, USA. The company designs and sells multilayer network switches to deliver software-defined networking (SDN) solutions for large datacenter, cloud computing, high-performance computing and high-frequency trading environments.",
			"link" : "http://www.hpcwire.com/wp-content/uploads/2014/06/arista.png",
			"facebook" : "https://www.facebook.com/arista",
			"linkedin" : "https://www.linkedin.com/company/arista",
			"twitter" : "https://twitter.com/arista",
			"googleplus" : "https://plus.google.com/+arista/posts"
		}
		
	];
	$scope.recruiters = [
		{
			"company" : "Deloitte",
			"name" : "Karen Waldmann",
			"email" : "kwaldmann@deloitte.com"
		},
		{
			"company" : "Symantec",
			"name" : "Monica Ipong",
			"email" : "monica_ipong@symantec.com"
		},
		{
			"company" : "Symantec",
			"name" : "David Sambrano",
			"email" : "David_Sambrano@symantec.com"
		},
		{
			"company" : "Amazon",
			"name" : "Tiffany Casey",
			"email" : "tiffanca@amazon.com"
		},
		{
			"company" : "KPMG",
			"name" : "McKenzie Campana",
			"email" : "mcampana@kpmg.com"
		},
		{
			"company" : "Deloitte",
			"name" : "Monica Anne Giflewski",
			"email" : "mfiglewski@deloitte.com"
		},
		{
			"company" : "VMWare",
			"name" : "Shawn Sigona",
			"email" : "ssigona@vmware.com"
		},
		{
			"company" : "KLA-Tencor",
			"name" : "Steve Mendez",
			"email" : "Steve.Mendez@kla-tencor.com"
		},
		{
			"company" : "Ooyala",
			"name" : "Megan Hanegan",
			"email" : "meganh@ooyala.com"
		},
		{
			"company" : "Salesforce",
			"name" : "Alexandra Fee",
			"email" : "afee@salesforce.com"
		},
		{
			"company" : "Optimizely",
			"name" : "Monica Krist",
			"email" : "monica@optimizely.com"
		},
		{
			"company" : "Nutanix",
			"name" : "Daisy Hurtado",
			"email" : "dhurtado@nutanix.com"
		},
		{
			"company" : "Actuate",
			"name" : "Lisa Yakushi",
			"email" : "lyakushi@actuate.com"
		},
		{
			"company" : "PricewatehouseCoopers",
			"name" : "Liza Darnell",
			"email" : "liza.darnell@us.pwc.com"
		},
		{
			"company" : "SThree",
			"name" : "Hannah Cutler",
			"email" : "h.cutler@sthree.com"
		},
		{
			"company" : "Axcient",
			"name" : "Jeffrey Habura",
			"email" : "jhabura@axcient.com"
		},
		{
			"company" : "Brocade",
			"name" : "Marie-Therese Ellise",
			"email" : "mellis@brocade.com"
		},
		{
			"company" : "Sanmina",
			"name" : "Uyen Tran",
			"email" : "uyen.tran@sanmina.com"
		},
		{
			"company" : "Safeway",
			"name" : "Kayleigh Vergnetti",
			"email" : "Kayleigh.Vergnetti@safeway.com"
		}
	];
});

function Ctrl($scope)
{
    $scope.date = new Date();
}

app.controller('fessCntrl', function ($scope) {
    $scope.expenses = [{
  exTitle: "",
  amount: "",
  typeOfShare: "",
  date: ""
 }];
 $scope.submitExpense = function (expenseInfo) {
    $scope.expenses.push(expenseInfo);
 }
    
});

app.$inject = ['$scope'];

