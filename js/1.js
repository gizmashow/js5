window.onload = function(){

    buttChanged.onclick = () =>{
        let idElement = document.getElementById('idChangedData');
        console.log(document.getElementById('firstBox').outerHTML);
        //document.getElementById('firstBox').outerHTML = '<div></div>';
        console.log(document.getElementById('firstBox').innerHTML);
        document.getElementById(idElement.value).addEventListener("click", () => {document.getElementById(idElement.value).innerHTML = document.getElementById("changedData").value});
    }
}
