import Image from "next/image";
import Link from "next/link";
import Page from "@/components/Page";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs text-zinc-900">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold text-zinc-900">{children}</h2>;
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <div className="text-base font-semibold text-zinc-900">{title}</div>
      {subtitle ? <div className="mt-1 text-sm text-zinc-700">{subtitle}</div> : null}
      <div className="mt-4 text-sm text-zinc-900">{children}</div>
    </div>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      {children}
    </a>
  );
}

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border bg-white">
      <div className="relative aspect-[16/9] w-full">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

/**
 * Accepts:
 * - https://youtu.be/VIDEOID
 * - https://www.youtube.com/watch?v=VIDEOID
 * - https://youtube.com/shorts/VIDEOID
 */
function youtubeIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id || null;
    }

    if (u.pathname === "/watch") {
      return u.searchParams.get("v");
    }

    if (u.pathname.startsWith("/shorts/")) {
      const id = u.pathname.replace("/shorts/", "").split("/")[0];
      return id || null;
    }

    if (u.pathname.startsWith("/embed/")) {
      const id = u.pathname.replace("/embed/", "").split("/")[0];
      return id || null;
    }

    return null;
  } catch {
    return null;
  }
}

function playlistIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url);
    return u.searchParams.get("list");
  } catch {
    return null;
  }
}

type Lab = {
  num: number; // Lab number (1..7)
  title: string;
  bullets: string[];
  videoUrl: string;
  reportHref: string; // /reports/digital-logic/lab1.pdf etc.
};

