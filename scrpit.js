let ArryOfchar = [
  {
    name: "Ali",
    hight: 200,
    gender: "male",
    mass: 80,
    eyecolor: "blue",
  },
  {
    name: "Anhar",
    hight: 164,
    gender: "Famle",
    mass: 45,
    eyecolor: "black",
  },
];
//map of all namee
function getNames(item) {
  return [item.name].join(" ");
}
let arrayofname = ArryOfchar.map(getNames);
console.log(arrayofname);

//map of all hight
function getHight(item) {
  return [item.hight];
}
let arryofhight = ArryOfchar.map(getHight);
console.log(arryofhight);

//reduce
function totalofhight(total, hight2) {
  return (total += hight2.hight);
}
let sumOfhight = ArryOfchar.reduce(totalofhight, 0);
console.log(sumOfhight);

//filter
let charhight = ArryOfchar.filter((charhHight) => charhHight.hight < 200);
console.log(charhight);
console.log("*****************");
console.log("Male");
let malechar = ArryOfchar.filter((charmale) => charmale.gender == "male");
console.log(malechar);
//sort
console.log("****************");
console.log("Sort by mas");
let sortbymass = ArryOfchar.sort(function (a, b) {
  return b.mass - a.mass;
});
console.log(sortbymass);
console.log("*************");
console.log("sort by hight");
let sortbyhight = ArryOfchar.sort(function (a, b) {
  return b.hight - a.hight;
});
console.log(sortbyhight);

//every
console.log("*************");
console.log("every mass");
function getmass(item) {
  return item.mass > 40;
}
let massmore = ArryOfchar.every(getmass);
console.log(massmore);
console.log("*************");
console.log("every short tall");
function shorttall(item) {
  return item.hight < 200;
}
let shorttaller = ArryOfchar.every(shorttall);
console.log(shorttaller);

console.log("*************");
console.log("some blue");
//some
function eyeBlueColor(item) {
  return item.eyecolor === "blue";
}
let blueeyecolor = ArryOfchar.some(eyeBlueColor);
console.log(blueeyecolor);

function tall(item) {
  return item.hight <= 210;
}
console.log("*************");
console.log("some tall");

let tallerthan = ArryOfchar.some(tall);
console.log(tallerthan);
//----------------------------------
let getCharacters;
let selectedCharacter;
function convertJsonToTemplate(json) {
  let html = "";
  for (let i = 0; i < json.length; i++) {
    html += `<div class="col">
    <div class="card" style="width: 18rem">
      <img
        src="${json[i].img}"
        class="card-img-top"
        height='300px'
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${json[i].name}</h5>
        <button onclick="showDetails(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary">
          Details
        </button>
      </div>
    </div>
  </div>`;
  }
  return html;
}
function dispalyCharacters(characters) {
  getCharacters = characters;
  let html = convertJsonToTemplate(characters);
  document.getElementById("content").innerHTML = html;
}
fetch("https://www.breakingbadapi.com/api/characters")
  .then((response) => response.json())
  .then((data) => dispalyCharacters(data));

function showDetails(index) {
  selectedCharacter = getCharacters[index];
  document.getElementById("modelTitle").innerHTML = selectedCharacter.name;
  document.getElementById("birthday").innerHTML = selectedCharacter.birthday;
  document.getElementById("status").innerHTML = selectedCharacter.status;
  document.getElementById("nickname").innerHTML = selectedCharacter.nickname;
  document.getElementById("portrayed").innerHTML = selectedCharacter.portrayed;
}
