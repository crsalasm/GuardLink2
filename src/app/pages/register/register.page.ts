import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { UsuarioService } from '../../services/usuario.service'; //aqui importamos el llamado al microservicio autentificacion

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  
  // este es el objeto donde se almacenan los datos del usuario vacios en el localstorage asi se pueden rellenar en el momento
  user = {
    username: '',
    email: '',
    password: ''
  };
  
  // aqui creamos las dependencias
  constructor(private alertController: AlertController, private router: Router, private usuarioService: UsuarioService) { }

  // aqui creamos el metodo para registrar los usuarios
  async onSubmit() {
    // verificamos si los campos estan vacios
    if (this.user.username === '' || this.user.email === '' || this.user.password === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Campos incompletos',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });

      await alert.present();
    } else {
      // sino se registra al usuario usando el microservicio
      this.usuarioService.registerUser(this.user);

      // creamos la alerta de exito
      const alert = await this.alertController.create({
        header: 'Éxito',
        subHeader: 'Registro completado',
        message: 'La cuenta ha sido creada exitosamente.',
        buttons: ['OK']
      });
      await alert.present();

      // aqui se limpia el formulario despues de registrar para que se pueda registrar otro usuario
      this.user = {
        username: '',
        email: '',
        password: ''
      };

      // aqui redirige al login despues de cerrar la alerta de exito
      alert.onDidDismiss().then(() => {
        this.router.navigate(['/login']); 
      });
    }
  }
}
