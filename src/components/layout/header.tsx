'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

export function Header({ ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/25 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/90',
        props.className,
      )}
      {...props}
    >
      <div className="container flex h-14 flex-row items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.svg" alt="BTC Markets Logo" width={170} height={10} />
        </Link>
        <div className="flex flex-row gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>😊</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/prices" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Prices</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Buy</NavigationMenuTrigger>
                <NavigationMenuContent>💝</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/otc" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>OTC</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                <NavigationMenuContent>🍫</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Help</NavigationMenuTrigger>
                <NavigationMenuContent>🥥</NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex flex-row gap-2">
            <Button variant="outline">Login</Button>
            <Button variant="default">Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
