import React from "react";
import { useRouter } from "next/router";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import OverlayGlow from "@/components/effects/OverlayGlow";

const PrivacyPage = () => {
    const router = useRouter();
    return (
        <div className="main font-[poppin] text-white bg-[url('/assets/images/grids.svg')] bg-center bg-repeat min-h-[100dvh] overflow-x-hidden bg-black">
            <div className="fixed top-0 left-0 z-[999] h-screen w-full bg-[url('/assets/images/noise.png')] bg-cover bg-center pointer-events-none opacity-30"></div>

            <section className="flex flex-col items-center gap-12 text-white relative py-20 px-4">
                <div className="pointer-events-none absolute inset-0 z-0">
                    <OverlayGlow />
                </div>

                <header className="z-10 md:w-[57%] w-[90%] flex justify-between items-center text-lg p-3">
                    <Logo />
                    <Button text="Book Meeting" isBookMeeting={true} />
                </header>

                <div className="z-10 w-full max-w-4xl bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 backdrop-blur-sm shadow-xl mt-10">
                    <h1 className="text-4xl md:text-5xl font-[poppinmed] mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <div className="text-sm italic text-gray-400">
                            Last updated: jan 03, 2026
                        </div>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                            <p>
                                New Gen Services respects your privacy and is committed to protecting the personal data of individuals who visit our website, communicate with us, or engage our services. This Privacy Policy explains how we collect, use, store, disclose, and safeguard personal information in connection with our website located at newgenservices.co and our AI-powered creative and media services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">2. Data We Collect</h2>
                            <p>
                                We collect personal information that you voluntarily provide to us when you contact us, submit inquiries, request services, onboard as a client, or otherwise communicate with us. This information may include your name, email address, company name, billing details, and any other information you choose to share.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
                            <p>
                                The personal data we collect is used strictly for legitimate business purposes, including providing and managing our services, responding to inquiries, communicating with clients, processing payments, improving our website and service offerings, ensuring security, and complying with applicable legal and regulatory obligations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">4. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational security measures designed to protect personal data against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">5. Data Retention</h2>
                            <p>
                                Personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, including the performance of services, compliance with legal, accounting, or tax requirements, and the resolution of disputes. When personal data is no longer required, it is securely deleted or anonymized.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">6. Your Legal Rights</h2>
                            <p>
                                Depending on your jurisdiction, you may have certain rights with respect to your personal data, including the right to access, correct, or request deletion of your information, to object to or restrict certain processing activities, or to withdraw consent where processing is based on consent. We will respond in accordance with applicable data protection laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">7. Contact Details</h2>
                            <p>
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of personal data, you may contact us at contact@newgenservices.co
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">8. Changes To Our Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our business practices, legal requirements, or technology. Any updates will be posted on this page with a revised “Last updated” date. Continued use of our website or services after such changes constitutes acceptance of the updated policy.
                            </p>
                        </section>
                    </div>
                </div>

                <div className="z-10 mt-12">
                    <Button
                        text="Back to Home"
                        isBookMeeting={false}
                        className="px-8"
                        onClick={() => router.push("/")}
                    />
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;