var cookiesCheck=false;

  $(document).ready(function(){
    $('select').formSelect();
    cookiesCheck=sessionStorage.getItem("cookiesCheck");
    showCookieMessage();
    $('#copyrightDate').text(new Date().getFullYear())
  })


  $(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'swing');
        event.preventDefault();
    });
  });
  
/* CUSTOM NAV */

$('#btnNavMobile').click(function(){
  modalStat=$('.modalNav').css('display');
  $('.navContent').html($('nav ul').html())
  navHeight=$('.navContent').height();
  winHeight=$(window).height();
  console.log(winHeight)

  marginTop=(winHeight-navHeight)/4;
  $('.navContent').css('margin-top',marginTop);

  if(modalStat=='none'){
    $('.modalNav').fadeIn(300)
  }else{
    $('.modalNav').fadeOut(300)
  }
})

$('.modalOverlay, .navContent').click(function(){
  $('.modalNav').fadeOut(300)
})


// MULTIPLE FILES SELECT - MULTIPLE FILES SELECT - MULTIPLE FILES SELECT - MULTIPLE FILES SELECT - 
// MULTIPLE FILES SELECT - MULTIPLE FILES SELECT - MULTIPLE FILES SELECT - MULTIPLE FILES SELECT - 
// MULTIPLE FILES SELECT - MULTIPLE FILES SELECT - MULTIPLE FILES SELECT - MULTIPLE FILES SELECT - 
var nbFiles=1;
function addAFiles(elm){
  fileName=elm.val().split('fakepath\\');
  if(elm.val()){
    if(nbFiles==1 || nbFiles%4==0){
      var inputStructur='<div class="row filesRow">';
    }else{
      var inputStructur='';
    }
    inputStructur+='<div class="input-field col s12 m3">';
    inputStructur+='<input type="file" accept=".pdf,.doc,image/*" name="file[]" id="file'+nbFiles+'" class="inputFiles" onChange="addAFiles($(this))" />';
    inputStructur+='<label class="smallLabelFile" for="file'+nbFiles+'">Choose a file</label>';
    inputStructur+='<button class="removeFile" onclick="removInFile($(this))"><i class="fas fa-minus"></i></button></div>';
    if(nbFiles==1 || nbFiles%4+1==0){
      inputStructur+='</div>';
      elm.parent().parent().after(inputStructur);
      elm.parent().children('label').text(fileName[1])
    }else{
      elm.parent().after(inputStructur);
      elm.parent().children('label').text(fileName[1])
    }
    nbFiles++;
  }
}

function removInFile(elm){
  if(elm.parent().parent().children().length==1){
    elm.parent().parent().remove();
  }else{
    elm.parent().remove();
  }
  nbFiles--;

}




$('#closePopup').click(function(){
  $('#popupLegal').fadeOut(150);
  sessionStorage.setItem('cookiesCheck', 'true');
})

function showCookieMessage(){
  if(cookiesCheck=='true'){
    console.log('cookie true')
    $('#popupLegal').hide();
  }else{
    console.log('cookie false')

    $('#popupLegal').show();
  }
}

var scene3 = document.getElementById('scene3');
var parallax = new Parallax(scene3);
var scene5 = document.getElementById('scene5');
var parallax = new Parallax(scene5);
