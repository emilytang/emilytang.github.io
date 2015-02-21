function element (){
	var h = window.innerHeight;
	document.getElementById('home').style.height = h + 'px';
	document.getElementById('aboutme').style.height = h + 'px';
	document.getElementById('blog').style.height = h + 'px';
	document.getElementById('contactme').style.height = h + 'px';
}

function slideAnimate(){
	var i = document.getElementById('span');
	var h = window.innerHeight;
	var x = 2*h;
	var y = 3*h;
	var Yoffset = window.pageYoOffset;

	if(Yoffset < h){
	i.style.left = "0px";
	}
	else if(Yoffset < (2*h)){
	i.style.left = "100px";
	}
	else if(Yoffset < (3*h)){
	i.style.left = "200px";
	}
	else if(Yoffset === (3*h)){
	i.style.left = "300px";
	}
}

window.addEventListener('scroll', slideAnimate);
window.addEventListener('load', element);
window.addEventListener('resize', element);

