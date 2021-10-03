const phraseSelect = () => {
    let phrase = "";
    let numRandom = Math.round(Math.random() * 5);
    //console.log(numRandom);
    switch (numRandom) {
        case 1:
            phrase = "Cada día es especial";
            break;
        case 2:
            phrase = "Tú puedes dar más de tú mismx";
            break;
        case 3:
            phrase = "Demuestra lo que vales";
            break;
        case 4:
            phrase = "1 + 1 no siempre es igual a 2";
            break;
        case 5:
            phrase = "En la vida no vale rendirse";
            break;
        default:
            phrase = "A veces hay que amoldarse a lo que hay";
            break;
    };
    return phrase;
}

console.log(phraseSelect());
