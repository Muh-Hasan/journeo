import {
  IconLogout,
  IconPlaneTilt,
  IconSettingsFilled,
} from '@tabler/icons-react';
import React, { Fragment } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import MobileLink from './mobile-link';

const UserMobileNav = () => {
  return (
    <>
      <MobileLink href="/#">
        <Button
          variant="ghost"
          size="lg"
          className="w-full justify-start gap-2"
        >
          <IconPlaneTilt className="size-7 fill-primary text-primary" />
          <span>My Trips</span>
        </Button>
      </MobileLink>

      <MobileLink href="/#">
        <Button
          variant="ghost"
          size="lg"
          className="w-full justify-start gap-2"
        >
          <IconSettingsFilled className="size-7" />
          <span>Settings</span>
        </Button>
      </MobileLink>

      <Separator />
      <Button className="flex h-auto w-full items-center justify-between px-8 py-4">
        <div>
          <h3 className="font-medium">Muhammad Hasan</h3>
          <p className="text-secondary">hello@journeo.com</p>
        </div>
        <IconLogout />
      </Button>
    </>
  );
};

export default UserMobileNav;
