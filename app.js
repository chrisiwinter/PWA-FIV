if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./sw.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log("Not Found"))
    })
}


const app = Vue.createApp({
    data() {
        return{
            Rechner: false,
            Puntigamer: false,
            Murauer: false,
            Wieselburger: false,
            Zwettler: false,
            Goesser: false,
            picture: 'Bier.jpg',
            AusgabeP: 0,
            AusgabeM: 0,
            AusgabeW: 0,
            AusgabeZ: 0,
            AusgabeG: 0,
            Eingabe:  0,


        }
    },
    methods: {
        BerechnungPreis(){
            this.Ausgabe = this.Eingabe;
            this.Rechner = true;
            this.AusgabeP = this.Eingabe  / 23,05;
            this.AusgabeM = this.Eingabe  / 24,49;
            this.AusgabeW = this.Eingabe  / 24,07;
            this.AusgabeZ = this.Eingabe  / 24,00;
            this.AusgabeG = this.Eingabe  / 23,26;

        },
        ZeigePuntigamer(){
            if(this.Rechner){
                this.Puntigamer = !this.Puntigamer;
            }

        },
        ZeigeMurauer(){
            if(this.Rechner){
            this.Murauer = !this.Murauer;
            }

        },
        ZeigeWieselburger(){
            if(this.Rechner){
            this.Wieselburger = !this.Wieselburger;
            }

        },
        ZeigeZwettler(){
            if(this.Rechner){
            this.Zwettler = !this.Zwettler;
            }

        },
        ZeigeGoesser(){
            if(this.Rechner){
            this.Goesser = !this.Goesser;
            }

        }

    }
})

app.mount('#app')
