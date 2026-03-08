// Crear una función que, dado un año, devuelva true si es bisiesto y false si no

// Solución propuesta: IFs anidados

function esBisiesto(year) {
    var leapYear = false

    if ((year % 4) == 0) {
        leapYear = true
        if ((year % 100) == 0) {
            leapYear = false
            if ((year % 400) == 0) {
                leapYear = true
            }
        }
    }
    
    if (leapYear) {
        return 'Leap year.'
    } else {
        return 'Not leap year.'
    }
}