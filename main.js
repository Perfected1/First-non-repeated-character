function check() {
    const userInput = document.getElementById('input').value;

    function notRepeatedChar(output) {
        //split the users' input into ana arry
        var arr = output.split('');
        var resp = '';
        var rept = 0;

        for (var i = 0; i < arr.length; i++) {
            rept = 0;
            for (var j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    rept += 1;
                }

                if (rept < 2) {
                    resp = arr[i];
                    break;
                } else {
                    document.getElementById('output').innerHTML = "All characters are repeated!";
                }
                }
                return resp;
    
            
        };
    };
        document.getElementById('output').innerHTML = "The first Non-Repeating Character in the Input given is:" + "<h1>\'<strong>" + notRepeatedChar(userInput) + "\'</strong></h1>";
    }
    