import React, { useState, useEffect, useRef } from 'react';
import { Terminal, User, Code, Briefcase, Mail, HelpCircle, GraduationCap, Award } from 'lucide-react';

interface Command {
  command: string;
  output: string | JSX.Element;
  timestamp: Date;
}

interface FileSystem {
  [key: string]: string | (() => JSX.Element);
}

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath] = useState('~');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

const fileSystem: FileSystem = {
  'about.txt': () => (
    <div className="text-green-400">
      <div className="flex items-center gap-2 mb-3">
        <User size={20} />
        <span className="text-green-300 font-semibold">About Rahul Gupta</span>
      </div>
      <div className="space-y-2 pl-6">
        <p>👋 Hello! I'm Rahul Gupta, a passionate Software Developer</p>
        <p>🎓 BCA student at DAV College, Panjab University (2023–2026)</p>
        <p>🚀 I specialize in full-stack development and building scalable systems</p>
        <p>💡 I love solving real-world problems using code and AI</p>
        <p>🌍 Open to remote internships and full-time opportunities</p>
      </div>
    </div>
  ),

  'education.txt': () => (
    <div className="text-green-400">
      <div className="flex items-center gap-2 mb-3">
        <GraduationCap size={20} />
        <span className="text-green-300 font-semibold">Education</span>
      </div>
      <div className="space-y-4 pl-6">
        <div>
          <p className="text-green-300 font-medium">Bachelor in Computer Applications</p>
          <p className="text-green-500">DAV College, Panjab University | 2023 - 2026</p>
          <p>• Core focus on programming, databases, and web technologies</p>
          <p>• Participated in coding competitions and tech events</p>
        </div>
      </div>
    </div>
  ),

  'experience.txt': () => (
    <div className="text-green-400">
      <div className="flex items-center gap-2 mb-3">
        <Briefcase size={20} />
        <span className="text-green-300 font-semibold">Professional Experience</span>
      </div>
      <div className="space-y-4 pl-6">
        <div>
          <p className="text-green-300 font-medium">Software Development Intern</p>
          <p className="text-green-500">Cognoverse | May 2025 – Present</p>
          <p>• Automated order management using RAG and AI</p>
          <p>• Trained vector DB to reduce repetitive mistakes</p>
          <p>• Deployed test version on Azure</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">Associate Application Developer Intern</p>
          <p className="text-green-500">Beamstacks | Sep 2024 – Mar 2025</p>
          <p>• Built employee tracker app using Azure & Blob Storage</p>
          <p>• Created RAG system with Langchain & Gemini API</p>
          <p>• Managed deployment via AWS EC2</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">Full Stack Developer Intern</p>
          <p className="text-green-500">Sales Assist | Jan 2024 – Jun 2024</p>
          <p>• Created responsive UIs using React & Tailwind</p>
          <p>• Built Flask APIs and improved server response by 30%</p>
          <p>• Automated LinkedIn lead generation using Phantombuster</p>
        </div>
      </div>
    </div>
  ),

  'projects.txt': () => (
    <div className="text-green-400">
      <div className="flex items-center gap-2 mb-3">
        <Code size={20} />
        <span className="text-green-300 font-semibold">Featured Projects</span>
      </div>
      <div className="space-y-4 pl-6">
        <div>
          <p className="text-green-300 font-medium">🎨 Draw App</p>
          <p>Collaborative whiteboard with Next.js, Redis & Pub/Sub</p>
          <p className="text-green-500">• Monorepo, Dockerized, worker-based DB sync</p>
          <p className="text-green-500">GitHub: github.com/RahulGIT24/draw-app</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">⌨️ Donkeytype</p>
          <p>Typing test app with leaderboard and multiplayer rooms</p>
          <p className="text-green-500">Live: https://donekeytype-frontend.vercel.app/</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">🛒 DigiKaan</p>
          <p>Stripe-powered shopping platform with filters & analytics</p>
          <p className="text-green-500">GitHub: github.com/RahulGIT24/DigiKaan</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">🤖 Lucifer</p>
          <p>AI Chatbot like Gemini with voice & memory support</p>
          <p className="text-green-500">Live: https://lucifer-black.vercel.app/</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">💬 Chatster</p>
          <p>End-to-end encrypted chat app with group features</p>
          <p className="text-green-500">Live: https://chatster.onrender.com/</p>
        </div>
      </div>
    </div>
  ),

  'skills.txt': () => (
    <div className="text-green-400">
      <div className="flex items-center gap-2 mb-3">
        <Terminal size={20} />
        <span className="text-green-300 font-semibold">Technical Skills</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
        <div>
          <p className="text-green-300 font-medium">Programming Languages</p>
          <p>• Python, C++, JavaScript, TypeScript</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">Frontend Development</p>
          <p>• React.js, Next.js, Tailwind CSS, HTML5, CSS3</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">Backend & Frameworks</p>
          <p>• Node.js, Express.js, FastAPI, Flask</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">Databases</p>
          <p>• PostgreSQL, MySQL, MongoDB, SQL, Qdrant</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">Libraries & Tools</p>
          <p>• Pandas, Numpy, OpenCV, Sklearn, Git, Docker</p>
        </div>
        <div>
          <p className="text-green-300 font-medium">DevOps & Cloud</p>
          <p>• AWS EC2, Azure Blob Storage, Redis, Docker</p>
        </div>
      </div>
    </div>
  ),

  'certifications.txt': () => (
    <div className="text-green-400">
      <div className="flex items-center gap-2 mb-3">
        <Award size={20} />
        <span className="text-green-300 font-semibold">Certifications & Achievements</span>
      </div>
      <div className="space-y-3 pl-6">
        <div>
          <p className="text-green-300 font-medium">🏆 Achievements</p>
          <p>• Runner-Up at “Chronicles” Hackathon in Chandigarh</p>
          <p>• 1st Prize in Intercollege Web Dev Competition</p>
          <p>• State Rank 10 in Matriculation</p>
        </div>
      </div>
    </div>
  ),

  'contact.txt': () => (
    <div className="text-green-400">
      <div className="flex items-center gap-2 mb-3">
        <Mail size={20} />
        <span className="text-green-300 font-semibold">Get In Touch</span>
      </div>
      <div className="space-y-2 pl-6">
        <p>📧 Email: rahul24012006@gmail.com</p>
        <p>💼 LinkedIn: linkedin.com/in/rahu24</p>
        <p>🐱 GitHub: github.com/RahulGIT24</p>
        <p>📱 Phone: +91 6230822583</p>
        <p className="mt-3 text-green-500">💡 Available for freelance and full-time roles</p>
      </div>
    </div>
  ),

  'resume.pdf': ()=> <div className="text-green-400">
    <p>📄 Click the link below to download my resume:</p>
    <a
      href="/Rahul_Gupta.pdf"
      download
      className="text-green-300 underline hover:text-green-200 mt-2 inline-block"
    >
      ⬇️ Download Resume (PDF)
    </a>
    <p className="mt-2">Or email me at <span className="text-green-300">rahul24012006@gmail.com</span> for a copy.</p>
  </div>
};

  const commands = {
    help: () => (
      <div className="text-green-400">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle size={20} />
          <span className="text-green-300 font-semibold">Available Commands</span>
        </div>
        <div className="space-y-1 pl-6">
          <p><span className="text-green-300">ls</span> - List all files</p>
          <p><span className="text-green-300">cat &lt;filename&gt;</span> - Display file contents</p>
          <p><span className="text-green-300">help</span> - Show this help message</p>
          <p><span className="text-green-300">clear</span> - Clear terminal screen</p>
          <p><span className="text-green-300">pwd</span> - Print working directory</p>
          <p><span className="text-green-300">whoami</span> - Display current user</p>
          <p><span className="text-green-300">history</span> - Show command history</p>
          <p><span className="text-green-300">banner</span> - Display welcome banner</p>
        </div>
        <p className="mt-3 text-green-500">💡 Try: cat about.txt, cat skills.txt, cat projects.txt</p>
        <p className="text-green-500">🔍 Use tab for autocomplete, arrow keys for command history</p>
      </div>
    ),
    ls: () => (
      <div className="text-green-400 grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.keys(fileSystem).map((file) => (
          <span key={file} className="hover:text-green-300 transition-colors cursor-pointer">
            {file}
          </span>
        ))}
      </div>
    ),
    pwd: () => <span className="text-green-400">/home/rahul</span>,
    whoami: () => <span className="text-green-400">rahul-gupta</span>,
    clear: () => null,
    history: () => (
      <div className="text-green-400">
        {commandHistory.map((cmd, index) => (
          <div key={index}>
            <span className="text-green-500">{index + 1}</span> {cmd}
          </div>
        ))}
      </div>
    ),
    banner: () => (
      <div className="text-green-400">
        <pre className="text-green-300 text-sm md:text-base font-bold mb-4">
          {`
██████╗  █████╗ ██╗  ██╗██╗   ██╗██╗         ██████╗ ██╗   ██╗██████╗ ████████╗ █████╗ 
██╔══██╗██╔══██╗██║  ██║██║   ██║██║        ██╔════╝ ██║   ██║██╔══██╗╚══██╔══╝██╔══██╗
██████╔╝███████║███████║██║   ██║██║        ██║  ███╗██║   ██║██████╔╝   ██║   ███████║
██╔══██╗██╔══██║██╔══██║██║   ██║██║        ██║   ██║██║   ██║██╔═══╝    ██║   ██╔══██║
██║  ██║██║  ██║██║  ██║╚██████╔╝███████╗   ╚██████╔╝╚██████╔╝██║        ██║   ██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═════╝  ╚═════╝ ╚═╝        ╚═╝   ╚═╝  ╚═╝
`}
        </pre>
        <p className="text-green-500 mb-2">Welcome to Rahul Gupta's interactive CLI portfolio!</p>
        <p className="text-green-400">Full-Stack Developer | Problem Solver | Technology Enthusiast</p>
        <p className="text-green-400 mt-2">Type <span className="text-green-300">'help'</span> to get started or <span className="text-green-300">'ls'</span> to see available files.</p>
        <p className="text-green-500 mt-1">💼 Open for opportunities | 🌍 Remote-friendly</p>
      </div>
    )
  };

  const processCommand = (cmd: string): Command => {
    const trimmedCmd = cmd.trim();
    const parts = trimmedCmd.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output: string | JSX.Element = '';

    if (command === '') {
      output = '';
    } else if (command === 'cat') {
      if (args.length === 0) {
        output = <span className="text-red-400">cat: missing file operand</span>;
      } else {
        const filename = args[0];
        if (fileSystem[filename]) {
          const content = fileSystem[filename];
          output = typeof content === 'function' ? content() : content;
        } else {
          output = <span className="text-red-400">cat: {filename}: No such file or directory</span>;
        }
      }
    } else if (commands[command as keyof typeof commands]) {
      if (command === 'clear') {
        setHistory([]);
        return { command: trimmedCmd, output: '', timestamp: new Date() };
      }
      output = commands[command as keyof typeof commands]();
    } else {
      output = <span className="text-red-400">bash: {command}: command not found</span>;
    }

    return {
      command: trimmedCmd,
      output,
      timestamp: new Date()
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const result = processCommand(input);
      setHistory(prev => [...prev, result]);
      setCommandHistory(prev => [...prev, input.trim()]);
      setHistoryIndex(-1);
    }
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const availableCommands = [...Object.keys(commands), ...Object.keys(fileSystem)];
      const matches = availableCommands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
    // Show banner on load
    setHistory([{
      command: 'banner',
      output: commands.banner(),
      timestamp: new Date()
    }]);
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Scanlines effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-pulse"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.1) 2px, rgba(0, 255, 0, 0.1) 4px)',
          }}
        />
      </div>

      <div
        ref={terminalRef}
        className="h-screen overflow-y-auto p-4 cursor-text relative z-10"
        onClick={handleTerminalClick}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#22c55e #000000'
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Terminal header */}
          <div className="mb-4 text-green-500 border-b border-green-800 pb-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-2">rahul-gupta@portfolio:~</span>
            </div>
          </div>

          {/* Command history */}
          <div className="space-y-2">
            {history.map((item, index) => (
              <div key={index} className="animate-fade-in">
                {item.command && (
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">rahul-gupta@portfolio:~$</span>
                    <span className="text-green-300">{item.command}</span>
                  </div>
                )}
                {item.output && (
                  <div className="ml-4 mb-2">
                    {typeof item.output === 'string' ? (
                      <span>{item.output}</span>
                    ) : (
                      item.output
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input line */}
          <form onSubmit={handleSubmit} className="flex items-center mt-4">
            <span className="text-green-500 mr-2">rahul-gupta@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-green-400 placeholder-green-600"
              placeholder="Type 'help' for available commands..."
              autoComplete="off"
              spellCheck="false"
            />
            <span className="animate-pulse text-green-400 ml-1">▋</span>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000000;
        }
        ::-webkit-scrollbar-thumb {
          background: #22c55e;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #16a34a;
        }
      `}</style>
    </div>
  );
};

export default App;