let counter = 1;

function moveSlides(){
    const katedrala = document.getElementById('katedrala');
    const termi = document.getElementById('termi');
    const galata = document.getElementById('galata');
    const aladja = document.getElementById('aladja');
    const akvarium = document.getElementById('akvarium');


    switch(counter){
        case 1:
            katedrala.style.display = "none";
            termi.style.display = "block";
            break;
        case 2:
            termi.style.display = "none";
            galata.style.display = "block";
            break;
        case 3:
            galata.style.display = "none";
            aladja.style.display = "block";
            break;
        case 4:
            aladja.style.display = "none";
            akvarium.style.display = "block";
            break;
        case 5:
            akvarium.style.display = "none";  
            katedrala.style.display = "block";  
            break;
        default:
            katedrala.style.display = "none";
            termi.style.display = "block";
            counter = 1;
    }

    
    counter ++;
    console.log(counter);
    
}