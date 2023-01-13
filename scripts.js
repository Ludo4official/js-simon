function numeroDaIndovinare(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gridContainer = document.getElementById('container');

let playButton = document.getElementById('button');

playButton.addEventListener('click',

    function () {

        console.log('Gioco iniziato')

        gridContainer.innerHTML = '';
        
        let numeriRandom = generaNumeri(1, 100, 5);
        
        function generaNumeri(min, max, numeriCasuali) {
    
            const numeriRandom = [];
            
            for (let i = 1; i <= numeriCasuali; i++) {
                
                const gridContainer = document.getElementById('container');
                let randomNumber = numeroDaIndovinare(min, max); 
        
                while(numeriRandom.includes(randomNumber)){
                    randomNumber = numeroDaIndovinare(1, 100);
                }
        
                numeriRandom.push(randomNumber);

                document.getElementById('container').innerHTML += '<p class="cell">' + randomNumber + '</p>';
            }
        
            console.log(numeriRandom)
        
            return numeriRandom

        }

        setTimeout(timer, 3000);

        function timer() {

        gridContainer.innerHTML = '';

        console.log('Tempo scaduto');
    
            setTimeout(function(){

                let risposta = parseInt(prompt('Inserisci il primo numero'));
                console.log('Il primo numero inserito è:', risposta);

                let risposta2 = parseInt(prompt('Inserisci il secondo numero'));
                console.log('Il secondo numero inserito è:', risposta2);

                let risposta3 = parseInt(prompt('Inserisci il terzo numero'));
                console.log('Il terzo numero inserito è:', risposta3);

                let risposta4 = parseInt(prompt('Inserisci il quarto numero'));
                console.log('Il quarto numero inserito è:', risposta4);

                let risposta5 = parseInt(prompt('Inserisci il quinto numero'));
                console.log('Il quinto numero inserito è:', risposta5);

            }, 500);

        }

    }

);









