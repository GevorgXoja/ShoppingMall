function openHeaderPadval() {
    document.getElementById('menu').className = 'no-active';
    document.getElementById('close').className = 'active' ;
    document.getElementById('header-padval').className = 'active' ;
}

function closeHeaderPadval() {
    document.getElementById('close').className = 'no-active';
    document.getElementById('menu').className = 'active' ;
    document.getElementById('header-padval').className = 'no-active' ;
}