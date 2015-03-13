function quadraticeQuation (ax, bx, cx) {
    var a = parseInt(ax);
    var b = parseInt(bx);
    var c = parseInt(cx);

    var d = (b * b) - (4 * a * c);

     if (d < 0) {
        return "No real roots";
    }else  {
        x1 = ((-b) + Math.sqrt(d)) / (2 * a);
        x2 = ((-b) - Math.sqrt(d)) / (2 * a);
         if (x1 != x2) {
             return "x1 = " + x1 + "\n" + "x2 = " + x2;
         } else {
             return "x = " + x1;
         }
    }
}
console.log(quadraticeQuation(2, 5, -3));
console.log(quadraticeQuation(2, -4, 2));
console.log(quadraticeQuation(4, 2, 1));
