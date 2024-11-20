import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service'; // aqui importamos el llamado al microservicio autentificacion

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // estas son las variables para almacenar las credenciales ingresadas, estan vacias asi se pueden rellenar a futuro
  loginUsuario: string = "";
  loginContrasena: string = "";
  
  // aqui creamos las dependencias
  constructor(private router: Router, private alertController: AlertController, private usuarioService: UsuarioService) { }

  ngOnInit() {}

  // estos son los metodos que valida las credenciales del usuario
  async validarCredenciales() {
    if (this.loginUsuario === '' || this.loginContrasena === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Campos incompletos',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });

      await alert.present();
    } else {
      // aqui verificamos si el usuario existe usando el microservicio usuario (autentificacion) 
      if (this.usuarioService.userExists(this.loginUsuario)) {
        if (this.usuarioService.validateUser(this.loginUsuario, this.loginContrasena)) {
          // aqui va a la pagina de incio si las credenciales son las correctas
          this.router.navigate(['/inicio']);
        } else {
          // aqui se crea una alerta si no lo son
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Contraseña incorrecta',
            message: 'La contraseña ingresada es incorrecta.',
            buttons: ['OK']
          });
          await alert.present();
        }
      } else {
        // alerta por si el nombre del usuario no existe
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'Usuario no encontrado',
          message: 'No existe una cuenta con ese nombre de usuario.',
          buttons: ['OK']
        });
        await alert.present();
      }
           
    }
  }

}
