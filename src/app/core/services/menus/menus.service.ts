import { Injectable } from '@angular/core';
import { RulesService } from '@services/rules/rules.service';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  private selectedItems: string[] = [];

  constructor(private rulesService: RulesService) {}

  addSelectItem(itemId: string, menuIndex: number): void {
    if (menuIndex < this.selectedItems.length) {
      this.selectedItems = [];
    }
    this.selectedItems[menuIndex] = itemId;
  }

  clearSelection(): void {
    this.selectedItems = [];
  }

  getSelectedItems(): string[] {
    return this.selectedItems;
  }

  getInvalidItems(itemId: string): number[] {
    return this.rulesService.getInvalidItems(itemId);
  }
}
