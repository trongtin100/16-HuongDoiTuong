function Rectangle(height, width) {
    this.height = height;
    this.width = width;

    this.getHeight = function () {
        return this.height;
    }
    this.setHeight = function (height){
        this.height = height;
    }

    this.getWidth = function () {
        return this.width;
    }
    this.setWidth = function (width){
        this.width = width;
    }

    this.getArea = function () {
        return this.width * this.height;
    }
    this.getPerimeter = function () {
        return (this.width + this.height) * 2;
    }
}

let rectangle = new Rectangle(50, 100);
let height = rectangle.getHeight();
let width = rectangle.getWidth();

let area = rectangle.getArea();
let perimeter = rectangle.getPerimeter();

alert("height: " + height + "  width:" + width + "  area: " + area + "   perimeter:" + perimeter);

function drawRectangle () {
    let tinContext = document.getElementById("myCanvas").getContext("2d");
    tinContext.beginPath();
    let xRect = rectangle.getHeight();
    let yRect = rectangle.getWidth();
    tinContext.fillStyle = "blue"
    tinContext.rect(xRect, yRect, rectangle.getWidth(),rectangle.getHeight());
    tinContext.stroke();
}
drawRectangle();