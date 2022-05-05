let v1 = 10;
let v2 = "10";
let v3 = false;
let v4 = 2.3;
let v5 = {
    nombre: "Luis",
    apellido: "Pérez",
    anioNacimiento: 1990,
    tieneHijos: false,
    domicilio: {
        calle: "Falsa",
        altura: 123,
        barrio: "Villa Buen Código",
        aCadena: function() {
            return "Calle " + this.calle + " " + this.altura + ", " + this.barrio;
        }
    },
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    },
    edad: function() {
        return anioActual() - this.anioNacimiento;
    },
    presentarse: function() {
        console.log("Hola soy " + this.nombreCompleto() + " y tengo " + this.edad() + " años. Vivo en " + this.domicilio.aCadena()  );
    }
};

console.log( v5.nombreCompleto() );
console.log( v5.edad() );
v5.presentarse();

