import { Component, input } from '@angular/core';
import { NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent } from "ng-zorro-antd/menu";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar-menu',
  imports: [
    NzMenuDirective,
    NzMenuItemComponent,
    NzSubMenuComponent,
    RouterLink
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  isSidenavbarCollapsed = input.required<boolean>();
}
