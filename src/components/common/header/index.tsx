'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment, useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import MobileNav from './mobile-nav';
import UserNav from './user-nav';

const Header = () => {
  const pathname = usePathname();
  const [isLoggedIn] = useState(true); // temp state
  return (
    <header className="container flex h-14 items-center sm:h-16">
      <div className="grow">
        <Link href="/" className="text-2xl font-bold text-primary">
          Journeo.
        </Link>
      </div>
      <div
        className={cn(
          'hidden items-center gap-x-4 sm:flex',
          pathname.includes('/auth') && '!hidden',
        )}
      >
        <Link href="/explore">
          <Button variant="link">Explore</Button>
        </Link>

        {isLoggedIn ? (
          <UserNav />
        ) : (
          <>
            <Link href="/#">
              <Button size="sm">Get started</Button>
            </Link>
            <Button
              size="sm"
              variant="outline"
              className="items-center gap-x-1"
            >
              Sign in
            </Button>
          </>
        )}
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
