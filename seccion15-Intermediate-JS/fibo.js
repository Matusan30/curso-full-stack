// Crear una función que dado un número, cree la sucesión de Fibonacci de ese largo

function fibo(n) {
    var lista = [];
    for (var i = 0; i <= (n-1); i ++) {
        if (i < 2) {
            lista.push(i);
        } else {
            siguiente = lista[i - 1] + lista[i - 2];
            lista.push(siguiente);
        }
    }
    return lista;
}