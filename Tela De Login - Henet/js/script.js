const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('log');
    

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        document.querySelector('img').src = "Tela De Login - Henet/Henet.svg";

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    document.querySelector('img').src = "Tela De Login - Henet/Henet-negativo.svg";


    form.classList.remove('dark');


});





