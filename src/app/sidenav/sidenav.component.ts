import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  headerImg = 'assets/S_logo.svg';
  svgs = [
    {
      inactiveIcon: 'assets/inactive/control_room_inactive_icon.svg',
      activeIcon: 'assets/active/control_room_active_icon.svg',
      name: 'Control Room',
      currentIcon: 'assets/inactive/control_room_inactive_icon.svg',
    },
    {
      inactiveIcon: 'assets/inactive/dashboard_inactive_icon.svg',
      activeIcon: 'assets/active/dashboard_active_icon.svg',
      name: 'Dashboard',
      currentIcon: 'assets/inactive/dashboard_inactive_icon.svg',
    },
    {
      inactiveIcon: 'assets/inactive/orders_inactive_icon.svg',
      activeIcon: 'assets/active/orders_active_icon.svg',
      name: 'Orders',
      currentIcon: 'assets/inactive/orders_inactive_icon.svg',
    },
    {
      inactiveIcon: 'assets/inactive/shipments_inactive_icon.svg',
      activeIcon: 'assets/active/shipments_active_icon.svg',
      name: 'Shipments',
      currentIcon: 'assets/inactive/shipments_inactive_icon.svg',
    },
    {
      inactiveIcon: 'assets/inactive/load_inactive_icon.svg',
      activeIcon: 'assets/active/load_active_icon.svg',
      name: 'Load',
      currentIcon: 'assets/inactive/load_inactive_icon.svg',
    },
    {
      inactiveIcon: 'assets/inactive/masterlist_inactive_icon.svg',
      activeIcon: 'assets/active/masterlist_active_icon.svg',
      name: 'Master List',
      currentIcon: 'assets/inactive/masterlist_inactive_icon.svg',
    },
    {
      inactiveIcon: 'assets/inactive/reports_inactive_icon.svg',
      activeIcon: 'assets/active/reports_active_icon.svg',
      name: 'Reports',
      currentIcon: 'assets/inactive/reports_inactive_icon.svg',
    },
    {
      inactiveIcon: 'assets/inactive/account_inactive_icon.svg',
      activeIcon: 'assets/active/account_active_icon.svg',
      name: 'Accounting',
      currentIcon: 'assets/inactive/account_inactive_icon.svg',
    },
    {
      inactiveIcon: 'assets/inactive/settings_inactive_icon.svg',
      activeIcon: 'assets/active/settings_active_icon.svg',
      name: 'Settings',
      currentIcon: 'assets/inactive/settings_inactive_icon.svg',
    },
  ];
}
