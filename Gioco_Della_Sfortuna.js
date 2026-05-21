/**
 * @author Claudia Seri
 * @description Gioco della Sfortuna 
 */

import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet, SafeAreaView } from "react-native";

/**
 * Inserimento di 50 carte da gioco con: indice di sfortuna, immagine inerente e il titolo della carta 
 */

const Carte = [
    { id: 1, nome: "Ti si rompe la racchetta", immagine: "https://copilot.microsoft.com/th/id/BCO.27daff15-dd98-4756-ac8d-bbd460beb670.png", indice: 80.0 },
    { id: 2, nome: "Perdi una partita facile", immagine: "https://copilot.microsoft.com/th/id/BCO.26318cb1-5b12-4560-b552-1163360709e5.png", indice: 30.0 },
    { id: 3, nome: "Scivoli davanti a tutti", immagine: "https://copilot.microsoft.com/th/id/BCO.a1e5e8bc-4b07-476b-b0f1-a514af83949b.png", indice: 20.0 },
    { id: 4, nome: "Ti cade la borraccia", immagine: "https://copilot.microsoft.com/th/id/BCO.25be48cb-b3a8-47cb-9d88-d0b0255f3880.png", indice: 8.0 },
    { id: 5, nome: "Crampo improvviso", immagine: "https://copilot.microsoft.com/th/id/BCO.2e3dca57-3a27-439d-a622-427999971536.png", indice: 90.0 },
    { id: 6, nome: "Ti si slaccia la scarpa", immagine: "https://copilot.microsoft.com/th/id/BCO.4184e1ad-b780-44de-a4f1-d675b9d973e9.png", indice: 15.0 },
    { id: 7, nome: "Perdi il pullman per la gara", immagine: "https://copilot.microsoft.com/th/id/BCO.ad063701-2205-4ddf-93a1-03a7c32826d7.png", indice: 85.0 },
    { id: 8, nome: "Ti dimentichi l'acqua", immagine: "https://copilot.microsoft.com/th/id/BCO.beb66a18-3aa1-4294-99df-10825ebf23c4.png", indice: 56.0 },
    { id: 9, nome: "Ti fai male al polso", immagine: "https://copilot.microsoft.com/th/id/BCO.f433a647-5a09-478e-bb13-f0fcca525f01.png", indice: 78.0 },
    { id: 10, nome: "Ti si rompe la scarpa", immagine: "https://copilot.microsoft.com/th/id/BCO.496d1c83-f521-44f7-95c1-6450b1309777.png", indice: 78.0 },
    { id: 11, nome: "Perdi la fascia per capelli", immagine: "https://copilot.microsoft.com/th/id/BCO.e718a370-32f2-4009-896f-e66a700f9ea5.png", indice: 25.0 },
    { id: 12, nome: "Ti entra sudore negli occhi", immagine: "https://copilot.microsoft.com/th/id/BCO.b9ee7a31-37ce-4490-9fdb-15b9d976a764.png", indice: 27.0 },
    { id: 13, nome: "Ti cade il telefono mentre corri", immagine: "https://copilot.microsoft.com/th/id/BCO.ab51699b-873a-4201-8b9d-f1797c666496.png", indice: 29.0 },
    { id: 14, nome: "Ti dimentichi l'asciugamano", immagine: "https://copilot.microsoft.com/th/id/BCO.e2197822-3ff5-42cc-bcb4-0b98924a4d40.png", indice: 31.0 },
    { id: 15, nome: "Perdi un punto per distrazione", immagine: "https://copilot.microsoft.com/th/id/BCO.90d024d4-7f02-49d3-bc96-25e851300d6c.png", indice: 33.0 },
    { id: 16, nome: "Ti si rompe il laccio", immagine: "https://copilot.microsoft.com/th/id/BCO.5acffb29-6429-4a44-8117-298693c9c467.png", indice: 35.0 },
     
    
    


];

export default function App (){
    const [fase, setFase] = useState("home");      
    const [mano, setMano] = useState([]);
    const [cartaRound, setCartaRound] = useState(null);
    const [vite, setVite] = useState(3);
    const [timer, setTimer] = useState(30);
    const [messaggio, setMessaggio] = useState("");

    /**
     * @description Funzione dell'inizio del gioco, vengono mischiate le carte e successivamente distribuite le prime 3, viene cambiato lo stato
     * da stato "home" si passa a stato "gioco"
     */
    const startGame = () => {
    const iniziali = shuffle(CARTE).slice(0, 3).sort((a, b) => a.indice - b.indice);
    setMano(iniziali);
    setVite(3);
    setFase("gioco");
  };
  
  






































































































}






