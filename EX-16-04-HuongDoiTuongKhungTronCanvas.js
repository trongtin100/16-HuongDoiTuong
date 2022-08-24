function Hinhtron(x, y, bankinh){
    this.x=x;
    this.y=y;
    this.bankinh = bankinh;
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
        return "rgb(" + red + "," + blue + "," + green + ")";
}

function taoHinhtron(){
    var tin = document.getElementById("myFrame").getContext("2d");
    var bankinh = Math.floor(Math.random()*140);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var vongtron= new Hinhtron(x, y, bankinh);
    tin.beginPath();
    tin.arc(vongtron.x, vongtron.y, vongtron.bankinh, 0, 2 * Math.PI );
    tin.fillStyle = color;
    tin.fill();
};
taoHinhtron();

function  taonhieuHinhtron(){
    for (var i = 0; i < 30; i++){
        taoHinhtron();
    }
}
taonhieuHinhtron();

function setInterval
