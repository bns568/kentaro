let footer = $('#footer-template').html("<footer id='footer-main'></footer>")
$('#footer-main').append("<div id='footer-a'>contact us</div>")
    $('#footer-a').append('<p class="footer-text">+1-888-888-8888</p>')
    $('#footer-a').append('<a class="link" href = "../../views/pages/contact.html"><p class="footer-text" id="email-text">email</p></a>')
    $('#footer-a').append('<p class="footer-text"></p>')
$('#footer-main').append("<div id='footer-b'>social media</div>")
    $('#footer-b').append('<a class="link" href="https://www.instagram.com/kentarokameyama/" target="_blank"><p class="footer-text"><img id="instagram" src="../photos/icons/InstaIcon.png"></p></a>')
$('#footer-main').append("<div id='footer-c'>newsletter & press</div>")
    $('#footer-c').append('<p class="footer-text">1</p>')
    $('#footer-c').append('<p class="footer-text">2</p>')
    $('#footer-c').append('<p class="footer-text">3</p>')
$('#footer-main').append("<div id='footer-copyright'>kentaro kameyama copyright 2018</div>")
let footerTemplate = Handlebars.compile(footer)
