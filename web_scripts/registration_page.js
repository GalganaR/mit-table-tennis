
/*********************
***Cap events at 3****
**********************/
function checkEvents(j){
  var events=0;
  for(var i=0; i<document.form['fEvents[]'].length; i++){
    if(document.form['fEvents[]'][i].checked==true){
      events=events+1;				      
    }
    if(events>3){
      document.form['fEvents[]'][j].checked=false;
      return false;
    }
  }
}

/****************************
***Compute and print cost****
*****************************/
function is_int(value){ 
  if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
      return true;
  } else { 
      return false;
  } 
}

function computeCost(){
	var event_costs = new Array(30, 20, 20, 20, 20, 20, 10, 10);
	var event_items = new Array("Open Singles", "U2100 Singles", "U1800 Singles", "U1500 Singles", "U1200 Singles", "Unrated Singles", "Open Doubles", "U2800 Doubles");
	
	var total_cost=0;
	var events = 0;

	var print_items = "";
	var print_fee = "";

	for(var i=0; i<document.form['fEvents[]'].length; i++){
		if(document.form['fEvents[]'][i].checked) {
			total_cost += event_costs[i];
			events += 1;

		    print_items += event_items[i] + "<br>";
			print_fee += "$"+event_costs[i] + ".00<br>";
		}
	}

	if(events==3) {
		total_cost-=5;
		print_items += "3 Event Discount<br>";
		print_fee += "-$5.00<br>";
	}

  if(document.form.fStudent[0].checked==1 && events > 1) {
		total_cost-=10; // changed from $5 to $10 for 2015 fall open
		print_items += "Student Discount<br>";
		print_fee += "-$10.00<br>";
//		document.getElementById("student_requirement").innerHTML = "($5 discount for 2 events or more; valid student ID required at check-in)";
	}

	document.form.fTotalFee.value = "$"+total_cost; // for php
    document.form.fFeeItemListing.value = print_items; // for php
    document.form.fFeeListing.value = print_fee; // for php
	print_items+="<hr>";
	print_fee+="<hr>";
	document.getElementById("costItems").innerHTML=print_items;
	document.getElementById("costFee").innerHTML=print_fee;
	document.getElementById("costTotal").innerHTML="$"+total_cost+".00";


}

/*******************************************
*****Customize form based on doubles********
********************************************/
function doubleOpenPartner(){
    if (document.getElementById("OpenDoubles").checked) {
		document.getElementById("openDoublesPartner").style.display="block";
		document.form.fODpartner.required="required";
	}
	else {
		document.getElementById("openDoublesPartner").style.display="none";
		document.form.fODpartner.removeAttribute("required");
		document.form.fODpartner.value="";
	}
}

function doubleU2800Partner(){
    if (document.getElementById("U2800Doubles").checked) {
		document.getElementById("U2800DoublesPartner").style.display="block";
		document.form.fU2800partner.required="required";
	}
	else {
		document.getElementById("U2800DoublesPartner").style.display="none";
		document.form.fU2800partner.removeAttribute("required");
		document.form.fU2800partner.value="";
	}
}

/*******************************************
*****Customize form based on membership*****
********************************************/
/*
function isMember(i){
		//is member
    if(i==1) {
      document.getElementById("usattInfo").style.display="block";
      document.getElementById("usattMembership").style.display="none";
	document.form.fMemberNumber.required="required";
	document.form.fExpires.required="required";
			document.getElementById("usattApp").style.display="none";
			document.form.fStreet.removeAttribute("required");
			document.form.fCity.removeAttribute("required");
			document.form.fState.removeAttribute("required");
			document.form.fZip.removeAttribute("required");
			document.form.fPhone.removeAttribute("required");
			//default all values
      document.form.fMembershipFee.value="0";			
			document.form.fStreet.value="";
			document.form.fCity.value="";
			document.form.fState.value="";
			document.form.fZip.value="";
			document.form.fPhone.value="";
			document.form.fBirthdate.value="";
      document.form.fMemberNumber.value="";
      document.form.fExpires.value="";
			document.form.fRating.required="required";
    }     
		//is not member
    else {
      document.getElementById("usattInfo").style.display="none";
			document.getElementById("usattApp").style.display="block";
      document.getElementById("usattMembership").style.display="block";
      document.form.fMembershipFee.value="0";
      document.form.fMemberNumber.value="";
      document.form.fExpires.value="";
	document.form.fMemberNumber.removeAttribute("required");
	document.form.fExpires.removeAttribute("required");
			document.form.fStreet.value="";
			document.form.fCity.value="";
			document.form.fState.value="";
			document.form.fZip.value="";
			document.form.fPhone.value="";
			document.form.fBirthdate.value="";
			document.form.fStreet.required="required";
			document.form.fCity.required="required";
			document.form.fState.required="required";
			document.form.fZip.required="required";
			document.form.fPhone.required="required";
			document.form.fBirthdate.required="required";
			document.form.fRating.removeAttribute("required");
    }
}
*/
/*******************************************
****Check mandatory fields on submission****
********************************************/
function checkValid(){
    var event=0;
    for(var i=0; i<document.form['fEvents[]'].length; i++){
       if(document.form['fEvents[]'][i].checked==true) {
          event=1;
          break;
       }
    }
    if(event==0) {
       alert("Please select events to enter.");
       document.form['fEvents[]'][0].focus();
       return false;
    }
/*    if(document.getElementById("OpenDoubles").checked && document.form.fMembershipFee.value==0) {
				alert("Please enter doubles partner.");
        document.form.fODpartner.focus();
        return false;
    }
    elseif(document.getElementById("U2800Doubles").checked && document.form.fU2800partner.value
    else return true; */
}



