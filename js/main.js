                                          
window.onload = function(){
    
    

    butt.onclick = () =>{
        let idElement = document.getElementById('idData');
        document.getElementById(idElement.value).addEventListener("click", () => {document.getElementById(idElement.value).style.cssText=document.getElementById("effectsData").value});
    }

}
