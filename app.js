// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider


			
			// route for the pageUscol page
			.when('/pageUscol', {
				templateUrl : 'templates/uscol.html',
				controller  : 'UscolController'
			})

			// route for the pageCompliance page
			.when('/pageCompliance', {
				templateUrl : 'templates/compliance.html',
				controller  : 'ComplianceController'
			})

			// route for the pageQualite page
			.when('/pageQualite', {
				templateUrl : 'templates/qualite.html',
				controller  : 'QualiteController'
			})

			// route for the pageReussite page
			.when('/pageReussite', {
				templateUrl : 'templates/reussite.html',
				controller  : 'ReussiteController'
			})

			// route for the pageAcceptabilite page
			.when('/pageAcceptabilite', {
				templateUrl : 'templates/acceptabilite.html',
				controller  : 'AcceptabiliteController'
			})

			// route for the pageTolerance page
			.when('/pageTolerance', {
				templateUrl : 'templates/tolerance.html',
				controller  : 'ToleranceController'
			})

			// route for the pageEvidence page
			.when('/pageEvidence', {
				templateUrl : 'templates/evidence.html',
				controller  : 'EvidenceController'
			})

			// route for the pagePosologie page
			.when('/pagePosologie', {
				templateUrl : 'templates/posologie.html',
				controller  : 'PosologieController'
			})

			// route for the pageBonUsage page
			.when('/pageBonUsage', {
				templateUrl : 'templates/bonUsage.html',
				controller  : 'BonUsageController'
			})

			

			// route for the pageHome page
			.when('/pageHome', {
				templateUrl : 'templates/accueil.html',
				controller  : 'IndexController'
			})

			// route for the Page Index page
			.when('/', {
				templateUrl : 'templates/index.html',
				controller  : 'mainController'
			})



			// route for the pagePDF page
			.when('/pagePDF', {
				templateUrl : 'templates/pdf.html',
				controller  : 'PagePDFController'
			})

			// route for the pageR page
			.when('/pageR', {
				templateUrl : 'templates/r.html',
				controller  : 'PageRController'
			})



			/******COMPLIANCE******/
			// route for the page
			.when('/75', {
				templateUrl : 'templates/75.html',
				controller  : '75Controller'
			})

			// route for the page
			.when('/77', {
				templateUrl : 'templates/77.html',
				controller  : '77Controller'
			})


			// route for the page
			.when('/item1', {
				templateUrl : 'templates/item1.html',
				controller  : 'item1Controller'
			})
			// route for the page
			.when('/item2', {
				templateUrl : 'templates/item2.html',
				controller  : 'item2Controller'
			})
			// route for the page
			.when('/item3', {
				templateUrl : 'templates/iem3.html',
				controller  : 'item3Controller'
			})
			// route for the page
			.when('/item4', {
				templateUrl : 'templates/item4.html',
				controller  : 'item4Controller'
			})
			// route for the page
			.when('/item5', {
				templateUrl : 'templates/item5.html',
				controller  : 'item5Controller'
			})
			// route for the page
			.when('/item6', {
				templateUrl : 'templates/item6.html',
				controller  : 'item6Controller'
			})




			/********TOLERENCE**********/
			// route for the page
			.when('/css', {
				templateUrl : 'templates/css.html',
				controller  : 'CssController'
			})







			/***Evidence***/
			.when('/step1', {
				templateUrl : 'templates/step1.html',
				controller  : 'Step1Controller'
			})
			.when('/step2', {
				templateUrl : 'templates/step2.html',
				controller  : 'Step2Controller'
			})
			.when('/step3', {
				templateUrl : 'templates/step3.html',
				controller  : 'Step3Controller'
			})



			/***POSOLOGIE***/
			.when('/ps1', {
				templateUrl : 'templates/ps1.html',
				controller  : 'Ps1Controller'
			})
			.when('/ps2', {
				templateUrl : 'templates/ps2.html',
				controller  : 'Ps2Controller'
			})
			.when('/ps3', {
				templateUrl : 'templates/ps3.html',
				controller  : 'Ps3Controller'
			})
			.when('/ps4', {
				templateUrl : 'templates/ps4.html',
				controller  : 'Ps4Controller'
			})
			.when('/ps5', {
				templateUrl : 'templates/ps5.html',
				controller  : 'Ps5Controller'
			})
			.when('/ps6', {
				templateUrl : 'templates/ps6.html',
				controller  : 'Ps6Controller'
			})

			// + and - //
			.when('/ps7', {
				templateUrl : 'templates/ps7.html',
				controller  : 'Ps7Controller'
			})



			/// USCOL ///
			.when('/mod', {
				templateUrl : 'templates/mod.html',
				controller  : 'ModController'
			})
			.when('/mod2', {
				templateUrl : 'templates/mod2.html',
				controller  : 'Mod2Controller'
			})




	});


	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = '';
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('IndexController', function($scope) {
		// create a message to display in our view
		$scope.message = '';
	});

	scotchApp.controller('PagePDFController', function($scope) {
		// create a message to display in our view
		$scope.message = '';
	});

	scotchApp.controller('PageRController', function($scope) {
		// create a message to display in our view
		$scope.message = '';
	});

	scotchApp.controller('UscolController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('ComplianceController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('QualiteController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('ReussiteController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('AcceptabiliteController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('ToleranceController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('EvidenceController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('PosologieController', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('BonUsageController', function($scope) {
		$scope.message = '';
	});



	scotchApp.controller('75Controller', function($scope) {
		$scope.message = '';
	});
	scotchApp.controller('77Controller', function($scope) {
		$scope.message = '';
	});



	scotchApp.controller('item1Controller', function($scope) {
		$scope.message = '';
	});
	scotchApp.controller('item2Controller', function($scope) {
		$scope.message = '';
	});
	scotchApp.controller('item3Controller', function($scope) {
		$scope.message = '';
	});
	scotchApp.controller('item4Controller', function($scope) {
		$scope.message = '';
	});
	scotchApp.controller('item5Controller', function($scope) {
		$scope.message = '';
	});
	scotchApp.controller('item6Controller', function($scope) {
		$scope.message = '';
	});






	scotchApp.controller('CssController', function($scope) {
		$scope.message = '';
	});





	scotchApp.controller('Step1Controller', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('Step2Controller', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('Step3Controller', function($scope) {
		$scope.message = '';
	});





	scotchApp.controller('Ps1Controller', function($scope) {
		$scope.message = '';
	});
	
	scotchApp.controller('Ps2Controller', function($scope) {
		$scope.message = '';
	});
	
	scotchApp.controller('Ps3Controller', function($scope) {
		$scope.message = '';
	});
	
	scotchApp.controller('Ps4Controller', function($scope) {
		$scope.message = '';
	});
	
	scotchApp.controller('Ps5Controller', function($scope) {
		$scope.message = '';
	});
	
	scotchApp.controller('Ps6Controller', function($scope) {
		$scope.message = '';
	});

	scotchApp.controller('Ps7Controller', function($scope) {
		$scope.message = '';
	});




	scotchApp.controller('ModController', function($scope) {
		$scope.message = '';
	});
	scotchApp.controller('Mod2Controller', function($scope) {
		$scope.message = '';
	});
	


	