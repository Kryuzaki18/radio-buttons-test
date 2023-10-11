import { Component } from '@angular/core';
import { IMenuItem, IMenus } from '@core-interfaces/menus';
import { MenusService } from '@services/menus/menus.service';
import data from '@core-data/mock-menus';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  data: IMenus = data;
  validItems: IMenuItem[] = [];

  constructor(private menuService: MenusService) {}

  clear(): void {
    this.menuService.clearSelection();
  }

  isInvalid(itemId: string, menuIndex: number): boolean {
    const selectedItems = this.getSelectedItems();
    const isValid = selectedItems.length < menuIndex;
    const isExist = this.validItems.some(
      (validItem) => validItem.id === itemId
    );
    return selectedItems.length > 0 ? (isValid ? true : !isExist) : isValid;
  }

  onItemClick(itemId: string, menuIndex: number): void {
    this.menuService.addSelectItem(itemId, menuIndex);
    this.updateValidItems();
  }

  updateValidItems(): void {
    this.validItems = [];
    const selectedItems = this.getSelectedItems();

    if (selectedItems.length !== 0) {
      let invalidIds: number[] = [];

      selectedItems.map((selectedItem) => {
        invalidIds = invalidIds.concat(
          this.menuService.getInvalidItems(selectedItem)
        );
      });

      this.data.menus.map((items) => {
        const validItems = items.filter(
          (item) => !invalidIds.includes(parseInt(item.id))
        );
        this.validItems = [...this.validItems, ...validItems];
      });
    }
  }

  private getSelectedItems(): string[] {
    return this.menuService.getSelectedItems();
  }
}
