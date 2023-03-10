var Demo2 = /** @class */ (function () {
    function Demo2(id, name, sal, desgn) {
        if (desgn === void 0) { desgn = "GET"; }
        console.log("ID : " + id);
        console.log("Name : " + name);
        console.log("Sal : " + sal);
        console.log("Desgn : " + desgn);
    }
    return Demo2;
}());
var d2 = new Demo2(1, "Santosh", 25000, "developer");
var d3 = new Demo2(2, "sampath");
