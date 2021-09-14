function formatText() {
    //TODO create a new paragraph element which holds no more than 3 sentences from the given input.

	let input = document.getElementById("input").textContent;
	let output = document.getElementById("output");

	//We make new array from the sentences
	let array = input.split(".");

	for (let index = 0; index < array.length; index++) {

		//The check is to take the order of the sentence and to take the remainder of the division
		let checkLength = (index + 1) % 3;

		if (checkLength === 1){
		//We are adding opening <p> for the 1st sentence and also dot in the end, because split removes it
			array[index] =  "<p>" + array[index] + ".";
		}

		if (checkLength === 2){
			array[index] = array[index] + ".";
		}

		//We are closing the <p> for the last sentense.
		if (checkLength === 0){
			array[index] = array[index] + "." + "</p>";
		}
	} 

	//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object)
	formatedText = array.join("");
	output.innerHTML = formatedText;
	let formatItBtn = document.getElementById("formatItBtn");
	formatItBtn.style.display = "none";
	//Accordion functionality
	let hideBtn = document.createElement("button");
	hideBtn.innerHTML = "Hide";
	hideBtn.type = "button";
	let paragraphs = document.querySelectorAll("#output > p");
	console.log(paragraphs);

	hideBtn.textContent == "Hide";
	output.appendChild(hideBtn);
	hideBtn.onclick = function () {
		if ( hideBtn.textContent == "Hide" ) {
			paragraphs.forEach((el) =>{
				el.style.display = "none";
			})
			
			hideBtn.textContent = "Show";
		}
		else {
			// console.log("yes");
			paragraphs.forEach((el) =>{
				el.style.display = "block";
			})
			hideBtn.textContent = "Hide";
		}
	  };
	
}
function addItems() {
	// TODO: Create new list item with posibility to remove it

	//Adding new li

	let items = document.getElementById("items");
   let newListItemText = document.getElementById("newText");
   let li = document.createElement("li");
   let deleteCode = "<a href='#formItems'>[Delete]</a>"

   if (newListItemText.value){    	
	   li.textContent = newListItemText.value;
	   li.innerHTML = `${li.textContent} ${deleteCode}`;	
	   if (li.textContent){
		   items.appendChild(li);
	   }		
   }   

   
   //Functionality of Delete;

   let listItems = document.querySelectorAll("#items li");
   let deleteSpan = document.querySelectorAll("#items li a");

   for (const el of deleteSpan){	
	   el.addEventListener("click", deleteItem);
	   function deleteItem(){
		   el.parentNode.remove();
		   return;	
	   }
   }

   //Clearing the field for inserting the text for the new li
   newListItemText.value = "";
}

function DelAll(){	
   //Delete all button
   let takeListItems = document.querySelectorAll("#items li");
	   if (takeListItems){		
		   for (const el of takeListItems){	
			   el.remove();
		   }			
	   }
}

function solve() {

	//create a functionality that keeps track of how many times a
	//specific site has been visited.
  
	// Null the text in the paragrah
	let text = document.querySelectorAll(".link p");
	
	let clicks = 0;
	for (p of text ) {
	  p.textContent = `visited ${clicks} times`;
	} 
  
	//Transforming object to an array and adding Event Listener on the links
	const divs = Object.values( document.querySelectorAll(".link") )
  
	for (let index = 0; index < divs.length; index++){
	  // console.log(divs[index]);    
  
	  //Take the children of the element
	  let divA = divs[index].children[0];
	  let divP = divs[index].children[1];
	  
	  //Comparison variable
	  let x;
	  divA.addEventListener("click", counter);
  
	  function counter(e){ 
		let target = e.currentTarget; 
  
		//First make the Comparison to be the target
		if(clicks == 0)
		  {
			x = target;
			console.log("0", x);        
		  }  
  
		//Increase the counter for the current link
		  if (target == x){                     
			clicks++;
			divP.textContent = `visited ${clicks} times`;
			console.log("=", x);
		  }
  
		//If the user click on new link - start all over
		if (target != x){
		  clicks = 0;
		  clicks++;
		  divP.textContent = `visited ${clicks} times`;
		  x = target;
		  console.log("!", x); 
		} 
  
	  }
	}
  }

//Play animation when content get into view  
$(document).ready(function(){
	$(document).scroll(function(evt){
		if($(this).scrollTop() >= $('.wrapper-services').position().top - $(window).height()/2+20){
	  		$('.wrapper-services li').css({display: 'block'});
		  	$('.wrapper-services li').addClass('animate__flipInY')
	  	}
		if($(this).scrollTop() >= $('.wrapper-skills').position().top - $(window).height()/2+20){
			$('.wrapper-skills li').css({display: 'block'});
			$('.wrapper-skills li').addClass('animate__flipInX')
		}
	});
});