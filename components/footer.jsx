import React from "react";

import Link from 'next/link';

const Footer = (props) => {
  const { backgroundUrl } = props;

  return (
    <div
      id="footer"
      className="w-full bg-cover bg-center shadow-2xl rounded-3xl w-full h-full"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="h-full text-center bg-black text-white">
        Cali - Colombia Direccion: Calle 9na # 23 - 21 | Desarrollado por{' '}
        <a href="http://www.gluonico.com" target="_blank" rel="noopener noreferrer" className="text-white">
          Gluonico
        </a>
      </div>
    </div>
  );
};

export default Footer;