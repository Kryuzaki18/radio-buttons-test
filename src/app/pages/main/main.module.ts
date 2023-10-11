import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MenusService } from '@services/menus/menus.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MainComponent],
  providers: [MenusService],
})
export class MainModule {}
