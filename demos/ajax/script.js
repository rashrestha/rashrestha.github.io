(function () {
    "use strict";

    $(function () {
        $('#hw').change(function () {
            var file = 'homeworks/' + $('#hw').val();
            fetch(file)
            .then((data)=>{
                $('#output').val(data);
            })
        });
    });
})()