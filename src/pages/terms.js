import React from "react";
import { useRouter } from "next/router";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import OverlayGlow from "@/components/effects/OverlayGlow";

const TermsPage = () => {
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
                        Terms & Conditions
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <div className="text-sm italic text-gray-400">
                            Last updated: jan 03, 2026
                        </div>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                            <p>
                                Welcome to New Gen Services. These Terms and Conditions govern your access to and use of our website and services. By accessing our website, communicating with us, or using our services, you agree to be bound by these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">2. Services Provided</h2>
                            <p>
                                New Gen Services operates as an AI-powered creative and media agency offering services that may include, without limitation, AI-Powered Media Solutions, Content Production, Media Services & Post-Production, and AI-Powered Automations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">3. Payment Obligations</h2>
                            <p>
                                Fees for services will be communicated and agreed upon in advance. Unless otherwise stated in writing, all fees are due according to the agreed payment schedule and are non-refundable once work has commenced. Failure to remit payment when due may result in suspension of services, delayed delivery, or termination of the engagement. You remain responsible for all fees associated with work completed up to the date of suspension or termination.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                            <p>
                                Upon full payment of all applicable fees, ownership of the final, approved deliverables belongs to you. You retain ownership of all materials you provide to us, including but not limited to logos, footage, text, and brand assets, and you represent that you possess all necessary rights to such materials. Unless expressly prohibited in writing, New Gen Services retains the right to display completed work in its portfolio, website, case studies, or marketing materials for promotional purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">5. Confidentiality</h2>
                            <p>
                                Both parties agree to maintain the confidentiality of any non-public, proprietary, or sensitive information disclosed during the course of the engagement. Such information shall not be disclosed to third parties except as required by law or as necessary to perform the services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, New Gen Services shall not be liable for any indirect, incidental, consequential, or special damages arising out of or related to the use of our website or services. Our total liability, under any circumstance, shall not exceed the total amount paid by you for the specific services giving rise to the claim.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">7. Termination</h2>
                            <p>
                                We reserve the right to suspend or terminate access to our website or services if these Terms are violated, payments are not fulfilled, or continued engagement becomes unlawful, abusive, or commercially impractical.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">8. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and interpreted in accordance with the laws of Portugal, without regard to conflict-of-law principles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">9. Changes To Service</h2>
                            <p>
                                We may revise these Terms to reflect changes in our services, business practices, or legal requirements. Updated versions will be posted on this page with a revised “Last updated” date. Continued use of our website or services following such changes constitutes acceptance of the updated Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4">10. Contact Us</h2>
                            <p>
                                For any questions or concerns regarding these Terms and Conditions, you may contact us at contact@newgenservices.co.
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

export default TermsPage;
