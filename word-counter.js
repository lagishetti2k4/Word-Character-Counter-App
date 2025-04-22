let textAreaEle=document.getElementById('text-container');
let wordCountEle=document.getElementById('word-count');
let charCountEle=document.getElementById('char-count');
let content = ' ';
textAreaEle.addEventListener(
    'input',()=>{
        content=textAreaEle.value;
        charCountEle.innerHTML=content.length;
        let text  =content.trim()
        let words = text.split(/\s+/).length;
        wordCountEle.innerHTML = words;

    }) 
