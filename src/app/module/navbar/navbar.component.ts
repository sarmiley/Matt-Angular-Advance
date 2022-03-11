import { StorageService } from './../../shared/shared/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { StorageKey } from 'src/app/shared/shared/storage/storage-key';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  themeMode = '';
  isLight = false;

  constructor(private overlayContainer: OverlayContainer, private storage: StorageService) {}

  ngOnInit(): void {
    this.themeMode = this.storage.get(StorageKey.THEME_MODE) ?? 'mat-light-theme';
    this.isLight = this.themeMode === 'mat-light-theme';
    this.overlayContainer.getContainerElement().classList.add(this.themeMode);
  }

  toggleTheme(): void {
    this.overlayContainer.getContainerElement().classList.remove(this.themeMode);
    this.themeMode = this.themeMode === 'mat-light-theme' ? 'mat-dark-theme' : 'mat-light-theme';
    this.isLight = this.themeMode === 'mat-light-theme';
    this.overlayContainer.getContainerElement().classList.add(this.themeMode);
    this.storage.set(StorageKey.THEME_MODE, this.themeMode);
  }
}
