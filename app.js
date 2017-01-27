angular.module('portfolioSite', ['ngMaterial','ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
    	templateUrl: 'pages/about.html',
    }).when('/about', {
    	templateUrl: 'pages/about.html',
    }).when('/portfolio', {
    	templateUrl: 'pages/portfolio.html',
    }).when('/resume', {
    	templateUrl: 'pages/resume.html',
    }).when('testimonials', {
    	templateUrl: 'pages/testimonials.html',
    })
}])

function rtAbout() {
  window.location.assign("#about")
}
function rtPortfolio() {
  window.location.assign("#portfolio")
}
function rtResume() {
  window.location.assign("#resume")
}
function rtTestimonials() {
  window.location.assign("#testimonials")
}

