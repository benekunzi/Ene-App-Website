'use client';

import { useEffect, useState } from 'react';

export default function TermsAndConditionsPage() {
    const [terms, setTerms] = useState('');

    useEffect(() => {
        fetch('/termsAndConditions.txt')
            .then((response) => response.text())
            .then((text) => setTerms(text));
    }, []);

    return (
        <main className="hero-gradient relative selection:bg-indigo-400 selection:text-white">
            <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:18px_18px] opacity-[0.12]" />
            <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-10">
                <div className="prose mx-auto">
                    <pre>{terms}</pre>
                </div>
            </div>
        </main>
    );
}
