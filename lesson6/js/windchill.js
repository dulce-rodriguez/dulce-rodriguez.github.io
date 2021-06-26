const ws = 5;
const t = 76;
const wc = "";

if (ws <= 50 && ws <= 3) {
   document.write(35.74 + 0.6215 * t - 35.75 * (Math.pow(ws, 0.16)) + 0.4275 * t * (Math.pow(ws, 0.16)));
}
else {
    document.write = "n/a";
}
document.getElementById("windchill").innerHTML = wc;
