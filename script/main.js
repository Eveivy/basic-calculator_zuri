let inputEl = document.querySelector("#input")
let numDiv = document.getElementById("numbers")
let signDiv = document.getElementById("signs")

numDiv.addEventListener('click', function (ev) {
    if (ev.target = "button") {
        let val = ev.target
        inputEl.value += val.textContent
    }
})

signDiv.addEventListener('click', function (ev) {
    if (ev.target = "button") {
        let val = ev.target
        let str = inputEl.value

        inputEl.value += val.textContent

        // if (ev.path[1].id = "signs") {
        //     let last = str.charAt(str.length - 1);
        //     let result = str.replace(last, val.textContent)
        //     console.log(result)
        //     inputEl.value = result
        // }

    }
})
// calculate.addEventListener('click', function (ev) {
//     if (ev.target = "button") {

//         let val = ev.target
//         console.log(val)


//         if (ev.path[0].innerText = "del") {
//         }
//         else if (val.textContent = "clear") {
           
        // }

//     }
// })

function del(){
    inputEl.value = inputEl.value.slice(0, -1)
}
function clearInput(){
    if (inputEl.value = ""){
        return;
    } else {
        inputEl.val = ""
    }
}
function calculate(){
    try {
       inputEl.value = eval(inputEl.value)  
    } catch (err) {
     inputEl.value = "error"   
    }
}