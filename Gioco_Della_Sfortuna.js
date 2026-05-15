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
    { id: 1, nome: "Ti si rompe la racchetta", immagine: "https://www.repstatic.it/content/nazionale/img/2023/05/09/182152591-3fd43fdf-5697-4bd1-90f4-a6346c30fbc5.jpg", indice: 5.0 },
]