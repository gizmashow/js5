
window.onload = function(){


    buttAdd.onclick = () =>{
        let str = this.document.getElementById('idElements').value;

        let arr = str.split(',');
        console.log(arr);
        for(let i=0;i<arr.length;i++){
            this.document.getElementById(arr[i]).addEventListener('click',() =>{
                var newWin = window.open("about:blank", "elements", "width=200,height=200");
                
                let body = newWin.document.body;

                let ul = newWin.document.createElement('ul');

                ul.innerHTML = this.document.getElementById(arr[i]).nodeName;

                for(let j=0;j<this.document.getElementById(arr[i]).childNodes.length;j++){
                    
                    let li = newWin.document.createElement('li');
                    li.innerHTML = this.document.getElementById(arr[i]).childNodes[j].nodeName;
                    ul.append(li);
                }
                
                body.appendChild(ul);
               
            })
        }
    }

}