import { X, Github, Users, FileText, BookOpen } from 'lucide-react';

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
    if (!isOpen) return null;

    const teamMembers = [
        { name: "Shreehari Menon", role: "Lead Developer" },
        { name: "S Monishaa", role: "Researcher & Developer" },
        { name: "Syeda Aayesha Aiman Hashmi", role: "Researcher & Developer" },
        { name: "Vimudha R", role: "Researcher & Developer" },
    ];

    return (
        <div className="fixed inset-0 z-[80] overflow-y-auto">
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" onClick={onClose} />

            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-2xl animate-in fade-in zoom-in-95 duration-200">

                    <div className="bg-gradient-to-r from-teal-600 to-blue-700 px-6 py-8 text-white">
                        <h3 className="text-2xl font-bold">Breast Cancer Text Analysis Platform</h3>
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
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Users className="w-5 h-5 mr-2 text-indigo-600" />
                                Connect & Resources
                            </h4>

                            {/* Resources Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                                <a
                                    href="https://drive.google.com/file/d/1mbteibABTZZRFCuyeMrUNh_9wTY_pY52/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors text-center group"
                                >
                                    <FileText className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium">Research Paper</span>
                                </a>
                                <a
                                    href="https://drive.google.com/file/d/1f46__mTIVKpm418ztTPL-5Wy-Yp1qOJ6/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-700 transition-colors text-center group"
                                >
                                    <BookOpen className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium">Project Report</span>
                                </a>
                                <a
                                    href="https://github.com/ShreehariMenon/TL_MP"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors text-center group"
                                >
                                    <Github className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium">GitHub Repo</span>
                                </a>
                            </div>

                            {/* Team Grid */}
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Project Contributors</h5>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {teamMembers.map((member, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs ring-2 ring-indigo-50">
                                                {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 text-sm">{member.name}</p>
                                                <p className="text-[10px] text-gray-500 uppercase">{member.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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
