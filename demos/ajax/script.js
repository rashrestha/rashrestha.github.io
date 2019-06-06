(function () {
    "use strict";

    window.addEventListener("load",function () {
        document.querySelect('#hw').addEventListener("change",function () {
            var file = 'homeworks/' + $('#hw').val();
            fetch(file)
            .then((data)=>{
                document.querySelect('#output').val(data);
            })
        });
    });
})()