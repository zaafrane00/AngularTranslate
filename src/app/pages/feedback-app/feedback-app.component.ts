import { Component, OnInit } from '@angular/core';
import { liste } from '../../Data/feedbacks_data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback-app',
  templateUrl: './feedback-app.component.html',
  styleUrls: ['./feedback-app.component.css']
})
export class FeedbackAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = liste
  text = ''
  rating = 0

  add() {
    if (this.text) {
      this.items.unshift({
        id: this.items.length + 1,
        text: this.text,
        rating: this.rating
      })
      this.text = ''
    }
  }

  delete(item: any) {
    //   this.items = this.items.filter(i => i !== item)
    Swal.fire('titre', 'texte', 'question')
    if (window.confirm('Voulez-vous vraiment supprimer ce feedback ?')) {
      this.items.splice(item, 1);
    }
  }
}
