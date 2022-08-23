let MyDate = function (ngay, thang, nam) {
    this.ngay = ngay;
    this.thang = thang;
    this.nam = nam;
    this.getDay = function(ngay){
        return this.ngay;
    }
    this.getMonth = function(thang){
        return this.thang;
    }
    this.getYear = function (nam){
        return this.nam;
    }
};
let date = new MyDate(23, 8, 2022);
let ngay = date.getDay();
let thang = date.getMonth();
let nam = date.getYear();

alert(ngay + "/" + thang + "/" + nam);

