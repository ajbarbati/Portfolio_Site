
//Slider that cycles through projects
var slideIndex = 1
showDivs(slideIndex)

function plusDivs(n) {
  showDivs(slideIndex += n)
}

function showDivs(n) {
  var i
  var card = document.getElementsByClassName("card")
  
  if (n > card.length) {
      slideIndex = 1
    }
  if (n < 1) {
      slideIndex = card.length
    } 
  
  for (i = 0; i < card.length; i++) {
    card[i].style.display = "none"
  }

  card[slideIndex-1].style.display = "block"
}

// Jquery to edit css on scroll

var $rb = $('.rightBtn')
var $win = $(window)

$win.on('scroll', function () {
  var top = $win.scrollTop()
  $rb.css('transform', 'rotate(' + top + 'deg)')
})