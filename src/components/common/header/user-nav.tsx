'use client';

import {
  IconLogout,
  IconPlaneTilt,
  IconSettingsFilled,
} from '@tabler/icons-react';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-2 md:w-56">
        <div className="mb-2 space-y-1">
          <DropdownMenuLabel className="text-ellipsis text-nowrap py-0 font-medium">
            Muhammad Hasan
          </DropdownMenuLabel>
          <DropdownMenuLabel className="text-ellipsis text-nowrap py-0 font-normal text-gray-500">
            hello@journeo.com
          </DropdownMenuLabel>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconPlaneTilt className="text-primfill-primary mr-2 size-5 fill-primary stroke-1" />
          <span>My Trips</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconSettingsFilled className="text-primfill-primary mr-2 size-5 stroke-1" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconLogout className="text-primfill-primary mr-2 size-5 stroke-1" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
