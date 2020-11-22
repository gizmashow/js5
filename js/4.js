
window.onload = function(){

    
    for(let i = 0; i < this.document.getElementById('root').childNodes.length; i++){
        document.getElementById('root').childNodes[i].addEventListener('click', () => {
            var newWin = window.open("about:blank", "elements", "width=200,height=200");
            //newWin.document.write(this.document.getElementById('root').childNodes[i]);
            this.console.log(this.document.getElementById('root').childNodes[i]);
            var element = this.document.getElementById(this.document.getElementById('root').childNodes[i].id);
            var element_style = getComputedStyle(element);

            

            function getStyle(elem){
                let styles = '';
                for(let i=0;i < element_style.length;i++){
                    styles += element_style[i] + ':' + element_style.getPropertyValue(element_style[i]) + ';\n';
                }
                return styles;
            }

            
            

            var body = newWin.document.body;
            var div = newWin.document.createElement('div');
            let name = this.document.getElementById('root').childNodes[i].nodeName;
            this.console.log(name);
            let item = newWin.document.createElement(name);
            item.style.cssText=getStyle(element);
            item.innerHTML = this.document.getElementById('root').childNodes[i].innerHTML;

            div.appendChild(item);
            body.appendChild(div);
            
        })
    }


}