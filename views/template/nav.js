let nav = $('#nav-template').html("<p id='nav-main'></p>")
$('#nav-main').append("<a class='link' href = '../../views/pages/index.html'><p class='shop'>home</p></a>")
$('#nav-main').append("<a class='link' href = '../../views/pages/shop.html'><p class='shop'>shop women</p></a>")
$('#nav-main').append("<a class='link' href = '../../views/pages/about.html'><p class='shop'>about</p></a>")
$('#nav-main').append("<a class='link' href = '../../views/pages/contact.html'><p class='shop'>contact us</p></a>")
$('#nav-main').append("<p class='shop'>projects</p>")
let navTemplate = Handlebars.compile(nav)