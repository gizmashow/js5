
window.onload = function(){


    buttChild.onclick = () =>{
        let id = this.document.getElementById('idChildren');
        this.console.log(id.value);
        this.document.getElementById(id.value).addEventListener('click', () => { 
            var newWin = window.open("about:blank", "elements", "width=200,height=200");
            for(let i = 0; i < this.document.getElementById(id.value).childNodes.length; i++){
                newWin.document.write(document.getElementById(id.value).childNodes[i].nodeName + ' - ' + '\'' + document.getElementById(id.value).childNodes[i].innerHTML + '\'' + '<br></br>');
            }
        });
        
    }

}