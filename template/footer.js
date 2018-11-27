let source = $('#footer-template').html()
let footerTemplate = Handlebars.compile(source)
let context = "<footer>kentaro kameyama copyright 2018</footer>"
$('body').append(footerTemplate(context))