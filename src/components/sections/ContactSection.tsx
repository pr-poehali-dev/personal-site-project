
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
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
                <FormField 
                  id="name" 
                  label="Имя" 
                  placeholder="Ваше имя" 
                />
                <FormField 
                  id="email" 
                  label="Email" 
                  type="email" 
                  placeholder="your@email.com" 
                />
                <FormField 
                  id="message" 
                  label="Сообщение" 
                  placeholder="Ваше сообщение..." 
                  isTextarea={true}
                />
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
  );
};

type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  isTextarea?: boolean;
};

const FormField = ({ id, label, placeholder, type = "text", isTextarea = false }: FormFieldProps) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-sm font-medium">{label}</label>
    {isTextarea ? (
      <textarea
        id={id}
        placeholder={placeholder}
        rows={4}
        className="w-full p-2 border rounded-md"
      />
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border rounded-md"
      />
    )}
  </div>
);

export default ContactSection;
