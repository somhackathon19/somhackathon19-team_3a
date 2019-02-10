let coins, num
window.onload = function() {
    coins = 72
    num = 0;
    updateCoins();
}

function apuntat(id) {
    if (coins > 0) {
        let values = [12, 8, 5, 17, 4]
        let resta = values[id-1]
        if (coins > resta) {
            coins -= resta
        }
    }
    if (coins > 1000) {
        document.getElementById("coins").innerText = `₪ ${coins}`
    } else if (coins >= 100 && coins <= 999) {
        document.getElementById("coins").innerText = `₪ 0${coins}`
    } else if (coins < 100 && coins > 9) {
        document.getElementById("coins").innerText = `₪ 00${coins}`
    } else if (coins <= 9) {
        document.getElementById("coins").innerText = `₪ 000${coins}`
    }
    
}

function print(a) {
    console.log(a);
}

let checked = []

function chech(id) {
    console.log(typeof id)
    let a = document.getElementById("example-number-input")
    switch (id) {
        case "1":
            a.setAttribute("max", "5")
            a.setAttribute("value", "0")
            console.log(id)
            break;
        case "2":
            a.setAttribute("max", "7")
            a.setAttribute("value", "5")
            break;
        case "3":
            a.setAttribute("max", "15")
            a.setAttribute("value", "7")
            break;
        case "4":
            a.setAttribute("max", "22")
            a.setAttribute("value", "15")
            break;
        case "5":
            a.setAttribute("max", "30")
            a.setAttribute("value", "22")
            break;
        case "6":
            a.setAttribute("max", "37")
            a.setAttribute("value", "30")
            break;
        case "7":
            a.setAttribute("max", "45")
            a.setAttribute("value", "37")
            break;
        default:
            a.setAttribute("max", "0")
            break;
        
    }
}

function submit() {
    let a = {};
    a.title = document.getElementById("usr").value;
    a.desc = document.getElementById("comment").value;
    a.time = document.getElementById("example-date-input").value
    a.imgLink = document.getElementById("customFileLang").value
    a.tema = document.getElementById("tema").value
    a.long = document.getElementById("event_length").name
    a.value = document.getElementById("example-number-input").value

    createEvent(a);


    console.log(a)
}

function createEvent(obj) {
    done();
    let div1 = document.createElement("div")
    div1.classList.add("card")
    div1.setAttribute("style", "background-color: #ffffffaf")
    div1.setAttribute("id", `created_card_${num}`)

    let div2 = document.createElement("div")
    div2.classList.add("card-body")
    div2.classList.add("navbar")

    let a1 = document.createElement("a")
    a1.classList.add("nav")
    a1.classList.add("navbar-brand")
    a1.classList.add("pull-sm-right")
    a1.setAttribute("href", `${obj.imgLink}`)

    let img = document.createElement("img")
    img.setAttribute("src", `${obj.imgLink}`)
    img.classList.add("rounded")
    img.setAttribute("alt", "Logo")
    img.setAttribute("style", "width: 50px;")

    let div3 = document.createElement("div")
    div3.classList.add("row")
    div3.classList.add("align-items-center")
    div3.setAttribute("style", "width: 90%;")

    let div4 = document.createElement("div")
    div4.classList.add("col-sm")
    div4.innerHTML = `${obj.title}`

    let div5 = document.createElement("div")
    div5.classList.add("col-sm")

    let a2 = document.createElement("a")
    a2.classList.add("nav-link")
    a2.setAttribute("href", "#")
    a2.setAttribute("style", "text-align: -webkit-center;")
    a2.innerText = `${obj.value} ₪`

    let div6 = document.createElement("div")
    div6.classList.add("col-sm")
    div6.setAttribute("style", "text-align: -webkit-center;")
    div6.innerText = `${obj.time}`

    let div7 = document.createElement("div")
    div7.classList.add("card-footer")
    div7.setAttribute("type", "button")
    div7.setAttribute("data-toggle", "modal")
    div7.setAttribute("data-target", `#modalCreated${num}`)
    div7.setAttribute("style", "cursor: pointer")
    div7.innerText = "More info..."

    let br = document.createElement("br")
    

    let father = document.getElementById("cards_container")
    
    father.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(a1)
    a1.appendChild(img)
    div2.appendChild(div3)
    div3.appendChild(div4)
    div3.appendChild(div5)
    div5.appendChild(a2)
    div3.appendChild(div6)
    div1.appendChild(div7)
    father.insertBefore(div1, document.getElementById("card1"))
    father.insertBefore(br, document.getElementById("card1"))

    createModal(obj);
    reset();

    num++
}

