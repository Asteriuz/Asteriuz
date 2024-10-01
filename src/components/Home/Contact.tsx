"use client";
import { useState } from "react";
import {
  IoCall,
  IoCallOutline,
  IoLocation,
  IoLocationOutline,
  IoLogoWhatsapp,
  IoMail,
  IoMailOutline,
} from "react-icons/io5";
import ContactCard from "../utils/Cards/ContactCards";
import SectionText from "../utils/SectionText";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    const whatsappLink = `https://wa.me/5511997434003?text=${whatsappMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="contact" className="mx-auto flex w-full justify-center">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center py-[50px] xl:py-[100px]">
        <SectionText firstWord="MEU" lastWord="CONTATO" bgWord="CONTATO" />
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 xl:grid-cols-4">
          <ContactCard
            title="Telefone"
            subtitle="(11) 99743-4003"
            icon={IoCallOutline}
            link="tel:+5511997434003"
          />
          <ContactCard
            title="Whatsapp"
            subtitle="(11) 99743-4003"
            icon={IoLogoWhatsapp}
            link="https://wa.me/5511997434003"
          />
          <ContactCard
            title="Email"
            subtitle="augustobb@live.com"
            icon={IoMailOutline}
            link="mailto:augusutobb@live.com"
          />
          <ContactCard
            title="Endereço"
            subtitle="Tatuapé, São Paulo - SP"
            icon={IoLocationOutline}
          />
          <div
            id="whatsapp-form"
            className="xl:col-span-2 row-span-2 rounded-lg p-6 shadow-float"
          >
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col space-y-4"
            >
              <h2 className="mb-1 text-2xl font-bold">Envie uma mensagem</h2>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                className="rounded-lg border bg-white p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-lg border bg-white p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                // className="rounded-lg border p-3 bg-white flex-grow" change outline when focused
                className="flex-grow rounded-lg border bg-white p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary h-40 xl:h-auto"
                required
              ></textarea>
              <button
                type="submit"
                className="rounded-lg bg-primary p-3 text-white"
              >
                Enviar Mensagem via WhatsApp
              </button>
            </form>
          </div>
          <div className="xl:col-span-2 h-96 xl:row-span-2 overflow-hidden rounded-lg shadow-float">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18241.88094357834!2d-46.58563004959454!3d-23.537456240408996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ee7acdd50f5%3A0x3eeaf24eff368507!2zVGF0dWFww6ksIFPDo28gUGF1bG8gLSBTUA!5e0!3m2!1spt-BR!2sbr!4v1727764754773!5m2!1spt-BR!2sbr"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
