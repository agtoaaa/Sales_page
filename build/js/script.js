(function() {
	function toggleClass(element, className){
	    if (!element || !className) {
	        return;
	    }
	    
	    var classString = element.className, nameIndex = classString.indexOf(className);
	    if (nameIndex == -1) {
	        classString += ' ' + className;
	    }
	    else {
	        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
	    }
	    element.className = classString;
	}

	// Open slideout menu
	document.getElementById('js-hamburger').addEventListener('click', function() {
	    toggleClass(document.getElementById('js-nav'), 'nav-open');
	});

	// Close slideout menu
	document.getElementById('js-close').addEventListener('click', function() {
		toggleClass(document.getElementById('js-nav'), 'nav-open');
	});

	// Mobile dropdown
	var mobileDropLink = document.getElementById('js-nav-mobile-dropdown');

	mobileDropLink.addEventListener('click', function() {
		toggleClass(document.getElementById('js-nav-mobile-sub'), 'mobile-nav-sub-show');
	});

	// Mobile dropdown back button
	var back = document.getElementById('js-nav-back');
	back.addEventListener('click', function() {
		toggleClass(document.getElementById('js-nav-mobile-sub'),'mobile-nav-sub-show');
	});

}());