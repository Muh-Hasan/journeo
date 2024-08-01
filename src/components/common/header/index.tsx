'use client';

import Link from 'next/link';
import React, { Fragment, useState } from 'react';

import { Button } from '@/components/ui/button';

import MobileNav from './mobile-nav';
import UserNav from './user-nav';

const Header = () => {
  const [isLoggedIn] = useState(true); // temp state
  return (
    <header className="container flex h-14 items-center sm:h-16">
      <div className="grow">
        <Link href="/" className="text-2xl font-bold text-primary">
          Journeo.
        </Link>
      </div>
      <div className="hidden items-center gap-x-4 sm:flex">
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
