function valid()
{
	if((firstname() && lastname() && pwd() &&cfmpwd() && email())!= 0)
	{	
		location.href="home.html";
	}	
}

function firstname()
{
	var fname =  document.forms["myform"]["fname"].value;
	if(fname=="")
	{ 
		document.getElementById("f").innerText="First Name must be filled out";
		return false;
	}
	else
	{
	    var data = fname;
        var result = data.match(/^[a-zA-Z]*$/);
        if (result != data) 
        {
			document.getElementById("f").innerText="Enter only alpha";
		    return false;
        }
		else
		{
			document.getElementById("f").innerText=" ";
			return true;
		}
	}
}

function lastname()
{
	var lname =document.forms["myform"]["Lname"].value;
	if(lname=="")
	{ 
		document.getElementById("L").innerText="Last Name must be filled out";
		return false;
	}
	else
	{
	    var data = lname;
        var result = data.match(/^[a-zA-Z]*$/);
        if (result != data) 
        {
			document.getElementById("L").innerText="Enter only alpha";
		    return false;
        }
		else
		{
			document.getElementById("L").innerHTML=" ";
			return true;
		}
	}
}

function pwd()
{
 var pwd= document.forms["myform"]["pwd"].value;
 if(pwd=="")
 { 
	document.getElementById("p").innerText="Password must be filled out";
    return false;
 }
 else
 {
	var data=pwd;
	var result=data.match(/^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$/); 
	if(result != data)
	{
		document.getElementById("p").innerText="6 to 10 character must one digit & only aplha";
		return false;
	}
	else
	{
		document.getElementById("p").innerHTML=" ";
		return true;
	}
 }
}

function email()
{
	var email=document.forms["myform"]["emailid"].value;
	if(email=="")
	{ 
		document.getElementById("mail").innerText="email must be filled out";
		return false;
	}
	else
	{
		var data=email;
		var at = data.indexOf("@");
		var dt = data.lastIndexOf(".");
				
		if(at > dt || dt < at+2 || dt+2 >= data.length || at < 1)
		{	
			document.getElementById("mail").innerText="Enter valid email id";
			return false;		
		}
		else
		{
			document.getElementById("mail").innerHTML=" ";
			return true;
		}
	
	}
}
