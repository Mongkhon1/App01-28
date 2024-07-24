import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonRow,IonGrid,IonCol,IonLabel,IonButton,IonCard,IonList,IonIcon,} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonRow,IonGrid,IonCol,IonLabel,IonButton,IonCard,IonList,IonIcon,],
})
export class HomePage {
  constructor() {}
}
