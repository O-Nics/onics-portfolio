import { useState } from "react";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

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

  const handleChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-8 py-8 md:py-10">
        {/* En-tête */}
        <div className="flex flex-col gap-4 text-center">
          <h1 className={title()}>Me contacter</h1>
          <p className={subtitle()}>
            Une idée ? Un projet ? N'hésitez pas à me contacter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <Card>
              <CardBody className="gap-6">
                <h2 className="text-2xl font-bold">Envoyez-moi un message</h2>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <Input
                    isRequired
                    label="Nom"
                    placeholder="Votre nom"
                    type="text"
                    value={formData.name}
                    onValueChange={(value) => handleChange("name", value)}
                  />

                  <Input
                    isRequired
                    label="Email"
                    placeholder="votre.email@exemple.com"
                    type="email"
                    value={formData.email}
                    onValueChange={(value) => handleChange("email", value)}
                  />

                  <Select
                    isRequired
                    label="Sujet"
                    placeholder="Sélectionnez un sujet"
                    selectedKeys={formData.subject ? [formData.subject] : []}
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys)[0] as string;
                      handleChange("subject", selected);
                    }}
                  >
                    {subjects.map((subject) => (
                      <SelectItem key={subject.key}>{subject.label}</SelectItem>
                    ))}
                  </Select>

                  <Textarea
                    isRequired
                    label="Message"
                    minRows={6}
                    placeholder="Décrivez votre projet ou votre question..."
                    value={formData.message}
                    onValueChange={(value) => handleChange("message", value)}
                  />

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-success-50 text-success-600"
                          : "bg-danger-50 text-danger-600"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <Button
                    className="w-full"
                    color="primary"
                    isLoading={isSubmitting}
                    size="lg"
                    type="submit"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="flex flex-col gap-6">
            <Card>
              <CardBody className="gap-4">
                <h3 className="text-xl font-bold">Coordonnées</h3>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <GithubIcon size={24} />
                    <Link
                      isExternal
                      className="text-default-700"
                      href={siteConfig.links.github}
                    >
                      GitHub
                    </Link>
                  </div>

                  <div className="flex items-center gap-3">
                    <LinkedinIcon size={24} />
                    <Link
                      isExternal
                      className="text-default-700"
                      href={siteConfig.links.linkedin}
                    >
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-4">
                <h3 className="text-xl font-bold">Disponibilité</h3>
                <p className="text-default-600">
                  Je suis actuellement disponible pour de nouveaux projets et
                  collaborations. N'hésitez pas à me contacter pour discuter de
                  vos besoins.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="gap-4">
                <h3 className="text-xl font-bold">Temps de réponse</h3>
                <p className="text-default-600">
                  Je m'efforce de répondre à tous les messages dans un délai de
                  24 à 48 heures.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
