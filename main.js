

$(function ()
{

    //Collapsible Menu
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

    $('img').on('click', function ()
    {
        var URL=this.getAttribute('src');
    window.open(URL,'_blank','',''); 
        // $(this).css('width',"120%");
        // $(this).css('height',"120%");
    });
});


    $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
    
    $("#menu-icon").on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("active");
});


