import { X, Globe, Mail, Github } from 'lucide-react';

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[80] overflow-y-auto">
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" onClick={onClose} />

            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-2xl animate-in fade-in zoom-in-95 duration-200">

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-white">
                        <h3 className="text-2xl font-bold">About ProjBolt Clinical AI</h3>
                        <p className="text-blue-100 mt-2">Empowering Healthcare with NLP</p>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="p-8 space-y-6">
                        <section>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Our goal is to assist medical professionals by automating the extraction of critical information from unstructured clinical text.
                                By leveraging transfer learning with models like BioBERT and ClinicalBERT, we aim to reduce administrative burden and improve meaningful data accessibility.
                            </p>
                        </section>

                        <section>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">The Technology</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li><strong>BioBERT:</strong> Pre-trained on large-scale biomedical corpora for general medical terminology.</li>
                                <li><strong>ClinicalBERT:</strong> Specialized for clinical notes and discharge summaries.</li>
                                <li><strong>PubMedBERT:</strong> Optimized for extracting insights from medical literature and abstracts.</li>
                            </ul>
                        </section>

                        <div className="border-t border-gray-100 pt-6 mt-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact & Support</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <a href="#" className="flex items-center justify-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors">
                                    <Mail className="w-5 h-5 mr-2 text-blue-600" />
                                    Support
                                </a>
                                <a href="#" className="flex items-center justify-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors">
                                    <Github className="w-5 h-5 mr-2 text-gray-900" />
                                    GitHub
                                </a>
                                <a href="#" className="flex items-center justify-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors">
                                    <Globe className="w-5 h-5 mr-2 text-green-600" />
                                    Website
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 px-6 py-4 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-5 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 shadow-sm transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