function done()  {
    document.getElementById("comment").style.display = "none";
    document.getElementById("example-date-input").style.display = "none"
    document.getElementById("customFileLang").style.display = "none"
    document.getElementById("tema").style.display = "none"
    document.getElementById("event_length").style.display = "none"
    document.getElementById("example-number-input").style.display = "none"
    document.getElementById("jaja1").style.display = "none"
    document.getElementById("jaja2").style.display = "none"
    document.getElementById("jaja3").style.display = "none"
    document.getElementById("jaja4").style.display = "none"
    document.getElementById("jaja5").style.display = "none"
    document.getElementById("jaja6").style.display = "none"
    document.getElementById("jaja7").style.display = "none"
    document.getElementById("jaja8").style.display = "none"
    document.getElementById("bien").innerText = "Event creat correctament!"
}

function createModal(obj) {
    let div1 = document.createElement("div")
    div1.classList.add("modal")
    div1.setAttribute("id", `modalCreated${num}`)

    let div2 = document.createElement("div")
    div2.classList.add("modal-dialog")

    let div3 = document.createElement("div")
    div3.classList.add("modal-content")

    let div4 = document.createElement("div")
    div4.classList.add("modal-header")

    let h41 = document.createElement("h4")
    h41.classList.add("modal-title")
    h41.innerText = `${obj.title}`

    let button1 = document.createElement("button")
    button1.setAttribute("type", "button")
    button1.classList.add("close")
    button1.setAttribute("data-dismiss", "modal")
    button1.innerHTML = "&times;"

    let div5 = document.createElement("div")
    div5.classList.add("modal-body")

    let ul1 = document.createElement("ul")
    ul1.classList.add("navbar-nav")
    ul1.classList.add("mr-auto")

    let a1 = document.createElement("a")
    a1.classList.add("nav")
    a1.classList.add("navbar-brand")
    a1.classList.add("pull-sm-right")
    a1.setAttribute("href", `${obj.imgLink}`)

    let img1 = document.createElement("img")
    img1.classList.add("rounded")
    img1.setAttribute("src", `${obj.imgLink}`)
    img1.setAttribute("alt", "Logo")
    img1.setAttribute("style", "width:150px;")

    let p1 = document.createElement("p")
    p1.innerText = `${obj.desc}`

    let ul2 = document.createElement("ul")

    let a2 = document.createElement("a")
    a2.classList.add("nav")
    a2.classList.add("navbar-brand")
    a2.classList.add("pull")

    let div6 = document.createElement("div")
    div6.setAttribute("class", "modal-footer navbar-brand")

    let ul3 = document.createElement("ul")
    ul3.setAttribute("class", "nav navbar-brand pull-sm-left")

    let button2 = document.createElement("button")
    button2.setAttribute("type", "button")
    button2.setAttribute("class", "btn btn-danger")
    button2.setAttribute("data-dismiss", "modal")
    button2.innerText = "Tanca"

    let ul4 = document.createElement("ul")
    ul4.setAttribute("class", "nav navbar-brand pull-sm-left")

    let button3 = document.createElement("button")
    button3.setAttribute("class", "btn btn-success")
    button3.setAttribute("type", "button")
    button3.setAttribute("data-dismiss", "modal")
    button3.addEventListener('click', _=> {
        coins -= obj.value
        updateCoins();
    })
    button3.innerText = "Apuntar-se"

    div1.appendChild(div2)
    div2.appendChild(div3)
    div3.appendChild(div4)
    div4.appendChild(h41)
    div4.appendChild(button1)
    div3.appendChild(div5)
    div5.appendChild(ul1)
    ul1.appendChild(a1)
    a1.appendChild(img1)
    ul1.appendChild(p1)
    div5.appendChild(ul2)
    ul2.appendChild(a2)
    div6.appendChild(ul3)
    ul3.appendChild(button2)
    div6.appendChild(ul4)
    ul4.appendChild(button3)
    div1.appendChild(div6)

    document.getElementById("modals").insertBefore(div1, document.getElementById("myModal1"))
}

function reset() {

}

function updateCoins() {
    if (coins > 1000) {
        document.getElementById("coins").innerText = `₪ ${coins}`
    } else if (coins >= 100 && coins <= 999) {
        document.getElementById("coins").innerText = `₪ 0${coins}`
    } else if (coins < 100 && coins > 9) {
        document.getElementById("coins").innerText = `₪ 00${coins}`
    } else if (coins <= 9) {
        document.getElementById("coins").innerText = `₪ 000${coins}`
    }
}
