import { StorageService } from './shared/shared/storage/storage.service';
import { Component } from '@angular/core';
import { StorageKey } from './shared/shared/storage/storage-key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  themeMode = '';

  constructor(private storage: StorageService) {
    this.storage.watch(StorageKey.THEME_MODE).subscribe((t: any) => (this.themeMode = t));
  }
}
