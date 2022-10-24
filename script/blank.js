document.body.addEventListener(function(e) {
    var target = e.target;
    do {
        if (target.nodeName.toUpperCase() === 'A' && target.href) {
            target.target = '_blank';
            break;
        }
    } while (target = target.parentElement);
}, true);