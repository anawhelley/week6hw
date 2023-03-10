//gmm//
var GMM = [
    "https://www.youtube.com/embed/m8dR9apR--4",  
    "https://www.youtube.com/embed/5zi5IrpYBIc",
    "https://www.youtube.com/embed/ti0A16Dvh9M",
    "https://www.youtube.com/embed/fk05OGKe85k",
    "https://www.youtube.com/embed/HcpuKFDFflA",
    "https://www.youtube.com/embed/PQsw8hMOBa8",
    "https://www.youtube.com/embed/snQbmHSz4m8"
];

function loadGMM() {
var el = document.getElementById('ifr');

var newUrl = GMM[Math.floor(Math.random()*GMM.length)];

el.src = newUrl; 
}

//cute vids//
var cute = [
"https://www.youtube.com/embed/HY2gbnfWjJA",  
"https://www.youtube.com/embed/DShy-aweDTU",
"https://www.youtube.com/embed/A8ru7EOZGIQ",
"https://www.youtube.com/embed/Vt_Gi5ocXVo",
"https://www.youtube.com/embed/UKqNpZWPx9o",
"https://www.youtube.com/embed/ZBCCD4VLZnw",
"https://www.youtube.com/embed/8FhGOV7fs64",
"https://www.youtube.com/embed/JSx0AmOQedc"
];

function loadcute() {

var el = document.getElementById('ifr');

var newUrl = cute[Math.floor(Math.random()*cute.length)];

el.src = newUrl; 
}

//crochet//
var crochet = [
"https://www.youtube.com/embed/JHIkjN3Yzo8",
"https://www.youtube.com/embed/CblMBMQfZ5I",
"https://www.youtube.com/embed/f91WeRXYLiQ",
"https://www.youtube.com/embed/vDQns0qge1Y",
"https://www.youtube.com/embed/voc6PtZhms8", 
"https://www.youtube.com/embed/mWx_fXVErXU",
"https://www.youtube.com/embed/1VNpVQD5GiU"
];

function loadcrochet() {

var el = document.getElementById('ifr');

var newUrl = crochet[Math.floor(Math.random()*crochet.length)];

el.src = newUrl; 
}