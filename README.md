<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anux CDN Generator - Interactive Report</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

    <!-- Chosen Palette: Cosmic Developer (Slate/Blue/Cyan) -->
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        slate: {
                            850: '#1e293b', // Custom darker slate
                            900: '#0f172a',
                            950: '#020617',
                        },
                        accent: {
                            blue: '#3b82f6',
                            cyan: '#06b6d4',
                            purple: '#8b5cf6'
                        }
                    }
                }
            }
        }
    </script>

    <style>
        /* Chart Container Styling Requirements */
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 300px;
            max-height: 400px;
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 350px;
            }
        }

        /* Custom Scrollbar for code blocks */
        .custom-scroll::-webkit-scrollbar {
            height: 8px;
            width: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
            background: #1e293b;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
            background: #475569;
            border-radius: 4px;
        }
        
        /* Smooth transitions */
        .transition-all-300 {
            transition: all 0.3s ease-in-out;
        }
    </style>

    <!-- Application Structure Plan: 
         The application is designed as a "Product Dashboard" rather than a linear document.
         1. Hero Section: Immediate value proposition and key metrics (Data from README/HTML).
         2. Interactive Simulator: A functional playground allowing users to 'try' the logic described in the README (Generating links), replacing static code blocks.
         3. Feature Analysis: A grid layout grouping features logically, allowing exploration without scrolling.
         4. Development Roadmap (Chart): Visualizing the "Features" vs "Future Plans" to show project maturity.
         5. Tech Stack & Contribution: Information for developers presented as actionable cards.
         This structure prioritizes "Learning by Doing" (Simulator) and "Quick Scanning" (Dashboard metrics).
    -->
    <!-- Visualization & Content Choices: 
         Summary: Report Info -> Goal -> Viz/Presentation Method -> Interaction -> Justification -> Library/Method
         1. Key Metrics (PoPs, Price) -> Inform -> Dashboard Cards -> Hover Scale -> Quick digest of text stats -> HTML/Tailwind
         2. URL Generation Logic -> Change/Demonstrate -> Interactive Input/Output Form -> Live Text Update -> "Show, don't tell" the tool's utility -> Vanilla JS
         3. Roadmap (Active vs Planned) -> Compare -> Doughnut Chart -> Tooltip Hover -> visualizes progress better than a list -> Chart.js (Canvas)
         4. Tech Stack -> Organize -> Grid of Pills -> Hover Border -> Clean layout for technical details -> HTML/Tailwind
    -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. Chart.js Canvas used. -->
