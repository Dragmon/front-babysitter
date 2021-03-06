import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  localStorage.clear();
  return (
    <button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      variant='danger'
      className='btn-margin'
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
