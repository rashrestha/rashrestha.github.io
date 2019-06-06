(function () {
    "use strict";

    window.addEventListener("load",function () {
        document.querySelect('#hw').addEventListener("change",function () {
            var file = 'homeworks/' + document.querySelect('#hw').val();
            fetch(file)
            .then((data)=>{
                document.querySelect('#output').val(data);
            })
        });
    });
})()