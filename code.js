const textArea = document.getElementById('textArea');
const btnBold = document.getElementById('btn-bold');
// bold btn
btnBold.addEventListener('click', function(){
    if(textArea.style.fontWeight == 'bold'){
        textArea.style.fontWeight = 'normal';
    }
    else{
        textArea.style.fontWeight = 'bold';
    }
    
});
const btnItalic = document.getElementById('btn-italic');
btnItalic.addEventListener('click', function(){
    if(textArea.style.fontStyle == 'italic'){
        textArea.style.fontStyle = 'normal';
    }
    else{
        textArea.style.fontStyle = 'italic'
    }
});
// italic btn
const btnUnderline = document.getElementById('btn-underline');
// underline btn
btnUnderline.addEventListener('click', function(){
    if(textArea.style.textDecoration == 'underline'){
        textArea.style.textDecoration = 'none';
    }
    else{
        textArea.style.textDecoration = 'underline';
    }
});
const btnTextLeft = document.getElementById('btn-left');
// btn left
btnTextLeft.addEventListener('click', function(){
    textArea.style.textAlign = 'left';
});
const btnTextCenter = document.getElementById('btn-center');
// btn center
btnTextCenter.addEventListener('click', function(){
    textArea.style.textAlign = 'center';
})
const btnTextRight = document.getElementById('btn-right');
// btn right
btnTextRight.addEventListener('click', function(){
    textArea.style.textAlign = 'right';
})
const btnTextJustify = document.getElementById('btn-justify');
// btn justify
btnTextJustify.addEventListener('click', function(){
    textArea.style.textAlign = 'justify';
});
// input-num
const inputNumField = document.getElementById('inputNum');
inputNumField.addEventListener('input', function(){
    const inputNumValueStr = inputNumField.value;
    const inputNumValueNum = parseFloat(inputNumValueStr);
    textArea.style.fontSize = inputNumValueNum;
});
// input color
const inputColorField = document.getElementById('inputColor');
inputColorField.addEventListener('input', function(){
    const inputColor = inputColorField.value;
    textArea.style.color = inputColor;
})