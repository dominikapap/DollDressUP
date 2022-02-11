


function changeItem(idName, imgPath, direction){
    /*checking which image file is currently displayed */
    const element = document.getElementById(`${idName}`)
    const bgImage= getComputedStyle(element).backgroundImage

    if (direction == 'next'){
        var imgNum=parseInt(bgImage[bgImage.length-7])+1
        /*changing image source url */
        if (imgNum<7){
            var urlNum=`${imgPath}`+imgNum+'.png'
            element.setAttribute("style", `background-image:url(${urlNum})`);
        }
        else {
            imgNum = 1
            var urlNum=`${imgPath}`+imgNum+'.png'
            element.setAttribute("style", `background-image:url(${urlNum})`);
        }
    }else if(direction == 'prev'){
        var imgNum=parseInt(bgImage[bgImage.length-7])-1
        if (imgNum>1){
            const urlNum=`${imgPath}`+imgNum+'.png'
            element.setAttribute("style", `background-image:url(${urlNum})`);
        }
        else {
            imgNum = 6
            var urlNum=`${imgPath}`+imgNum+'.png'
            element.setAttribute("style", `background-image:url(${urlNum})`);
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