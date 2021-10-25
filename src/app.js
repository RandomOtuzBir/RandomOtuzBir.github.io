function makeRandom31() {
  let random31 = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  for (let i = 0; i < 31; i++) {
    random31 += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  let randomDiv = document.getElementById("randomDiv");
  randomDiv.innerHTML = random31;
  console.log("anan");
  //document.write(random31);
}
function makeRandom331() {
  let random31 = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  for (let i = 0; i < 331; i++) {
    random31 += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  let randomDiv = document.getElementById("randomDiv");
  randomDiv.innerHTML = random31;
  console.log("anan");
  //document.write(random31);
}

let createButton31 = document.getElementById("createRandom31");
createButton31.addEventListener("click", makeRandom31);
let createButton331 = document.getElementById("createRandom331");
createButton331.addEventListener("click", makeRandom331);
//makeRandom31();
