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
          <IconPlaneTilt className="size-6 fill-gray-500 text-gray-500" />
          <span>My Trips</span>
        </Button>
      </MobileLink>

      <MobileLink href="/#">
        <Button
          variant="ghost"
          size="lg"
          className="w-full justify-start gap-2"
        >
          <IconSettingsFilled className="size-6 text-gray-500" />
          <span>Settings</span>
        </Button>
      </MobileLink>

      <Separator />
      <Button
        variant="secondary"
        className="flex h-auto w-full items-center justify-between px-8 py-4"
      >
        <div>
          <h3 className="font-medium">Muhammad Hasan</h3>
          <p className="text-gray-500">hello@journeo.com</p>
        </div>
        <IconLogout className="text-gray-500" />
      </Button>
    </>
  );
};

export default UserMobileNav;
