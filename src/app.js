let createButton31 = document.getElementById("createRandom31");
let createButton331 = document.getElementById("createRandom331");
let createRandomWithLength = document.getElementById("createRandomWithLength");
let randomLengthInput = document.getElementById("randomLength");
let randomLength = 0;

function makeRandom31() {
  let random31 = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  for (let i = 0; i < 31; i++) {
    random31 += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  let randomDiv = document.getElementById("randomDiv");
  randomDiv.innerHTML = random31;
  //randomDiv.value = random31;
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
  //randomDiv.value = random31;
  console.log("anan");
  //document.write(random31);
}
function makeRandomWithLength() {
  let random31 = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  for (let i = 0; i < randomLength; i++) {
    random31 += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  let randomDiv = document.getElementById("randomDiv");
  randomDiv.innerHTML = random31;
  //randomDiv.value = random31;
  console.log("anan");
  //document.write(random31);
}

function setLength() {
  let randomLengthNew = document.getElementById("randomLength");
  randomLength = randomLengthNew.value;
}

randomLengthInput.addEventListener("change",setLength);
createButton31.addEventListener("click", makeRandom31);
createButton331.addEventListener("click", makeRandom331);
createRandomWithLength.addEventListener("click", makeRandomWithLength);