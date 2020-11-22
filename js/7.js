
window.onload = function(){
    
    //console.log(this.document.getElementById('changedStyle').value);
    
    let colors = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen",
      ];

      let decorations = ['blink', 'line-through', 'overline', 'underline', 'none'];

    let random = (min, max) =>{
        return Math.floor(Math.random() * (max - min) + min);
    }
    for(let i=2;i < this.document.getElementById('root').childNodes.length;i++){

        if(this.document.getElementById('root').childNodes[i]){
            this.document.getElementById('root').childNodes[i].addEventListener('mouseover',(event) =>{
                
                let arr = this.document.getElementById('changedStyle').value.split('\n');
                if(arr.length === 1){
                    arr = this.document.getElementById('changedStyle').value.split(' ');
                }
                console.log(arr);
                

                if(this.document.getElementById(event.target.id) && arr.includes('background-color')){
                    this.document.getElementById(event.target.id).style.backgroundColor = colors[random(0,149)];
                    console.log(this.document.getElementById(event.target.id).style.backgroundColor);
                }
                if(this.document.getElementById(event.target.id) && arr.includes('color')){
                    this.document.getElementById(event.target.id).style.color = colors[random(0,149)];
                    console.log(this.document.getElementById(event.target.id).style.backgroundColor);
                }
                if(this.document.getElementById(event.target.id) && arr.includes('font-size')){
                    this.document.getElementById(event.target.id).style.fontSize = String(random(10,27)) + 'px';
                    console.log(this.document.getElementById(event.target.id).style.fontSize);
                }
                if(this.document.getElementById(event.target.id) && arr.includes('font-weigth')){
                    this.document.getElementById(event.target.id).style.fontWeight = String(random(400,1001));
                }
                if(this.document.getElementById(event.target.id) && arr.includes('border-width')){
                    this.document.getElementById(event.target.id).style.borderWidth = String(random(0,11)) + 'px';
                }
                if(this.document.getElementById(event.target.id) && arr.includes('text-decoration')){
                    this.document.getElementById(event.target.id).style.textDecoration = decorations[random(0,5)];
                }
                if(this.document.getElementById(event.target.id) && arr.includes('text-shadow')){
                    this.document.getElementById(event.target.id).style.textShadow = String(random(0,11)) + 'px ' + String(random(0,11)) + 'px ' + String(random(0,11)) + 'px ' + colors[random(0,149)];
                }
                console.log(this.document.getElementById('changedStyle').value);

                if(this.document.getElementById(event.target.id)){
                for(let j=0;j<this.document.getElementById(event.target.id).childNodes.length;j++){
                    if(this.document.getElementById(event.target.id) && arr.includes('background-color')){
                        this.document.getElementById(event.target.id).childNodes[j].style.backgroundColor = colors[random(0,149)];
                    }
                    if(this.document.getElementById(event.target.id) && arr.includes('color')){
                        this.document.getElementById(event.target.id).childNodes[j].style.color = colors[random(0,149)];
                    }
                    if(this.document.getElementById(event.target.id) && arr.includes('font-size')){
                        this.document.getElementById(event.target.id).childNodes[j].style.fontSize = String(random(0,11)) + 'px';
                    }
                    if(this.document.getElementById(event.target.id) && arr.includes('font-weigth')){
                        this.document.getElementById(event.target.id).childNodes[j].style.fontWeight = String(random(0,1001));
                    }
                    if(this.document.getElementById(event.target.id) && arr.includes('border-width')){
                        this.document.getElementById(event.target.id).childNodes[j].style.borderWidth = String(random(0,11)) + 'px';
                    }
                    if(this.document.getElementById(event.target.id) && arr.includes('text-decoration')){
                        this.document.getElementById(event.target.id).childNodes[j].style.textDecoration = decorations[random(0,5)];
                    }
                    if(this.document.getElementById(event.target.id) && arr.includes('text-shadow')){
                        this.document.getElementById(event.target.id).childNodes[j].style.textShadow = String(random(0,11)) + 'px ' + String(random(0,11)) + 'px ' + String(random(0,11)) + 'px ' + colors[random(0,149)];
                    }
                }
            }
            });
        }
    }
}