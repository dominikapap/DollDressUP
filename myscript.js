


function changeItem(idName, imgPath, direction){
    let element = document.getElementById(`${idName}`);
    let bgImage= getComputedStyle(element).backgroundImage;
    let offset = {"next":1, "prev":-1};
    let currImgNum= parseInt(bgImage[bgImage.length-7]); /*gets img number from url*/
    let newImgNum = currImgNum + offset[direction];/*change displayed img */
    let maxImgNum = 6;
        
    if (newImgNum < 1){
        newImgNum = maxImgNum;
    };

    if (newImgNum > maxImgNum){
        newImgNum = 1;
    };
        
    let url=`${imgPath}`+newImgNum+'.png';
    element.setAttribute("style", `background-image:url(${url})`);
};



function randomize(){
    var elList=[ "fronthair", "face", "body", "shoes"]

    for(let i=0; i< elList.length; i++){
        let element = document.getElementById(elList[i]);
        let randNum =Math.floor(Math.random() * 5) +1;
        let url=`${elList[i]}/${elList[i]}`+randNum+'.png';
        element.setAttribute("style", `background-image:url(${url})`);

        /*to make sure backhair matches fronthair */
        if (elList[i] == "fronthair"){
            let element = document.getElementById("backhair");
            let url="backhair/backhair"+randNum+'.png';
            element.setAttribute("style", `background-image:url(${url})`);
        }
    }
}

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