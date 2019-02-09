function read(num) {
    fetch(`../users/user_${num}.json`)
        .then(file => file.json())
        .then(json => {
            console.log("Got and parsed JSON");
            return json;
        })
}