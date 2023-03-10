class Demo{
    model:string;
    car: string;

    constructor(model, car){
        this.model = model;
        this.car = car;

    }
    display(){
        console.log("model is : {this.model}, car is : {this.car}");
    }
   
}
