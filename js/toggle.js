const btns = Array.from(document.getElementsByTagName('button'))
let previousIndex = 0

const toggleClass = (id) => {
    if(previousIndex){
        hide(document.querySelector(`#tick${previousIndex}`))
        show(document.querySelector(`#tick${id}`))
        previousIndex = id
    }else{
        show(document.querySelector(`#tick${id}`))
        previousIndex = id
    }
}

const hide = element => element.classList.add('hidden')

const show = element => element.classList.remove('hidden')

btns.forEach((btn,index) => {
    let btnIndex = index+1
    btn.addEventListener('click',(e) => {
        toggleClass(btnIndex)
        command(btnIndex+"")
    })
})