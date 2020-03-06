import React from 'react';
import CopyRights from '../../common/CopyRights/CopyRights';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import './Footer.scss';

class Footer extends React.Component {
state = {
  links: [
    {path: '/', title: 'HOME'},
    {path: '/faq', title: 'FAQ'},
    {path: '/regulamin', title: 'Regulamin'},
    {path: '/contact', title: 'Kontakt'},
  ]
}

  render() {
    const { links } = this.state;

    return (
      <nav className="footer">
        <CopyRights />
        <MainMenu links={links} />
      </nav>
    );
  }
}

export default Footer;