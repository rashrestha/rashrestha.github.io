(function () {
    "use strict";

    window.addEventListener("load",function () {
        document.querySelector('#hw').addEventListener("change",function () {
            let file = 'homeworks/' + document.querySelector('#hw').value;
            fetch(file)
            .then(res=>res.text())
            .then(data=>{
                document.querySelector('#output').value = data;
            })
        });
    });
})()