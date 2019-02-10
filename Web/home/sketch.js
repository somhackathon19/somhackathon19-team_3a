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

    let div2 = document.createElement("div")
    div2.classList.add("card-body")
    div2.classList.add("navbar")

    let a = document.createElement("a", {href: `${obj.imgLink}`})
    a.classList.add("nav")
    a.classList.add("navbar-brand")
    a.classList.add("pull-sm-right")

    let img = document.createElement("img")
    img.setAttribute("src", `${obj.imgLink}`)
    img.setAttribute("class", "rounded")
    img.setAttribute("alt", "Logo")
    img.setAttribute("style", "width: 50px;")

    let ul = document.createElement("ul")
    ul.setAttribute("class", "navbar-nav")
    ul.setAttribute("class", "mr-auto")

    let li1 = document.createElement("li")
    li1.setAttribute("class", "nav-item")
    li1.setAttribute("class", "avtive")
    li1.innerText = `${obj.title}`;

    let li2 = document.createElement("li", {class:"nav-item active"})
    li2.setAttribute("class", "nav-item")
    li2.setAttribute("class", "active")

    let a2 = document.createElement("a")
    a2.setAttribute("class", "nav-link")
    a2.setAttribute("href", "#")
    a2.innerText = `${obj.value} ₪`

    let span = document.createElement("span")
    span.setAttribute("class", "sr-only")
    span.innerHTML = "(current)"

    let div3 = document.createElement("div", {class:"card-footer", type:"button", "data-toggle":"modal", "data-target":"#myModal1", style:"cursor: pointer"})
    div3.setAttribute("class", "card-footer")
    div3.setAttribute("type", "button")
    div3.setAttribute("data-toggle", "modal")
    div3.setAttribute("data-target", "someid")
    div3.setAttribute("style", "cursor: pointer")

    let father = document.getElementById("cards_container")
    father.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(a)
    a.appendChild(img)
    div2.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    li2.appendChild(a2)
    a2.appendChild(span)
    father.insertBefore(div1, document.getElementById("card1"))
    father.appendChild(div3)
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
