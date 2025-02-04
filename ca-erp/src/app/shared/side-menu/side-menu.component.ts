import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  isMenuCollapsed = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleLayout() {
    // Toggle the collapsed state
    this.isMenuCollapsed = !this.isMenuCollapsed;

    // Update the classes on the <html> tag based on the collapsed state
    this.toggleClasses();
  }

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
      "label": "Dashboard",
      "icon": "bx bx-home-circle",
      "link": "index.html",
      "active": false
    },
    {
      "label": "Layouts",
      "icon": "bx bx-layout",
      "link": null,
      "expanded": false,

      "submenu": [
        {
          "label": "Without menu",
          "link": "layouts-without-menu.html"
        },
        {
          "label": "Without navbar",
          "link": "layouts-without-navbar.html"
        },
        {
          "label": "Container",
          "link": "layouts-container.html"
        },
        {
          "label": "Fluid",
          "link": "layouts-fluid.html"
        },
        {
          "label": "Blank",
          "link": "layouts-blank.html"
        }
      ]
    },
    {
      "header": "Pages"
    },
    {
      "label": "Account Settings",
      "icon": "bx bx-dock-top",
      "link": null,
      "submenu": [
        {
          "label": "Account",
          "link": "pages-account-settings-account.html"
        },
        {
          "label": "Notifications",
          "link": "pages-account-settings-notifications.html"
        },
        {
          "label": "Connections",
          "link": "pages-account-settings-connections.html"
        }
      ]
    },
    {
      "label": "Authentications",
      "icon": "bx bx-lock-open-alt",
      "link": null,
      "submenu": [
        {
          "label": "Login",
          "link": "auth-login-basic.html"
        },
        {
          "label": "Register",
          "link": "auth-register-basic.html"
        },
        {
          "label": "Forgot Password",
          "link": "auth-forgot-password-basic.html"
        }
      ]
    },
    {
      "label": "Misc",
      "icon": "bx bx-cube-alt",
      "link": null,
      "submenu": [
        {
          "label": "Error",
          "link": "pages-misc-error.html"
        },
        {
          "label": "Under Maintenance",
          "link": "pages-misc-under-maintenance.html"
        }
      ]
    },
    {
      "header": "Components"
    },
    {
      "label": "Cards",
      "icon": "bx bx-collection",
      "link": "cards-basic.html",
      "submenu": []
    },
    {
      "label": "User Interface",
      "icon": "bx bx-box",
      "link": null,
      "submenu": [
        {
          "label": "Accordion",
          "link": "ui-accordion.html"
        },
        {
          "label": "Alerts",
          "link": "ui-alerts.html"
        },
        {
          "label": "Badges",
          "link": "ui-badges.html"
        },
        {
          "label": "Buttons",
          "link": "ui-buttons.html"
        },
        {
          "label": "Carousel",
          "link": "ui-carousel.html"
        },
        {
          "label": "Collapse",
          "link": "ui-collapse.html"
        },
        {
          "label": "Dropdowns",
          "link": "ui-dropdowns.html"
        },
        {
          "label": "Footer",
          "link": "ui-footer.html"
        },
        {
          "label": "List Groups",
          "link": "ui-list-groups.html"
        },
        {
          "label": "Modals",
          "link": "ui-modals.html"
        },
        {
          "label": "Navbar",
          "link": "ui-navbar.html"
        },
        {
          "label": "Offcanvas",
          "link": "ui-offcanvas.html"
        },
        {
          "label": "Pagination & Breadcrumbs",
          "link": "ui-pagination-breadcrumbs.html"
        },
        {
          "label": "Progress",
          "link": "ui-progress.html"
        },
        {
          "label": "Spinners",
          "link": "ui-spinners.html"
        },
        {
          "label": "Tabs & Pills",
          "link": "ui-tabs-pills.html"
        },
        {
          "label": "Toasts",
          "link": "ui-toasts.html"
        },
        {
          "label": "Tooltips & Popovers",
          "link": "ui-tooltips-popovers.html"
        },
        {
          "label": "Typography",
          "link": "ui-typography.html"
        }
      ]
    },
    {
      "label": "Extended UI",
      "icon": "bx bx-copy",
      "link": null,
      "submenu": [
        {
          "label": "Perfect Scrollbar",
          "link": "extended-ui-perfect-scrollbar.html"
        },
        {
          "label": "Text Divider",
          "link": "extended-ui-text-divider.html"
        }
      ]
    }
  ];

  toggleMenu(item : any){
    item.expanded = !item.expanded;
  }

  toggleSubmenu(item : any){
    item.expanded = !item.expanded;
  }
  

}
