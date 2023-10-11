import { Injectable } from '@angular/core';
import { IMenuRules } from '@core-interfaces/menus';
import data from '@core-data/mock-menus';

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  private rules: IMenuRules = data.rules;

  getInvalidItems(itemId: string): number[] {
    const rule = this.rules[Number(itemId)];
    return rule ? rule : [];
  }
}
