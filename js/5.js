
window.onload = function(){
    
   for(let i=0; i< this.document.getElementById('root').childNodes.length;i++){
        this.document.getElementById('root').childNodes[i].addEventListener('click', (e) =>{
            if(this.document.getElementById('idForTable').value === e.target.id){
                
                table = this.document.createElement('table');
                table.border = '2px';
                for(let i=0;i<this.document.getElementById('row').value;i++){
                    let row = this.document.createElement('tr');
                    for(let j=0;j<this.document.getElementById('cell').value;j++){
                        let cell = this.document.createElement('td');
                        cell.innerHTML = j;
                        row.appendChild(cell);
                    }
                    table.appendChild(row);
                }
                let today = new this.Date();
                table.id = 'tabl' + today.getHours() + today.getMinutes();
                this.document.getElementById(e.target.id).after(table);
                
            }
        })
   }
}