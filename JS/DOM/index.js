// console.log("hello world");

// const div=document.getElementsByTagName("div");

// div[0].innerText="ABES Engineering College.";
// div[0].style.color="brown";
// div[0].style.backgroundColor='plum';
// console.log(div);

const button = document.getElementById('btn');
console.log(button);
const loading = document.getElementById('disp');

function displayData() {
    
    loading.innerText = 'Data Loading';
    
    setTimeout(() => {

        const div = document.getElementsByClassName('container');
        div[0].innerHTML = '<h2 style="color: blue;">Hello World</h2>';
        console.dir(div);

        const h2 = document.createElement('h2');
        h2.innerText = "CS B Students";
        h2.style.backgroundColor = 'cadetblue';
        console.log(h2);
        div[0].appendChild(h2);

        const img = document.createElement('img');
        img.src = 'https://tinypng.com/images/social/website.jpg';
        img.setAttribute('height', '200px');
        img.setAttribute('width', '300px');
        div[0].appendChild(img);
        
        loading.innerText = 'Data Loaded Successfully';
}, 1000);

}

    

button.addEventListener('click', displayData);