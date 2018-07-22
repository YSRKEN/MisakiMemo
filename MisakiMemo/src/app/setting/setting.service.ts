import { Injectable } from '@angular/core';
import { Setting } from './Setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  data: Setting = new Setting();

  constructor() { }
}
