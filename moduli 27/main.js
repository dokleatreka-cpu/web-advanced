function pershendetje (){
    console.log('Pershendetje grupi')
}



function shuma(numri1,numri2,numri3){
    var rezultati = numri1 = numri2 = numri3
    console.log(rezultati)
}


shuma(123,456,789)

shuma(50,60,70)
var car = {
    name: "Mercedes",
    color: "red",
    get getKilometers() {
        return this.kilometeres;
    },

    set setKilometeres(km) {
        this.kilometeres = km;
    }
}

console.log(car.getKilometers);
car.setKilometeres = 100;

console.log(car.getKilometers);

var computer = new Object()
computer.name = "lenovo";
computer.RAM = "16gb";

function Computer(name, CPU, RAM) {
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
}

var computer1 = new Computer("Macbook", "M1 8-CORE", "8GB");
var computer2 = new Computer("Lenovo", "Intel-core", "8GB");



