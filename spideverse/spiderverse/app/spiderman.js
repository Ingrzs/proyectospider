class spiderman { constructor(name, edad, actor,npeliculas,cine)
{
this.name = name
this.edad = edad
this.actor = actor
this.npeliculas = npeliculas
this.cine = cine
}

getinfo(){
    return `hola soy ${this.name} de ${this.cine}`
}

}
//aqui exportamos este clase a test pero puedo usarsen en otro lugar ya que tiene export
module.exports = spiderman