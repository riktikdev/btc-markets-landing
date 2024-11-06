import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface CryptoAsset {
  name: string;
  icon?: string;
  lastPrice: string;
  dailyChange: string;
  marketCap: string;
}

const CRYPTO_ASSETS: CryptoAsset[] = [
  { name: 'XRP', icon: '/images/icons/xrp.svg', lastPrice: '$0.5617', dailyChange: '1.57%', marketCap: '$28B' },
  {
    name: 'Bitcoin',
    icon: '/images/icons/bitcoin.svg',
    lastPrice: '$30,165.43',
    dailyChange: '-0.08%',
    marketCap: '$582B',
  },
  {
    name: 'Ethereum',
    icon: '/images/icons/ethereum.svg',
    lastPrice: '$2,215.50',
    dailyChange: '-1.08%',
    marketCap: '$267B',
  },
  { name: 'Tether', icon: '/images/icons/tether.svg', lastPrice: '$1.4544', dailyChange: '2.36%', marketCap: '$96B' },
  {
    name: 'Enjin Coin',
    icon: '/images/icons/enjin-coin.svg',
    lastPrice: '$0.6129',
    dailyChange: '16.41%',
    marketCap: '$629M',
  },
];

function getDailyChangeStyles(dailyChange: string) {
  const changeValue = parseFloat(dailyChange.replace('%', ''));
  const colorClass = changeValue > 0 ? 'text-green-500' : changeValue < 0 ? 'text-red-500' : null;
  const IconComponent = changeValue > 0 ? ArrowUpRight : changeValue < 0 ? ArrowDownLeft : null;
  return { colorClass, IconComponent };
}

export function MarketTable() {
  return (
    <div className="h-full w-full rounded-lg border border-input p-4 shadow-sm">
      <Tabs defaultValue="most-popular">
        <TabsList className="bg-transparent">
          <TabsTrigger value="most-popular">Most Popular</TabsTrigger>
          <TabsTrigger value="top-movers">Top Movers</TabsTrigger>
        </TabsList>
        <TabsContent value="most-popular">
          <Table className="overflow-hidden rounded-md">
            <TableHeader>
              <TableRow className="text-base">
                <TableHead className="w-56 text-center">Asset</TableHead>
                <TableHead className="text-center">Last Price</TableHead>
                <TableHead className="text-center">24hr Change</TableHead>
                <TableHead className="text-center">Market Cap</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-md">
              {CRYPTO_ASSETS.map((asset) => {
                const { colorClass, IconComponent } = getDailyChangeStyles(asset.dailyChange);

                return (
                  <TableRow key={asset.name}>
                    <TableCell className="flex items-center justify-center gap-2 font-medium">
                      {asset.icon && <Image src={asset.icon} alt={`${asset.name} icon`} width={20} height={20} />}
                      {asset.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {asset.lastPrice} <span className="text-muted-foreground">AUD</span>
                    </TableCell>
                    <TableCell className="flex items-center justify-center gap-1 font-medium">
                      {IconComponent && <IconComponent className={cn(colorClass, 'h-4 w-4')} />}
                      <span className={cn(colorClass)}>{asset.dailyChange}</span>
                    </TableCell>
                    <TableCell className="text-center">{asset.marketCap}</TableCell>
                    <TableCell className="flex justify-center">
                      <Button>Buy</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="top-movers">
          <Table className="overflow-hidden rounded-md">
            <TableHeader>
              <TableRow className="text-base">
                <TableHead className="w-56 text-center">Asset</TableHead>
                <TableHead className="text-center">Last Price</TableHead>
                <TableHead className="text-center">24hr Change</TableHead>
                <TableHead className="text-center">Market Cap</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-md">
              {CRYPTO_ASSETS.map((asset) => {
                const { colorClass, IconComponent } = getDailyChangeStyles(asset.dailyChange);

                return (
                  <TableRow key={asset.name}>
                    <TableCell className="flex items-center justify-center gap-2 font-medium">
                      {asset.icon && <Image src={asset.icon} alt={`${asset.name} icon`} width={20} height={20} />}
                      {asset.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {asset.lastPrice} <span className="text-muted-foreground">AUD</span>
                    </TableCell>
                    <TableCell className="flex items-center justify-center gap-1 font-medium">
                      {IconComponent && <IconComponent className={cn(colorClass, 'h-4 w-4')} />}
                      <span className={cn(colorClass)}>{asset.dailyChange}</span>
                    </TableCell>
                    <TableCell className="text-center">{asset.marketCap}</TableCell>
                    <TableCell className="flex justify-center">
                      <Button>Buy</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
