$(document).ready(function(){
 
//RELEASE 0: 
  //Link this script and the jQuery library to the jquery_example.html file and analyze what this code does. 
 
$('body').css({'background-color': 'yellow'})
 
//RELEASE 1:
$(document).ready(function() {
	$("h1").click(function() {
		$('h1').css({'font-style': 'italic'})
	});


$('img').on('mouseover', function(e){
     e.preventDefault()
    $(this).attr('src', 'http://www.adoptapond.info/guide_images/Chorus%20Frog.jpg')
  })

$('img').on('mouseout', function(e){
     e.preventDefault()
    $(this).attr('src', 'http://www.virginiaherpetologicalsociety.com/amphibians/frogsandtoads/upland-chorus-frog/sp_Upland%20Chorus%20Frog%20(Pseudacris%20feriarum%20feriarum)003.jpg')
  })
 });
 
//RELEASE 2: 
  // Add code here to modify the css and html of DOM elements
 
 
//RELEASE 3: Event Listener
  // Add the code for the event listener here 
 
 
//RELEASE 4 : Experiment on your own
 
 
 
 
 
 
})  // end of the document.ready function: do not remove or write DOM manipulation below this.
