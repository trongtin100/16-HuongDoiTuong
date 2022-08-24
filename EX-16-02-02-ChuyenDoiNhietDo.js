function Temperature(c){
    this.c = c;

    this.getc = function (){
        this.c = c;
    }
    this.setc = function (){
        this.c = c;
    }
    this.getTransitctof = function (){
        return ((this.c*9/5) + 32);
    }
    this.getTransitctok = function (){
        return (this.c+273.15);
    }
}
let temperature = new Temperature(25);
let c = temperature.getc();

let f = temperature.getTransitctof();
let k = temperature.getTransitctok();

alert("DoF la:" + f + "doK la:" + k);
document.write("DoF la:" + f +"<br/>" + "doK la:" + k);