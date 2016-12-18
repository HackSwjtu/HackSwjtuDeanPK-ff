// 修改 dom 界面
var box = $("td[colspan='2']")[1];
$('<input/>', {
    'type': 'button',
    'value': '一键好评',
    'onclick': 'badit(0)',
}).appendTo(box);

$('<input/>', {
    'type': 'button',
    'value': '一键差评',
    'onclick': 'badit(4)',
}).appendTo(box);

// 脚本注入手段
// 采用原生 dom 注入方式，优先级可控
function createScript(js, callback) {
    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.innerHTML = js;

    if (document.body !== null) {
        document.body.appendChild(oScript);
    }
    // 执行回调函数
    oScript.onload = function() {
        callback();
    };
}

var js_code = "";
js_code = 'var courses_pk_good=["老师授课的方式非常适合我们，他根据本课程知识结构的特点，重点突出，层次分明。理论和实际相结合，通过例题使知识更条理化。但授课速度有点快，来不及记录。","老师授课有条理，有重点，对同学既热情又严格，是各位老师学习的榜样。","老师上课有时非常幽默，有时非常严格，不过还是非常有教授风度的，不妨自己来听听嘛!大家很崇拜他哦!","老师治学严谨，要求严格，能深入了解学生的学习和生活状况，循循善诱，平易近人;注意启发和调动学生的积极性，课堂气氛较为活跃;上课例题丰富，不厌其烦，细心讲解，使学生有所收获;半数认真工整，批改作业认真及时并注意讲解学生易犯错误;最重要的是，段老师能虚心并广泛听取学生的意见和反馈信息，做到及时修正和调整自己的教学。总之，段老师是一个不可多得的好教师。","老师对待教学认真负责，语言生动，条理清晰，举例充分恰当，对待学生严格要求，能够鼓励学生踊跃发言，使课堂气氛比较积极热烈。","课堂内容充实，简单明了，使学生能够轻轻松松掌握知识。","教学内容丰富有效，教学过程中尊重学生，有时还有些洋幽默，很受同学欢迎。","老师教学认真，课堂效率高，授课内容详细，我们学生大部分都能跟着老师思路学习，气氛活跃，整节课学下来有收获、欣喜，使人对此门课程兴趣浓厚。","一开始这门课的时候确实被教材的厚度吓了一跳，虽然现在已在老师的提纲挈领下掌握了重点，仍然对自己不是很有自信。我认为电子化教学是一种很好的方式，它把教材变薄了，把精华的东西展现在我们面前，使大家的学习和复习更有针对性，也增强了大家学好这门课的信心。感谢老师在百忙之中作出了精美的课件，它对我们学习的帮助非常大。","老师上课诙谐有趣，他善于用凝练的语言将复杂难于理解的过程公式清晰、明确的表达出来。讲课内容紧凑、丰富，并附有大量例题和练习题，十分有利于同学们在较短时间内掌握课堂内容。","最开始，老师授课速度有些快，但是，后来学生提建议给老师，老师欣然接受并调整了授课速度。所以，总体感觉此刻城段老师讲得很好。","师组织习题课，使同学们在作业中的疑难问题在课堂上得以解决; 老师理论联系实际，课上穿插实际问题，使同学们对自己所学专业有初步了解，为今后学习打下基。","该老师治学严谨，对学生严格要求。课堂中，他循循善诱，强调独立思考，引导学生进行启发是思维。在这门课中，同学们体会到了学习的乐趣，在解决问题的过程中更懂得了科学探索的艰辛。","上课时，该老师能够从学生实际出发，适当缓和课堂气氛，充分调动学生学习的积极性，使学生在学习之余能够在调节气氛的过程中学习做人的道理，帮助我们形成正确的世界观。","课堂中，该老师是一个富有经验，工作认真负责的优秀老师。在课外，该老师对同学也很关心，有什么困难找老师，总会得到一些有益的指导。","老师授课时重点突出，合理使用各种教学形式，比如在重点讲解某一部分时，为了能够确保学生听懂，充分利用黑板推理，演算比较清晰，易于让学生接受的特点。老师严于律己，从不迟到早退，给学生起到模范表率作用。","最让我们喜欢他的原因还有，他不仅仅是传道授业解惑，而且常常对学生进行政治教育，开导学生，劝告我们努力学习，刻苦奋进，珍惜今天的时光。",];var courses_pk_correct=["对于抽象的东西，希望多列举一些生动的例子来描述，干讲真的听不懂，理解起来实在困难！！！","希望老师不要怠慢此课程，因为有的同学还是很感兴趣的。",];';
js_code += 'function badit(ind){var radios=$(\':radio\');var ps=$(\"input[name=\'problem_id\']\");var firstVal=radios[ind].value;var dg_ans=\'\',dg_ids=\'\';for(var i=1;i<=18;++i){index=Number(ind)+(i-1)*5;console.log(radios[index]);if(i==17){var dg_ans_ind=Math.floor(Math.random()*(courses_pk_good.length-1-0)+0);dg_ans+=\',\'+courses_pk_good[dg_ans_ind];continue}else if(i==18){var dg_ids_ind=Math.floor(Math.random()*(courses_pk_correct.length-1-0)+0);dg_ans+=\',\'+courses_pk_correct[dg_ids_ind];continue}else{num=(Number(firstVal)+(i-1)*5);dg_ans+=\',\'+num}}for(i=0;i<ps.length;++i){code=ps[i].value;dg_ids+=\',\'+code}$.post(\"AssessAction?SetAction=answer\",{id:dg_ids,answer:dg_ans,assess_id:$(\"input[name=\'assess_id\']\").val(),templateFlag:\"0\"},function(data){if(data){alert(\"教务君说提交成功了！返回上层页面刷新即可。\");}})}';

createScript(js_code, function() {
    console.log('Append success!');
});

