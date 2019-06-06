(function () {
    "use strict";

    window.addEventListener("load",function () {
        document.querySelector('#hw').addEventListener("change",function () {
            var file = 'homeworks/' + document.querySelector('#hw').value;
            fetch(file)
            .then((res)=>{var x = res; console.log(res);})
            .then(data=>{
                document.querySelector('#output').value = data;
            })
        });
    });
})()