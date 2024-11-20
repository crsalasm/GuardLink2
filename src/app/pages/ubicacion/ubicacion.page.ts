import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  constructor( private toastController: ToastController) { }

  ngOnInit() {}

  async verCordenadas(){
    const coordenadas = await Geolocation.getCurrentPosition();
    let ubicacionTexto = "Latitud: " + coordenadas.coords.latitude + ' Longitud: ' + coordenadas.coords.longitude;
    this.presentToast(ubicacionTexto);
    console.log('Current position:', coordenadas);
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: 'top',
    });
    
    await toast.present();
  }

}
