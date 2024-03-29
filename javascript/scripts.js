
function findTotal(){
    var arr = document.getElementsByName('qty');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot;
}


function Total(){
	total_amount = tokneneng_t + turon_t + calamares_t + banana_t;
   document.getElementById('totalbill').value = total_amount;
}


function Reset() {
	var arr= document.getElementsByName('qty')
	 for(var i=0;i<arr.length;i++){
		 arr[i].value = "";
    }
	
	var arr2= document.getElementsByName('text')
	 for(var i=0;i<arr2.length;i++){
		 arr2[i].value = "";
    }
	
	document.getElementById('totalbill').value = "";
	
}


 