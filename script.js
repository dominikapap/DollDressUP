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