export default function DigitalLogicLabsPage() {
  const playlistUrl =
    "https://www.youtube.com/playlist?list=PLBkCR1HvIZEg9K8IBQLC1LytZoMApiAB6";

  const labs: Lab[] = [
    {
      num: 1,
      title: "Mixed Logic Design",
      videoUrl: "https://youtube.com/shorts/4ubBHyGPA30?feature=share",
      reportHref: "/reports/digital-logic/lab1.pdf",
      bullets: [
        "Designed and tested logic functions using SOP and POS forms.",
        "Used truth tables and Karnaugh maps for simplification.",
        "Created corresponding logic circuits using NAND, NOR, AND, and OR gates in Quartus.",
        "Replicated designs physically on a breadboard using 74HC-series logic chips and validated with DE10-Lite switches/LEDs.",
      ],
    },
    {
      num: 2,
      title: "MSI Components",
      videoUrl: "https://youtube.com/shorts/uZ0hll6C0uU?feature=share",
      reportHref: "/reports/digital-logic/lab2.pdf",
      bullets: [
        "Built and tested MUXes, decoders, and 7-segment display logic.",
        "Implemented a decoder to control a 7-segment display from 4-bit binary input.",
        "Designed a 4:1 multiplexer using logic gates and tested selection lines.",
        "Integrated MUX + decoder logic into a complete Quartus project with real-time DE10-Lite I/O.",
      ],
    },
    {
      num: 3,
      title: "Counters and Debouncing",
      videoUrl: "https://youtube.com/shorts/HnjdN_3GoTQ?feature=share",
      reportHref: "/reports/digital-logic/lab3.pdf",
      bullets: [
        "Designed a 3-bit up/down counter using D, T, and JK flip-flops.",
        "Built an SPDT mechanical switch input circuit with debouncing using NAND and NOR gates.",
        "Used an oscilloscope to observe contact bounce and validated clean transitions after debounce logic.",
        "Implemented a 3-state controller (pause, forward, backward) using FSM logic to cycle counter states via button inputs.",
      ],
    },
    {
      num: 4,
      title: "ALU and RALU Design",
      videoUrl: "https://youtube.com/shorts/aZj2Mr-ewOI?feature=share",
      reportHref: "/reports/digital-logic/lab4.pdf",
      bullets: [
        "Constructed a 4-bit combinational ALU for arithmetic (ADD, SUB), logic (AND, OR), and shift operations.",
        "Used 74283 adders, 74157 multiplexers, and control logic for operation selection.",
        "Expanded into a Registered ALU (RALU) by integrating D flip-flops to store operands and outputs.",
        "Created a 7-bit control word to sequence ALU instructions and executed multi-step arithmetic with outputs on 7-seg displays/LEDs.",
      ],
    },
    {
      num: 5,
      title: "Traffic Light FSM Controller",
      videoUrl: "https://youtube.com/shorts/bULFNyVQFBY?feature=share",
      reportHref: "/reports/digital-logic/lab5.pdf",
      bullets: [
        "Created an 11-state Moore FSM to control a 2-way traffic light with walk and emergency signals.",
        "Designed an ASM chart with correct output timing and transitions based on buttons and emergency overrides.",
        "Synthesized the design in Quartus, implemented on the DE10-Lite, and verified sequences under timing and emergency conditions.",
        "Used signal/state visualization and decoding for debugging and validation.",
      ],
    },
    {
      num: 6,
      title: "Elementary CPU Design",
      videoUrl: "https://youtube.com/shorts/TeFolGsbdYU?feature=share",
      reportHref: "/reports/digital-logic/lab6.pdf",
      bullets: [
        "Designed a simple CPU with instruction register, ROM-based control unit, and datapath (registers, ALU, program counter).",
        "Developed a custom ISA supporting 8 instructions (e.g., LDAA, TAB, SAL, JMP).",
        "Encoded programs into a MIF file and tested execution of multi-cycle instruction sequences.",
        "Monitored register/memory transitions with LEDs and simulation to understand fetch–decode–execute sequencing and microprogrammed control.",
      ],
    },
    {
      num: 7,
      title: "G-CPU Programming & Debugging",
      videoUrl: "https://youtube.com/shorts/Wb5eRAEknrk?feature=share",
      reportHref: "/reports/digital-logic/lab7.pdf",
      bullets: [
        "Wrote and hand-assembled G-CPU programs for conditional memory comparisons and control flow.",
        "Applied direct/indirect addressing, conditional branches (BNE), and register↔memory data movement.",
        "Loaded instructions via MIF and debugged using waveform simulations and DE10-Lite behavior.",
        "Used G-IDE to step through execution and interpret flags, reinforcing SRAM interfacing, instruction cycles, memory-mapped I/O, and branching.",
      ],
    },
  ];

  const playlistId = playlistIdFromUrl(playlistUrl);

  return (
    <Page
      title="EEL3701C — Digital Logic & Computer Systems"
      subtitle="FPGA-based labs on the DE10-Lite: logic design, MSI components, counters + debouncing, ALU/RALU, FSMs, and a simple CPU + G-CPU programming."
    >
      <div className="not-prose">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge>DE10-Lite</Badge>
          <Badge>Quartus Prime</Badge>
          <Badge>ModelSim</Badge>
          <Badge>FSM</Badge>
          <Badge>MSI</Badge>
          <Badge>Counters</Badge>
          <Badge>Debouncing</Badge>
          <Badge>ALU/RALU</Badge>
          <Badge>CPU Design</Badge>
          <Badge>MIF</Badge>
        </div>

        {/* Optional hero image */}
        <div className="mt-6 overflow-hidden rounded-xl border bg-white">
        <div className="relative aspect-[16/9] w-full bg-zinc-50">
            <Image
            src="/digital-logic/hero.jpg"
            alt="Digital Logic labs preview"
            fill
            className="object-cover"
            priority
            />
        </div>
        </div>


        {/* Playlist */}
        <SectionTitle>Lab video demonstrations</SectionTitle>
        <p className="mt-2 text-sm text-zinc-900 max-w-3xl">
          Full playlist, plus an embedded demo for each lab below.
        </p>

        {playlistId ? (
          <div className="mt-4 overflow-hidden rounded-xl border bg-white">
            <div className="relative aspect-[16/9] w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                title="EEL3701C Lab Video Demonstrations"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border bg-white p-4 text-sm text-zinc-900">
            Playlist embed unavailable (missing <code>list=</code>). Link:{" "}
            <ExternalLink href={playlistUrl}>Open playlist</ExternalLink>
          </div>
        )}

        {/* Labs */}
        <SectionTitle>Labs</SectionTitle>

        <div className="mt-4 grid gap-4">
          {labs.map((lab) => {
            const vidId = youtubeIdFromUrl(lab.videoUrl);

            return (
              <Card
                key={lab.num}
                title={`Lab ${lab.num}: ${lab.title}`}
                subtitle="Design → simulate → synthesize → validate on hardware"
              >
                {vidId ? (
                  <YouTubeEmbed id={vidId} title={`Lab ${lab.num} demo`} />
                ) : null}

                <ul className="mt-4 list-disc pl-5 leading-6">
                  {lab.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  <ExternalLink href={lab.reportHref}>Lab report (PDF)</ExternalLink>
                  <ExternalLink href={lab.videoUrl}>Open video</ExternalLink>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Reports note */}
        <SectionTitle>Report files</SectionTitle>
        <div className="rounded-xl border bg-white p-5 text-sm text-zinc-900">
          <p className="leading-6">
            Put your reports here so the links work:
          </p>
          <p className="mt-2 rounded-lg border bg-zinc-50 px-3 py-2 font-mono text-xs text-zinc-800">
            public/reports/digital-logic/lab1.pdf … lab7.pdf
          </p>
          <p className="mt-3 leading-6 text-zinc-700">
            If your filenames differ (capitalization, underscores, etc.), update the <code>reportHref</code> values in this file.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/labs" className="text-blue-600 underline">
            ← Back to Labs & Coursework
          </Link>
        </div>
      </div>
    </Page>
  );
}
