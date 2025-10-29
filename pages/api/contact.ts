import type { NextApiRequest, NextApiResponse } from "next";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "keyPass");

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ResponseData = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  try {
    const { name, email, subject, message }: ContactFormData = req.body;

    // Validation basique
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Email invalide" });
    }

    // Mapping des sujets
    const subjectLabels: { [key: string]: string } = {
      project: "Nouveau projet",
      collaboration: "Collaboration",
      question: "Question technique",
      other: "Autre",
    };

    // Envoi de l'email via Resend
    const { error } = await resend.emails.send({
      from: "Contact Portfolio <onboarding@resend.dev>", // À remplacer par votre domaine vérifié
      to: "np.planche@gmail.com",
      replyTo: email,
      subject: `${subjectLabels[subject] || subject} - Contact depuis le portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>De:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Sujet:</strong> ${subjectLabels[subject] || subject}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />

          <p style="color: #666; font-size: 12px;">
            Ce message a été envoyé depuis le formulaire de contact de nicolasplanche.com.
          </p>
        </div>
      `,
    });

    if (error) {
      // console.error("Erreur Resend:", error);

      return res.status(500).json({
        message: "Erreur lors de l'envoi de l'email",
        error: error.message,
      });
    }

    return res.status(200).json({
      message: "Email envoyé avec succès",
    });
  } catch (error) {
    // console.error("Erreur serveur:", error);

    return res.status(500).json({
      message: "Erreur serveur lors de l'envoi de l'email",
      // error: error instanceof Error ? error.message : "Erreur inconnue",
      error:  "Erreur inconnue",
    });
  }
}
