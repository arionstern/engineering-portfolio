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
    report?: string;
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
    links: {},
  },

  {
    slug: "digital-logic-labs",
    title: "Digital Logic & Computer Systems Labs (EEL3701C)",
    subtitle:
      "FSM design, datapath/control separation, and simulation-based debugging using FPGA tools.",
    area: "Digital Logic / FPGA",
    tech: ["DE10-Lite", "Verilog/VHDL", "FSM", "Quartus", "ModelSim"],
    highlights: [
      "Designed FSM-based systems with clear state transitions and outputs",
      "Separated datapath and control for scalable designs",
      "Verified behavior via simulation and waveform analysis",
    ],
    links: {},
  },

  {
    slug: "digital-design",
    title: "Digital Design (EEL4712C)",
    subtitle:
      "Eight-lab VHDL/SystemVerilog course on the DE10-Lite: combinational components, behavioral ALU, sequential logic, FSMD, VGA display, SV verification, CRV, SVA — plus a Pong extra credit project.",
    area: "Digital Logic / FPGA",
    tech: ["VHDL", "SystemVerilog", "DE10-Lite", "Quartus", "QuestaSim", "VGA", "FSM", "ALU", "SVA", "CRV"],
    status: "Featured",
    highlights: [
      "Built combinational components (ripple-carry adder, inverting MUX, 7-seg decoder) in structural VHDL",
      "Designed a generic-width behavioral ALU with 16 operations using the numeric_std package",
      "Implemented counters, gray-code FSM, and clock generator with precise millisecond timing",
      "Designed a full VGA sync generator and ROM-driven color raster display at 640×480 @ 60 Hz",
      "Rebuilt VHDL designs in SystemVerilog and applied CRV + SVA for formal-style verification",
      "Extra credit: fully functional 2-player Pong game with scoreboard, start/game-over screens, and VGA output",
    ],
    links: {
      video: "https://www.youtube.com/playlist?list=PLBkCR1HvIZEinFG499TMpVZYse8P9VpHZ",
    },
  },

  {
    slug: "signals-systems",
    title: "Signals & Systems (EEL3135)",
    subtitle:
      "Ten-lab MATLAB course covering discrete-time signals, sampling theory, convolution, frequency response, DTFT, Z-transforms, FIR/IIR filter design, and DFT/FFT — applied to audio, images, and video.",
    area: "Coursework",
    tech: ["MATLAB", "Signal Processing", "FIR/IIR Filters", "DTFT", "Z-Transform", "DFT/FFT", "Convolution", "Sampling Theory"],
    highlights: [
      "Synthesized multi-harmonic audio with ADSR envelopes and custom instrument timbres",
      "Demonstrated temporal aliasing in video — making a spinning wheel appear frozen or reversed using sampling theory",
      "Designed FIR/IIR filters working across time, frequency, and pole-zero domains simultaneously",
      "Implemented DFT from scratch and benchmarked against FFT on a full-length audio file",
    ],
    links: {},
  },

  {
    slug: "applied-ml",
    title: "Applied Machine Learning (EEL4930)",
    subtitle:
      "Three project-based assignments applying regression, dimensionality reduction, and neural networks to real-world datasets — each delivered as a 4-page IEEE-format technical report.",
    area: "Coursework",
    tech: ["Python", "scikit-learn", "TensorFlow", "CNN", "PCA", "SVM", "Lasso", "GridSearchCV", "Jupyter"],
    status: "Featured",
    highlights: [
      "Project 1: Lasso regression (α=0.004) on NYC Yellow Taxi data — Test R²=0.582, reducing 357 features to 56 via L1 regularization",
      "Project 2: PCA + SVM pipeline for satellite ship detection — F1=0.944, accuracy=97.25%, with 26× inference speedup over baseline SVM",
      "Project 3: CNN multi-label classification of 14 thoracic diseases from chest X-rays — soft loss weighting + threshold tuning improved test F1 by 61% over baseline",
      "Each project delivered as a 4-page IEEE-format technical report with full experimental analysis",
    ],
    links: {},
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
      repo: "https://github.com/arionstern/DSA_P3",
      video: "https://youtu.be/PtttdESWZPs",
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
      repo: "https://github.com/arionstern/COP3504-P1-RLE",
      video: "https://youtu.be/6S-9yNFeqLU",
    },
  },
];