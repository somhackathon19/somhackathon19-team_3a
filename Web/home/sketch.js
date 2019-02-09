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