function goToPage(link) {
  $('[data-page]').hide()
  $('[data-page=' + link + ']').show()
  $('li.nav-item').each(function(){
    var href = $(this).find('a.nav-link').attr('href')
    if (href === link) {
      $(this).addClass('active')
    }
    else {
      $(this).removeClass('active')
    }
  })
  
}
//GoToMainPage
goToPage("home")

$('a').click(function(event){
  event.preventDefault()
  var href = $(this).attr('href')
  goToPage(href)
})

