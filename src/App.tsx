import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  User,
  Code,
  Briefcase,
  Mail,
  HelpCircle,
  GraduationCap,
  Award,
  Smartphone,
} from "lucide-react";

interface Command {
  command: string;
  output: string | JSX.Element;
  timestamp: Date;
}

interface FileSystem {
  [key: string]: string | (() => JSX.Element);
}

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const fileSystem: FileSystem = {
    "about.txt": () => (
      <div className="text-green-400">
        <div className="flex items-center gap-2 mb-3">
          <User size={20} />
          <span className="text-green-300 font-semibold">
            About Rahul Gupta
          </span>
        </div>
        <div className="space-y-2 pl-6">
          <p>👋 Hello! I'm Rahul Gupta, a passionate Software Developer</p>
          <p>🎓 BCA student at DAV College, Panjab University</p>
          <p>
            🚀 I specialize in full-stack development, AI integrations, and
            building scalable systems
          </p>
          <p>
            💡 I love solving real-world problems using code, LLMs, and solid
            architecture
          </p>
          <p>🌍 Open to remote internships and full-time opportunities</p>
        </div>
      </div>
    ),

    "education.txt": () => (
      <div className="text-green-400">
        <div className="flex items-center gap-2 mb-3">
          <GraduationCap size={20} />
          <span className="text-green-300 font-semibold">Education</span>
        </div>
        <div className="space-y-4 pl-6">
          <div>
            <p className="text-green-300 font-medium">
              Bachelor of Computer Applications (BCA)
            </p>
            <p className="text-green-500">
              DAV College, Panjab University | 2023 - 2026
            </p>
            <p className="text-green-400">• CGPA: 8.5/10.0</p>
            <p>• Core focus on programming, databases, and web technologies</p>
            <p>• Participated in coding competitions and tech events</p>
          </div>
        </div>
      </div>
    ),

    "experience.txt": () => (
      <div className="text-green-400">
        <div className="flex items-center gap-2 mb-3">
          <Briefcase size={20} />
          <span className="text-green-300 font-semibold">
            Professional Experience
          </span>
        </div>
        <div className="space-y-6 pl-6">
          <div>
            <p className="text-green-300 font-medium">
              Software Development Engineer Intern
            </p>
            <p className="text-green-500">CognoVerse | May 2025 – Feb 2026</p>
            <p>
              • Developed an AI agent to automate sales workflows with a
              stunning chat UI/UX.
            </p>
            <p>
              • Built a robust invoice storage solution handling varied formats
              (PDF/emails/.docx/.xlsx), extracting metadata, and mapping to
              master databases.
            </p>
            <p>
              • Processed complex Panasonic invoices requiring heavy data
              preprocessing.
            </p>
            <p>
              • Leveraged LLM APIs and embeddings to match customer data
              efficiently, saving significant manual effort.
            </p>
            <p>
              • POC: Trained models on chest X-rays to detect diseases and
              generate 3D models for a foreign client.
            </p>
          </div>
          <div>
            <p className="text-green-300 font-medium">
              Associate Application Developer Intern
            </p>
            <p className="text-green-500">Beamstacks | Sep 2024 – Mar 2025</p>
            <p>
              • Created an employee tracking and weekly hours management app
              using Azure & Blob Storage.
            </p>
            <p>
              • Developed a RAG + AI solution for Panasonic (progressed from POC
              to production project).
            </p>
            <p>
              • Built a POC to extract structured text and images from PDFs into
              HTML.
            </p>
            <p>
              • Developed the backend for a real-time full-stack sports app
              (clock synchronization, real-time scores, multi-game support)
              using Redis queues, schedulers, and pub-sub for socket scaling.
            </p>
            <p>
              • Managed deployments across Azure Ubuntu machines and AWS EC2
              instances.
            </p>
          </div>
          <div>
            <p className="text-green-300 font-medium">
              Full Stack Developer Intern
            </p>
            <p className="text-green-500">Sales Assist | Jan 2024 – Jun 2024</p>
            <p className="text-green-400 mt-1">
              SDE Intern (Apr 2024 - Jun 2024):
            </p>
            <p>
              • Integrated Phantom on the backend and helped automate LinkedIn
              activities.
            </p>
            <p>
              • Designed backend schedulers, optimized APIs, handled large CSVs
              with Pandas, and reduced system latency.
            </p>
            <p className="text-green-400 mt-1">
              React Developer (Jan 2024 - Apr 2024):
            </p>
            <p>
              • Built perfect Tailwind UIs from Figma and integrated extensive
              APIs using React Table.
            </p>
            <p>
              • Engineered a canvas-based infographic generator that separates
              text/hashtags.
            </p>
            <p>
              • Implemented direct social media sharing with a custom emoji
              parser for captions.
            </p>
          </div>
        </div>
      </div>
    ),

    "projects.txt": () => (
      <div className="text-green-400">
        <div className="flex items-center gap-2 mb-3">
          <Code size={20} />
          <span className="text-green-300 font-semibold">
            Featured Projects
          </span>
        </div>
        <div className="space-y-6 pl-6">
          <div>
            <p className="text-green-300 font-medium">
              ♟️ Chess App – Real-time Multiplayer Chess Platform
            </p>
            <p>
              A modern chess app featuring seamless real-time gameplay,
              persistent clocks, and AI opponents. Built with React, TypeScript,
              Node.js, and PostgreSQL. Uses Redis for live state management,
              game history, and reconnects. Features Google OAuth and game
              review tools.
            </p>
            <a
              className="text-green-500"
              href="https://github.com/RahulGIT24/chess"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div>
            <p className="text-green-300 font-medium">
              🎨 Collaborative Drawing App
            </p>
            <p>
              A real-time whiteboard app with Next.js, Socket.IO, and
              TailwindCSS. Supports shapes, text, and smooth scaling. Powered by
              NextAuth for security and Redis Pub/Sub for horizontal scaling and
              background DB syncing to PostgreSQL.
            </p>
            <a
              className="text-green-500"
              href="https://github.com/RahulGIT24/draw-app"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div>
            <p className="text-green-300 font-medium">
              🤖 Lucifer - AI Chatbot
            </p>
            <p>
              A feature-rich AI chatbot utilizing Google's Gemini API with
              real-time streaming, voice support, and chat history management.
              Built with Next.js, TypeScript, MongoDB, Zod, and Redux.
            </p>
            <p className="text-green-400 text-sm">
              Demo Login: rg4005450@gmail.com | Pass: rahulisgreat
            </p>
            <a
              href="https://github.com/RahulGIT24/Lucifer"
              target="_blank"
              className="text-green-500"
            >
              GitHub
            </a>
          </div>
          <div>
            <p className="text-green-300 font-medium">📄 Doc Search</p>
            <p>
              Full-stack RAG application for context-aware Q&A on PDFs. Uses
              FastAPI, LangChain, Qdrant Vector DB, and Gemini LLM. Features
              real-time chat, Redis caching, and a React+Tailwind frontend.
            </p>
            <a
              target="_blank"
              href="https://github.com/RahulGIT24/document-search"
              className="text-green-500"
            >
              GitHub
            </a>
          </div>
          <div>
            <p className="text-green-300 font-medium">
              🛒 DigiKaan - A Digital Dukaan
            </p>
            <p>
              Comprehensive e-commerce platform with an admin dashboard,
              charting, and Stripe payments. Built with React, Redux, Node.js,
              Express, MongoDB, and TypeScript.
            </p>
            <a
              href="https://github.com/RahulGIT24/DigiKaan"
              target="_blank"
              className="text-green-500"
            >
              GitHub
            </a>
          </div>
          <div>
            <p className="text-green-300 font-medium">🎥 YouTube Agent</p>
            <p>
              AI-powered backend to summarize YouTube videos, providing accurate
              information extraction and timestamped answers using Python and
              LangChain.
            </p>
            <a
              href="https://github.com/RahulGIT24/youtube-rag"
              className="text-green-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    ),

    "skills.txt": () => (
      <div className="text-green-400">
        <div className="flex items-center gap-2 mb-3">
          <Terminal size={20} />
          <span className="text-green-300 font-semibold">Technical Skills</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
          <div>
            <p className="text-green-300 font-medium">Programming Languages</p>
            <p>• Python, C++, JavaScript, TypeScript, Go</p>
          </div>
          <div>
            <p className="text-green-300 font-medium">Frontend Development</p>
            <p>• React.js, Next.js, Tailwind CSS, HTML5, CSS3, Redux</p>
          </div>
          <div>
            <p className="text-green-300 font-medium">Backend & Frameworks</p>
            <p>• Node.js, Express.js, FastAPI, Flask, Socket.IO</p>
          </div>
          <div>
            <p className="text-green-300 font-medium">Databases & Vector DBs</p>
            <p>• PostgreSQL, MongoDB, SQL, Redis, Qdrant</p>
          </div>
          <div>
            <p className="text-green-300 font-medium">AI & Libraries</p>
            <p>• LangChain, Gemini API, Pandas, Numpy, OpenCV</p>
          </div>
          <div>
            <p className="text-green-300 font-medium">DevOps & Cloud</p>
            <p>• AWS EC2, Azure Blob Storage, Docker, Git</p>
          </div>
        </div>
      </div>
    ),

    "certifications.txt": () => (
      <div className="text-green-400">
        <div className="flex items-center gap-2 mb-3">
          <Award size={20} />
          <span className="text-green-300 font-semibold">
            Certifications & Achievements
          </span>
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

    "contact.txt": () => (
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
          <p className="mt-3 text-green-500">
            💡 Available for freelance and full-time roles
          </p>
        </div>
      </div>
    ),

    "resume.pdf": () => (
      <div className="text-green-400">
        <p>📄 Click the link below to download my resume:</p>
        <a
          href="Resume.pdf"
          download
          className="text-green-300 underline hover:text-green-200 mt-2 inline-block"
        >
          ⬇️ Download Resume (PDF)
        </a>
      </div>
    ),
  };

  const commands = {
    help: () => (
      <div className="text-green-400">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle size={20} />
          <span className="text-green-300 font-semibold">
            Available Commands
          </span>
        </div>
        <div className="space-y-1 pl-6">
          <p>
            <span className="text-green-300">ls</span> - List all files
          </p>
          <p>
            <span className="text-green-300">cat &lt;filename&gt;</span> -
            Display file contents
          </p>
          <p>
            <span className="text-green-300">help</span> - Show this help
            message
          </p>
          <p>
            <span className="text-green-300">clear</span> - Clear terminal
            screen
          </p>
          <p>
            <span className="text-green-300">pwd</span> - Print working
            directory
          </p>
          <p>
            <span className="text-green-300">whoami</span> - Display current
            user
          </p>
          <p>
            <span className="text-green-300">history</span> - Show command
            history
          </p>
          <p>
            <span className="text-green-300">banner</span> - Display welcome
            banner
          </p>
        </div>
      </div>
    ),
    ls: () => (
      <div className="text-green-400 grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.keys(fileSystem).map((file) => (
          <span
            key={file}
            className="hover:text-green-300 transition-colors cursor-pointer"
            onClick={() => executeCommand(`cat ${file}`)}
          >
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
      <div className="text-green-400 w-full overflow-x-auto">
        <pre className="text-green-300 text-[10px] md:text-sm font-bold mb-4 whitespace-pre">
          {`
██████╗  █████╗ ██╗  ██╗██╗   ██╗██╗         ██████╗ ██╗   ██╗██████╗ ████████╗ █████╗ 
██╔══██╗██╔══██╗██║  ██║██║   ██║██║        ██╔════╝ ██║   ██║██╔══██╗╚══██╔══╝██╔══██╗
██████╔╝███████║███████║██║   ██║██║        ██║  ███╗██║   ██║██████╔╝   ██║   ███████║
██╔══██╗██╔══██║██╔══██║██║   ██║██║        ██║   ██║██║   ██║██╔═══╝    ██║   ██╔══██║
██║  ██║██║  ██║██║  ██║╚██████╔╝███████╗   ╚██████╔╝╚██████╔╝██║        ██║   ██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═════╝  ╚═════╝ ╚═╝        ╚═╝   ╚═╝  ╚═╝
`}
        </pre>
        <p className="text-green-500 mb-2">
          Welcome to Rahul Gupta's interactive CLI portfolio!
        </p>
        <p className="text-green-400">
          Full-Stack Developer | AI Integrations | Problem Solver
        </p>
        <p className="text-green-400 mt-2">
          Type <span className="text-green-300">'help'</span> to get started or{" "}
          <span className="text-green-300">'ls'</span> to see available files.
        </p>
      </div>
    ),
  };

  const processCommand = (cmd: string): Command => {
    const trimmedCmd = cmd.trim();
    const parts = trimmedCmd.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output: string | JSX.Element = "";

    if (command === "") {
      output = "";
    } else if (command === "cat") {
      if (args.length === 0) {
        output = (
          <span className="text-red-400">cat: missing file operand</span>
        );
      } else {
        let filename = args[0];

        // Forgiving cat implementation
        if (!fileSystem[filename]) {
          if (fileSystem[`${filename}.txt`]) {
            filename = `${filename}.txt`;
          } else if (fileSystem[`${filename}.pdf`]) {
            filename = `${filename}.pdf`;
          }
        }

        if (fileSystem[filename]) {
          const content = fileSystem[filename];
          output = typeof content === "function" ? content() : content;
        } else {
          output = (
            <span className="text-red-400">
              cat: {filename}: No such file or directory
            </span>
          );
        }
      }
    } else if (commands[command as keyof typeof commands]) {
      if (command === "clear") {
        setHistory([]);
        return { command: trimmedCmd, output: "", timestamp: new Date() };
      }
      output = commands[command as keyof typeof commands]();
    } else {
      output = (
        <span className="text-red-400">bash: {command}: command not found</span>
      );
    }

    return {
      command: trimmedCmd,
      output,
      timestamp: new Date(),
    };
  };

  const executeCommand = (cmdStr: string) => {
    if (!cmdStr.trim()) return;

    // Check if it's an internal autocomplete execution
    if (cmdStr.startsWith("__AUTOCOMPLETE__")) {
      const matches = JSON.parse(cmdStr.replace("__AUTOCOMPLETE__", ""));
      setHistory((prev) => [
        ...prev,
        {
          command: input,
          output: (
            <div className="text-green-300 grid grid-cols-2 md:grid-cols-4 gap-2 mb-2 mt-1">
              {matches.map((m: string) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          ),
          timestamp: new Date(),
        },
      ]);
      return;
    }

    const result = processCommand(cmdStr);
    setHistory((prev) => [...prev, result]);
    setCommandHistory((prev) => [...prev, cmdStr.trim()]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();

      // Determine what part of the input to autocomplete
      const parts = input.split(" ");
      const isCompletingCommand = parts.length === 1;
      const currentWord = parts[parts.length - 1].toLowerCase();

      let availableOptions: string[] = [];

      if (isCompletingCommand) {
        availableOptions = [
          ...Object.keys(commands),
          ...Object.keys(fileSystem),
        ];
      } else if (parts[0] === "cat") {
        availableOptions = Object.keys(fileSystem);
      }

      const matches = availableOptions.filter((opt) =>
        opt.startsWith(currentWord),
      );

      if (matches.length === 1) {
        if (isCompletingCommand) {
          setInput(matches[0]);
        } else {
          parts[parts.length - 1] = matches[0];
          setInput(parts.join(" "));
        }
      } else if (matches.length > 1) {
        // Find common prefix to auto-fill as much as possible
        let commonPrefix = matches[0];
        for (let i = 1; i < matches.length; i++) {
          let j = 0;
          while (
            j < commonPrefix.length &&
            j < matches[i].length &&
            commonPrefix[j] === matches[i][j]
          ) {
            j++;
          }
          commonPrefix = commonPrefix.substring(0, j);
        }

        if (commonPrefix.length > currentWord.length) {
          if (isCompletingCommand) {
            setInput(commonPrefix);
          } else {
            parts[parts.length - 1] = commonPrefix;
            setInput(parts.join(" "));
          }
        } else {
          // If no further common prefix, print options to terminal
          executeCommand(
            `__AUTOCOMPLETE__[${matches.map((m) => `"${m}"`).join(",")}]`,
          );
        }
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
    setHistory([
      {
        command: "banner",
        output: commands.banner(),
        timestamp: new Date(),
      },
    ]);
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="h-[100dvh] w-full bg-black text-green-400 font-mono overflow-x-hidden flex flex-col">
      {/* Scanlines effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-pulse"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.1) 2px, rgba(0, 255, 0, 0.1) 4px)",
          }}
        />
      </div>

      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 cursor-text relative z-10 pb-24 md:pb-4"
        onClick={handleTerminalClick}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#22c55e #000000",
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Terminal header */}
          <div className="mb-4 text-green-500 border-b border-green-800 pb-2 sticky top-0 bg-black/90 backdrop-blur-sm z-20">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-2 truncate">rahul-gupta@portfolio:~</span>
            </div>
          </div>

          {/* Command history */}
          <div className="space-y-2">
            {history.map((item, index) => (
              <div key={index} className="animate-fade-in">
                {item.command &&
                  !item.command.startsWith("__AUTOCOMPLETE__") && (
                    <div className="flex items-center flex-wrap">
                      <span className="text-green-500 mr-2 shrink-0">
                        rahul@portfolio:~$
                      </span>
                      <span className="text-green-300 break-all">
                        {item.command}
                      </span>
                    </div>
                  )}
                {item.output && (
                  <div className="ml-0 md:ml-4 mb-2 mt-1">
                    {typeof item.output === "string" ? (
                      <span className="break-words">{item.output}</span>
                    ) : (
                      item.output
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input line */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center mt-4 flex-wrap"
          >
            <span className="text-green-500 mr-2 shrink-0">
              rahul@portfolio:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-green-400 placeholder-green-800 min-w-[200px]"
              placeholder="Type 'help'..."
              autoComplete="off"
              spellCheck="false"
              autoCapitalize="none"
              autoCorrect="off"
            />
            <span className="animate-pulse text-green-400 ml-1">▋</span>
          </form>
        </div>
      </div>

      {/* Mobile Quick Action Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 border-t border-green-900 p-2 z-30 backdrop-blur-md">
        <div className="flex items-center gap-2 mb-1 pl-1">
          <Smartphone size={14} className="text-green-600" />
          <span className="text-green-600 text-xs">Quick Commands</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => executeCommand("ls")}
            className="px-3 py-1 border border-green-800 rounded text-green-400 text-sm hover:bg-green-900/30 active:bg-green-800/50 transition-colors"
          >
            ls
          </button>
          <button
            onClick={() => executeCommand("cat experience")}
            className="px-3 py-1 border border-green-800 rounded text-green-400 text-sm hover:bg-green-900/30 active:bg-green-800/50 transition-colors"
          >
            experience
          </button>
          <button
            onClick={() => executeCommand("cat projects")}
            className="px-3 py-1 border border-green-800 rounded text-green-400 text-sm hover:bg-green-900/30 active:bg-green-800/50 transition-colors"
          >
            projects
          </button>
          <button
            onClick={() => executeCommand("clear")}
            className="px-3 py-1 border border-green-800 rounded text-green-400 text-sm hover:bg-green-900/30 active:bg-green-800/50 transition-colors ml-auto"
          >
            clear
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000000;
        }
        ::-webkit-scrollbar-thumb {
          background: #166534;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #22c55e;
        }
      `}</style>
    </div>
  );
};

export default App;
