'use client'
import Link from "next/link";


const Header: React.FC = () => {
  return (
    <div className="ph-header ph_sticky">
      <div className="ph_container navbar">
        <div className="ph_container__child navbar-header">
          <div className="container">
            <nav className="navbar-collapse ph-nav-collapse bold" id="navbar_collapse_menu">
              <ul className="main-menu">
                <Link href="/" className="menu-item">
                  <span className="current-item ph-toggle-collapse active">
                    Accueil{" "}
                  </span>
                </Link>

                <li className="ph_separator__h hidden-menu-item_desktop" />
                <li className="menu-item ph_separator hidden-menu-item_xs">
                  <Link href="/mobile" title="Page: Affaires">
                  FORFAIT MOBILE{" "}
                  </Link>
                </li>
                <li className="ph_separator__h hidden-menu-item_desktop" />
                <li className="menu-item ph_separator hidden-menu-item_xs">
                  <Link href="/internet" title="Page: Affaires">
                    BOX INTERNET{" "}
                  </Link>
                </li>
                <li className="ph_separator__h hidden-menu-item_desktop" />
                <li className="menu-item ph_separator hidden-menu-item_xs">
                  <Link href="/vpn" title="Page: Affaires">
                    VPN{" "}
                  </Link>
                </li>
                <li className="ph_separator__h hidden-menu-item_desktop" />
                <li className="menu-item ph_separator hidden-menu-item_xs">
                  <Link href="/blog" title="Page: Affaires">
                    Blogue{" "}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="contact-button">
              <Link
                href="/"
                className="btn_basic btn_primary"
                title="Rechercher"
                aria-label="Trouvez votre forfait"
              >
                Contactez-nous
              </Link>
            </div>
            <div className="launch-full-search__header ph_separator hidden-menu-item_desktop hide">
              <div>
                <Link
                  href="/"
                  className="btn_basic btn_primary"
                  title="Rechercher"
                  aria-label="Trouvez votre forfait"
                >
                  <span className="icon ph-icon-long_right" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;
