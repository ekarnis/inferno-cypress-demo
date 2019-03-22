import { Link } from "inferno-router";

const Header = () => (
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Cypress Demo</span>
      <div class="mdl-layout-spacer" />
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <Link class="mdl-navigation__link" to="/input">
          Input
        </Link>
        <Link class="mdl-navigation__link" to="/output">
          Output
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
