
let nametxt = document.getElementById('name');
let button = document.getElementById('button_text');

let uname = ['KFC', 'Pizza', 'Hotpot', 'Fried Rice', 'Tims', 'Popeyes',
    'McDonald', 'Dumpling', 'Thai Express', 'Subway', 'Noodles', 'Burger King', 'Congee'];

function getrandom(min, max) {
    return Math.floor(Math.random() * (max - min - 1) + min);
}
function clock() {
    
    let random = uname[getrandom(0, uname.length - 1)];
    
    nametxt.innerHTML = random;
};

let time = self.setInterval("clock()", 30);

let flag = false;
button.onclick = function () {
    
    if (flag == false) {
        time = window.clearInterval(time);
        
        button.innerHTML = 'start';
        
        flag = true;

    } else {
        
        time = self.setInterval("clock()", 30);
        button.innerHTML = 'stop';
        flag = false;
    }
}