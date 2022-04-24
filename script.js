let bodyBtns = document.querySelectorAll(".body-btn");
let hairBtns = document.querySelectorAll(".hair-btn");
let faceBtns = document.querySelectorAll(".face-btn");
let shoesBtns = document.querySelectorAll(".shoes-btn");
let btnRandom = document.getElementById("btn-random");
let btnDownload = document.getElementById("btn-download");
let controlBtns = document.querySelectorAll(".btn-control");
let dollParts = ['fronthair','fronthair', 'face','face', 'body', 'body', 'shoes', 'shoes','backhair'];


//function for changing doll parts with arrow butons 
function changeItem(idName, direction) {
  const element = document.getElementById(`${idName}`);
  const bgImage = getComputedStyle(element).backgroundImage;
  const currImgNum = parseInt(
    bgImage[bgImage.length - 7]
  ); //gets img number from url
  let newImgNum = currImgNum + direction; //change img source to next or previous 
  const maxImgNum = 6;

  if (newImgNum < 1) {
    newImgNum = maxImgNum;
  }

  if (newImgNum > maxImgNum) {
    newImgNum = 1;
  }

  const url = `${idName}` +'/'+`${idName}`+ newImgNum + ".png";//construct new source for img 
  element.setAttribute("style", `background-image:url(${url})`);
}


//function for randomize button 
function randomize() {
  const elList = ["fronthair", "face", "body", "shoes"];

  for (let i = 0; i < elList.length; i++) {
    let element = document.getElementById(elList[i]);
    let randNum = Math.floor(Math.random() * 5) + 1;
    let url = `${elList[i]}/${elList[i]}` + randNum + ".png";
    element.setAttribute("style", `background-image:url(${url})`);

    //to make sure backhair matches fronthair 
    if (elList[i] == "fronthair") {
      let element = document.getElementById("backhair");
      let url = "backhair/backhair" + randNum + ".png";
      element.setAttribute("style", `background-image:url(${url})`);
    }
  }
}

//function for choosing doll options using their images 
function chooseItem(idName, imgNum) {
  const element = document.getElementById(`${idName}`);
  const url = `${idName}/${idName}` + imgNum + ".png";
  element.setAttribute("style", `background-image:url(${url})`);
}


function downloadImg() {
  //hide unwated elements of canvas
  let nonCanvas = document.querySelectorAll(".nonCanvas");
  for (el of nonCanvas) {
    el.style.visibility = "hidden";
  }
  //create image
  html2canvas(document.querySelector(".center-doll")).then((canvas) => {
    canvas.toBlob(function (blob) {
      window.saveAs(blob, "doll.jpg");
    });
  });

  //show elements back again
  for (el of nonCanvas) {
    el.style.visibility = "visible";
  }
}

//ADDING EVENT LISTENERS

btnRandom.addEventListener("click", randomize);
btnDownload.addEventListener("click", downloadImg);



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



for (let i =0; i<controlBtns.length;i++){
    if (i %2 === 0){
      dir = 1;
    }else{
      dir = -1;
    };
    if (i<2){
      controlBtns[i].addEventListener("click",()=>{
        changeItem(dollParts[i], dir);
        changeItem(dollParts[dollParts.length-1], dir);
      });
  }else{
      controlBtns[i].addEventListener("click",()=>{
        changeItem(dollParts[i], dir);
      });
  };
    }

