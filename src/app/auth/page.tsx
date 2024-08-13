import React from 'react';

import SignIn from '@/components/auth/sign-in';
import SignUp from '@/components/auth/sign-up';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Page = () => {
  return (
    <div className="flex grow items-center justify-center">
      <Tabs defaultValue="signup" className="my-8 w-[450px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="signin">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <SignUp />
        </TabsContent>
        <TabsContent value="signin">
          <SignIn />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
