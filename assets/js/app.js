// Descrizione:
// Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.


const { createApp } = Vue;


createApp({
    data() {
        return {
           tasks:[
            {
                text: 'Testo della task',
                done: false
            },
            {
                text: 'Testo della task 2',
                done: true
            },
            {
                text: 'Testo della task 3',
                done: false
            }
           ]
        }
    },
    methods: {}
         
}).mount('#app');