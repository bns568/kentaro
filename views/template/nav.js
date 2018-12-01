let nav = $('#nav-template').html("<p id='nav-main'></p>")
$('#nav-main').append("<p class='shop'>shop men</p>")
$('#nav-main').append("<p class='shop'>shop women</p>")
let navTemplate = Handlebars.compile(nav)