</head>
<body class="bg-slate-950 text-slate-200 font-sans selection:bg-accent-blue selection:text-white flex flex-col min-h-screen">

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center gap-2">
                    <!-- Unicode Logo Placeholder -->
                    <div class="w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center text-white font-bold text-xl">&#9889;</div>
                    <span class="text-xl font-bold tracking-tight text-white">Anux<span class="text-accent-blue">CDN</span> Explorer</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <button onclick="scrollToSection('overview')" class="text-sm font-medium hover:text-accent-cyan transition-colors">Overview</button>
                    <button onclick="scrollToSection('simulator')" class="text-sm font-medium hover:text-accent-cyan transition-colors">Simulator</button>
                    <button onclick="scrollToSection('roadmap')" class="text-sm font-medium hover:text-accent-cyan transition-colors">Roadmap</button>
                    <button onclick="scrollToSection('contribute')" class="text-sm font-medium hover:text-accent-cyan transition-colors">Contribute</button>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-xs px-2 py-1 bg-accent-purple/20 text-accent-purple rounded-full border border-accent-purple/30">v2.0 Live</span>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        <!-- Section 1: Overview & Key Metrics -->
        <section id="overview" class="space-y-6">
            <!-- Intro Text -->
            <div class="text-center max-w-3xl mx-auto">
                <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    GitHub to CDN <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">in Milliseconds</span>
                </h1>
                <p class="text-lg text-slate-400">
                    An interactive exploration of the Anux CDN Generator utility. Transform raw repository links into production-ready assets powered by jsDelivr's global network.
                </p>
            </div>

            <!-- Dashboard Metrics (Data extracted from Source Report) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-accent-blue/50 transition-all-300 group">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-2 bg-blue-500/10 rounded-lg text-accent-blue text-xl">
                            &#127757; <!-- Globe -->
                        </div>
                        <span class="text-xs text-slate-500 font-mono">NETWORK</span>
                    </div>
                    <h3 class="text-3xl font-bold text-white group-hover:scale-105 transition-transform">110+</h3>
                    <p class="text-sm text-slate-400 mt-1">Global PoPs</p>
                </div>
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-accent-cyan/50 transition-all-300 group">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-2 bg-cyan-500/10 rounded-lg text-accent-cyan text-xl">
                            &#9889; <!-- Zap -->
                        </div>
                        <span class="text-xs text-slate-500 font-mono">SPEED</span>
                    </div>
                    <h3 class="text-3xl font-bold text-white group-hover:scale-105 transition-transform">Instant</h3>
                    <p class="text-sm text-slate-400 mt-1">Link Generation</p>
                </div>
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all-300 group">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 text-xl">
                            &#128176; <!-- Money Bag -->
                        </div>
                        <span class="text-xs text-slate-500 font-mono">COST</span>
                    </div>
                    <h3 class="text-3xl font-bold text-white group-hover:scale-105 transition-transform">100%</h3>
                    <p class="text-sm text-slate-400 mt-1">Free & Open Source</p>
                </div>
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all-300 group">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-2 bg-purple-500/10 rounded-lg text-accent-purple text-xl">
                            &#128200; <!-- Chart Increasing -->
                        </div>
                        <span class="text-xs text-slate-500 font-mono">LIMITS</span>
                    </div>
                    <h3 class="text-3xl font-bold text-white group-hover:scale-105 transition-transform">&#8734;</h3>
                    <p class="text-sm text-slate-400 mt-1">Unlimited Bandwidth</p>
                </div>
            </div>
        </section>

        <!-- Section 2: Interactive Logic Simulator -->
        <section id="simulator" class="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div class="p-6 border-b border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 class="text-2xl font-bold text-white">Link Generator Simulator</h2>
                    <p class="text-slate-400 text-sm mt-1">Experience the core logic defined in the documentation. Edit the fields to see live updates.</p>
                </div>
                <div class="flex gap-2">
                    <span class="px-3 py-1 bg-slate-800 rounded text-xs font-mono text-accent-cyan">GET</span>
                    <span class="px-3 py-1 bg-slate-800 rounded text-xs font-mono text-slate-300">/gh/{user}/{repo}@{version}/{file}</span>
                </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <!-- Controls -->
                <div class="p-6 space-y-6 border-r border-slate-800 border-b lg:border-b-0">
                    <div class="space-y-2">
                        <label class="text-xs font-bold uppercase tracking-wider text-slate-500">GitHub Username</label>
                        <div class="relative">
                            <span class="absolute left-3 top-2.5 text-slate-500">@</span>
                            <input type="text" id="input-user" value="anuxagfr" class="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-8 pr-4 text-white focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all" oninput="updateSimulator()">
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <label class="text-xs font-bold uppercase tracking-wider text-slate-500">Repository</label>
                        <input type="text" id="input-repo" value="Anurag-Gautam" class="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all" oninput="updateSimulator()">
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="text-xs font-bold uppercase tracking-wider text-slate-500">Branch</label>
                            <input type="text" id="input-branch" value="main" class="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all" oninput="updateSimulator()">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold uppercase tracking-wider text-slate-500">File Path</label>
                            <input type="text" id="input-file" value="styles.css" class="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all" oninput="updateSimulator()">
                        </div>
                    </div>
                </div>

                <!-- Output -->
                <div class="p-6 bg-slate-950 flex flex-col justify-center space-y-6">
                    <div class="space-y-2">
                        <label class="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                            <span>Generated CDN URL</span>
                            <span class="text-accent-blue cursor-pointer hover:underline select-none" onclick="copyToClipboard('output-url')">Copy</span>
                        </label>
                        <div class="bg-slate-900 p-4 rounded-lg border border-slate-800 font-mono text-sm text-accent-cyan break-all transition-all duration-200" id="output-url">
                            https://cdn.jsdelivr.net/gh/anuxagfr/Anurag-Gautam@main/styles.css
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                            <span>HTML Snippet</span>
                            <span class="text-accent-blue cursor-pointer hover:underline select-none" onclick="copyToClipboard('output-html')">Copy</span>
                        </label>
                        <div class="bg-slate-900 p-4 rounded-lg border border-slate-800 font-mono text-sm text-emerald-400 break-all custom-scroll overflow-x-auto whitespace-nowrap transition-all duration-200" id="output-html">
                            &lt;link rel="stylesheet" href="..."&gt;
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Project Status & Roadmap -->
        <section id="roadmap" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Chart Column -->
            <div class="lg:col-span-1 bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col">
                <h3 class="text-xl font-bold text-white mb-2">Project Maturity</h3>
                <p class="text-slate-400 text-sm mb-6">Visual comparison of currently active features versus the planned roadmap items extracted from the documentation.</p>
                
                <div class="chart-container flex-grow">
                    <canvas id="roadmapChart"></canvas>
                </div>
            </div>

            <!-- Details Lists Column -->
            <div class="lg:col-span-2 space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                    <!-- Active Features List -->
                    <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                        <h3 class="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                            <span>&#10003;</span> Active Features
                        </h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3 text-sm text-slate-300">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                                <span><strong>Generate Links:</strong> Instant creation for public repos.</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-300">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                                <span><strong>Live HTML Snippets:</strong> Ready-to-paste tags.</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-300">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                                <span><strong>Direct Downloads:</strong> Get files without cloning.</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-300">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                                <span><strong>Clipboard Copy:</strong> One-click copy actions.</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-300">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                                <span><strong>Token Support:</strong> Access private repos (beta).</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-300">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                                <span><strong>Smart Search:</strong> Filter repo files instantly.</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-300">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                                <span><strong>Responsive UI:</strong> Mobile-first design.</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-300">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                                <span><strong>File Info:</strong> Size, type, and encoding display.</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Future Plans List -->
                    <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 relative overflow-hidden">
                        <!-- Background pattern/decoration -->
                        <div class="absolute top-0 right-0 w-24 h-24 bg-accent-purple/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                        
                        <h3 class="text-lg font-bold text-accent-purple mb-4 flex items-center gap-2">
                            <span>&#8987;</span> Upcoming (Roadmap)
                        </h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3 text-sm text-slate-400">
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 flex-shrink-0"></span>
                                <span>Folder-level CDN links support</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-400">
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 flex-shrink-0"></span>
                                <span>File previews (images, HTML) in-tool</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-400">
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 flex-shrink-0"></span>
                                <span>Integrated Theme Switcher</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-400">
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 flex-shrink-0"></span>
                                <span>Bulk download as ZIP</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-slate-400">
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 flex-shrink-0"></span>
                                <span>Admin panel with usage analytics</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Tech Stack & Contribution -->
        <section id="contribute" class="bg-slate-900 rounded-2xl border border-slate-800 p-8">
            <div class="flex flex-col md:flex-row gap-8">
                <!-- Tech Stack Grid -->
                <div class="md:w-1/2 space-y-6">
                    <h2 class="text-2xl font-bold text-white">Built With</h2>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div class="p-3 bg-slate-950 rounded border border-slate-800 text-center text-sm text-slate-300 hover:border-orange-500 transition-colors cursor-default">HTML5</div>
                        <div class="p-3 bg-slate-950 rounded border border-slate-800 text-center text-sm text-slate-300 hover:border-blue-500 transition-colors cursor-default">CSS3 / Tailwind</div>
                        <div class="p-3 bg-slate-950 rounded border border-slate-800 text-center text-sm text-slate-300 hover:border-yellow-500 transition-colors cursor-default">Vanilla JS</div>
                        <div class="p-3 bg-slate-950 rounded border border-slate-800 text-center text-sm text-slate-300 hover:border-white transition-colors cursor-default">GitHub API</div>
                        <div class="p-3 bg-slate-950 rounded border border-slate-800 text-center text-sm text-slate-300 hover:border-red-500 transition-colors cursor-default">jsDelivr CDN</div>
                        <div class="p-3 bg-slate-950 rounded border border-slate-800 text-center text-sm text-slate-300 hover:border-yellow-600 transition-colors cursor-default">Firebase</div>
                    </div>
                </div>

                <!-- Contributing Info -->
                <div class="md:w-1/2 space-y-6 border-t md:border-t-0 md:border-l border-slate-800 md:pl-8 pt-8 md:pt-0">
                    <h2 class="text-2xl font-bold text-white">Contributing</h2>
                    <p class="text-slate-400 text-sm">
                        Contributions are welcome! Help us build the future features by forking the repository.
                    </p>
                    <ol class="list-decimal list-inside space-y-2 text-sm text-slate-300 font-mono bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <li>Fork this repository</li>
                        <li>git checkout -b feature/your-feature</li>
                        <li>git commit -m 'Add new feature'</li>
                        <li>git push origin feature/your-feature</li>
                        <li>Open a Pull Request</li>
                    </ol>
                    <div class="pt-2">
                        <span class="text-xs text-slate-500 block mb-2">License: MIT License © 2025 anuxagfr</span>
                        <div class="flex gap-4">
                            <a href="https://github.com/anuxagfr" target="_blank" class="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-1">
                                &#128187; GitHub
                            </a>
                            <a href="https://instagram.com/anuxagfr" target="_blank" class="text-slate-400 hover:text-pink-500 transition-colors text-sm font-bold flex items-center gap-1">
                                &#128247; Instagram
                            </a>
                            <a href="https://youtube.com/@anuxagfr" target="_blank" class="text-slate-400 hover:text-red-500 transition-colors text-sm font-bold flex items-center gap-1">
                                &#127909; YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-800 bg-slate-900 py-8 mt-auto">
        <div class="container mx-auto px-4 text-center text-slate-500 text-sm">
            <p>Powered by jsDelivr + GitHub CDN</p>
            <p class="mt-2 text-xs opacity-50">Anux CDN Generator Documentation View</p>
        </div>
    </footer>

    <!-- Core Logic Script -->
    <script>
        // --- State Management ---
        const state = {
            user: 'anuxagfr',
            repo: 'Anurag-Gautam',
            branch: 'main',
            file: 'styles.css'
        };

        // --- Simulator Logic ---
        function updateSimulator() {
            // 1. Update State
            state.user = document.getElementById('input-user').value || 'user';
            state.repo = document.getElementById('input-repo').value || 'repo';
            state.branch = document.getElementById('input-branch').value || 'main';
            state.file = document.getElementById('input-file').value || 'file.ext';

            // 2. Construct URL
            // Pattern: https://cdn.jsdelivr.net/gh/{user}/{repo}@{branch}/{file}
            // jsDelivr format: /gh/user/repo@version/file
            const cdnUrl = `https://cdn.jsdelivr.net/gh/${state.user}/${state.repo}@${state.branch}/${state.file}`;
            
            // 3. Determine HTML tag based on file extension
            let htmlSnippet = '';
            if (state.file.endsWith('.css')) {
                htmlSnippet = `<link rel="stylesheet" href="${cdnUrl}">`;
            } else if (state.file.endsWith('.js')) {
                htmlSnippet = `<script src="${cdnUrl}"><\/script>`; // Escape closing script tag
            } else if (state.file.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) {
                htmlSnippet = `<img src="${cdnUrl}" alt="CDN Image">`;
            } else {
                htmlSnippet = `<!-- Generic Link -->\n<a href="${cdnUrl}">Download File</a>`;
            }

            // 4. Update DOM
            const urlEl = document.getElementById('output-url');
            const htmlEl = document.getElementById('output-html');

            // Flash animation for visual feedback
            urlEl.style.opacity = '0.5';
            setTimeout(() => urlEl.style.opacity = '1', 150);

            urlEl.textContent = cdnUrl;
            htmlEl.textContent = htmlSnippet;
        }

        // --- Utility Functions ---
        function copyToClipboard(elementId) {
            const text = document.getElementById(elementId).textContent.trim();
            navigator.clipboard.writeText(text).then(() => {
                // Create a temporary toast manually since we want zero dependencies besides Tailwind
                const btn = event.target;
                const originalText = btn.innerText;
                btn.innerText = 'Copied!';
                btn.classList.add('text-emerald-400');
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('text-emerald-400');
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }

        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // --- Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Simulator
            updateSimulator();

            // Initialize Roadmap Chart
            const ctx = document.getElementById('roadmapChart').getContext('2d');
            
            // Data derived from Source Report Features vs Future Plans:
            // Active Features: 8
            // Planned Features: 5
            const featuresCount = 8;
            const plannedCount = 5;

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Active Features', 'Planned Features'],
                    datasets: [{
                        data: [featuresCount, plannedCount],
                        backgroundColor: [
                            '#10b981', // Emerald 500 (Active)
                            '#8b5cf6'  // Violet 500 (Planned)
                        ],
                        borderColor: '#0f172a', // Match background color for seamless segments
                        borderWidth: 2,
                        hoverOffset: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%', // Thinner ring
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#94a3b8', // Slate 400
                                font: {
                                    family: 'Inter',
                                    size: 12
                                },
                                padding: 20
                            }
                        },
                        title: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: '#1e293b',
                            titleColor: '#f8fafc',
                            bodyColor: '#cbd5e1',
                            borderColor: '#334155',
                            borderWidth: 1,
                            padding: 12,
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    const total = context.chart._metasets[context.datasetIndex].total;
                                    const percentage = Math.round((value / total) * 100) + '%';
                                    return ` ${label}: ${value} (${percentage})`;
                                }
                            }
                        }
                    }
                }
            });
        });
    </script>
</body>
</html>
