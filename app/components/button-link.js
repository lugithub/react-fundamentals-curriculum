import React from 'react';

import {Link} from 'react-router-dom';

const ButtonLink = ({label, to}) => (
  <button>
    <Link style={{display: 'block', height: '100%', textDecoration: 'none'}}
      to={to}>
      {label}
    </Link>
  </button>
)

export default ButtonLink;
