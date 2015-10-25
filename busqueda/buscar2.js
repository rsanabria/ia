var arbol = require('./arbol.js');


var cont = 1;
var edo_inicial = [[1,2,3],[4,8,7],[5,6,0]];

var edo_final = [[1,2,3],[8,0,4],[7,6,5]];

var a = new arbol(edo_inicial);

crearHijos(a.listaNodos);

console.log("nodos totales creados: " + a.listaNodos.length);
console.log("num de niveles: "+cont);

function crearHijos(listaNodos) {

  cont = cont+1;
  var nodos = JSON.parse(JSON.stringify(listaNodos));
  var hijosGenerados = [];
  var fin = false;
  var hijo;
  //primer ciclo recorremos los nodos por nivel
  
  for (var n=0; n < nodos.length ; n++) {
    var nodo = nodos[n];
    var matriz = JSON.parse(JSON.stringify(nodo.valor));
    
    for (var i = 0 ; i < nodo.valor.length ; i++ ) {
      for (var j = 0; j < nodo.valor[i].length ; j++) {
        
        if (!fin) {

          if (nodo.valor[i][j] === 0) {
            if (i != 0) {
              matriz[i][j] = matriz[i-1][j];
              matriz[i-1][j] =0
              
              if(!verificarNodoRepetido(matriz,nodo)) {
                hijo = a.nuevoHijo(matriz,nodo);
                hijosGenerados.push(hijo);
                if (nodoFinal(matriz)) {
                  imprimirCamino(hijo);
                  var fin = true;
                   break;
                }
              }
              matriz = JSON.parse(JSON.stringify(nodo.valor));            
            }
            if (i != 2) {
              matriz[i][j] = matriz[i+1][j];
              matriz[i+1][j] = 0
              
              if(!verificarNodoRepetido(matriz,nodo)) {
                hijo = a.nuevoHijo(matriz,nodo);
                hijosGenerados.push(hijo);
                if (nodoFinal(matriz)) {
                  imprimirCamino(hijo);
                  var fin = true;
                   break;
                }
              }
              matriz = JSON.parse(JSON.stringify(nodo.valor));
              
            }
            if (j != 0) {
              matriz[i][j] = matriz[i][j-1];
              matriz[i][j-1] =0
              
              if(!verificarNodoRepetido(matriz,nodo)) {
                hijo = a.nuevoHijo(matriz,nodo);
                hijosGenerados.push(hijo);
                if (nodoFinal(matriz)) {
                  imprimirCamino(hijo);
                  var fin = true;
                   break;
                }
              }
              matriz = JSON.parse(JSON.stringify(nodo.valor));
              
            }
            if (j != 2) {
              matriz[i][j] = matriz[i][j+1];
              matriz[i][j+1] =0
              
              if(!verificarNodoRepetido(matriz,nodo)) {
                hijo = a.nuevoHijo(matriz,nodo);
                hijosGenerados.push(hijo);
                if (nodoFinal(matriz)) {
                 imprimirCamino(hijo);
                  var fin = true;
                  break;
                }
              }
              matriz = JSON.parse(JSON.stringify(nodo.valor));
              
            }
          }

        }
      }
    }
  }
  
  if(!fin) {
    if(cont < 21) {
      console.log(a.listaNodos.length+" "+cont);
  crearHijos(hijosGenerados);
    }else {
      console.log("Nivel de Profundidad superado");
    }
  }
 
  
  
  
}

function yaExiste(m) {
  for (var i =0; i < a.listaNodos.length; i++) {
    if (m.toString() == a.listaNodos[i].valor.toString()) {
      return true;
    }
  }
  return false;
}

function nodoFinal(m) {
  if (m.toString() == edo_final.toString()) {
    return true;
  } else {
    return false;
  }
}

function verificarNodoRepetido(m,n) {
  if (n.padre) {
    for(var i = 0; i < n.ruta.length; i++) {
      if(n.ruta[i].toString() === m.toString()){
         return true;
         }
    };
      return false;
 
  } else {
    return false;
  }
}

function imprimirCamino(n) {

  for (var i = 0; i < n.ruta.length;i++) {
      console.log('--------r='+(i+1)+'-------')
    for (var j=0; j < n.ruta[i].length;j++) {
      console.log(n.ruta[i][j]);
    }
    console.log('------------------')
  }
}





