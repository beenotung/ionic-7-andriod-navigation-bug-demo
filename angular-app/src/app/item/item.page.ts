import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ItemPage implements OnInit {
  id = this.router.getCurrentNavigation()?.extras.queryParams?.['id']

  constructor(private router: Router) {}

  ngOnInit() {}
}
