let container = document.querySelector('.container');

    for (i=0; i<=255; i++) {
        
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = 'rgb(18, 115, 194)';
       } );
    }
 let  numberRows;
const resetBtn = document.querySelector('.resetBtn');
resetBtn.classList.add('resetBtn');
resetBtn.addEventListener('click', () => {
    numberRows = prompt("Please type number of squares per side (up to 100)")
    parseInt(numberRows);
    if (numberRows<=100) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        };
        console.log('erased');
        
            for (i=0; i<= (numberRows*numberRows)-1; i++ ) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            container.appendChild(pixel);
            let size = (960/numberRows) + "px";
            pixel.style.width = size;
            pixel.style.height = size;
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = "rgb(18, 115, 194)";
        } );
        }
    }
});

