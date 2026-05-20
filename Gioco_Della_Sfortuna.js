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
    { id: 2, nome: "Perdi una partita facile", immagine: "https://copilot.microsoft.com/th/id/BCO.26318cb1-5b12-4560-b552-1163360709e5.png", indice: 7.0 },
    { id: 3, nome: "Scivoli davanti a tutti", immagine: "https://copilot.microsoft.com/th/id/BCO.a1e5e8bc-4b07-476b-b0f1-a514af83949b.png", indice: 9.0 },
    { id: 4, nome: "Ti cade la borraccia", immagine: "https://copilot.microsoft.com/th/id/BCO.25be48cb-b3a8-47cb-9d88-d0b0255f3880.png", indice: 11.0 },
    { id: 5, nome: "Crampo improvviso", immagine: "https://copilot.microsoft.com/th/id/BCO.2e3dca57-3a27-439d-a622-427999971536.png", indice: 13.0 },
    { id: 6, nome: "Ti si slaccia la scarpa", immagine: "https://copilot.microsoft.com/th/id/BCO.4184e1ad-b780-44de-a4f1-d675b9d973e9.png", indice: 15.0 },
    { id: 7, nome: "Perdi il pullman per la gara", immagine: "https://copilot.microsoft.com/th/id/BCO.ad063701-2205-4ddf-93a1-03a7c32826d7.png", indice: 17.0 },
    { id: 8, nome: "Ti dimentichi l'acqua", immagine: "https://copilot.microsoft.com/th/id/BCO.beb66a18-3aa1-4294-99df-10825ebf23c4.png", indice: 19.0 },
    { id: 9, nome: "Ti fai male al polso", immagine: "https://copilot.microsoft.com/th/id/BCO.f433a647-5a09-478e-bb13-f0fcca525f01.png", indice: 21.0 },
    { id: 10, nome: "Ti si rompe la scarpa", immagine: "https://copilot.microsoft.com/th/id/BCO.496d1c83-f521-44f7-95c1-6450b1309777.png", indice: 23.0 },











];

export default function App (){
    const [fase, setFase] = useState("home");      
    const [mano, setMano] = useState([]);
    const [cartaRound, setCartaRound] = useState(null);
    const [vite, setVite] = useState(3);
    const [timer, setTimer] = useState(30);
    const [messaggio, setMessaggio] = useState("");
}






