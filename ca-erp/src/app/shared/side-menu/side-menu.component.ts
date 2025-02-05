import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  isMenuCollapsed = true;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  
  toggleLayout() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('layout-compact');
    htmlElement.classList.toggle('layout-menu-expanded');
  }


  // toggleLayout() {
  //   // Toggle the collapsed state
  //   this.isMenuCollapsed = !this.isMenuCollapsed;

  //   // Update the classes on the <html> tag based on the collapsed state
  //   this.toggleClasses();
  // }

  toggleClasses() {
    // Access the <html> element (use ElementRef to get the native DOM element)
    const htmlElement = document.documentElement;

    if (this.isMenuCollapsed) {
      // Add classes for the collapsed menu state
      this.renderer.addClass(htmlElement, 'layout-navbar-fixed');
      this.renderer.addClass(htmlElement, 'layout-compact');
      this.renderer.addClass(htmlElement, 'layout-menu-fixed');
      this.renderer.addClass(htmlElement, 'layout-menu-collapsed');

      // Remove classes for expanded state
      this.renderer.removeClass(htmlElement, 'layout-menu-expanded');
    } else {
      // Add classes for the expanded menu state
      this.renderer.addClass(htmlElement, 'layout-navbar-fixed');
      this.renderer.addClass(htmlElement, 'layout-compact');
      this.renderer.addClass(htmlElement, 'layout-menu-fixed');

      // Remove classes for collapsed state
      this.renderer.removeClass(htmlElement, 'layout-menu-collapsed');
    }
  }

  menuItems = [
    {
      module: "Dashboard",
      icon: "bx bx-pie-chart-alt",
      active: false,
      expanded: false,
      submodules: [
        { label: "Summary", icon: "bx bx-pie-chart", link: "dashboard-summary.html" },
        { label: "Reports", icon: "bx bx-file", link: "financial-reports.html" },
        { label: "Compliance", icon: "bx bx-check-circle", link: "compliance-summary.html" }
      ]
    },
    {
      module: "User Management",
      icon: "bx bx-user-circle",
      active: false,
      expanded: false,
      submodules: [
        { label: "Authentication", icon: "bx bx-lock", link: "user-authentication.html" },
        { label: "Roles", icon: "bx bx-shield", link: "roles.html" },
        { label: "Permissions", icon: "bx bx-check-shield", link: "permissions.html" },
        { label: "Employees", icon: "bx bx-user", link: "employees.html" }
      ]
    },
    {
      module: "Client Management",
      icon: "bx bx-briefcase",
      active: false,
      expanded: false,
      submodules: [
        { label: "Clients", icon: "bx bx-building", link: "client-master.html" },
        { label: "Leads", icon: "bx bx-lead", link: "leads.html" },
        { label: "Engagements", icon: "bx bx-history", link: "engagements.html" }
      ]
    },
    {
      module: "Finance",
      icon: "bx bx-money",
      active: false,
      expanded: false,
      submodules: [
        { label: "Ledger", icon: "bx bx-book", link: "general-ledger.html" },
        { label: "Accounts", icon: "bx bx-grid-alt", link: "chart-of-accounts.html" },
        { label: "Invoicing", icon: "bx bx-file", link: "billing-invoicing.html" },
        { label: "Payments", icon: "bx bx-credit-card", link: "payment-tracking.html" },
        { label: "Receivables", icon: "bx bx-dollar-circle", link: "receivables-follow-ups.html" },
        { label: "Payroll", icon: "bx bx-briefcase", link: "payroll-management.html" },
        { label: "Reports", icon: "bx bx-pie-chart-alt", link: "financial-reports.html" }
      ]
    },
    {
      module: "Task Tracking",
      icon: "bx bx-task",
      active: false,
      expanded: false,
      submodules: [
        { label: "Job Sheets", icon: "bx bx-note", link: "job-sheets.html" },
        { label: "Assignments", icon: "bx bx-check-square", link: "task-assignments.html" },
        { label: "Summary", icon: "bx bx-chart", link: "task-summary.html" }
      ]
    },
    {
      module: "Audit",
      icon: "bx bx-search",
      active: false,
      expanded: false,
      submodules: [
        { label: "Assignments", icon: "bx bx-check-circle", link: "audit-assignments.html" },
        { label: "Reports", icon: "bx bx-file", link: "audit-reports.html" },
        { label: "Checklists", icon: "bx bx-list-ul", link: "audit-checklists.html" },
        { label: "JSON Files", icon: "bx bx-code", link: "json-files.html" }
      ]
    },
    {
      module: "Income Tax",
      icon: "bx bx-calculator",
      active: false,
      expanded: false,
      submodules: [
        { label: "ITR Utility", icon: "bx bx-file", link: "itr-utility.html" },
        { label: "Tax Computation", icon: "bx bx-calculator", link: "tax-computation.html" },
        { label: "E-Filing", icon: "bx bx-code", link: "efile.html" },
        { label: "Data Flow", icon: "bx bx-arrow-right", link: "data-flow.html" }
      ]
    },
    {
      module: "Compliance",
      icon: "bx bx-folder",
      active: false,
      expanded: false,
      submodules: [
        { label: "IT Notices", icon: "bx bx-file", link: "it-notices.html" },
        { label: "Communications", icon: "bx bx-envelope", link: "communications.html" },
        { label: "Case Laws", icon: "bx bx-library", link: "case-laws.html" }
      ]
    }
  ];
  
  
  

  toggleMenu(item : any){
    item.expanded = !item.expanded;
  }

  toggleSubmenu(item : any){
    this.menuItems.forEach((menuItem) => {
      if (menuItem !== item) {
        menuItem.expanded = false;
      }
    });
    item.expanded = !item.expanded;
  }
  

}
