# Decorator
   
El patrón Decorator nos permite extender funcionalidades de una clase de forma dinamica sin tener que recurrir a la herencia, lo hace envolviendo los objetos en objetos especiales llamados decorators/decoradores el cual contiene este nuevo comportamiento que va a ser añadido, puedes pensar en esto como si fueran capas de funcionalidades que se le van a ir añadiendo a la clase que esta en el nucleo

### ¿Cuando utilizar decorator sobre herencia?

- Cuando se necesita añadir un comportamiento especifico a objetos en especificos y no a la clase entera. 

- Cuando quieres añadir un nuevo comportamiento sin modificar la herencia actual de la clase

- Cuando necesitas que un comportamiento se modifique en tiempo de ejecución


### ¿Por qué usar el patrón Decorator?

- Extension dinamica de funcionalidad

- Adicion de comportamientos de manera incremental: Los decoradores se pueden "apilar" para construir un objeto con multiples funcionalidades sin necesidad de una jerarquia compleja de clases

- Evitar la herencia excesiva: Si utilizamos herencia para extender funcionalidades podemos llegar al punto donde tendremos demaciadas subclases

- Sustitución: es sencillo cambiar un decorador por otro sin cambiar la estructura original de la clase

- Principio abierto/cerrado: Permite que las clases esten abiertas a la extensión pero cerrada a la modificación

Ejemplo:
Imagina que tienes una clase base llamada Bebida caliente que representa una bebida básica como café o té. Luego, en lugar de crear subclases para cada posible combinación de bebidas (como "café con leche", "té con miel y limón", etc.), puedes usar el patrón Decorator para agregar personalizaciones adicionales de forma flexible. Aquí está cómo podría funcionar:

![Diagrama de clases Decorator](../../assets/DecoratorPattern.jpg.jpg)
