
import { Injectable } from '@angular/core';// aqui importamos el injectable


// aqui ponemos el servicio como inyectable asi se puede usar en otros componentes
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() { }

  // este es el metodo que reedirige el register si el usuario se creo correctamente
  registerUser(user: { username: string; email: string; password: string }): void {
    // aqui lo guardamos en el localstorage como json
    localStorage.setItem('user_' + user.username, JSON.stringify(user));
  }

  // este es el metodo para validar las credenciales del usuario
  validateUser(username: string, password: string): boolean {
    //se busca el usuario en el localstorage 
    const storedUser = localStorage.getItem('user_' + username);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // se verifica la contraseña
      return user.password === password;
    }
    // false por si no se encuentra el usuario
    return false;
  }

  // este es el metodo para verificar si el usuario existe o no
  userExists(username: string): boolean {
    // aqui se comprueba si hay un usuario almacenado en localStorage
    return localStorage.getItem('user_' + username) !== null;
  }
}

