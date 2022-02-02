
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

function nextBody(){
    const element = document.getElementById('body')
    const style = getComputedStyle(element)
    const bgimage= style.backgroundImage
    var imgnum=parseInt(bgimage[bgimage.length-7])+1
    if (imgnum<6){
        const urlbody='body/body'+imgnum+'.png'
        document.getElementById('body').setAttribute("style", `background-image:url(${urlbody})`);
    }
    else {
        imgnum = 1
        const urlbody='body/body'+imgnum+'.png'
        document.getElementById('body').setAttribute("style", `background-image:url(${urlbody})`);
    }
}
