function common(){

}
var count=0;
document.getElementById('bold').addEventListener('click',function(){
    const textAreaValue=document.getElementById('text-area')
    count++
    console.log(count)
    if(parseInt(count)%2===1)
        textAreaValue.style.fontWeight='bold'
    else
        textAreaValue.style.fontWeight='normal'
})

var count2=0;
document.getElementById('italic').addEventListener('click',function(){
    const textAreaValue=document.getElementById('text-area')
    count2++
    if(count2%2==1)
    textAreaValue.style.fontStyle='italic'
    else
    textAreaValue.style.fontStyle='normal'


})
let count3=0
document.getElementById('underline').addEventListener('click',function(){
    const textAreaValue=document.getElementById('text-area')
    count3++
    if(count3%2==1)
    textAreaValue.style.textDecoration='underline'
    else
    textAreaValue.style.textDecoration='none'
})

// LEFT,RIGHT,CENTER
document.getElementById('left').addEventListener('click',function(){
    const textAreaValue=document.getElementById('text-area')
    textAreaValue.style.textAlign='left'

})
document.getElementById('center').addEventListener('click',function(){
    const textAreaValue=document.getElementById('text-area')
    textAreaValue.style.textAlign='center'

})
document.getElementById('right').addEventListener('click',function(){
    const textAreaValue=document.getElementById('text-area')
    textAreaValue.style.textAlign='right'

})


//SIZE AND COLOR
document.getElementById('font-size').addEventListener('input',function(){
    const inputNumber=document.getElementById('font-size').value
    const textAreaValue=document.getElementById('text-area')
    textAreaValue.style.fontSize=inputNumber+'px'
})
document.getElementById('text-color').addEventListener('input',function(){
    const inputNumber=document.getElementById('text-color').value
    const textAreaValue=document.getElementById('text-area')
    textAreaValue.style.color=inputNumber;
})




