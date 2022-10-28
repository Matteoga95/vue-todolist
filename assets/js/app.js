// Descrizione:
// Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue;


createApp({
    data() {
        return {
            nuovaTask: '',
            error: false,
            tasks: [
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
    methods: {
        delete(i) {
            //dobbiamo rimuovere l'elemento selezionato all'indice parametrizzato con lo splice
            this.tasks.splice(i, 1)
        },
        done(i) {
            //dobbiamo spuntare come fatto l'elemento selezionato all'indice
            //per farlo mettimao done a true per questo elemento o false se era già true
            if (  this.tasks[i].done === true) {
                this.tasks[i].done = false
            }else{
                this.tasks[i].done = true
            }
          
        },
        aggiungiTask() {
            //prima recupero il valore dell'input emesso dall'utente
            console.log(this.nuovaTask);

            // non far si che aggiunga una task vuota
            if (this.nuovaTask.length == 0) {
                //mostro errore            
                this.error = true;

            } else {
                // // pusho il valore dell'input dentro la lista di task         
                this.tasks.unshift({ text: this.nuovaTask, done: false });
                this.nuovaTask = '';
            }

        }
    }

}).mount('#app');