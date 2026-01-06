# Ene App - Pre-launch Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Admin-FFCA28?logo=firebase)](https://firebase.google.com/)

A modern, high-performance landing page for the **Ene App**, built to manage a pre-launch waitlist. Ene is your personal protector designed to shield you from phishing, spam, and malicious links across various formats including QR codes, images, PDFs, and text messages.

---

## 🚀 Key Features

- **Responsive Landing Page**: Sleek design featuring Hero, Features, and FAQ sections.
- **Multilingual Support**: Fully localized in English, German, and Spanish using `i18next`.
- **Waitlist Management**: 
  - Integrated with **Firebase Firestore** for secure data storage.
  - Server-side validation with **Zod**.
  - Rate limiting (3 requests/min per IP) and bot protection.
- **Enhanced Security**:
  - **Cloudflare Turnstile** integration for friction-less bot protection.
  - Honeypot field to mitigate automated spam.
  - Anonymized IP logging for privacy compliance.
- **Dynamic UI**: SMOOTH animations with **Framer Motion** and **Lottie**.
- **Modern Tech Stack**: Built with Next.js 15, React 19, and Tailwind CSS.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- A Firebase project with Firestore enabled
- A Cloudflare Turnstile site key and secret (optional, but recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/benekunzi/Ene-App-Website.git
   cd Ene-App-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add the following:

   ```env
   # Firebase Admin Configuration
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_CLIENT_EMAIL=your_client_email
   FIREBASE_PRIVATE_KEY="your_private_key"

   # Cloudflare Turnstile (Bot Protection)
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
   TURNSTILE_SECRET_KEY=your_secret_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

### Building for Production

To create an optimized production build:
```bash
npm run build
npm run start
```

## 📂 Project Structure

- `/app`: Next.js App Router, containing pages and API routes.
- `/components`: Reusable UI components (Logo, EmailForm, FAQ, etc.).
- `/lib`: Server-side utilities, including Firebase Admin initialization.
- `/lottie`: Lottie animation files.
- `/public`: Static assets (videos, documents, etc.).
- `/app/utils`: Internationalization (i18n) setup and language files.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a Pull Request.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the GitHub repository or contact the maintainers directly.

---

**Ene-App** - Protecting you from phishing.
© 2026 Ene-App. All rights reserved.
