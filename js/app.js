$(document).ready(function() {

	// Get Parameters
	var getParametersBtn = document.getElementById('getParametersBtn');
	var url = location.href;

	getParametersBtn.addEventListener('click', function() {

		var frequency = getParameter(url, 'frequency');
		var bandwidth = getParameter(url, 'bandwidth');
		var gain = getParameter(url, 'bandwidth');

		// set form values
		$('#frequency').val(getParameter(url, 'frequency'));
		$('#bandwidth').val(getParameter(url, 'bandwidth'));
		$('#gain').val(getParameter(url, 'gain'));


		console.log('frequency: ' + frequency + ', bandwidth: ' + bandwidth + ', gain: ' + gain);
		

	}); // end event listen on getParametersBtn

	// Get Parameters from URL
	function getParameter(url, theParameter) {
			var params = window.location.search.substr(1).split('&');

			for(var i = 0; i < params.length; i++) {
				var pair = params[i].split('=');
				if(pair[0] == theParameter) {
					return decodeURIComponent(pair[1]);
				}

			}

			return false;

		} // end function getParameters



	// Set Parameters
	var setParametersBtn = document.getElementById('setParametersBtn');

	setParametersBtn.addEventListener('click', function() {
		var newParams = { 
			'frequency': frequency.value, 
			'bandwidth': bandwidth.value, 
			'gain': gain.value
		};

		var newUrl = window.location.href.split('?')[0] + '?' + jQuery.param(newParams);

		window.location.href = newUrl;

	}); // end event listen on setParameterBtn


	// Placeholder input value on page load
	document.getElementById("frequency").placeholder = getParameter(url, 'frequency');
	document.getElementById("bandwidth").placeholder = getParameter(url, 'bandwidth');
	document.getElementById("gain").placeholder = getParameter(url, 'gain');
	
		
		// All calls to .val(value) update if angular elemnt is present 
		(function($, ng) {
		  'use strict';

		  var $val = $.fn.val; // save original jQuery function

		  // override jQuery function
		  $.fn.val = function (value) {
		    // if getter, just return original
		    if (!arguments.length) {
		      return $val.call(this);
		    }

		    // get result of original function
		    var result = $val.call(this, value);

		    // trigger angular input (this[0] is the DOM object)
		    ng.element(this[0]).triggerHandler('input');

		    // return the original result
		    return result; 
		  }
		})(window.jQuery, window.angular);




}); // end document ready

