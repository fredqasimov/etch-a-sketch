const cubes = document.querySelector('.cubes')
const inputValue = document.querySelector('.inputValue')
const color = document.querySelector('.color')
const sketchBox = document.querySelector('.sketch')
let grid = document.querySelectorAll('.grid')
let choosenColor = 'black'
const earse = document.querySelector('.earse')
const earseAll = document.querySelector('.earseAll')


function cubesValue(e){
    sketchBox.innerHTML = ''
    const value = this.value
    inputValue.innerHTML=this.value+'x'+this.value 
    for (i=0; i<(value*value); i++){
        sketchBox.innerHTML += '<div class="grid"></div>'
    }    
    sketchBox.style.cssText += `grid-template-columns: repeat(${value}, auto);`
    cubesLive()
}

function drawColor(){
    choosenColor = this.value
}



function draw(){
    this.style.cssText = `background-color: ${choosenColor};`
    console.log(this.style.backgroundColor)
}

function cubesLive(){
    let grid = document.querySelectorAll('.grid')
for(i=0; i<grid.length; i++){
    grid[i].addEventListener('mousedown', draw)
    }
}
for(i=0; i<grid.length; i++){
    grid[i].addEventListener('mousedown', draw)
    }

function earseBtn(){
    choosenColor = ''
    if(earse.style.backgroundColor === 'rgb(240, 0, 0)'){
        earse.style.backgroundColor = ''
        choosenColor = color.value
        
    }else{
        earse.style.backgroundColor = 'rgb(240, 0, 0)'
    }
}
function earseDraw(){
    
    let grid = document.querySelectorAll('.grid')
    for(i=0; i<grid.length; i++){
        grid[i].style.backgroundColor = ''
        }

}

earse.addEventListener('click', earseBtn)
cubes.addEventListener('click', cubesValue)
color.addEventListener('change', drawColor)
earseAll.addEventListener('click', earseDraw)