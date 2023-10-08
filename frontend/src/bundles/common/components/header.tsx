import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

import Logo from '~/assets/logo.svg?react';
import Container from '~/bundles/common/components/container';

const Header = () => {
  return (
    <nav className="bg-white shadow mb-1">
      <Container>
          <div className="flex h-16 justify-between items-center">
            <Link to="/" className="flex flex-shrink-0 ">
              <Logo className="block h-7 w-auto mt-1" />
            </Link>
            <div className="flex gap-6">
              <div className="flex items-center gap-1">
                <ShoppingCartIcon width={18} /> <a href="#">Cart</a>
              </div>
              <div className="flex items-center gap-1">
                <UserIcon width={18} /> <Link to="signin">Sign in</Link>
              </div>
            </div>
          </div>
      </Container>
    </nav>
  );
};

export default Header;
