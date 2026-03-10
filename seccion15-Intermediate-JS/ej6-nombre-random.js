// Dado un array con nombres, elegir de forma aleatoria quién pagará el almuerzo

function whosPaying(names) {
    var largo = names.length;
    var random = Math.random() * largo;
    random = Math.floor(random);
    return names[random] + " is going to buy lunch today!"
}