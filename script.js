let button = document.querySelector('button')
let input = document.querySelector(".textArea");
let list = document.querySelector("ul")
let cancelBtn = document.querySelector(".cancelBtn");
let filterBtn = document.querySelector('.filter')
let sort = document.querySelector('.filter_div')
let arr
let storage = localStorage.getItem('arr')
if (storage === null) {
    arr = []
} else {
    arr = JSON.parse(localStorage.getItem('arr'))
    let space = ''
    arr.forEach((element, index) => {
        space += `
        <li><p>${element}</p> <button class="cancelBtnList" onclick="del(${index})"><img src='./images/cancel-button.png' /></button> </li>`
    })
    list.innerHTML = space
}
button.addEventListener("click", () => {
    arr.push(input.value);
    let space = "";
    arr.forEach((element, index) => {
        space += `
    <li><p>${element}</p> <button class="cancelBtnList" onclick="del(${index})"><img src='./images/cancel-button.png' /></button> </li>
    `
    })
    list.innerHTML = space;
    list.style.border = " 1px solid #C4C4C4"
})

function del(index) {
    arr.splice(index, 1)
    let space = "";
    arr.forEach((element, index) => {
        space += `
    <li><p>${element}</p> <button class="cancelBtnList" onclick="del(${index})"><img src="./images/cancel-button.png" /></button> </li>
    `
    })
    list.innerHTML = space;

    if (space == "") {
        list.style.border = "none"
    }
    localStorage.setItem('arr', JSON.stringify(arr))
}

cancelBtn.addEventListener("click", () => {
    input.value = ""
})



sort.addEventListener('click', (e) => {
    if (e.target.getAttribute('src') == './images/a-z.png') {
        arr.sort();
        let space = '';
        arr.forEach((element, index) => {
            space += `
            <li><p>${element}</p> <button class="cancelBtnList" onclick="del(${index})"><img src="./images/cancel-button.png" /></button> </li>
            `
        })
        list.innerHTML = space
        list.style.border = '1px solid #C4C4C4'
        input.value = ''
        e.target.setAttribute('src', './images/sortback.png')
    } else if (e.target.getAttribute('src') == './images/z-a.png') {
        arr.sort().reverse()
        let space = ''
        arr.forEach((element, index) => {
            space += `
        <li><p>${element}</p> <button class="cancelBtnList" onclick="del(${index})"><img src='./images/cancel-button.png' /></button> </li>
        `
        })

        list.innerHTML = space
        list.style.border = '1px solid C4C4C4'
        e.target.setAttribute('src', './images/filter.png')
    }
})

sort.addEventListener("mouseover", (e) => {
    if (e.target.getAttribute('src') == './images/filter.png') {
        e.target.setAttribute('src', './images/a-z.png')

    } else if (e.target.getAttribute('src') == './images/sortback.png') {
        e.target.setAttribute("src", './images/z-a.png')
    }
})

sort.addEventListener("mouseout", (e) => {
    if (e.target.getAttribute('src') == './images/a-z.png') {
        e.target.setAttribute('src', './images/filter.png')

    } else if (e.target.getAttribute('src') == './images/z-a.png') {
        e.target.setAttribute("src", './images/sortback.png')
    }
})