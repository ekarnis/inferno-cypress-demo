import { Component } from "inferno";

const Header = () => (
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Cypress Demo</span>
      <div class="mdl-layout-spacer" />
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" href="/Input">
          Input
        </a>
        <a class="mdl-navigation__link" href="/Output">
          Output
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
