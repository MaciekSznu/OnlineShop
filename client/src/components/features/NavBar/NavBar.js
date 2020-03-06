import React from 'react';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import './NavBar.scss';

class NavBar extends React.Component {
state = {
  links: [
    {path: '/', title: 'HOME'},
    {path: '/faq', title: 'FAQ'},
    {path: '/regulamin', title: 'Regulamin'},
    {path: '/contact', title: 'Kontakt'},
    {path: '/basket', title: 'basket'},
  ]
}

  render() {
    const { links } = this.state;

    return (
      <nav className="navbar">
        <Logo />
        <MainMenu links={links} />
      </nav>
    );
  }
}

export default NavBar;