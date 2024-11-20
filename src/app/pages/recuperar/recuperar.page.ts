import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  Correo: string= "";
  NuevaContrasena: string= "";

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async validarDatos() {
    if (this.Correo === '' || this.NuevaContrasena === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Campos incompletos',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });

      await alert.present();
    } else {
      this.router.navigate(['/login']);
    }
  }

}
