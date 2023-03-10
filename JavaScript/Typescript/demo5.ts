class Demo9
{
    public name = "Santosh"
    //private salary= 50000; it will be only for sinlge class 
}
class Demo10 extends Demo9
{

    constructor()
    {
        super();
        console.log("Name is : "+this.name)
        //console.log("Salary : "+ this.salary)
    }

}
var d12 = new Demo10();
