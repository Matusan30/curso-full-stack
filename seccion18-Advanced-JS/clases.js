
// Armar la función Constructora
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;

    // Crear un método
    this.clean = function() {
        alert("Cleaning in Progress...");
    }
}

// Crear un objeto
var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"])