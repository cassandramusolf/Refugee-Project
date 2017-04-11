import { Component, OnInit } from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
  providers: [Ng2Bs3ModalModule,
            FormsModule]
})
export class DonationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
