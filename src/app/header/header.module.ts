import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],  // Deklariši HeaderComponent
  imports: [CommonModule],  // Ako koristiš direktive kao što su ngIf ili ngFor
  exports: [HeaderComponent]  // Izvezi HeaderComponent da bi ga drugi moduli mogli koristiti
})
export class HeaderModule {}
