
window.onload = function(){

    for(let i=1;i<this.document.getElementById('root').childNodes.length;i++){


        if(this.document.getElementById('root').childNodes[i].nodeType === 1){
            this.document.getElementById('root').childNodes[i].addEventListener('click', (event) =>{
                var waitingForClick = false;

                switch (event.detail) {
                case 1: // первый клик
                    waitingForClick = setTimeout(function() {
                        console.log("Hi"); 
                        let copyElement = this.document.getElementById(event.target.id).cloneNode(true);
                        this.document.getElementById('root').childNodes[1].prepend(copyElement);
                        
                    }, 1000);
                    break;
                default : // больше чем один клик
                    if (waitingForClick) { // отменить ждущий клик
                        clearTimeout(waitingForClick);
                        waitingForClick = false;
                    }
                    console.log("Bye");
                    if(event.target.id){
                        this.document.getElementById(event.target.id).remove();
                    }
                    
                    break;
                }
            });

        }
    }

}