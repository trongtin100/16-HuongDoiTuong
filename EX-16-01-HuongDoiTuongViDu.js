    function ganthuoctinhvaodoituong(id, name, address){
        this.id=id;
        this.name=name;
        this.address=address;
        this.tonghopThuocTinh=function (){
            return "Id=" + this.id +".Name =" + this.name + ".address=" + this.address+"<br/>";
        }
    }
    var gandoituongvaotrongtin= new ganthuoctinhvaodoituong(3,"Phan Trong Tin", "HCM");
    document.write(gandoituongvaotrongtin.tonghopThuocTinh());