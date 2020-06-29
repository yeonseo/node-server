document.querySelector('.ajaxsend').addEventListener('click', function () {
    var inputdata = document.forms[0].elements[0].value;
    sendAjax('http://127.0.0.1:3000/user/ajax_send_email', inputdata);
})

function sendAjax(url, data) {
    var data = { 'email': data };
    data = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send(data);
    xhr.addEventListener('load', function () {
        var result = JSON.parse(xhr.responseText);
        var resultDiv = document.querySelector(".result");

        if(result.result !== "ok") resultDiv.innerHTML = "이메일을 찾을 수 없습니다.";
        else resultDiv.innerHTML = result.email;
    })
}