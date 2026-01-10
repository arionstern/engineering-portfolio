export type LabItem = {
  slug: string;
  title: string;
  subtitle: string;
  area: "Microprocessor Applications" | "Digital Logic / FPGA" | "Coursework";
  tech: string[];
  highlights: string[];
  status?: "Featured" | "In Progress" | "Archived";
  links?: {
    repo?: string;
    report?: string; // can be /reports/xxx.pdf if you drop PDFs into /public/reports
    video?: string;
  };
};

export const labItems: LabItem[] = [
  {
    slug: "microprocessor-applications",
    title: "Microprocessor Applications Lab Series (ATxmega128A1U)",
    subtitle:
      "Register-level embedded labs covering SPI, ADC/DAC, DMA, timers/interrupts, and real-time behavior.",
    area: "Microprocessor Applications",
    tech: ["C", "AVR", "ATxmega128A1U", "SPI", "ADC/DAC", "DMA", "Timers"],
    status: "Featured",
    highlights: [
      "SPI peripheral interfacing + external device bring-up patterns",
      "ADC differential mode with gain for sensor measurement",
      "DMA-driven DAC waveform generation using LUTs",
      "Timer/interrupt scheduling for deterministic behavior",
    ],
    links: {
      // report: "/reports/microprocessor-labs.pdf",
      // repo: "https://github.com/...",
    },
  },

  {
    slug: "digital-logic-labs",
    title: "Digital Logic & Computer Systems Labs",
    subtitle:
      "FSM design, datapath/control separation, and simulation-based debugging using FPGA tools.",
    area: "Digital Logic / FPGA",
    tech: ["DE10-Lite", "Verilog/VHDL", "FSM", "Quartus", "ModelSim"],
    highlights: [
      "Designed FSM-based systems with clear state transitions and outputs",
      "Separated datapath and control for scalable designs",
      "Verified behavior via simulation and waveform analysis",
    ],
    links: {
      // report: "/reports/digital-logic-labs.pdf",
    },
  },



    {
    slug: "dsa-coursework",
    title: "Data Structures & Algorithms Coursework (COP3530)",
    subtitle:
      "C++ implementations of core data structures + algorithms, with testing, performance analysis, and real-world scale inputs.",
    area: "Coursework",
    tech: ["C++", "Data Structures", "Algorithms", "Hash Maps", "Testing", "Catch2"],
    highlights: [
      "AVL Tree from scratch: rotations (LL/RR/LR/RL), height/balance maintenance, and safe deletion",
      "Simplified PageRank: adjacency lists + hash maps, damping factor iteration, sinks/dangling node handling",
      "Processed edge lists at 100,000+ scale and verified convergence with ε-threshold stopping criteria",
      "Course Project: Elevation Sort Visualizer (links to full featured project page)",
    ],
    links: {
      repo: "https://github.com/arionstern/DSA_P3", // optional “main” repo link shown on the card
      video: "https://youtu.be/PtttdESWZPs",       // optional “main” video link shown on the card
      // report: "/reports/dsa-coursework.pdf",     // optional if you add a combined PDF later
    },
  },

  {
    slug: "advanced-intro-programming",
    title: "Advanced Programming Fundamentals (COP3504C)",
    subtitle:
      "Python + C++ projects emphasizing OOP, robust CLI design, file/binary I/O, debugging, and graphics/game programming.",
    area: "Coursework",
    tech: ["Python", "C++", "OOP", "CLI", "File I/O", "Binary Parsing", "SFML", "Git"],
    highlights: [
      "Project 1 (Python): Run-Length Encoder/Decoder with raw/hex/RLE formats + strict output formatting",
      "Project 2 (Python): Pakudex OOP registry with sorting/search, capacity handling, and input validation",
      "Project 3 (C++): TGA Image Processor with layered pixel ops + byte-for-byte image comparison utility",
      "Project 4 (C++/SFML): Full Minesweeper clone with event-driven UI, board loading, and win/loss logic",
    ],
    links: {
      repo: "https://github.com/arionstern/COP3504-P1-RLE", // optional “main” repo link shown on the card
      video: "https://youtu.be/6S-9yNFeqLU",               // optional “main” video link shown on the card
      // report: "/reports/cop3504c-coursework.pdf",        // optional if you add a combined PDF later
    },
  },



];
