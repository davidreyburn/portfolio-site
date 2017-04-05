angular.module('portfolioSite', ['ngMaterial','ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
    	templateUrl: 'pages/about.html',
      requiresHTTPS: true
    }).when('/about', {
    	templateUrl: 'pages/about.html',
      requiresHTTPS: true
    }).when('/portfolio', {
    	templateUrl: 'pages/portfolio.html',
      requiresHTTPS: true
    }).when('/resume', {
    	templateUrl: 'pages/resume.html',
      requiresHTTPS: true
    }).when('testimonials', {
    	templateUrl: 'pages/testimonials.html',
      requiresHTTPS: true
    }).when('/candleapp', {
    templateUrl: 'pages/candleapp.html',
      requiresHTTPS: true
    }).when('/lastcall', {
    templateUrl: 'pages/lastcall.html',
      requiresHTTPS: true
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
function rtCandleapp() {
  window.location.assign("#candleapp")
}
function rtLastcall() {
  window.location.assign("#lastcall")
}

