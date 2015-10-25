function arbol(r) {
  var self = this;
  self.raiz = new nodo(r);
  self.listaNodos = [];
  self.nuevoHijo = nuevoHijo;
  
  //inicializamos la raiz
  self.listaNodos.push(self.raiz);
  
  
  function nuevoHijo(v,p) {
    var hijo = new nodo(v,p);
    p.nodos_hijos.push(hijo);
    p.numHijos= p.numHijos +1;
    self.listaNodos.push(hijo);
    return hijo;
  }
  
}


function nodo(v,p) {
  var self = this;
  self.padre;
  self.nodos_hijos = [];
  self.ruta = [];
  self.numHijos= 0;
  self.valor = v;
  if(p) {
    self.padre = p.valor;
    
    for(var i=0;i < p.ruta.length ;i++) {
      self.ruta.push(p.ruta[i]);
    }
    self.ruta.push(v);

  } else {
    self.padre = null;
    self.ruta.push(v);
  }
  

}

module.exports = arbol;

