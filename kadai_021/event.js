const btn = document.getElementById('');
const text = document.getElementById('');

btn.addEventListener('click', () => {
console.log('ボタンをクリックしました')
});

setTimeout(() => {
    console.log('text');
},
2000);