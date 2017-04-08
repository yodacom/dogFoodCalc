//  var dogPackets = 1; 
// NOTE: If you place the Var here (instead of inside the function) it is global in scope and the multipliers below will be wrong because it is being altered by each interior answer which resets it. This means when a subsequent value is choosen, after one calc is run, then the next calculation will use the new value set during the previous selection calculation. Therefore this gives a new base multiplier for the calc rather than the desired starter number of just 1. Try uncomenting this and commenting out the one in the function and see the diff if you select diff answers one after the other.

function dogFoodCalc(e){

	var dogPackets = 1; // this is proper place for local var use
	
	e.preventDefault();

	var dogweight = document.querySelector("input[name=\"dogsize\"]:checked").value;


	if 
    (dogweight === "Large")
    {
		dogPackets = dogPackets * 2;
	} else if
    (dogweight === "Medium" )
    {
		dogPackets = dogPackets * 1.5;
	} else 
		dogPackets = 1;

	document.getElementById("dogFoodAmt").textContent = "Your Dog needs " + dogPackets +" packets of dog food";	

	return false;
}

