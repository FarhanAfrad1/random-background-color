
function randomColor(){
    return Math.floor(Math.random()*256)
}
const body = document.body
const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
    console.log(`rgb(${randomColor()},${randomColor()},${randomColor()})`)
})