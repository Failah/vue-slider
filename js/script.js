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

            intervalTimer: undefined,
        },

        mounted() {
            this.intervalTimer = setInterval(this.moveNext, 2000);
        },

        methods: {
            moveNext: function () {
                if (this.i < this.slides.length - 1) {
                    this.i++
                } else {
                    this.i = 0
                }
            },

            movePrev: function () {
                if (this.i > 0) {
                    this.i--
                } else {
                    this.i = this.slides.length - 1
                }
            },

            displayImage: function (ind) {
                this.i = ind
            }
        }
    }
)

