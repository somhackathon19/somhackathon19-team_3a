let coins, num
window.onload = function() {
    coins = 72
    num = 0;
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
    a.time = document.getElementById("example-datetime-local-input").value
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
    img.setAttribute("class", "rounded")
    img.setAttribute("alt", "Logo")
    img.setAttribute("style", "width: 50px;")

    let div3 = document.createElement("div")
    div3.setAttribute("class", "row")
    div3.setAttribute("class", "align-items-center")
    div3.setAttribute("style", "width: 90%;")

    let div4 = document.createElement("div")
    div4.setAttribute("class", "col-sm")
    div4.innerHTML = `${obj.title}`

    let div5 = document.createElement("div")
    div5.setAttribute("class", "col-sm")

    let a2 = document.createElement("a")
    a2.setAttribute("class", "nav-link")
    a2.setAttribute("href", "#")
    a2.setAttribute("style", "text-align: -webkit-center;")
    a2.innerText = `${obj.value} ₪`

    let div6 = document.createElement("div")
    div6.setAttribute("class", "col-sm")
    div6.setAttribute("style", "text-align: -webkit-center;")
    div6.innerText = `${obj.time}`

    let div7 = document.createElement("div")
    div7.setAttribute("class", "card-footer")
    div7.setAttribute("type", "button")
    div7.setAttribute("data-toggle", "modal")
    div7.setAttribute("data-target", `#modalCreated${num}`)
    div7.setAttribute("style", "cursor: pointer")
    

    let father = document.getElementById("cards_container")
    
    father.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(a1)
    a1.appendChild(img)
    div2.appendChild(div3)
    div3.appendChild(div4)
    div3.appendChild(div5)
    div5.appendChild(a2)
    div1.appendChild(div7)
    father.insertBefore(div1, document.getElementById("card1"))

    num++
}

function done()  {
    document.getElementById("comment").style.display = "none";
    document.getElementById("example-datetime-local-input").style.display = "none"
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
