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
      }).when('/candleapp', {
    templateUrl: 'pages/candleapp.html',
      requiresHTTPS: true
    }).when('/lastcall', {
    templateUrl: 'pages/lastcall.html',
      requiresHTTPS: true
    }).when('/password', {
    templateUrl: 'pages/password.html',
      requiresHTTPS: true
    }).when('/resume', {
    	templateUrl: 'pages/resume.html',
      requiresHTTPS: true
    }).when('/projects', {
    templateUrl: 'pages/projects.html',
    requiresHTTPS: true
    }).when('testimonials', {
    	templateUrl: 'pages/testimonials.html',
      requiresHTTPS: true
    }).when('claimsapp', {
      templateUrl: 'pages/claimsapp.html',
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
function rtResume() {
  window.location.assign("#projects")
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
function rtPassword() {
  window.location.assign("#password")
}

