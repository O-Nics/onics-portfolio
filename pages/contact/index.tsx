import React, { useState } from "react";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { CloseIcon } from "@heroui/shared-icons";

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

    // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
    try {
      // Ici, vous pouvez ajouter votre logique d'envoi
      // Par exemple, appel à une API, service email, etc.
      await new Promise((resolve) => setTimeout(resolve, 1500));

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
          "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
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
          <h1>Contact</h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="subtitle">
            Une idée ? Un projet ? Un recrutement ? N'hésitez pas à me contacter
          </p>
        </FadeUp>
        {/* Formulaire */}
        <div className="pt-10">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <FadeUp delay={0.2}>
              <Input
                isRequired
                classNames={{
                  inputWrapper:
                    "dark:!bg-primary/2 border-0 dark:hover:!bg-primary/6 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-primary/5",
                  input: "text-sm",
                }}
                label="Nom"
                placeholder="Votre nom"
                type="text"
                value={formData.name}
                onValueChange={(value) => handleChange("name", value)}
              />
            </FadeUp>

            <FadeUp delay={0.3}>
              <Input
                isRequired
                classNames={{
                  inputWrapper:
                    "dark:!bg-primary/2 border-0 dark:hover:!bg-primary/6 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-primary/5",
                  input: "text-sm",
                }}
                label="Email"
                placeholder="votre.email@exemple.com"
                type="email"
                value={formData.email}
                onValueChange={(value) => handleChange("email", value)}
              />
            </FadeUp>

            <FadeUp delay={0.4}>
              <Select
                isRequired
                classNames={{
                  trigger:
                    "dark:!bg-primary/2 border-0 dark:hover:!bg-primary/6 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-primary/5",
                  popoverContent: "dark:bg-[#132233]",
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

            <FadeUp delay={0.5}>
              <Textarea
                isRequired
                classNames={{
                  inputWrapper:
                    "dark:!bg-primary/2 border-0 dark:hover:!bg-primary/6 bg-gray-50 hover:!bg-gray-100 dark:focus-within:!bg-primary/5",
                  input: "text-sm",
                }}
                label="Message"
                minRows={6}
                placeholder="Décrivez votre projet ou votre question..."
                value={formData.message}
                onValueChange={(value) => handleChange("message", value)}
              />
            </FadeUp>

            <FadeUp delay={0.6}>
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

            <FadeUp delay={0.7}>
              <Button
                className="text-md darktext-gray-800"
                color="primary"
                isLoading={isSubmitting}
                size="md"
                type="submit"
                variant="ghost"
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
