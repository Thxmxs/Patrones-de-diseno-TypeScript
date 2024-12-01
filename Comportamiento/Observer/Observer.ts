//observer
interface Observer {
    actualizar(mensaje: string): void;
  }
  //Subject
  interface Subject {
    agregarMiembro(miembro: Observer): void;
    eliminarMiembro(miembro: Observer): void;
    notificarMiembros(mensaje: string): void;
  }
  
  // concreteSubject
  class GrupoWhatsApp implements Subject {
    private miembros: Observer[] = [];
  
    public agregarMiembro(miembro: Observer): void {
      console.log(`Nuevo miembro agregado al grupo.`);
      this.miembros.push(miembro);
    }
  
    public eliminarMiembro(miembro: Observer): void {
      const indice = this.miembros.indexOf(miembro);
      if (indice > -1) {
        this.miembros.splice(indice, 1);
        console.log(`Miembro eliminado del grupo.`);
      }
    }
  
    public notificarMiembros(mensaje: string): void {
      console.log(`Notificando a los miembros sobre un nuevo mensaje: "${mensaje}"`);
      this.miembros.forEach(miembro => miembro.actualizar(mensaje));
    }
  }
  
  //concreteObservers
  class MiembroGrupo implements Observer {
    private nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    public actualizar(mensaje: string): void {
      console.log(`${this.nombre} recibió el mensaje: "${mensaje}"`);
    }
  }
  
  
  const grupo = new GrupoWhatsApp();
  
  const ana = new MiembroGrupo('Ana');
  const juan = new MiembroGrupo('Juan');
  const carlos = new MiembroGrupo('Carlos');
  
  // agregar miembros al grupo
  grupo.agregarMiembro(ana);
  grupo.agregarMiembro(juan);
  grupo.agregarMiembro(carlos);
  
  // enviar un mensaje
  grupo.notificarMiembros('¡Hola a todos!');
  
  // Eliminar un miembro y enviar otro mensaje
  grupo.eliminarMiembro(juan);
  grupo.notificarMiembros('Juan ha salido del grupo.');
  