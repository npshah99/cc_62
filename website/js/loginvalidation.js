function valid()
{
	if((firstname() && pwd()) != 0)
	{
		location.href="home.html";
		return true;
		
	}
}

function firstname()
{
	var username =document.forms["myform"]["uname"].value;
	/* if(username=="")
	{ 
		document.getElementById("u").innerHTML="Name must be filled out";
		return false;
	} */
	else
	{
	    var data = username;
        var result = data.match(/^[a-zA-Z]*$/);
        if (result != data) 
        {
			document.getElementById("u").innerText="Enter only alpha";
		    return false;
        }
		else
		{
			document.getElementById("u").innerText=" ";
			return true;
		}
	}
}

function pwd()
{
 var pwd=document.forms["myform"]["pwd"].value;
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
