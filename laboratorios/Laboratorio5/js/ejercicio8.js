function binary(dec) {
    var bin = [];
    var dividendo = dec;
    var remainder = 0;
    while (dividendo >= 2) {
        remainder = dividendo % 2;
        bin.push(remainder);
        dividendo = (dividendo - remainder) / 2;
    }
    bin.push(dividendo);
    bin.reverse();
    console.log(bin.join(""));
}

binary(6);