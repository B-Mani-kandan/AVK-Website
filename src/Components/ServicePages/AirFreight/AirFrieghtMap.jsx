"use client";
import { WorldMap } from "../../ui/world-map";

export function AirFrieghtMap() {
  return (
    <section className="px-6 md:px-12 py-16 md:mt-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-900">
            Global <span className="text-sky-500">Air Freight</span> Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Our air freight services connect businesses across continents.
            Whether it’s urgent shipments or scheduled deliveries, we ensure
            safe, fast, and reliable cargo movement with real-time tracking.
          </p>
        </div>
        <div className="w-full">
          <WorldMap
            dots={[
              {
                start: { lat: 64.2008, lng: -149.4937 },
                end: { lat: 34.0522, lng: -118.2437 },
              },
              {
                start: { lat: 64.2008, lng: -149.4937 },
                end: { lat: -15.7975, lng: -47.8919 },
              },
              {
                start: { lat: -15.7975, lng: -47.8919 },
                end: { lat: 38.7223, lng: -9.1393 },
              },
              {
                start: { lat: 51.5074, lng: -0.1278 },
                end: { lat: 28.6139, lng: 77.209 },
              },
              {
                start: { lat: 28.6139, lng: 77.209 },
                end: { lat: 43.1332, lng: 131.9113 },
              },
              {
                start: { lat: 28.6139, lng: 77.209 },
                end: { lat: -1.2921, lng: 36.8219 },
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
