document.addEventListener('input', () => {

    for (let img of document.querySelectorAll('.timeSelec')) {
        img.remove();
    }

    for (let inpt of document.querySelectorAll("#inpt")) {
        if (inpt.value) {
            const img = addImg(inpt);   
            addBtReset(img, inpt);
        }
    };
})

function addImg(inpt){
    const img = document.createElement('img');
    img.src = inpt.value;
    img.classList.add('timeSelec');
    img.style.width = "50px";
    inpt.insertAdjacentElement('afterend', img);
    inpt.style.display = "none";
    darkenImg(inpt);
    return img
}

function addBtReset(img, inpt){
    const bReset = document.createElement('buttom');
            bReset.classList.add('bReset', 'timeSelec');
            bReset.innerText = 'X';
            bReset.onclick = function(){
                clarifyImg(img);
                img.remove();
                bReset.remove();
                inpt.style.display = "";
                inpt.value = "";
            }
            img.insertAdjacentElement('afterend', bReset);
}

function darkenImg(inpt){
    for(let time of document.querySelectorAll('#time')){
        if(inpt.value === time.src){
            time.classList.add('time_usado')
        }
    }

}

function clarifyImg(img){
    for(let time of document.querySelectorAll('#time')){
        if(img.src === time.src){
            time.classList.remove('time_usado');
        }
    }
}

function resetAll(){
    for (let img of document.querySelectorAll('.timeSelec')) {
        img.remove();
    }
    for (let inpt of document.querySelectorAll('#inpt')){
        inpt.style.display = "";
        inpt.value = "";
    }
    for(let time of document.querySelectorAll('.time_usado')){
        time.classList.remove('time_usado');
    }
}