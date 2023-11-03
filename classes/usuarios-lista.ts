import { Usuario } from "./usuario";


export class UsuariosLista {

    private lista: Usuario[] = [];


    constructor() {}

    // Agregar un usuario
    public agregar( usuario: Usuario ) {
    
        this.lista.push( usuario );
        console.log( this.lista );
        return usuario;
    }

    // Actualizar nombre de usuario
    public ActualizarNombre( id: string, nombre: string ) {
    
        for( let usuario of this.lista ) {
        
            if( usuario.id === id ) {
                usuario.nombre = nombre;
                break;
            }
        }

        console.log('====== Actualizando usuario ======');
        console.log( this.lista);
        
    }

    // Obtener Lista de todos los usuarios de la lista
    public getLista() {
        return this.lista;
    }

    // Obtener un usuario
    public getUsuario( id: string ) {
    
        return this.lista.find( usuario => usuario.id === id );
    
    }

    // Obtener usuario en una sala en particular
    public getUsuariosEnSala( sala: string ) {
        return this.lista.filter( usuario => usuario.sala === sala );

    }

    // Borrar usuario
    public borrarUsuario( id: string ) {

        const tempUsuario = this.getUsuario( id );

        this.lista = this.lista.filter( usuario =>  usuario.id !== id );
        
        return tempUsuario;
    }

}