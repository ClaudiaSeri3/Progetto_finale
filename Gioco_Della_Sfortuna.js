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
    { id: 1, nome: "Ti si rompe la racchetta", immagine: "1.png"},
    { id: 2, nome: "Perdi una partita semplice", immagine: "2.png"},



















];

export default function App (){
    const [fase, setFase] = useState("home");      
    const [mano, setMano] = useState([]);
    const [cartaRound, setCartaRound] = useState(null);
    const [vite, setVite] = useState(3);
    const [timer, setTimer] = useState(30);
    const [messaggio, setMessaggio] = useState("");
}






