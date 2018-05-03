function phone(){
	var x = document.getElementById("myInput");
	var v = x.value;
	if (v.match(/^\d{1}$/) !== null) {
		x.value = '+' + v;
	}
	else if (v.match(/^[+].\d{4}$/) !== null) {
		x.value = v + '-';
      }
	else if (v.match(/^[+].\d{4}\-\d{3}$/) !== null)  {
		x.value = v + '-';
	}
	else if (v.match(/^[+].\d{4}\-\d{3}\-\d{2}$/) !== null)  {
		x.value = v + '-';
	}
	else if(x.value.length === 7 || x.value.length === 11 || x.value.length === 14){
		x.value = x.value.substring(0, x.value.length - 1);
	}
}