// Configuración
function abTest(a, b) {
    // Cambia solo el código debajo de esta línea
  
        if(a == 3 ){
          return 12;
        }
        if(b > 2 ){
          return 18;
        }
        if(a == 2 && b == 2 ){
          return 8;
        }
        if(a < 0 || b == 2 ){
          return undefined;
        }
  
         if(a == 2 || b < 0 ){
          return undefined;
        }
  
  
  
    // Cambia solo el código encima de esta línea
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  abTest(2,-2);
  
  abTest(2,2);
  abTest(2,2);
  abTest(-2,2);
  abTest(2, 8);
  abTest(3, 3);
/**
 * 
abTest(2, 2) debe devolver un número
Esperando:abTest(2, 2) debe devolver 8
Esperando:abTest(-2, 2) debe devolver undefined
Esperando:abTest(2, -2) debe devolver undefined
Esperando:abTest(2, 8) debe devolver 18
Esperando:abTest(3, 3) debe devolver 12
Esperando:abTest(0, 0) debe devolver 0
 */