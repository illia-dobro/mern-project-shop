import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid';
import Logo from '~/assets/logo.svg?react';

import Container from '~/bundles/common/components/container';

const Header = () => {
  return (
    <nav className="bg-white shadow">
      <Container>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex flex-shrink-0 ">
              <Logo className="block h-7 w-auto mt-1" />
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-1">
                <ShoppingCartIcon width={18} /> <a href="#">Cart</a>
              </div>
              <div className="flex items-center gap-1">
                <UserIcon width={18} /> <a href="#">Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;