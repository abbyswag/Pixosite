const bubbleBase = document.querySelector('.site-footer-middle')


function getRandomInt(max,min){
    return Math.random() * (max-min) + min
}

function createBubbles(){
    for(let i=0;i<300;i++){
        let ele = document.createElement('div')
        ele.className = 'site-footer-bubble'
        bubbleBase.appendChild(ele)
        let bubble = document.querySelectorAll('.site-footer-bubble')[i]
        bubble.style.left = getRandomInt(93,0)+'vw'
        bubble.style.width = `${getRandomInt(50,0)}px`
        bubble.style.height = `${getRandomInt(50,0)}px` 
    }
}
createBubbles()

const elements = document.querySelectorAll('.site-footer-bubble')
let number = 100

function animation(){
    number++
    if(number>0){
        elements.forEach((element)=>{
            let x = getRandomInt(100,40)
            element.style.transform = `translateY(-${number/x}px)`
        })
        if(number===200)number=100
        requestAnimationFrame(animation)
    }
}

requestAnimationFrame(animation)