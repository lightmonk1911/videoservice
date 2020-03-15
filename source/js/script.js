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
  scrollInertia: '330',
  mouseWheel: {
      deltaFactor: 50
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
