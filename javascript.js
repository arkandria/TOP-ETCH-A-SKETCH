const container = document.querySelector('.container');

    for (i=0; i<=255; i++) {
        
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = 'black';
       } );
    }
    
    

