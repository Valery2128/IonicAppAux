import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-first-aid',
  templateUrl: './first-aid.page.html',
  styleUrls: ['./first-aid.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FirstAidPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
