import { Button, Icon } from "@/presentation/components";
import _React from "react";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#101212] to-[#08201D] h-dvh">
      <section className="flex items-center h-full">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                Simplified your setup with this Boilerplate
              </span>
            </h1>
            <p className="mt-5 text-base text-white sm:text-xl">
              Start your React.js projects quickly with this boilerplate. Built with SOLID
              principles and clean architecture.
            </p>

            <Button className="inline-flex items-center mt-4 gap-2">
              Get Started
              <Icon name="pixelarticons:arrow-right" />
            </Button>

            <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
              <div className="flex items-center">
                <Icon name="mdi:credit-card" color="#28CC9D" />
                <p className="ml-3 text-sm text-white">Free and open-source</p>
              </div>
              <div className="flex items-center">
                <Icon name="mdi:check-circle" color="#28CC9D" />
                <p className="ml-3 text-sm text-white">Ready to use in your projects</p>
              </div>
              <div className="flex items-center">
                <Icon name="mdi:code-tags" color="#28CC9D" />
                <p className="ml-3 text-sm text-white">Easy to customize and extend</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
