/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/
const app = new Vue(
 {
   el: '#datas', 
   data: { 
   message: 'Questo è un messaggio di test in un h1',
   image: 'https://www.aiapp.net/wp-content/uploads/2020/09/Agricoltura.jpg'
    }
 }
);