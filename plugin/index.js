var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var { MatchPattern } = require("sdk/util/match-pattern");

var pattern = new MatchPattern(/http\:\/\/jiaowu.swjtu.edu.cn\/servlet\/AssessAction\?SetAction\=viewAssess\&sid\=.+\&templateFlag\=0/);
console.log(pattern.test("http://jiaowu.swjtu.edu.cn/servlet/AssessAction?SetAction=viewAssess&sid=64E06D856A86E975&templateFlag=0"));


var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "Visit Mozilla",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png",
    },
    onClick: handleClick,
});

// 评课嵌入代码
var courses_pk = require("sdk/page-mod");
courses_pk.PageMod({
    include: /http\:\/\/jiaowu.swjtu.edu.cn\/servlet\/AssessAction\?SetAction\=viewAssess\&sid\=.+\&templateFlag\=0/,
    contentScriptFile: [self.data.url("js/jquery-1.9.1.js"), self.data.url("js/courses_pk.js"),],
});

// 导师评价嵌入代码
var tutor_pk = require("sdk/page-mod");
tutor_pk.PageMod({
    include: /http\:\/\/jiaowu.swjtu.edu.cn\/servlet\/AssessAction\?SetAction=viewAssess\&sid\=.+\&templateFlag\=1&type\=1/,
    contentScriptFile: [self.data.url("js/jquery-1.9.1.js"), self.data.url("js/tutor_pk.js"),],
});

// 实习评价嵌入代码
var practice_pk = require("sdk/page-mod");
practice_pk.PageMod({
    include: /http\:\/\/jiaowu.swjtu.edu.cn\/servlet\/AssessAction\?SetAction\=viewAssess\&sid\=.+\&templateFlag\=1\&type\=2/,
    contentScriptFile: [self.data.url("js/jquery-1.9.1.js"), self.data.url("js/practice_pk.js"),],
});

// 自助学期短评
var semester_pk = require("sdk/page-mod");
semester_pk.PageMod({
    include: /http\:\/\/jiaowu.swjtu.edu.cn\/servlet\/AppraiseStudentAction\?Action\=submitInfo\&Forward\=Term/,
    contentScriptFile: [self.data.url("js/jquery-1.9.1.js"), self.data.url("js/semester_pk.js"),],
});

// 图标点击事件
function handleClick(state) {

}