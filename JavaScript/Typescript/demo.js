var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Hi constructor..");
    }
    Demo.prototype.display = function () {
        console.log("Hi method...!");
    };
    return Demo;
}());
var d = new Demo();
d.display();
