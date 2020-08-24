const featureBox = document.querySelector('.feature-work-card-root')
let angleCoffi = 1

document.querySelector('.forward').addEventListener('click',()=>{
    featureBox.style.transform = `rotateY(-${angleCoffi * 90}deg)`
    angleCoffi++
    viewCardPosition()
})

document.querySelector('.backward').addEventListener('click',()=>{
    angleCoffi--
    featureBox.style.transform = `rotateY(${-(angleCoffi*90)+90}deg)`
    viewCardPosition()
})


function viewCardPosition(){
    const cardPositions = document.querySelectorAll('.card-position')
    cardPositions.forEach((position,index)=>{
        position.style.background = 'white'
        if(angleCoffi%4===index+1)position.style.background ='#8383e6'
        if(angleCoffi%4===0)cardPositions[3].style.background = '#8383e6'
    })
}
