

window.onload = function(){
    var timer__data = document.getElementById("timer__data");
    var date_start = new Date("September 1 2020 00:00:00");

    setInterval(function(){
        var today = new Date(); 
        timer__data.innerHTML = today.toDateString() + '<br>' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    }, 1000);

    let twoD_transform = ['translate','matrix','translateX','translateY','scale','scaleX','scaleY','skew','skewX','skewY','rotate'];

    let random = (min, max) =>{
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    let randomDouble = (min,max) =>{
        return Math.random() * (max - min) + min;
    }

    console.log(twoD_transform[random(0,11)]);

    

    timer.onclick = () =>{

        let randomArr_transform = twoD_transform[random(0,11)];
        
        if(randomArr_transform === 'translate'){
            randomTwoD_transform = randomArr_transform + '(' + String(random(-50,50)) + 'px,' + String(random(-50,50)) + 'px)';
            this.console.log(randomTwoD_transform);
        }
        else if(randomArr_transform === 'translateX' || randomArr_transform === 'translateY'){
            randomTwoD_transform = randomArr_transform + '(' + String(random(-50,50)) + 'px)';
            this.console.log(randomTwoD_transform);
        }
        else if(randomArr_transform === 'scale'){
            randomTwoD_transform = randomArr_transform + '(' + String(randomDouble(-1,2)) + ',' +  String(randomDouble(-1,2)) + ')';
            this.console.log(randomTwoD_transform);
        }
        else if(randomArr_transform === 'scaleX' || randomArr_transform === 'scaleY'){
            randomTwoD_transform = randomArr_transform + '(' + String(randomDouble(-1,2)) + ')';
            this.console.log(randomTwoD_transform);
        }
        else if(randomArr_transform === 'matrix'){
            randomTwoD_transform = randomArr_transform + '(' + this.String(randomDouble(-1,2)) + ',' + this.String(randomDouble(-1,2)) + ',' + this.String(randomDouble(-1,2)) + ','
            + this.String(randomDouble(-1,2))  + ',' + this.String(random(-50,50)) + ',' + this.String(random(-50,50)) + ')';
            this.console.log(randomTwoD_transform);
        }
        else if(randomArr_transform === 'skew'){
            randomTwoD_transform = randomArr_transform + '(' + this.String(random(-50,51)) + 'deg' + ',' + this.String(random(-50,51)) + 'deg' + ')';
            this.console.log(randomTwoD_transform);
        }
        else if(randomArr_transform === 'skewX' || randomArr_transform === 'skewY'){
            randomTwoD_transform = randomArr_transform + '(' + this.String(random(-50,51)) + 'deg' + ')';
            this.console.log(randomTwoD_transform);
        }
        else if(randomArr_transform === 'rotate'){
            randomTwoD_transform = randomArr_transform + '(' + this.String(random(0,721)) + 'deg' + ')';
            this.console.log(randomTwoD_transform);
        }
        else{
            randomTwoD_transform = ''
        }

        document.getElementById('timer').style.OTransform = randomTwoD_transform;
        document.getElementById('timer').style.MsTransform = randomTwoD_transform;
        document.getElementById('timer').style.MozTransform = randomTwoD_transform;
        document.getElementById('timer').style.WebkkitTransform = randomTwoD_transform;
        document.getElementById('timer').style.transform = randomTwoD_transform;
        
    }
}