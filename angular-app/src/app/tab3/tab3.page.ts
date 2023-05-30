import { Component } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class Tab3Page {
  constructor() {}
}
