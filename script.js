


function changeItem(idName, imgPath, direction) {
  const element = document.getElementById(`${idName}`);
  const bgImage = getComputedStyle(element).backgroundImage;
  const offset = { next: 1, prev: -1 };
  const currImgNum = parseInt(
    bgImage[bgImage.length - 7]
  ); /*gets img number from url*/
  let newImgNum = currImgNum + offset[direction]; /*change displayed img */
  const maxImgNum = 6;

  if (newImgNum < 1) {
    newImgNum = maxImgNum;
  }

  if (newImgNum > maxImgNum) {
    newImgNum = 1;
  }

  const url = `${imgPath}` + newImgNum + ".png";
  element.setAttribute("style", `background-image:url(${url})`);
}

function randomize() {
  const elList = ["fronthair", "face", "body", "shoes"];

  for (let i = 0; i < elList.length; i++) {
    let element = document.getElementById(elList[i]);
    let randNum = Math.floor(Math.random() * 5) + 1;
    let url = `${elList[i]}/${elList[i]}` + randNum + ".png";
    element.setAttribute("style", `background-image:url(${url})`);

    /*to make sure backhair matches fronthair */
    if (elList[i] == "fronthair") {
      let element = document.getElementById("backhair");
      let url = "backhair/backhair" + randNum + ".png";
      element.setAttribute("style", `background-image:url(${url})`);
    }
  }
}

function chooseItem(idName, imgNum) {
  const element = document.getElementById(`${idName}`);
  const url = `${idName}/${idName}` + imgNum + ".png";
  element.setAttribute("style", `background-image:url(${url})`);
}

function downloadImg() {
  //hide unwated elements of canvas
  let nonC = document.querySelectorAll(".nonCanvas");
  for (el of nonC) {
    el.style.visibility = "hidden";
  }
  //create image
  html2canvas(document.querySelector(".center-doll")).then((canvas) => {
    canvas.toBlob(function (blob) {
      window.saveAs(blob, "doll.jpg");
    });
  });

  //show elements back again
  for (el of nonC) {
    el.style.visibility = "visible";
  }
}


let btnRandom = document.getElementById("btn-random");
btnRandom.addEventListener("click", randomize);
let btnDownload = document.getElementById("btn-download");
btnDownload.addEventListener("click", downloadImg);


let bodyBtns = document.querySelectorAll(".body-btn");
let hairBtns = document.querySelectorAll(".hair-btn");
let faceBtns = document.querySelectorAll(".face-btn");
let shoesBtns = document.querySelectorAll(".shoes-btn");

for(let i=0; i<bodyBtns.length;i++){
  hairBtns[i].addEventListener("click", ()=>{
    chooseItem("fronthair",i+1);
    chooseItem("backhair",i+1);
  });
  faceBtns[i].addEventListener("click", ()=>{
    chooseItem("face",i+1);
  });
  bodyBtns[i].addEventListener("click", ()=>{
    chooseItem("body",i+1);
  });
  shoesBtns[i].addEventListener("click", ()=>{
    chooseItem("shoes",i+1);
  });
}

