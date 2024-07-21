// bharath start
let next = document.querySelector('.bnext')
let prev = document.querySelector('.bprev')
next.addEventListener('click',function(){
    let items = document.querySelectorAll('.bitem')
    document.querySelector('.bslide').appendChild(items[0])
})
prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.bitem')
    document.querySelector('.bslide').prepend(items[items.length - 1])
})
// bharath end