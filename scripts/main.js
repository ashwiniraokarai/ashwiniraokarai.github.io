
//Replace the existing h1 text
var h1Element = document.querySelector('h1'); //Note: This neither an alert-box nor written to the console. This is actually giving you a reference TO the web page's h1. Sexy!

h1Element.textContent = 'Hey, Hooman!'; //Replace the existing h1 text with "Hey Hooman" simply by assigning new text to h1





/*----------------------------------------------------------------------------------------------
--------------------------------------Event handlers-------------------------------------------*/


/***************************************Image-changer handler***********************************/

//Getting handler on element that you want attach the event to. In this case it's the kitty image
var kittyImage = document.querySelector('img');

/*Logic: Everytime you click the image (element), get the src value. This will tell you what the 
current image is after clicking it. If it's the default, then change it.

It's crucial that the check (if-condition) is INSIDE of the event-handler function. Doing it earlier will only grab the value before even the first click-event happened. So, src value is always going to hold the default image value and therefore defeating the purpose of the check*/


/*Event type: Click-event (most common)
Event-handlers are essentially written inside nameless functions
*/

	kittyImage.onclick = function(){
		
		var imageAttribSrc = kittyImage.getAttribute('src');
		if(imageAttribSrc === 'images/kitty3.jpg' ){ //Check if 'src' value is equal to original 
			//alert(imageAttribSrc); //Checkpoint only
			alert('Ouch. You just poked poor kitty!');
			kittyImage.setAttribute('src','images/kitty5.jpg'); //Then force other image to be loaded inside the 'img' element
		}//Else let the 'src' value to wrap back to the original (leave it be)
		
	}

	
/**********************************Personalized welcome title handler****************************/
	
/*Logic: 

IF the user is navigating for the first name:
	Prompt the user for their name
	Store the name on local storage of the browser so the value can persist for future visits 
	(v/s session storage that loses value when the session/ page closes)
	Replace the page title with the name of the user's name received
	Display the personalized title
ELSE
	Retrieve the previously entered/ stored name
	Replace the page title with the name of the user's name received
	Display the personalized title

In general:
IF the user wants to CHANGE their stored name, give them the option (via a button-click event).
This is essentially repeating the same code as in the else-portion. Might as well wrap in a function?

*/
	
	
	
function setUserName(){   //store the username for future use
	var usersName = prompt('Enter user name');
	if(usersName != null){
		localStorage.setItem('name',usersName);
		return usersName;
	}
}

function getUserName(){  //get previously stored username 
	var storedName = localStorage.getItem('name');
    return storedName;
}


function constructHeading(nameToDisplay){
	h1Element.textContent ='Hey, ' +nameToDisplay;
}

if(localStorage.getItem('name')){ //user has navigated at least once and set a name in the past
	var storedName = getUserName('name');
	constructHeading(storedName);
	
}else{							  //user navigates for the first time (no stored name)
	var usersName = setUserName();
	constructHeading(usersName);
}


var button = document.querySelector('button'); //user elects to change the name
button.onclick = function(){
	var usersName = setUserName();  
	constructHeading(usersName);
}
	




