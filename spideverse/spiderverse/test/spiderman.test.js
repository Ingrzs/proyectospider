const Spiderman = require('./../app/spiderman') //aqui traemo los valores que tiene la clase spiderman.js y lo guardamos en Spiderman
describe("Test for class spiderman", () => {
    test('Creando el resultado esperado objeto etc', () => {
      
     //aqui estamos llamando a la clase de spiderman (por eso lo importamos) y ya estamos añadiendo los datos  
        const spider = new Spiderman ("andrew", 32 ,"maguire",34,"holiwodd")
    
     
      expect(spider.name).toBe("andrew");
      expect(spider.edad).toBe(32);
      expect(spider.actor).toBe("maguire");
      expect(spider.npeliculas).toBe(34);
      expect(spider.cine).toBe("holiwodd");
    });

    test('test para el getinfo', () => {
      
        //aqui estamos llamando a la clase de spiderman (por eso lo importamos) y ya estamos añadiendo los datos  
           const spider = new Spiderman ("andrew", 32 ,"maguire",34,"holiwodd")
       
        
         expect(spider.getinfo()).toBe("hola soy andrew de holiwodd");
    })
    
  }
  
  

  )