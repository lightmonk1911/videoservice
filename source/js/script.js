function tabs(evt, typeTab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(typeTab).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


(function($){
  $(window).on("load",function(){
      $(".tv").mCustomScrollbar();
  });
})(jQuery);

$(".tv").mCustomScrollbar({
  axis: 'y',
  theme: 'inset-2-dark',
  scrollInertia: '1500',
  mouseWheel: {
      deltaFactor: 80
  }
});


var modal = document.querySelector(".login");
var btn = document.querySelector(".login-btn");

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var logout = document.querySelector(".logout");
var userhide = document.querySelector('.user-hide');

document.getElementById('entry').onclick = function () {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let out = document.getElementById('out');

	if (username === 'kostya' && password === '12345') {
    out.innerHTML = 'Константин К.';
    btn.style.display = "none";
    modal.style.display = "none";
    logout.style.display = "block";
  }

	var serialObj1 = JSON.stringify(username);
	var serialObj2 = JSON.stringify(password);

  localStorage.setItem('username', serialObj1);
  localStorage.setItem('password', serialObj2);
  userhide.style.display = (userhide.style.display == 'inherit') ? '' : 'inherit';
  localStorage.setItem('hide', userhide.style.display);

	var returnObj1 = JSON.parse(localStorage.getItem('username'))
	var returnObj2 = JSON.parse(localStorage.getItem('password'))
}

if(localStorage.getItem('hide') == 'inherit') {
  document.querySelector('.user-hide').style.display = 'inherit';
  out.innerHTML = 'Константин К.';
  btn.style.display = "none";
  logout.style.display = "block";
}

logout.onclick = function() {
  location.reload();
  localStorage.clear();
}
