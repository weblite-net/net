let styleLink = document.querySelector('link');

//autocompile state
let autoState = false;


styleLink.setAttribute('href', `${localStorage.getItem('mode')}Styles.css`);

const displayOutput = () => {
    document.getElementById('output').innerHTML = localStorage.getItem('markup');
}

window.addEventListener('focus', () => {
    document.getElementById('output').innerHTML = localStorage.getItem('markup');

});



document.getElementById('output').innerHTML = localStorage.getItem('markup');

let autoCompileBtn = document.getElementById("autoCompile");
autoCompileBtn.addEventListener('click', () => {
    autoState = !autoState;
    if(autoState){
        autoCompileBtn.innerText = "Autocompile On !!! Recompiles by itself";

    }else{
        autoCompileBtn.innerText = "Autocompile turned Off";
        
    }

});