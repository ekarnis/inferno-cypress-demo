import { Link } from "inferno-router";

const Menu = () => (
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <Link class="mdl-navigation__link" to="/input">
        Input
      </Link>
      <Link class="mdl-navigation__link" to="/output">
        Output
      </Link>
    </nav>
  </div>
);

export default Menu;
