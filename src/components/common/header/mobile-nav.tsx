'use client';

import { IconMenu2, IconWorld } from '@tabler/icons-react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import MobileLink from './mobile-link';
// import { Separator } from "@/components/ui/separator";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="block cursor-pointer sm:hidden">
        <IconMenu2 className="text-primary" />
      </SheetTrigger>
      <SheetContent side="left" className="container">
        <div className="mt-10 flex flex-col space-y-4">
          <MobileLink href="/explore">
            <Button
              variant="ghost"
              size="lg"
              className="w-full justify-start gap-2"
            >
              <IconWorld className="size-6 text-gray-500" />
              <span>Explore</span>
            </Button>
          </MobileLink>
          {/* <Separator />
          <Button className="w-full" size="lg">
            Get started
          </Button>
          <Button className="w-full" variant="secondary" size="lg">
            Sign in
          </Button> */}

          {/* LoggedIn */}
          {/* <UserMobileNav /> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
