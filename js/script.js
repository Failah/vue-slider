console.log('JS OK!');

/*
Descrizione:
Partendo dal markup in allegato, rifare lo slider ma questa volta usando Vue. 
Potete tenere sott'occhio la versione fatta in plain JS come riferimento.

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine 
automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo 
riprendere quando esce

Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la 
parte di markup possiamo recuperare html e css dell'esercizio svolto qualche
 giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, 
l'esercizio si riduce a poche righe ;)
- ora abbiamo diversi strumenti in più nelle nostre tasche, che possono 
tornarci utili per svolgere l'esercizio in una versione più evoluta ed efficace, soprattutto per quando riguarda la struttura dei dati, sfruttiamoli al meglio!
*/

const app = new Vue(
    {
        el: '#app',

        data: {
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],

            i: 0,
        },

        methods: {
            moveNext: function () {
                if (this.i < this.slides.length - 1) {
                    this.i++
                } else {
                    this.i = 0
                }

            }
        }
    }
)

