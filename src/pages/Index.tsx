
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Навигация */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-10">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <a href="hhtps/haitane.com" className="text-2xl font-bold text-purple-600 font-playfair">Haitane</a>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Обо мне</a>
            <a href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors">Навыки</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Герой-секция */}
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

      {/* Секция "Обо мне" */}
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

      {/* Секция "Навыки" */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">
            Мои навыки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Code" className="text-purple-600" />
                  Разработка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Создание современных веб-приложений с использованием передовых технологий и лучших практик.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Palette" className="text-purple-600" />
                  Дизайн
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Разработка уникальных визуальных решений, удобных интерфейсов и запоминающихся брендов.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart" className="text-purple-600" />
                  Аналитика
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Анализ данных, выявление тенденций и принятие решений на основе полученной информации.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция "Контакты" */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">
            Свяжитесь со мной
          </h2>
          <div className="max-w-lg mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Напишите мне</CardTitle>
                <CardDescription>Заполните форму и я свяжусь с вами как можно скорее</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Имя</label>
                    <input
                      id="name"
                      placeholder="Ваше имя"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                    <textarea
                      id="message"
                      placeholder="Ваше сообщение..."
                      rows={4}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Отправить
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="hhtps/haitane.com" className="text-2xl font-bold text-white font-playfair">Haitane</a>
              <p className="mt-2 text-gray-400">© {new Date().getFullYear()} Все права защищены</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Github" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
