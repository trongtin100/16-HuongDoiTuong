let HinhTron = function (bankinh){
    this.radius = bankinh;
    this.getRadius=function (){
        return bankinh;
    }
    this.getArea = function (){
        return Math.PI*bankinh*bankinh;
    }
}
let vongtron = new HinhTron(2);
let radius = vongtron.getRadius();


let area = vongtron.getArea();
alert("radius:" + radius + "; area:" + area);
document.write("radius:" + radius + "; area:" + area);
document.write()