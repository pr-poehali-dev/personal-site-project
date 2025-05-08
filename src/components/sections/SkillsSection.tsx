
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type SkillCardProps = {
  icon: string;
  title: string;
  description: string;
};

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Icon name={icon} className="text-purple-600" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700">{description}</p>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skills = [
    {
      icon: "Code",
      title: "Разработка",
      description: "Создание современных веб-приложений с использованием передовых технологий и лучших практик."
    },
    {
      icon: "Palette",
      title: "Дизайн",
      description: "Разработка уникальных визуальных решений, удобных интерфейсов и запоминающихся брендов."
    },
    {
      icon: "BarChart",
      title: "Аналитика",
      description: "Анализ данных, выявление тенденций и принятие решений на основе полученной информации."
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">
          Мои навыки
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
