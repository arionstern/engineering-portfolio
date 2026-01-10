export type Project = {
  slug: string;
  title: string;
  subtitle: string;

  tech: string[];
  status?: "Featured" | "In Progress" | "Archived";

  // Card bullets
  highlights: string[];

  // Media
  media?: {
    heroImage?: string; // e.g. "/projects/elevation-sort/hero.png"
    gallery?: string[]; // additional screenshots
    youtubeId?: string; // YouTube video id only, e.g. "dQw4w9WgXcQ"
    youtubePlaylistId?: string;
    galleryMode?: "grid" | "carousel"; 
  };

  // Structured content for the detail page
  sections?: {
    problem?: string;
    approach?: string[];
    results?: string[];
    whatILearned?: string[];
    problemsEncountered?: string[];
    futureWork?: string[];
  };

  links?: {
  github?: string;
  demo?: string;
  video?: string;
  report?: string;
  };

};

export const projects: Project[] = [
  {
  slug: "elevation-sort-visualizer",
  title: "Elevation Sort Visualizer",
  subtitle:
    "Interactive visualization tool that animates sorting algorithms applied to real-world elevation data with live metrics and user controls.",
  tech: [
    "Python",
    "Pygame",
    "Matplotlib",
    "Algorithms",
    "Data Visualization",
    "APIs",
  ],
  status: "Featured",
  highlights: [
    "Real-time animation of six sorting algorithms on real elevation data",
    "Live metrics tracking comparisons, swaps, and total sort time",
    "Interactive GUI buttons and keyboard shortcuts",
    "Color-coded elevation bars with multiple visual themes",
    "Hover tooltips showing latitude, longitude, and elevation metadata",
  ],
  media: {
    heroImage: "/projects/elevation-sort/heatmap.png",
    gallery: [
      "/projects/elevation-sort/mergesort.png",
      "/projects/elevation-sort/sorted.png",
    ],
    youtubeId: "1cRVrCb5_Lg",
  },
  sections: {
    problem:
      "Sorting algorithms are often taught abstractly, making their behavior difficult to intuitively understand. Likewise, real-world elevation datasets are hard to interpret in raw numerical form. This project bridges both challenges by providing an interactive visual tool that animates sorting algorithms applied to geographic elevation data.",
    approach: [
      "Fetched real elevation data from NOAA’s ETOPO1 dataset using the BRIDGES API and represented values as sortable data bars.",
      "Implemented six sorting algorithms—Bubble, Selection, Insertion, Merge, Quick, and Heap Sort—each animated step-by-step using Pygame.",
      "Tracked and displayed real-time metrics including comparison count, swap count, and total sorting time.",
      "Built an interactive GUI with clickable buttons for algorithm selection and keyboard controls for resetting, shuffling, and theme cycling.",
      "Added multiple color themes (terrain, grayscale, heatmap) and a dynamic legend to enhance visual interpretation.",
      "Integrated hover tooltips to display latitude, longitude, and elevation for each bar.",
      "Generated side-by-side Matplotlib heatmaps to compare elevation distributions before and after sorting.",
    ],
    results: [
      "Produced an interactive educational tool that makes algorithm performance differences visually and quantitatively clear.",
      "Enabled users to explore how sorting behavior changes across different datasets and algorithms.",
      "Improved usability through GUI-based controls, hover feedback, and real-time summaries of minimum, median, and maximum elevation values.",
    ],
    problemsEncountered: [
      "Maintaining stable visual continuity during sorting required tracking original indices alongside elevation values.",
      "Managing frame rate and responsiveness became challenging for large datasets (e.g., 50×50 grids).",
      "Keeping the Pygame interface responsive while handling sorting logic, rendering, and user input required careful loop structuring.",
      "Debugging color mapping inconsistencies and aligning them with the legend was more complex than expected.",
    ],
    futureWork: [
      "Further modularize the visualizer to simplify extension and testing.",
      "Introduce zooming or scrolling support for very large elevation grids.",
      "Incorporate real geographic labels or location names using an external mapping API.",
      "Add additional algorithms or hybrid visual comparisons for deeper analysis.",
    ],
    whatILearned: [
      "How to design real-time visual interfaces that balance performance and clarity.",
      "How algorithm complexity manifests in practice when paired with large, real-world datasets.",
      "How UI and visualization choices significantly affect the educational value of algorithm demos.",
    ],
  },
  links: {
    github: "https://github.com/arionstern/DSA_P3",
    report: "/reports/elevation-sort-visualizer-report.pdf",
  },
},


  {
  slug: "embedded-color-detection",
  title: "Computer Vision Driven Embedded Color Detection System",
  subtitle:
    "Real-time computer vision system that classifies color data and drives embedded hardware behavior through serial communication.",
  tech: [
    "Python",
    "OpenCV",
    "Computer Vision",
    "UART",
    "Arduino",
    "Embedded Systems",
  ],
  status: "Featured",
  highlights: [
    "HSV-based color classification for lighting robustness",
    "Noise reduction via region averaging instead of single-pixel sampling",
    "Real-time UART streaming of color data to embedded hardware",
    "Embedded LED and LCD control driven by vision output",
    "Optional object localization via HSV masking and bounding boxes",
  ],
  media: {
    heroImage: "/projects/color-detection/mainss.png",
    gallery: [
        "/projects/color-detection/gator.png",
        "/projects/color-detection/lcdss1.png",
        "/projects/color-detection/lcdss2.png",
        "/projects/color-detection/lcdss3.png",
        "/projects/color-detection/track.png",
    ],
    youtubeId: "GVZu4IgrWBs",
    galleryMode: "carousel", // ✅ only here
    },

  sections: {
    problem:
      "The goal of this project was to demonstrate how real-time visual data can directly drive embedded system behavior. Many vision demos stop at on-screen classification; this project extends the pipeline into physical hardware, emphasizing robustness, timing, and human–machine interaction.",
    approach: [
      "Captured a live video stream using OpenCV and converted frames from BGR to HSV color space to decouple color from brightness and improve robustness under changing lighting conditions.",
      "Sampled and averaged a small region at the center of the frame rather than relying on a single pixel, reducing sensor noise and flicker.",
      "Classified each frame into a discrete color category using hue, saturation, and value thresholds.",
      "Streamed the detected color name along with averaged RGB and HSV values over a UART serial connection to an Arduino in real time.",
      "On the embedded side, parsed incoming serial data and drove an RGB LED and a 16×2 LCD display.",
      "Implemented multiple operating modes: Vision Mode (camera-driven color output), Rainbow Mode, and Gator Mode, demonstrating state-machine-based embedded control independent of vision input.",
      "Handled user interaction through physical buttons for cycling display pages and switching LED modes.",
    ],
    results: [
      "Achieved stable real-time color detection that remained robust under varying lighting conditions.",
      "Successfully closed the loop between computer vision output and embedded hardware behavior.",
      "Provided real-time user feedback through multiple LCD views, including detected color, RGB/HSV values, and a scrolling color history.",
      "Demonstrated optional color-based object localization using HSV masking and bounding box extraction, rendered directly on the live video stream.",
    ],
    whatILearned: [
      "Why HSV color space is more reliable than RGB/BGR for real-world color detection tasks.",
      "How small signal-processing choices, such as spatial averaging, significantly improve system stability.",
      "How to design a clean serial protocol between vision software and embedded hardware.",
      "How to integrate vision, embedded control, and human–machine interaction into a single responsive system.",
    ],
    problemsEncountered: [
      "Color classification based on single-pixel sampling proved unstable due to sensor noise and small lighting fluctuations, requiring a shift to spatial averaging over a defined region.",
      "Initial HSV threshold values were highly sensitive to environmental lighting, making calibration necessary to avoid false positives and color misclassification.",
      "Correctly handling hue wrap-around in HSV space (particularly for red) required careful threshold logic to prevent missed detections.",
      "Serial communication between the vision system and the Arduino required robust parsing and synchronization to avoid dropped or misaligned data during real-time operation.",
      "Balancing responsiveness with stability involved tradeoffs between smoothing, latency, and real-time feedback to the user.",
      "I could not display the RGB values directly detected by OpenCV on the RGB LED as they appeared on the screen, so I had to use preset colors",
    ],
    futureWork: [
    "Replace fixed HSV thresholds with adaptive or learned thresholds to improve robustness across a wider range of lighting environments.",
    "Extend object localization into full object tracking across frames, enabling velocity estimation and motion-based interaction.",
    "Move portions of the vision pipeline to embedded hardware or an edge-computing platform to reduce latency and dependency on a host system.",
    "Introduce structured message framing and error detection for serial communication to further improve reliability.",
    "Expand the human–machine interface with additional visualizations, such as real-time plots of color values or detection confidence.",
    "Use a better better color/object detection method such as a machine learning model.",
    "Add hardware and functionality to use servos to control a camera with pan and tilt to follow the object",
    ],


  },
  links: {
    github: "https://github.com/arionstern/OpenCV-color-recognition-detection", // add later if you want
  },
},



{
  slug: "easy-garden",
  title: "Easy Garden (EGN2020C Human-Centered Design)",
  subtitle:
    "Accessible raised-garden prototype combining a low-effort watering mechanism with Arduino-based soil moisture + light monitoring and multi-modal feedback.",
  tech: [
    "Arduino",
    "Embedded Systems",
    "Sensors",
    "Analog Read (ADC)",
    "Human-Centered Design",
    "Prototyping",
  ],
  status: "Featured",
  highlights: [
    "Designed for elderly users to reduce bending/strain while maintaining gardening independence",
    "Mechanical watering: fill a basin occasionally, then release water with a lever/tab into soil",
    "Arduino reads soil moisture + ambient light and maps readings to LED + buzzer feedback",
    "Moisture ranges drive red/yellow/green LEDs; buzzer signals when to stop watering",
    "Photoresistor triggers a light-status LED and a recovery beep when lighting improves",
  ],
  media: {
    heroImage: "/projects/easy-garden/easygarden3.png",   // ✅ 1 hero image
    gallery: [
      "/projects/easy-garden/easygarden1.png",
      "/projects/easy-garden/easygarden2.png",
      "/projects/easy-garden/easygarden3.png",
      "/projects/easy-garden/easygarden4.png",
      "/projects/easy-garden/easygarden5.png",
    ],
    galleryMode: "carousel",
    youtubePlaylistId: "PLBkCR1HvIZEha8YHmeS8zCeCTCKDc-wNI", // ✅ your playlist id
  },
  sections: {
    problem:
      "Traditional gardening can require frequent bending, lifting, and daily watering—tasks that become difficult or unsafe for elderly users with reduced mobility, strength, or balance. Easy Garden was built as a human-centered prototype to preserve independence and reduce physical strain while still providing clear, accessible feedback about plant conditions.",
    approach: [
      "Built the raised/contained gardening setup around an integrated watering approach where the user fills a basin occasionally instead of watering daily; water is released into the soil by pulling a small lever/tab so the user doesn’t need repeated heavy motion. (Mechanical system integration + usability tradeoffs.)",
      "Designed the electronics around two core signals: (1) soil moisture from a moisture sensor and (2) ambient light from a photoresistor, so the system can communicate ‘needs water’ and ‘needs sunlight’ in a way that’s obvious even with sensory limitations.",
      "Implemented multi-modal feedback for accessibility: LEDs provide clear visual cues and a buzzer provides audible feedback so users can still interpret status if hearing or vision is impaired.",
      "Implemented threshold-based moisture classification into three ranges (wet, medium, dry). The code maps these ranges to three LEDs (green/yellow/red). When the reading crosses into the ‘wet/green’ band from a previously drier state, the buzzer plays three high-frequency beeps to indicate the user can stop watering.",
      "Implemented light-status logic using a photoresistor threshold: when light is low, the light-status LED turns on; when light transitions from low → adequate, the light-status LED turns off and the buzzer plays one low-frequency beep to confirm recovery.",
      "Added embedded reliability details: the moisture sensor is powered only during sampling, then turned off to reduce corrosion and extend sensor life; readings are taken periodically (loop delay) and logged to serial for debugging/calibration.",
    ],
    results: [
      "Delivered a prototype that combines low-effort watering with sensor-driven feedback so users can quickly understand whether plants need water or more light without guesswork.",
      "Produced a clear embedded ‘state-based’ feedback experience: LEDs show current moisture band (red/yellow/green) while the buzzer signals important transitions (stop watering; light recovered).",
      "Designed the system to be modular: electronic components can be removed/reused, and physical parts can be replaced individually rather than rebuilding the entire device.",
    ],
    whatILearned: [
      "How to translate human-centered requirements (accessibility + reduced strain) into concrete system behaviors and interface cues (LED mapping + alert tones).",
      "How to implement stable threshold logic and transition detection (tracking prior state) so a buzzer alerts only when an important change occurs.",
      "How small embedded details—like powering sensors only when sampling—matter for longevity and reliability.",
    ],
    problemsEncountered: [
      "Geometry and water-delivery constraints forced iteration: an original concept using an above-soil water tank conflicted with time constraints and sunlight exposure, leading to a redesigned rear compartment + lever/tab approach.",
      "Electronics placement had to avoid water exposure; the water compartment constrained safe mounting locations and influenced wiring/layout decisions.",
      "Calibration and threshold selection were necessary for both moisture and light sensing to avoid misleading status indicators.",
    ],
    futureWork: [
      "Add a dedicated pump system (the report notes this could reduce user labor further) and redesign the water-release geometry to improve ergonomics while preventing leakage.",
      "Improve weatherproofing and electronics enclosure design so placement is safer and less restricted around the water compartment.",
      "Add a more formal calibration workflow (per-user/soil-type profiles) so thresholds adapt to different environments and plant setups.",
    ],
  },
    links: {
    report: "/reports/easy-garden-final-report.pdf",
    video: "https://www.youtube.com/playlist?list=PLBkCR1HvIZEha8YHmeS8zCeCTCKDc-wNI",
    },

},















        {
        slug: "elenco-xp-720k-power-supply",
        title: "Elenco XP-720K Triple Output Power Supply",
        subtitle:
            "Assembled and tested a linear AC/DC bench power supply kit, building fundamentals in analog electronics, soldering, and schematic reading.",
        tech: [
            "Analog Electronics",
            "Soldering",
            "Power Electronics",
            "Transformers",
            "Rectifiers",
            "Voltage Regulation",
            "Hardware Debugging",
        ],
        status: "Featured",
        highlights: [
            "Completed full assembly with no prior soldering experience",
            "Learned to read and follow a schematic diagram to drive build decisions",
            "Validated regulated outputs: +12V, -12V, and +5V rails",
            "Gained hands-on practice with safe testing and iterative troubleshooting",
        ],
        media: {
            // heroImage: "/projects/power-supply/powHero.png",
            // no gallery, no video
            youtubeId: "YPeewCCYTKw"
        },
        sections: {
            problem:
            "I wanted hands-on experience with real analog hardware and power electronics, so I took on assembling a linear AC/DC bench power supply kit despite having no prior soldering background.",
            approach: [
            "Learned foundational concepts—transformers, rectification, filtering, and regulation—through targeted circuit theory videos and notes.",
            "Practiced soldering technique on spare parts before committing to the kit components.",
            "Followed the schematic and build steps carefully, using the diagram to sanity-check part placement and connections.",
            "Completed bring-up and testing to confirm the expected regulated rails and overall stability.",
            ],
            results: [
            "Successfully assembled and tested the Elenco XP-720K kit.",
            "Produced regulated outputs suitable for breadboard and embedded prototyping (+12V, -12V, and +5V).",
            "Developed practical confidence in soldering, schematic interpretation, and analog troubleshooting workflow.",
            ],
            whatILearned: [
            "How linear power supplies are structured (transformer → rectifier → filter → regulator) and what each stage contributes.",
            "How to interpret schematics to diagnose potential wiring/assembly mistakes.",
            "How to approach hardware builds safely and methodically—practice first, test incrementally, and verify outputs against expectations.",
            ],
            problemsEncountered: [
            "Starting from zero soldering experience required deliberate practice to avoid cold joints and messy connections.",
            "Translating the schematic into physical placement took extra attention to ensure orientation and wiring matched the diagram.",
            ],
            futureWork: [
            //"Add measurement notes (ripple under load, thermal behavior over time) to better characterize performance.",
            "Use the supply in future embedded projects and document typical use cases (sensor rails, motor drivers, MCU boards).",
            ],
        },
        links: {
            github: "#",
        },
        },







        {
    slug: "drone-payload-deployment-system",
    title: "Drone Payload Deployment System",
    subtitle:
        "Interdisciplinary drone project featuring a lightweight mechanical payload release system integrated with Arduino-based altitude control.",
    tech: [
        "Arduino",
        "Embedded Systems",
        "Mechanical Design",
        "Servos",
        "Prototyping",
        "Interdisciplinary Engineering",
    ],
    status: "Featured",
    highlights: [
        "Designed and built a lightweight payload enclosure and release mechanism",
        "Integrated mechanical system with Arduino-controlled servo actuation",
        "Payload released automatically at a specified altitude",
        "Close coordination between mechanical and embedded subsystems",
    ],
    media: {
        heroImage: "/projects/drone-payload/hillspload2.jpg",
        gallery: [
        "/projects/drone-payload/hillspload1.jpg",
        "/projects/drone-payload/hillspload3.jpg",
        ],
        youtubeId: "QnanBPkoAqs",
        // no galleryMode → defaults to grid
    },
    sections: {
    problem:
        "The goal of this project was to design a reliable drone-based payload deployment system capable of performing multiple altitude-dependent tasks. In addition to safely releasing a payload at a specified altitude, the system was required to capture an image at a different altitude and ensure the payload landed within a defined radius of a designated landing zone. These constraints introduced challenges in mechanical reliability, timing coordination, and system integration.",
        approach: [
            "Served as mechanical lead, designing a lightweight payload enclosure and deployment structure with careful consideration of weight, balance, and aerodynamic stability.",
            "Constructed the mechanism using cardboard, wood, hot glue, and 3D-printed components to allow rapid prototyping and iteration.",
            "Integrated a servo-based release mechanism controlled by an Arduino, coordinated with altitude-based logic from the embedded system.",
            "Worked closely with the embedded team to ensure the mechanical design aligned with servo torque limits, actuation timing, and altitude-triggered events.",
            "Accounted for two distinct altitude-triggered actions: capturing a photo at one altitude and releasing the payload at another.",
            "Tested deployment behavior to verify that the payload not only released reliably, but also descended safely and landed within the required radius of the target landing zone.",
            ],

        results: [
            "Successfully captured an aerial image at a designated altitude and deployed the payload at a separate target altitude.",
            "Achieved consistent payload release and safe descent, with landings occurring within the required radius of the landing zone.",
            "Produced a lightweight and reliable mechanical system that integrated cleanly with the drone’s embedded control logic.",
            "Demonstrated effective interdisciplinary collaboration between mechanical design and embedded systems teams.",
            ],

        whatILearned: [
        "How mechanical design choices directly impact embedded control constraints.",
        "How to prototype quickly using mixed materials while maintaining functional reliability.",
        "How to collaborate across disciplines to resolve interface and integration challenges.",
        ],
        problemsEncountered: [
        "Balancing structural rigidity with strict weight limits required multiple design iterations.",
        "Ensuring reliable servo actuation while coordinating multiple altitude-based events added timing and integration complexity.",
        "Small mechanical tolerances significantly affected drop accuracy and landing consistency.",
        "Environmental factors such as wind and descent behavior made it challenging to consistently land within a tight target radius.",
        ],

        futureWork: [
        "Redesign the enclosure using fully 3D-printed or composite materials for improved durability.",
        "Incorporate feedback sensors to confirm successful payload release.",
        "Refine altitude detection logic and add redundancy for increased reliability.",
        ],
    },
    links: {
        video: "https://www.youtube.com/watch?v=QnanBPkoAqs",
    },
    },


{
  slug: "minesweeper-sfml",
  title: "Minesweeper (SFML)",
  subtitle:
    "Fully featured graphical Minesweeper clone built in C++ with SFML, emphasizing object-oriented design, event-driven logic, and real-time UI rendering.",
  tech: [
    "C++",
    "SFML",
    "Object-Oriented Design",
    "Game Development",
    "Event Handling",
  ],
  status: "Featured",
  highlights: [
    "Complete graphical Minesweeper implementation with custom game engine logic",
    "Object-oriented architecture with clean class separation",
    "Real-time mouse interaction and UI controls using SFML",
    "Support for multiple board configurations and debug modes",
    "Accurate win/loss detection with animated UI feedback",
  ],
  media: {
    heroImage: "/projects/minesweeper/hero.png", // put ONE screenshot here
    youtubeId: "uX2wB8WtoII",
  },
  sections: {
    problem:
      "The objective of this project was to build a complete graphical Minesweeper game from scratch while reinforcing object-oriented design principles, event-driven programming, and real-time graphics rendering in C++. Rather than relying on a game engine, the project required implementing all game logic, state management, and UI behavior manually using the SFML library.",

    approach: [
      "Designed a modular class-based architecture with core components such as Tile, GameBoard, Toolbox, and GameState to cleanly separate responsibilities.",
      "Encapsulated tile state (isMine, isRevealed, isFlagged) and behavior within reusable Tile objects.",
      "Used SFML to handle real-time mouse input, left/right click actions, and UI interaction including reset, debug mode, and test board loading.",
      "Implemented dynamic mine placement that guarantees the first click is always safe.",
      "Built recursive reveal logic to cascade empty tile reveals using neighbor checks.",
      "Supported loading predefined .brd board files to enable custom test configurations and levels.",
    ],

    results: [
      "Produced a fully playable Minesweeper clone with smooth graphics and responsive input handling.",
      "Achieved correct game-state tracking for win and loss conditions based on revealed non-mine tiles.",
      "Implemented visual feedback through animated face buttons, mine counters, and flag indicators.",
      "Ensured stable performance through efficient texture management and controlled SFML draw calls.",
    ],

    whatILearned: [
      "How to design and maintain a clean object-oriented architecture for an interactive application.",
      "How event-driven input handling works in real-time graphical systems.",
      "How to manage textures, sprites, and rendering loops efficiently in SFML.",
      "How game logic, UI state, and user interaction must be tightly synchronized for correctness.",
    ],

    problemsEncountered: [
      "Ensuring correct reveal cascades for empty tiles required careful boundary checking and recursion control.",
      "Managing shared game state across UI elements and board logic introduced complexity early in development.",
      "Debugging graphical issues required distinguishing between logic bugs and rendering-layer problems.",
      "Balancing responsiveness with correct event handling required refining the main game loop structure.",
    ],

    futureWork: [
      "Refactor portions of the game engine to support variable board sizes and mine densities at runtime.",
      "Add animations or transitions for tile reveals to improve visual feedback.",
      "Introduce a timer-based scoring system and leaderboard support.",
      "Extend the game with additional UI themes or accessibility features.",
    ],
  },
  links: {
    github: "https://github.com/arionstern/COP3504-P4-Minesweeper", 
    video: "https://youtu.be/uX2wB8WtoII",
  },
},



{
  slug: "tga-image-processor",
  title: "TGA Image Processor",
  subtitle:
    "Low-level C++ image processor that reads/writes .tga files and applies pixel-level blend modes and channel transforms.",
  tech: ["C++", "Binary File I/O", "Image Processing", "Testing"],
  status: "Featured",
  highlights: [
    "Parsed 24-bit uncompressed TGA headers + pixel data using binary I/O",
    "Implemented Multiply, Subtract, Screen, and Overlay blending modes",
    "Added channel ops (add constants, scale channels, swap channels, grayscale)",
    "Built byte-for-byte image comparison utility for automated correctness checks",
    "Designed a repeatable pipeline to run multiple layered operations in sequence",
  ],
  media: {
    heroImage: "/projects/tga-image-processor/hero.png",
    youtubeId: "XHjKLgMSfKs",
  },
  sections: {
    problem:
      "Most image edits people use every day (filters, blends, channel tweaks) are ultimately just math over raw pixel bytes. This project was about implementing that pipeline from scratch: open a binary .tga file, correctly interpret its header + pixels, perform per-pixel transformations, and write a valid output file that matches reference results exactly.",
    approach: [
      "Implemented binary parsing for the TGA header (18 bytes) and stored metadata needed to correctly read/write the image back out in the same format. :contentReference[oaicite:1]{index=1}",
      "Loaded pixel data for 24-bit true-color images and processed it as BGR byte triples (TGA stores color channels in reverse order). :contentReference[oaicite:2]{index=2}",
      "Built a Pixel/struct-based representation and performed blend modes per channel using normalized math and clamping/rounding to stay in the 0–255 range. :contentReference[oaicite:3]{index=3}",
      "Implemented operations including Multiply/Subtract/Screen/Overlay, plus channel edits (add/scale/swap) and grayscale filtering.",
      "Created an image equality checker that compares header + pixel bytes exactly for regression testing (visual similarity is not enough). :contentReference[oaicite:4]{index=4}",
    ],
    results: [
      "Produced correct outputs for multi-step blending pipelines and channel transforms.",
      "Validated correctness via byte-for-byte comparison against known reference images, catching tiny pixel-level differences that are invisible by eye. :contentReference[oaicite:5]{index=5}",
    ],
    whatILearned: [
      "How to do real binary file I/O safely and predictably (reading/writing bytes without “helpful” conversions). :contentReference[oaicite:6]{index=6}",
      "How file formats encode meaning (header offsets, pixel layout, channel ordering) and why a correct writer must preserve header info. :contentReference[oaicite:7]{index=7}",
      "How to structure image operations to avoid duplicated code and support layered pipelines.",
    ],
    problemsEncountered: [
      "Getting channel order right (TGA stores pixels as BGR, not RGB), which breaks colors if you assume RGB. :contentReference[oaicite:8]{index=8}",
      "Preventing overflow/underflow during channel math and handling rounding correctly when converting between float and byte ranges. :contentReference[oaicite:9]{index=9}",
      "Designing tests strict enough to verify exact correctness (1 byte off = different image). :contentReference[oaicite:10]{index=10}",
    ],
    futureWork: [
      "Add support for more TGA variants (different bit depths, optional metadata fields, or compression).",
      "Add CLI flags to run specific tasks or apply custom pipelines to user-provided images.",
      "Add performance profiling and faster pixel loops for large images.",
    ],
  },
  links: {
    video: "https://www.youtube.com/watch?v=XHjKLgMSfKs",
    github: "https://github.com/arionstern/imgprocessor_cop3504"
  },
},




        {
        slug: "arduino-music-circuit",
        title: "Arduino Music Circuit (Tinkercad Simulation)",
        subtitle:
            "Simulated Arduino circuit that plays music through a piezo buzzer using PWM-based tone generation.",
        tech: [
            "Arduino",
            "C/C++",
            "PWM",
            "Tinkercad",
            "Embedded Systems",
        ],
        highlights: [
            "Played a full song (“Brain Stew” by Green Day) using tone-based note sequencing",
            "Used PWM and timing control to generate audio through a piezo buzzer",
            "Designed and debugged the entire circuit virtually in Tinkercad",
            "Demonstrated embedded audio output without physical hardware",
        ],
        media: {
            heroImage: "/projects/arduino-music/main.png", // ← your one image
            youtubeId: "VKegnzyH4a0",
        },
        sections: {
            problem:
            "The goal of this project was to explore how microcontrollers can generate audio output using basic hardware components. Without access to physical parts, the challenge was to design, implement, and debug a functional audio circuit entirely in simulation.",
            approach: [
            "Designed an Arduino-based circuit in Tinkercad using a piezo buzzer for audio output.",
            "Programmed note sequences corresponding to the melody of “Brain Stew” using the Arduino tone() function.",
            "Controlled note duration and rhythm using millisecond delays to maintain musical timing.",
            "Mapped musical notes to their corresponding frequencies to produce recognizable output.",
            "Debugged wiring and timing issues entirely within the simulation environment.",
            ],
            results: [
            "Successfully produced a recognizable song using a simulated Arduino and piezo buzzer.",
            "Demonstrated how PWM-based tone generation can be used for simple audio applications.",
            "Validated circuit logic and timing behavior without requiring physical hardware.",
            ],
            whatILearned: [
            "How Arduino generates sound using PWM and square-wave frequency control.",
            "How timing accuracy affects perceived audio quality in embedded systems.",
            "How to prototype and debug embedded circuits using simulation tools like Tinkercad.",
            ],
        },
        links: {
            video: "https://youtu.be/VKegnzyH4a0",
        },
        },








  {
    slug: "microprocessor-lab-portfolio",
    title: "Microprocessor Lab Portfolio (ATxmega128A1U)",
    subtitle:
      "Register-level embedded systems work covering peripherals, interrupts, and real-time behavior across a full lab series.",
    tech: ["C", "AVR", "ATxmega128A1U", "SPI", "ADC/DAC", "DMA", "Timers"],
    status: "Featured",
    highlights: [
      "SPI peripheral interfacing + external devices",
      "ADC differential mode w/ gain for sensor signals",
      "DMA-driven DAC waveform generation (LUT-based)",
      "Timer/interrupt patterns for deterministic behavior",
    ],
    media: {
      heroImage: "/projects/microprocessor-labs/hero.png",
      gallery: ["/projects/microprocessor-labs/waveform.png"],
      youtubeId: "PASTE_YOUR_YOUTUBE_ID_HERE",
    },
    sections: {
      problem:
        "Many embedded projects fail due to unclear timing assumptions and insufficient understanding of peripherals. I built a lab portfolio focused on register-level control and predictable, real-time behavior.",
      approach: [
        "Configured peripherals directly through registers to understand behavior and tradeoffs.",
        "Integrated external devices over SPI and verified data paths via known IDs / sanity checks.",
        "Used ADC differential mode with gain for sensor measurement and calibration.",
        "Generated DAC waveforms via LUT + DMA to reduce CPU overhead and improve timing stability.",
        "Used timers/interrupts to enforce deterministic scheduling and output timing.",
      ],
      results: [
        "Demonstrated reliable peripheral integration and timing-safe patterns across labs.",
        "Built reusable code patterns for SPI, timers, interrupts, and DMA-driven output.",
      ],
      whatILearned: [
        "How to reason about embedded timing, latency, and CPU overhead in real systems.",
        "Why DMA + timers are key for stable waveform generation and periodic tasks.",
      ],
    },
    links: {
      report: "/labs",
    },
  },
];
