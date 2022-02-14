


function changeItem(idName, imgPath, direction){
    let element = document.getElementById(`${idName}`);
    let bgImage= getComputedStyle(element).backgroundImage;
    let offset = {"next":1, "prev":-1};
    let currImgNum= parseInt(bgImage[bgImage.length-7]); /*gets img number from url*/
    let newImgNum = currImgNum + offset[direction];/*change displayed img */
    let maxImgsCount = 6;
        
    if (newImgNum < 1){
        newImgNum = maxImgsCount;
    };

    if (newImgNum > maxImgsCount){
        newImgNum = 1;
    };
        
    let urlNum=`${imgPath}`+newImgNum+'.png';
    element.setAttribute("style", `background-image:url(${urlNum})`);
};


/*for later use

function changeHair(i){
    let imageurl='hair/fronthair'+i+'.png'
    let imageurl2='hair/backhair'+i+'.png'
    document.getElementById('hairfront').setAttribute("style", `background-image:url(${imageurl})`);
    document.getElementById('hairback').setAttribute("style", `background-image:url(${imageurl2})`);
}

function changeShoes(i){
    let imgurlshoes='shoes/shoes'+i+'.png'
    document.getElementById('shoes').setAttribute("style", `background-image:url(${imgurlshoes})`);
}
*/