// Dada una edad en años, decir cuanto queda hasta los 90 años, en meses, semanas y días

function lifeInWeeks(age) {
    var edadRestante = 90 - age
    var dias = edadRestante * 365
    var semanas = edadRestante * 52
    var meses = edadRestante * 12
    
    return ("You have " + dias + " days, " + semanas + " weeks, and " + meses + " months left.");
}
