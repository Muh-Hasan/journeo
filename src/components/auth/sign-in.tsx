'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  IconBrandGoogleFilled,
  IconEye,
  IconEyeOff,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { SigninSchema } from '@/lib/schema/auth';
import type { SigninType } from '@/lib/types/auth';

import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const SignIn = () => {
  const [showPwd, setShowPwd] = useState(false);

  const form = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
  });

  const onSubmit = (data: SigninType) => {
    console.log(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in to your account.</CardTitle>
        <CardDescription>
          Build skills for today, tomorrow, and beyond. Education to
          future-proof your career.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@gmail.com"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl className="relative">
                    <div>
                      <Input
                        placeholder=""
                        {...field}
                        type={showPwd ? 'text' : 'password'}
                        className="pr-8"
                      />
                      <span
                        className="absolute right-2 top-2 w-5 cursor-pointer"
                        onClick={() => setShowPwd(!showPwd)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setShowPwd(!showPwd);
                          }
                        }}
                      >
                        {showPwd ? <IconEyeOff /> : <IconEye />}
                      </span>
                    </div>
                  </FormControl>
                  <FormDescription className="underline">
                    Forgot password?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
        <div className="my-3 text-center text-sm text-gray-600">or</div>
        <Button
          type="submit"
          className="flex w-full items-center gap-x-2"
          variant="outline"
        >
          <IconBrandGoogleFilled className="size-4" />
          Continue with Google
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignIn;
