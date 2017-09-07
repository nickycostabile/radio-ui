$(document).ready(function() {

	var getParametersBtn = document.getElementById('getParametersBtn');

	// can also use: window.addEventListener('load', function() { ... });
	getParametersBtn.addEventListener('click', function() {
		$('#frequency').val(getParameter('frequency'));
		$('#bandwidth').val(getParameter('bandwidth'));
		$('#gain').val(getParameter('gain'));

		console.log('frequency: ' + getParameter('frequency'));
		console.log('bandwidth: ' + getParameter('bandwidth'));
		console.log('gain: ' + getParameter('gain'));
	});

		function getParameter(theParameter) { 
		  var params = window.location.search.substr(1).split('&');
		 
		  for (var i = 0; i < params.length; i++) {
		    var p = params[i].split('=');
			if (p[0] == theParameter) {
			  return decodeURIComponent(p[1]);
			}
		  }
		  return false;
		}

	
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



	var setParametersBtn = document.getElementById('setParametersBtn');

	setParametersBtn.addEventListener('click', function() {
		var freqVal = document.getElementById('frequency').value;
		var bandwidthVal = document.getElementById('bandwidth').value;
		var gainVal = document.getElementById('gain').value;

		console.log('frequency:' + freqVal + ', bandwidth:' + bandwidthVal + ', gain:' + gainVal);

		

	});

	function setParameter(theParameter) { 

		var freqVal = document.getElementById('frequency').value;
		var bandwidthVal = document.getElementById('bandwidth').value;
		var gainVal = document.getElementById('gain').value;

		window.history.pushState(null, null, '?frequency=' + freqVal);
	}







}); // end document ready

