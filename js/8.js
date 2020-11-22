
window.onload = function(){

    let random = (min, max) =>{
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    let input = this.document.createElement('input');
    
    input.type = 'button';
    input.style.position = 'absolute';
    input.id = 'slavik';
    input.value = 'Догони';

    mouseMoved = this.document.getElementById('root').childNodes[random(0, this.document.getElementById('root').childNodes.length)];
    while(mouseMoved.nodeType !== 1){
        mouseMoved = this.document.getElementById('root').childNodes[random(0, this.document.getElementById('root').childNodes.length)];
    }
    mouseMoved.appendChild(input);
    
    var elemLeft, elemTop, maxElemLeft, maxElemTop, elem;

    elem = document.getElementById('slavik');

    maxElemLeft = document.documentElement.clientWidth - elem.offsetWidth;
    maxElemTop = document.documentElement.clientHeight - elem.offsetHeight;

    elem.onmousemove = handler;

    function handler() {
    elemLeft = Math.random() * maxElemLeft;
    elem.style.left = elemLeft + 'px';
    elemTop = Math.random() * maxElemTop;
    elem.style.top = elemTop + 'px';
    //console.log(elemLeft+' - '+elemTop);
    }
}