'use client';

import Link from 'next/link';
import React, { Fragment, useState } from 'react';

import { Button } from '@/components/ui/button';

import MobileNav from './mobile-nav';
import UserNav from './user-nav';

const Header = () => {
  const [isLoggedIn] = useState(true); // temp state
  return (
    <header className="border-b border-gray-50 shadow-sm">
      <div className="container flex h-14 items-center sm:h-16">
        <div className="grow">
          <Link
            href="/"
            className="text-xl font-semibold tracking-wide text-primary"
          >
            Journeo
          </Link>
        </div>
        <div className="hidden items-center gap-5 sm:flex">
          <Link
            href="/explore"
            className="font-medium text-primary hover:underline hover:underline-offset-4"
          >
            Explore
          </Link>

          {isLoggedIn ? (
            <UserNav />
          ) : (
            <>
              <Link href="/#">
                <Button size="sm" variant="secondary">
                  Get started
                </Button>
              </Link>
              <Link href="/#">
                <Button size="sm">Sign in</Button>
              </Link>
            </>
          )}
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
