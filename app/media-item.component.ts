import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fst-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {

  onDelete() {
    console.log("Delete");
  }
}
