const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('GRAAAAACIAAAS POR PERDONARME Y CON LO DEL GATITO YA NO ESTES TRSITE EL ESTA EN UN MEJOR LUGAR Y AUNQUE TU NOLE HAYAS VISTO EL O ELLA SABE QUE LE HUBIERAS CUIDADO MUY BIEN Y APARTE DE ESO EL TAMBIEN TE CUIDA MUCHO')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
