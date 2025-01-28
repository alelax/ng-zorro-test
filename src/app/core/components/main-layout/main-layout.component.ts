import { Component, computed, signal } from '@angular/core';
import { NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent } from 'ng-zorro-antd/layout';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { RouterOutlet } from '@angular/router';
import { MainLayoutSettings } from './main-layout.settings';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    NzContentComponent,
    NzHeaderComponent,
    NzIconDirective,
    NzLayoutComponent,
    NzSiderComponent,
    RouterOutlet,
    SidebarMenuComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  protected isCollapsed = signal(false);
  protected readonly MainLayoutSettings = MainLayoutSettings;

  calcLayoutMarginLeft = computed(() => this.isCollapsed()
    ? MainLayoutSettings.sidebarCollapsedWidth
    : MainLayoutSettings.sidebarExpandedWidth
  );

  contentPositionRules = computed(() => {
    return {
      left: this.isCollapsed() ? `${MainLayoutSettings.sidebarCollapsedWidth}px` : `${MainLayoutSettings.sidebarExpandedWidth}px`,
      'margin-left': `${MainLayoutSettings.contentMarginOffset}px`
    }
  });

  calcHeaderWidth = computed(() => this.isCollapsed()
    ? `calc(100% - ${MainLayoutSettings.sidebarCollapsedWidth}px)`
    : `calc(100% - ${MainLayoutSettings.sidebarExpandedWidth}px)`);

}
