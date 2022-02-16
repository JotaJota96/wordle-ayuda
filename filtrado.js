
/**
 * Quita los tildes de la palabra parámetro
*/
function quitarTildes(palabra) {
    palabra = palabra.replace("á", "a");
    palabra = palabra.replace("é", "e");
    palabra = palabra.replace("í", "i");
    palabra = palabra.replace("ó", "o");
    palabra = palabra.replace("ú", "u");
    palabra = palabra.replace("ü", "u");
    return palabra;
}

/**
 * Devuelve las palabras que no contienen las letras especificadas.
 * palabras: Array de palabras a filtrar
 * letras:   Letra que no deben aparecer en las palabras filtradas
*/
function filtrarLetraNoValidas(palabras, letras) {
    return palabras.filter(palabra => {
        return !letras.some(letra => quitarTildes(palabra).includes(letra));
    });
}

/**
 * Devuelve las palabras que contienen la letra especificada pero no en la posición indicada.
 * palabras: Array de palabras a filtrar
 * letra:    Letra que se busca
 * posicion: Posición en la que no debe aparecer la letra
*/
function filtrarLetraValidas(palabras, letra, posicion = undefined) {
    return palabras.filter(palabra => {
        palabra = quitarTildes(palabra);
        return palabra.includes(letra) && ((posicion == undefined) || ((posicion != undefined) && palabra[posicion-1] != letra)) 
   } );
}

/**
 * Devuelve las palabras que contienen la letra en la posición especificada.
 * palabras: Array de palabras a filtrar
 * letra:    Letra que se busca
 * posicion: Posición de la letra que se busca
*/
function filtrarLetraConocidaPorPosicion(palabras, letra, posicion) {
    return palabras.filter(palabra => quitarTildes(palabra)[posicion-1] == letra );
}
