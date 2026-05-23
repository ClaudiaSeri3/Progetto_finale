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
    { id: 17, nome: "Si spezza la barretta energetica durante un match", immagine: "https://copilot.microsoft.com/th/id/BCO.ab7c604c-16c9-482b-a619-6660c15e0f99.png", indice: 37.0 }, 
    { id: 18, nome: "Sbagli un gol", immagine: "https://copilot.microsoft.com/th/id/BCO.0a5dc312-14ef-40c6-8b4f-dc9c4da2f9dc.png", indice: 39.0 },
    { id: 19, nome: "Inciampi nel tappetino", immagine: "https://copilot.microsoft.com/th/id/BCO.bd96b124-6700-4cd5-a3a2-9a59a9787a7d.png", indice: 41.0 },
    { id: 20, nome: "Ti si rompe il grip", immagine: "https://copilot.microsoft.com/th/id/BCO.d9227356-8f46-4cc8-9530-dcbb4e71358e.png", indice: 43.0 },
    { id: 21, nome: "Ti dimentichi la maglia di ricambio", immagine: "https://copilot.microsoft.com/th/id/BCO.e581f928-d445-491c-a692-3682da182123.png", indice: 45.0 },
    { id: 22, nome: "Ti entra un insetto in faccia", immagine: "https://copilot.microsoft.com/th/id/BCO.65cda21e-705f-48da-a39f-9cf76cb3740f.png", indice: 47.0 },
    { id: 23, nome: "Sbagli la battuta decisiva", immagine: "https://copilot.microsoft.com/th/id/BCO.d8c536a1-0a57-45f4-b45b-254bdb31bfd5.png", indice: 49.0 },
    { id: 24, nome: "Ti si rompe il borsone", immagine: "https://copilot.microsoft.com/th/id/BCO.c281515e-0f77-4d3d-9ba1-7e8f7ae3ef2c.png", indice: 51.0 },
    { id: 25, nome: "Ti si incastra la felpa", immagine: "https://copilot.microsoft.com/th/id/BCO.f5f662c7-de14-4e70-abdc-50b9619e6ab9.png", indice: 53.0 },
    { id: 26, nome: "Ti cade la racchetta", immagine: "https://copilot.microsoft.com/th/id/BCO.88bc9ae3-ba7a-4062-a713-bdce5bd13fd9.png", indice: 55.0 },


































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

  /**
   * @description Funzione grafica che mostra 3 cuori rappresentanti le vite disponibili, quando si perde una vita il cuore diventa bianco
   * in caso contrario rimane rosso
   */
  
    const Vite = () => {
    return (
      <Text style={styles.vite}>
        {vite >= 1 ? "❤️" : "🤍"}
        {vite >= 2 ? "❤️" : "🤍"}
        {vite >= 3 ? "❤️" : "🤍"}
      </Text>
    );
  };






































































































}






