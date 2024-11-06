import { Star } from 'lucide-react';
import Image from 'next/image';

import { MarketTable } from '@/components/common/market-table';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mt-16 border-red-500">
      <div className="flex flex-row justify-between gap-2 px-7">
        <div className="flex flex-col space-y-5">
          <h1 className="w-[90%] text-8xl font-semibold">Buy, sell and trade crypto today</h1>
          <h3 className="w-[60%] text-2xl font-medium">
            Trade with confidence and build your future with Australia`s fastest crypto exchange
          </h3>
          <div className="flex flex-row space-x-4">
            <Button variant="default" size="lg">
              Get started
            </Button>
            <Button variant="outline" size="lg">
              View exchange
            </Button>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src="/images/icons/google.svg" alt="Google" width={22} height={22} />
            <div className="flex flex-row gap-0.5">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <Star className="size-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
        <Image
          src="/images/phone.png"
          alt="Phone"
          width={280}
          height={630}
          className="h-[630px] w-[330px] max-lg:hidden"
        />
      </div>
      <MarketTable />
    </div>
  );
}
