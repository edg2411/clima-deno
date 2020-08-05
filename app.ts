const denoArray = Deno.args;
let dirr = "";
for (const entry of denoArray) {
    // console.log(entry);
    dirr = dirr.concat(entry + " ");
}
// console.log(dirr);
const dir = "San Bernardo, AR"
const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dirr}&appid=f1c7addb8babfdb0905ca98b731bebcb&units=metric`);
const data = await res.json();
console.log("la temperatura en " + dirr + "es de " + data.main.temp + " grados");