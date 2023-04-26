let generate = document.querySelector('.generate')
let cleaner = document.querySelector('.clear')
let area = document.querySelector('#area')
let first_block = document.querySelector('.first_block')
let second_block = document.querySelector('.second_block')
let return_back = document.querySelector('.return_back')
let out_html = document.querySelector('.out')


generate.onclick = return_list
cleaner.onclick = clear_area
return_back.onclick = reverse_of_blocks
let object_count = {}

function reverse_of_blocks(){
    second_block.style.display = "none"
    first_block.style.display = "block"
}

function return_list(){
    for (item of area.value.split('\n')){
        if (item != '' && item != 'STATE'){
            if (item in object_count){
                object_count[item]++
            } else{
                object_count[item] = 1
            }
        }

    }

    let out = ''
    first_block.style.display = "none"
    second_block.style.display = "block"
    if (Object.keys(object_count).length === 0) {
        out= '<p class="title">Вы ничего не ввели ❌</p>'
    } else{
    }
    for (let key in object_count){
        out+= `<div class="item"><p class="for_select">${key}</p> <p>:::</p> <p class="for_select">${object_count[key]}</p></div>`
    }
    out_html.innerHTML = out;
    let for_select = document.querySelectorAll('.for_select')
    console.log(for_select)
    for_select.forEach(item => {
        item.onclick = select_item
    })
}

function select_item(){
    this.classList.toggle('selected_item')
    navigator.clipboard.writeText(this.innerText)
}

function clear_area(){
    area.value = '' 
    object_count = {}
}
