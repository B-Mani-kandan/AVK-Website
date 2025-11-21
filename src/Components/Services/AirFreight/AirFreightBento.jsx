"use client";
import { Box, Clock, Truck, Package, Shield } from "lucide-react";
import { GlowingEffect } from "../../ui/glowing-effect";

export function AirFreightBento() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:px-20 md:mt-15">
      <p className="text-sm text-gray-600 uppercase  tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
        AIR FREIGHT SERVICES
      </p>
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Clock className="h-4 w-4 text-black" />}
          title="Express / Priority Shipping"
          description="Fastest delivery for urgent shipments, ensuring your cargo reaches its destination on time."
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Truck className="h-4 w-4 text-black" />}
          title="Standard Air Freight"
          description="Reliable and cost-effective air shipping for regular cargo with consistent delivery schedules."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Box className="h-4 w-4 text-black" />}
          title="Door-to-Door Service"
          description="Convenient pickup and delivery directly from origin to destination, reducing handling time."
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Package className="h-4 w-4 text-black" />}
          title="Specialized Cargo"
          description="Handling of dangerous, fragile, or perishable goods with expert care and compliance."
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Shield className="h-4 w-4 text-black" />}
          title="Custom Solutions"
          description="Tailored services including packaging, customs clearance, and insurance for your shipments."
        />
      </ul>
    </div>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-300 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-gray-200 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-400 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 font-new font-serif pt-0.5 text-xl/[1.375rem] font-semibold text-black md:text-1xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black dark:text-neutral-600 md:text-base/[1.375rem]">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
