// 修改 dom 界面
var box = $("td[colspan='2']")[1];
$('<input/>', {
    'type': 'button',
    'value': '一键差评',
    'onclick': 'badit(0)',
}).appendTo(box);


$('<input/>', {
    'type': 'button',
    'value': '一键好评',
    'onclick': 'badit(1)',
}).appendTo(box);


// 脚本注入手段
// 采用原生 dom 注入方式，优先级可控
function createScript(js, callback) {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.innerHTML = js;

    if (document.body !== null) {
        document.body.appendChild(oScript);
    }

    var oldScript = document.getElementsByTagName("script")[2];
    oldScript.innerHTML += js;
    // 执行回调函数
    oScript.onload = function() {
        callback();
    };
}


var_code = "function badit(ind) { var ps = $(\"input[name=\'problem_id\']\"); var ans = \"\", ids = \"\"; ids += \",B09B94A03EF2FAF9,12B50D1D975597B3,0E03727B0C64AFFF,93CD8CF74AA7FAE9,2A318BA1531467B4,C5D05B18C0A6B2B9\"; if(ind == 0){ ans += \",283885,283895,283900,283905,283890,希望学校能取消实习。\";} else{ ans += \",283881,283891,283896,283901,283886,希望学校能取消实习。\"; } $.post(\"AssessAction?SetAction=answer\", { id: ids, answer: ans, assess_id: $(\"input[name=\'assess_id\']\").val(), templateFlag: \"1\" }, function(data) { if (data.flag) { alert(\"教务君说提交成功。返回上一个页面刷新即可。\"); } history.go(-1); }); }";

createScript(var_code, function() {
    console.log('Append success!');
});