import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  messages: { text: string; sent: boolean; time: string; }[] = []; // Arreglo para almacenar los mensajes
  newMessage: string = ''; // Variable para almacenar el nuevo mensaje

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Obtiene la hora actual
      this.messages.push({ text: this.newMessage, sent: true, time: currentTime }); // Agrega el mensaje enviado con la hora
      this.newMessage = ''; // Limpia el cuadro de texto
      // Aquí podrías agregar lógica para manejar mensajes recibidos si lo deseas
    }
  }
}


