import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f1b2d] via-[#1a2744] to-[#0b1220] flex items-center justify-center p-4 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#00D4AA] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-morph"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-morph" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-morph" style={{ animationDelay: '4s' }}></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-2xl animate-fade-in-up">
                {/* 404 Text */}
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[150px] font-bold text-white opacity-30 animate-glow-text">
                        404
                    </h1>
                </div>

                {/* Main Message */}
                <div className="mb-8 animate-fade-in-up-delay-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed">
                        Oops! It looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Illustration Area */}
                <div className="mb-12 animate-fade-in-up-delay-2">
                    <div className="inline-block relative">
                        <div className="text-6xl md:text-8xl animate-bounce" style={{ animationDuration: '2s' }}>
                            🚀
                        </div>
                        <div className="absolute -top-4 -right-4 text-4xl animate-spin" style={{ animationDuration: '3s' }}>
                            ✨
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
                    <button
                        onClick={() => navigate("/")}
                        className="btn-smooth px-8 py-4 bg-[#00D4AA] text-black font-semibold rounded-full text-lg hover:bg-emerald-500 hover:shadow-lg active:scale-95"
                    >
                        Back to Home
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="btn-smooth px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:border-[#00D4AA] hover:text-[#00D4AA] hover:shadow-lg hover:shadow-[#00D4AA]/30 active:scale-95"
                    >
                        Go Back
                    </button>
                </div>

                {/* Quick Links */}
                <div className="mt-16 pt-8 border-t border-white/10 animate-fade-in-up-delay-4">
                    <p className="text-white/50 text-sm mb-6">Or explore these popular pages:</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {[
                            { label: "Features", path: "/features" },
                            { label: "Blog", path: "/blog" },
                            { label: "FAQ", path: "/faq" },
                            { label: "How It Works", path: "/howItWorks" }
                        ].map((link, idx) => (
                            <button
                                key={idx}
                                onClick={() => navigate(link.path)}
                                className="px-4 py-2 text-white/70 hover:text-[#00D4AA] transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00D4AA] group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
