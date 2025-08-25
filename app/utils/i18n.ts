import i18n, { t } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    de: {
        translation: {
            title: "Die sicherste App, um dich vor Phishing zu schützen.",
            description: "Eine App um alle Phishing-Versuche zu erkennen und zu analysieren. Gib deine E-Mail-Adresse ein und wir informieren dich, sobald wir starten.",
            joinWaitlist: "Benachrichtige mich",
            featuresTitle: 'So funktioniert die Ene-App:',
            emailPlaceholder: "Deine E-Mail-Adresse eingeben",
            emailError: "Bitte gib eine gültige E-Mail-Adresse ein.",
            emailSuccess: "Danke! Wir halten dich auf dem Laufenden.",
            emailPrivacy: "Wir verwenden deine E-Mail-Adresse nur, um dich über den Start zu informieren.",
            submitError: "Etwas ist schief gelaufen. Bitte versuche es erneut.",
            rateLimited: "Zu viele Versuche. Bitte versuche es später erneut.",
            captchaMissing: "Bitte vervollständige die Verifizierung.",
            faqTitle: "Meistgestellten Fragen",
            faqDescription: "Tippe auf eine Frage, um die Antwort zu sehen.",
            faqQuestions: [
                { q: 'Was ist Ene?', a: 'Ene ist dein persönlicher Beschützer, um dich vor Spam und Phishing Nachrichten zu schützen. Er analysiert deine Nachrichten und zeigt dir sofort an, ob es sich hierbei um eine echte Nachricht handelt.' },
                { q: 'Was kann ich analysieren?', a: 'Alle bekannten Phishing und Scam Formate werden unterstützt. Du kannst QR-Codes überprüfen, sowie deine WhatsApp und SMS Nachrichten analysieren lassen. Auch E-Mails und das Einlesen von PDF-Dokumenten ist kein Problem.' },
                { q: 'Was passiert mit meinen Daten?', a: 'Die Daten, die in deinen Scans enthalten sind, bleiben sicher bei dir. Wir speichern keine Daten.' },
                { q: 'Kann ich die App kostenfrei benuzen?', a: 'Ja es gibt es eine kostenlose Testversion um die App ausführlich testen zu können. Danach kostet die App monatlich/jährlich.' },
                { q: 'Wie viel kostet die App?', a: 'Die Preise werden noch festgelegt, aber wir werden ein faires Preismodell anbieten, das auf deinen Bedürfnissen basiert.' },
            ],
            featureCards: [
                { title: 'QR-Code', subtitle: 'Beim scannen eines QR-Codes erhalte sofort ein Ergebnis, ob dein QR-Code sicher ist.', gradient: 'card-blue', icon: 'QrCode', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
                { title: 'Bild', subtitle: 'Analysiere jede Nachricht mit einem Bild, egal ob es eine E-Mail, WhatsApp oder SMS ist.', gradient: 'card-purple', icon: 'ImageIcon', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
                { title: 'PDF', subtitle: 'Analyse deine Dokumente, um sicherzustellen, dass sie keine schädlichen Inhalte enthält.', gradient: 'card-orange', icon: 'FileText', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
                { title: 'Text', subtitle: 'Kopiere Nachrichten und URLs direkt in die App, um sie zu überprüfen.', gradient: 'card-green', icon: 'AlignLeft', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
            ],
            footerText: "Ene-App. Alle Rechte vorbehalten.",
            thanks: {
                title: "Du bist jetzt auf der Liste 🎉",
                description: "Wir halten dich auf dem Laufenden und informieren dich, sobald wir starten.",
                buttonText: "Zurück zur Startseite"
            }
        }
    },
    en: {
        translation: {
            title: "The safest app to protect you from phishing.",
            description: "An app to detect and analyze all phishing attempts. Enter your email address and we will notify you when we launch.",
            joinWaitlist: "Notify me",
            featuresTitle: 'Here’s how the Ene app works:',
            emailPlaceholder: "Enter your email address",
            emailError: "Please enter a valid email address.",
            emailSuccess: "Thank you! We will keep you updated.",
            emailPrivacy: "We will only use your email to notify you about the launch.",
            rateLimited: "Too many attempts. Please try again later.",
            captchaMissing: "Please complete the verification.",
            submitError: "Something went wrong. Please try again.",
            faqTitle: "Frequently Asked Questions",
            faqDescription: "Tap a question to see the answer.",
            faqQuestions: [
                { q: 'What is Ene?', a: 'Ene is your personal protector to shield you from spam and phishing messages. It analyzes your messages and immediately shows you if it is a genuine message.' },
                { q: 'What can I analyze?', a: 'All known phishing and scam formats are supported. You can check QR codes, and have your WhatsApp and SMS messages analyzed. Analyzing emails and reading PDF documents is also no problem.' },
                { q: 'What happens to my data?', a: 'The data contained in your scans remains securely with you. We do not store any data.' },
                { q: 'Can I use the app for free?', a: 'Yes, there is a free trial version to test the app extensively. Afterwards, the app has a monthly/yearly cost.' },
                { q: 'How much does the app cost?', a: 'The prices are still being determined, but we will offer a fair pricing model based on your needs.' },
            ],
            featureCards: [
                { title: 'QR Code', subtitle: 'Scan a QR code to instantly check if it’s safe.', gradient: 'card-blue', icon: 'QrCode', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
                { title: 'Image', subtitle: 'Analyze any message with an image, whether it’s an email, WhatsApp or SMS.', gradient: 'card-purple', icon: 'ImageIcon', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
                { title: 'PDF', subtitle: 'Analyze your documents to ensure they contain no harmful content.', gradient: 'card-orange', icon: 'FileText', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
                { title: 'Text', subtitle: 'Copy messages and URLs directly into the app for verification.', gradient: 'card-green', icon: 'AlignLeft', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
            ],
            footerText: "Ene-App. All rights reserved.",
            thanks: {
                title: "You’re on the list 🎉",
                description: "Thanks for signing up. We’ll email you as soon as we launch.",
                buttonText: "Back to homepage"
            }
        }
    },
    es: {
        translation: {
            title: "La aplicación más segura para protegerte del phishing.",
            description: "Una aplicación para detectar y analizar todos los intentos de phishing. Ingresa tu dirección de correo electrónico y te notificaremos cuando lancemos.",
            joinWaitlist: "Notificarme",
            featuresTitle: 'Así es como funciona la aplicación Ene:',
            emailPlaceholder: "Ingresa tu dirección de correo electrónico",
            emailError: "Por favor, ingresa una dirección de correo electrónico válida.",
            emailSuccess: "¡Gracias! Te mantendremos informado.",
            emailPrivacy: "Solo utilizaremos tu correo electrónico para notificarnos sobre el lanzamiento.",
            rateLimited: "Demasiados intentos. Por favor, inténtalo de nuevo más tarde.",
            captchaMissing: "Por favor, completa la verificación.",
            submitError: "Algo salió mal. Por favor, inténtalo de nuevo.",
            faqTitle: "Preguntas Frecuentes",
            faqDescription: "Toca una pregunta para ver la respuesta.",
            faqQuestions: [
                { q: '¿Qué es Ene?', a: 'Ene es tu protector personal para protegerte de mensajes de spam y phishing. Analiza tus mensajes y te muestra inmediatamente si es un mensaje genuino.' },
                { q: '¿Qué puedo analizar?', a: 'Se admiten todos los formatos conocidos de phishing y estafa. Puedes verificar códigos QR y hacer que se analicen tus mensajes de WhatsApp y SMS. Analizar correos electrónicos y leer documentos PDF tampoco es un problema.' },
                { q: '¿Qué pasa con mis datos?', a: 'Los datos contenidos en tus escaneos permanecen seguros contigo. No almacenamos ningún dato.' },
                { q: '¿Puedo usar la aplicación gratis?', a: 'Sí, hay una versión de prueba gratuita para probar la aplicación extensamente. Después, la aplicación tiene un costo mensual/anual.' },
                { q: '¿Cuánto cuesta la aplicación?', a: 'Los precios aún se están determinando, pero ofreceremos un modelo de precios justo basado en tus necesidades.' },
            ],
            featureCards: [
                { title: 'Código QR', subtitle: 'Escanea un código QR para verificar al instante si es seguro.', gradient: 'card-blue', icon: 'QrCode', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
                { title: 'Imagen', subtitle: 'Analiza cualquier mensaje con una imagen, ya sea un correo electrónico, WhatsApp o SMS.', gradient: 'card-purple', icon: 'ImageIcon', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
                { title: 'PDF', subtitle: 'Analiza tus documentos para asegurarte de que no contengan contenido dañino.', gradient: 'card-orange', icon: 'FileText', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
                { title: 'Texto', subtitle: 'Copia mensajes y URLs directamente en la aplicación para verificarlos.', gradient: 'card-green', icon: 'AlignLeft', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
            ],
            footerText: "Ene-App. Todos los derechos reservados.",
            thanks: {
                title: "¡Estás en la lista! 🎉",
                description: "Gracias por registrarte. Te enviaremos un correo electrónico tan pronto como lancemos.",
                buttonText: "Volver a la página de inicio"
            }
        }
    }
};

i18n
    .use(LanguageDetector) // passes i18n down to react-i18next
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;