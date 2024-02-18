import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/button';

const PricingCard = ({ className, details }) => {
  const { title, subtitle, price, packages, type } = details;
  const types =
    type === 'starter'
      ? 'bg-[#18bc9d]'
      : type === 'business'
      ? 'bg-[#3598db]'
      : 'bg-[#8e44ac]';
  return (
    <div
      className={cn(
        `py-16 px-5 2xl:px-16 text-center rounded-md text-white ${className} ${types}`
      )}
    >
      <h2 className="font-semibold text-2xl">{title}</h2>
      <h2 className="font-semibold text-2xl mb-0">{subtitle}</h2>
      <div className="w-10 border-b h-1 mx-auto border-gray-500 mt-4 mb-6"></div>
      <h1 className="text-5xl mb-2">${price}</h1>
      <p className="text-md text-gray-200">Monthly</p>
      <ul className="p-0 list-none mt-8">
        {packages?.map((pac) => (
          <li
            className="text-md border-b border-gray-400 border-dashed py-2"
            key={pac}
          >
            {pac}
          </li>
        ))}
      </ul>
      <Button className="outline rounded-full bg-transparent px-12 mt-12">
        Sign up
      </Button>
    </div>
  );
};

export default PricingCard;
