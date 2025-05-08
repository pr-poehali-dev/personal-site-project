
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">
          Обо мне
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-square rounded-full overflow-hidden max-w-md mx-auto md:mx-0">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Фото профиля" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Кто я такой</h3>
            <p className="text-gray-700 mb-6">
              Я профессионал своего дела с многолетним опытом работы. Моя страсть - создавать инновационные 
              решения и делиться знаниями с другими. Я постоянно стремлюсь к совершенствованию своих навыков 
              и изучению новых технологий.
            </p>
            <p className="text-gray-700">
              В свободное время я люблю путешествовать, читать книги и заниматься спортом. Я верю в важность 
              баланса между работой и личной жизнью для достижения максимальной продуктивности и творческого потенциала.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
