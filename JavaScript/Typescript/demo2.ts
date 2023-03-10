class Demo2{
    constructor(id:any, name:string, sal ?:number, desgn ="GET")
    {
        console.log("ID : "+id);
        console.log("Name : "+name);
        console.log("Sal : "+sal);
        console.log("Desgn : "+desgn);
    }
}
var d2 = new Demo2(1, "Santosh", 25000, "developer");
var d3 = new Demo2(2, "sampath", );
