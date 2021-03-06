const data = "data.json";
const listMhs = document.querySelector('#mhs-list');
var urlParams = new URLSearchParams(window.location.search);
var jk =   urlParams.get("jk");

const getListMhs =()=>{
    fetch(data)
    .then(respone => {
        return respone.json();
    }).then(responeJson =>{
        console.log(responeJson.mahasiswa);
        if(jk == null){
            showListMhs(responeJson.mahasiswa);
        }else {
            showListMhsFromGender(responeJson.mahasiswa);
        }
    }).catch(error =>{
        console.error(error);
    }); 
}

const showListMhs = mhs => {
    listMhs.innerHTML="";
    mhs.forEach(item => {
        listMhs.innerHTML += `
        <div class="row">
        <div class="col s12 m4 l4">
            <div class="card">
                <div class="card-image">
                    <img src="${item.foto}">
                    <span class="card-title">${item.nim}</span>
                </div>
                <div class="card-content">
                    <p>Nama : ${item.nama}</p>
                    <p>Alamat Asal : ${item.alamat_asal}</p>
                    <p>Alamat Di Malang : ${item.alamat_mlg}</p>
                    <p>Jenis Kelamin : ${item.jk}</p>
                </div>
            </div>
        </div>
        </div>`
    });
}

var showListMhsFromGender = mhs => {
    listMhs.innerHTML="";
    mhs.forEach(item => {
        if(item.jk == jk)
        {
            listMhs.innerHTML += `
            <div class="row">
            <div class="col s12 m4 l4">
                <div class="card">
                    <div class="card-image">
                        <img src="${item.foto}">
                        <span class="card-title">${item.nim}</span>
                    </div>
                    <div class="card-content">
                        <p>Nama : ${item.nama}</p>
                        <p>Alamat Asal : ${item.alamat_asal}</p>
                        <p>Alamat Di Malang : ${item.alamat_mlg}</p>
                        <p>Jenis Kelamin : ${item.jk}</p>
                    </div>
                </div>
            </div>
            </div>`
        }
    });
}

document.addEventListener('DOMContentLoaded', getListMhs);