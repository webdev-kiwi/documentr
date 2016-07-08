document.addEventListener('DOMContentLoaded', function() {

    var jsBrowserMenu = document.getElementById("js_browser_menu").innerHTML,
        originalBodyCopy = document.body.innerHTML;
    
    var newBodyCopy = "<div id=\"layout\">";
        newBodyCopy += jsBrowserMenu;
        newBodyCopy += originalBodyCopy;
        newBodyCopy += "</div>";

    var replaceBodyCopy = document.createElement("body");
        replaceBodyCopy.innerHTML = newBodyCopy;
    
    document.body = replaceBodyCopy;
    
    var contentHead = document.querySelectorAll("h1");
    var i;
    for (i = 0; i < contentHead.length; i++) {
        contentHead[i].className = "content-heading";
    }

    var contentSubhead = document.querySelectorAll("h2");
    var i;
    for (i = 0; i < contentSubhead.length; i++) {
        contentSubhead[i].className = "content-subhead";
    }

    var responsiveImage = document.querySelectorAll("img");
    var i;
    for (i = 0; i < responsiveImage.length; i++) {
        if (responsiveImage[i].className != "fixed-size") {
            responsiveImage[i].className = "pure-img";
        }
    }

    var codeBlock = document.querySelectorAll("pre");
    var i;
    for (i = 0; i < codeBlock.length; i++) {
        codeBlock[i].className = "code";
    }

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    if (menuLink !== null) {
        menuLink.onclick = function (e) {
            var active = 'active';

            e.preventDefault();
            toggleClass(layout, active);
            toggleClass(menu, active);
            toggleClass(menuLink, active);
        };
    }

    WebFontConfig = {
        google: { families: [ 'Open+Sans:400,700:latin' ] }
    };

    (function() {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();

});