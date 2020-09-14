function ajax(options) {
    var ajax = new XMLHttpRequest();

    ajax.open(options.method, options.url, true)

    ajax.send()

    ajax.onreadystatechange = function() {
        var data = JSON.parse(ajax.responseText);
        if(ajax.readystate === 4 && ajax.status === 200) {
            // 传递出响应的数据
            options.success(data)
        } else if(ajax.readystate === 4 && ajax.status !== 200) {
            options.fail(data)
        }
    }
}

export default ajax