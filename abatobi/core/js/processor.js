
$(document).ready(function() {
	/*file:///C:/Users/Mgreg/Documents/DOC/django.pdf#section.6.6*/
	const request = new Request(
		/* URL */
		{headers: {'X-CSRFToken': csrftoken}}
	);
	fetch(request, {
		method: 'POST',
		mode: 'same-origin' // Do not send CSRF token to another domain.
		}).then(function(response) {
		// ...
	});

	function loadjscssfile(filename, filetype){
		if (filetype=="js"){ //if filename is a external JavaScript file
			var fileref=document.createElement('script')
			fileref.setAttribute("type","text/javascript")
			fileref.setAttribute("src", filename)
		}
		else if (filetype=="css"){ //if filename is an external CSS file
			var fileref=document.createElement("link")
			fileref.setAttribute("rel", "stylesheet")
			fileref.setAttribute("type", "text/css")
			fileref.setAttribute("href", filename)
		}
		if (typeof fileref!="undefined")
			document.getElementsByTagName("head")[0].appendChild(fileref)
	}

	// add script in header document.head.
	var filesadded="" //list of files already added
 
	function checkloadjscssfile(filename, filetype){
		if (filesadded.indexOf("["+filename+"]")==-1){
			loadjscssfile(filename, filetype)
			filesadded+="["+filename+"]" //List of files added in the form "[filename1],[filename2],etc"
		}
		else
			alert("file already added!")
	}
	
	checkloadjscssfile("https://maps.googleapis.com/maps/api/js?sensor=true&libraries=places", "js") //success
	checkloadjscssfile("js/place-picker/jquery.placepicker.js", "js") //redundant file, so file not added
	$(".placepicker").placepicker();
});