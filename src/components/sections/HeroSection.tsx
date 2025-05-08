
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text font-playfair">
            Добро пожаловать на мой сайт
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Здесь вы найдете всю информацию обо мне, моих навыках и проектах
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700" size="lg">
              Узнать больше
            </Button>
            <Button variant="outline" size="lg">
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
