import React, { useState } from "react";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { CloseIcon } from "@heroui/shared-icons";
import Image from "next/image";

import DefaultLayout from "@/layouts/default";
import { LinkNavigation } from "@/types";
import { NavigationInPage } from "@/components/navigationInPage";
import FadeUp from "@/components/animation/fade-up";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const subjects = [
    { key: "project", label: "Nouveau projet" },
    { key: "collaboration", label: "Collaboration" },
    { key: "question", label: "Question technique" },
    { key: "recruits", label: "Recrutement" },
    { key: "other", label: "Autre" },
  ];
  const leftLink: LinkNavigation = {
    name: "Formations",
    href: "/education",
  };
  const rightLink: LinkNavigation = {
    name: "Accueil",
    href: "/",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'envoi");
      }

      setSubmitStatus({
        type: "success",
        message:
          "Merci pour votre message ! Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <DefaultLayout>
      <main>
        {/* En-tête */}
        <FadeUp>
          <div className="pt-0 md:pt-4" />
          <div className="flex justify-between items-center">
            <h1 className="!pt-0">Contact</h1>
            <Image
              priority
              unoptimized
              alt="Nicolas Planche"
              className="rounded-full md:hidden flex "
              height={70}
              quality={90}
              src="/61987116.jpeg"
              width={70}
            />
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <div className=" relative flex flex-row items-center md:mt-6  linear-gradient-to-r from-primary/10 via-transparent to-transparent pt-2 pb-2">
            <div className="self-stretch md:flex hidden w-1 mr-10 rounded-full bg-primary" />
            <div className="md:flex flex-row justify-center items-center">
              <div className="flex items-center md:flex hidden">
                <Image
                  priority
                  unoptimized
                  alt="Nicolas Planche"
                  className="rounded-full"
                  height={150}
                  quality={90}
                  src="/61987116.jpeg"
                  width={150}
                />
                <div className="h-0.5 md:hidden flex w-full ml-6 rounded-full bg-primary" />
              </div>
              <p className="corp w-full md:ml-6 font-bold text-gray-600 dark:text-gray-300">
                Un projet en tête ? Une opportunité à partager ? <br />
                Je serais ravi(e) d&#39;en discuter avec vous. Laissez-moi un
                message ci-dessous. <br /> J&#39;ai hâte de vous lire !
              </p>
            </div>
          </div>
        </FadeUp>
        {/* Formulaire */}
        <div className="pt-10">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <FadeUp delay={0.1}>
              <Input
                isRequired
                classNames={{
                  inputWrapper:
                    "dark:!bg-gray-50/3 border-0 dark:hover:!bg-gray-50/6 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-gray-50/5",
                  input: "text-sm",
                }}
                label="Nom"
                placeholder="Votre nom"
                type="text"
                value={formData.name}
                onValueChange={(value) => handleChange("name", value)}
              />
            </FadeUp>

            <FadeUp delay={0.15}>
              <Input
                isRequired
                classNames={{
                  inputWrapper:
                    "dark:!bg-gray-50/3 border-0 dark:hover:!bg-gray-50/6 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-gray-50/5",
                  input: "text-sm",
                }}
                label="Email"
                placeholder="votre.email@exemple.com"
                type="email"
                value={formData.email}
                onValueChange={(value) => handleChange("email", value)}
              />
            </FadeUp>

            <FadeUp delay={0.2}>
              <Select
                isRequired
                classNames={{
                  trigger:
                    "dark:!bg-gray-50/3 border-0 dark:hover:!bg-gray-50/6 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-gray-50/5",
                  popoverContent: "dark:bg-background bg-white",
                }}
                label="Sujet"
                placeholder="Sélectionnez un sujet"
                selectedKeys={formData.subject ? [formData.subject] : []}
                onSelectionChange={(keys) => {
                  const selected = Array.from(keys)[0] as string;

                  handleChange("subject", selected);
                }}
              >
                {subjects.map((subject) => (
                  <SelectItem
                    key={subject.key}
                    classNames={{
                      selectedIcon: "text-primary",

                      base: "hover:!bg-primary/6 dark:focus:!bg-primary/6  focus:!bg-gray-50 focus:!text-primary dark:hover:!bg-primary/15 dark:focus:!bg-primary/20",
                    }}
                  >
                    {subject.label}
                  </SelectItem>
                ))}
              </Select>
            </FadeUp>

            <FadeUp delay={0.25}>
              <Textarea
                isRequired
                classNames={{
                  inputWrapper:
                    "dark:!bg-gray-50/3 border-0 dark:hover:!bg-gray-50/6 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-gray-50/5",

                  input: "text-sm",
                }}
                label="Message"
                minRows={6}
                placeholder="Décrivez votre projet ou votre question..."
                value={formData.message}
                onValueChange={(value) => handleChange("message", value)}
              />
            </FadeUp>

            <FadeUp delay={0.3}>
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg justify-between flex ${
                    submitStatus.type === "success"
                      ? "bg-success-50 text-success-600"
                      : "bg-danger-50 text-danger-600"
                  }`}
                >
                  <p>{submitStatus.message}</p>
                  <span>
                    <CloseIcon
                      className="w-5 h-5 cursor-pointer"
                      onClick={() =>
                        setSubmitStatus({ type: null, message: "" })
                      }
                    />
                  </span>
                </div>
              )}
            </FadeUp>

            <FadeUp delay={0.35}>
              <Button
                className="text-md text-primary bg-primary/8"
                color="primary"
                isLoading={isSubmitting}
                size="md"
                type="submit"
                variant="flat"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </FadeUp>
          </form>
        </div>

        <NavigationInPage left={leftLink} right={rightLink} />
      </main>
    </DefaultLayout>
  );
}
