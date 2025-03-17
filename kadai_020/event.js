console.log(document.head);
console.log(document.body);

const btn = document.getElementById('btn');
const txt = document.getElementById('text');

console.log(btn);
console.log(txt);



btn.addEventListener('click', () => {
    console.log('ボタンをクリックしました');
    txt.textContent = 'ボタンをクリックしました';
});

