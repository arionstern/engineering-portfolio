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
  return (
    <h2 className="mt-10 text-xl font-semibold text-zinc-900">{children}</h2>
  );
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
      {subtitle ? (
        <div className="mt-1 text-sm text-zinc-700">{subtitle}</div>
      ) : null}
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

function youtubeIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.split("/").filter(Boolean)[0] || null;
    }
    if (u.pathname === "/watch") return u.searchParams.get("v");
    if (u.pathname.startsWith("/shorts/"))
      return u.pathname.replace("/shorts/", "").split("/")[0] || null;
    if (u.pathname.startsWith("/embed/"))
      return u.pathname.replace("/embed/", "").split("/")[0] || null;
    return null;
  } catch {
    return null;
  }
}

type Lab = {
  num: number;
  title: string;
  bullets: string[];
  videoUrls?: string[];
  videoLabels?: string[];
  repoHref: string;
  extraNote?: string;
};

export default function DigitalDesignPage() {
  const playlistUrl =
    "https://www.youtube.com/playlist?list=PLBkCR1HvIZEinFG499TMpVZYse8P9VpHZ";

  const labs: Lab[] = [
    {
      num: 1,
      title: "Combinational Components in VHDL",
      repoHref: "https://github.com/EEL4712C/lab-1-arionstern",
      videoUrls: ["https://youtube.com/shorts/wbmrlbsYRxA?feature=share"],
      videoLabels: ["Lab 1 demo"],
      bullets: [
        "Built an 8-bit ripple-carry adder bottom-up in structural VHDL: full adder → 4-bit → 8-bit, each level verified with QuestaSim functional simulation.",
        "Designed a 4×1 inverting multiplexer with active-low enable and active-low output.",
        "Implemented a 7-segment decoder for active-low DE10-Lite displays and verified all 16 digit patterns.",
        "Integrated the adder and decoder into a synthesizable top-level, validated with RTL Viewer, and programmed onto the DE10-Lite.",
      ],
    },
    {
      num: 2,
      title: "Behavioral VHDL — Generic-Width ALU",
      repoHref: "https://github.com/EEL4712C/lab-2-arionstern",
      videoUrls: ["https://youtu.be/G-nKG_GVHME"],
      videoLabels: ["Lab 2 demo"],
      bullets: [
        "Implemented an unsigned 8-bit adder using the numeric_std package, handling carry-in and carry-out cleanly.",
        "Designed a fully generic-width behavioral ALU supporting 16 operations: bitwise NOT/AND/OR/NOR/XOR, add, subtract, multiply (lower half), logical shifts, bit reversal, nibble swap, and reserved no-ops.",
        "Overflow detection for addition (result > max) and multiplication (product > max output width).",
        "Connected the ALU to the 7-seg decoder top-level and synthesized onto the DE10-Lite with switch/button I/O.",
      ],
    },
    {
      num: 3,
      title: "Sequential Logic — Counters",
      repoHref: "https://github.com/EEL4712C/lab-3-arionstern",
      videoUrls: ["https://youtu.be/V4u32O7kyw8"],
      videoLabels: ["Lab 3 demo"],
      bullets: [
        "Implemented a 4-bit synchronous up/down counter with asynchronous reset and synchronous parallel load.",
        "Designed a 4-bit Gray code counter as an explicit 16-state 2-process FSM, with combinational output logic in a separate process.",
        "Built a reusable generic clock divider (clk_div) and a millisecond-accurate clock generator (clk_gen) that produces a single pulse after a configurable button-hold duration; verified timing with a provided assertion-based testbench.",
        "Synthesized both counters onto the DE10-Lite with the clock generator driving real-time visible output.",
      ],
    },
    {
      num: 4,
      title: "FSMD and FSM+D — GCD Calculator",
      repoHref: "https://github.com/EEL4712C/lab-4-arionstern",
      videoUrls: ["https://youtube.com/shorts/FC5SDm4ZPlE?feature=share"],
      videoLabels: ["Lab 4 demo"],
      bullets: [
        "Implemented GCD using two distinct hardware architectures: FSM_D1 (full datapath with two subtractors and comparators) and FSM_D2 (optimized single-subtractor datapath).",
        "Each design uses a structural VHDL datapath (register, 2×1 MUX, subtractor, comparator components with generics) paired with a 2-process FSM controller.",
        "Drew and validated the FSM_D2 datapath diagram before implementing, comparing resource usage between designs.",
        "Top-level maps 5-bit switch inputs, button go/reset, dual 7-seg output, and done indicator — all synthesized and tested on the DE10-Lite.",
      ],
    },
    {
      num: 5,
      title: "VGA Display Interface",
      repoHref: "https://github.com/EEL4712C/lab-5-arionstern",
      videoUrls: [
        "https://youtube.com/shorts/41aoJswbPo8?feature=share",
        "https://youtube.com/shorts/cqxcOjMdObc?feature=share",
        "https://youtube.com/shorts/Xs6RjJ0G2Jc?feature=share",
      ],
      videoLabels: [
        "VGA sync + color raster",
        "Image position controls",
        "Animated bouncing image (extra credit)",
      ],
      extraNote:
        "Note: the display boundary appears slightly offset on some monitors due to a known timing mismatch between the DE10-Lite's 50 MHz oscillator and the exact pixel clock required by the VGA protocol. This is a hardware-level constraint — recognizing and documenting it is part of real FPGA bring-up work.",
      bullets: [
        "Built a 25 MHz pixel clock divider, then a full VGA sync generator producing correctly timed HORIZ_SYNC and VERT_SYNC pulses for 640×480 @ 60 Hz.",
        "Used Quartus IP Catalog to instantiate a 4096×12 ROM (BROM) initialized from a .MIF file, driving a 64×64 block-color raster image rendered as 2×2 pixel blocks.",
        "Implemented row/column address generators with enable logic to constrain the image within the active display area, with 5-position placement control (center, 4 corners) via buttons.",
        "Extra credit: animated the image to bounce around all four screen edges with correct wall-collision direction reversal, running entirely in hardware logic.",
      ],
    },
    {
      num: 6,
      title: "SystemVerilog for Functional Design",
      repoHref: "https://github.com/EEL4712C/lab-6-arionstern",
      // videoUrls: ["https://youtu.be/YOUR_VIDEO_ID"],
      // videoLabels: ["Lab 6 demo"],
      bullets: [
        "Rebuilt Lab 1's ripple-carry adder and Lab 4's GCD calculator entirely in SystemVerilog using always_comb / always_ff blocks.",
        "Implemented an 8-input priority encoder using always_comb with correct highest-bit-wins behavior.",
        "Reconstructed the GCD FSMD with structural datapath.sv (sub-modules: register, 2×1 MUX, subtractor, comparator) and a 2-process controller.sv.",
        "Ran all designs through provided QuestaSim testbenches, comparing SV and VHDL idioms side-by-side.",
      ],
    },
    {
      num: 7,
      title: "Constrained Random Verification (CRV)",
      repoHref: "https://github.com/EEL4712C/lab-7-arionstern",
      // videoUrls: ["https://youtu.be/YOUR_VIDEO_ID"],
      // videoLabels: ["Lab 7 demo"],
      bullets: [
        "Designed an ISA-Function Module in SV: 4-opcode ALU (add/subtract/multiply/GCD) with a memory-backed instruction fetch and a 2-process FSM controller.",
        "Applied complete randomization to opcode, a, and b inputs and analyzed covergroup results in QuestaSim.",
        "Added CRV constraints: valid-opcode limiting, operand ranges per operation (e.g., a > b for SUB, even/odd for MUL), and weighted opcode distribution (add/sub 70, mul 15, gcd 5).",
        "Used illegal_bins, inside, dist, and if-else constraint blocks; studied coverage reports to verify constraint effectiveness.",
      ],
    },
    {
      num: 8,
      title: "SystemVerilog Assertions (SVA)",
      repoHref: "https://github.com/EEL4712C/lab-8-arionstern",
      // videoUrls: ["https://youtu.be/YOUR_VIDEO_ID"],
      // videoLabels: ["Lab 8 demo"],
      bullets: [
        "Wrote concurrent and immediate assertions to find the correct design among two implementations each for: one-hot detector, clocked register, pipelined adder tree, and single-port FIFO.",
        "Used |-> implication, $stable(), $past(), and disable iff(rst) to write precise temporal properties.",
        "Verified FIFO read-data correctness against a reference model queue, checking empty/full flags and rd_data values cycle-accurately.",
        "Wrote cover properties to expose untested counter behaviors, then modified the testbench to trigger them — comparing coverage reports before and after the fix.",
      ],
    },
  ];

  return (
    <Page
      title="EEL4712C — Digital Design"
      subtitle="Eight-lab VHDL/SystemVerilog course on the DE10-Lite covering combinational components, behavioral ALU, sequential logic, FSMD, VGA display, SV verification, CRV, and SVA — plus a full Pong extra credit project."
    >
      <div className="not-prose">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge>VHDL</Badge>
          <Badge>SystemVerilog</Badge>
          <Badge>DE10-Lite</Badge>
          <Badge>Quartus Prime</Badge>
          <Badge>QuestaSim</Badge>
          <Badge>FSM / FSMD</Badge>
          <Badge>ALU</Badge>
          <Badge>VGA</Badge>
          <Badge>CRV</Badge>
          <Badge>SVA</Badge>
        </div>

        {/* Playlist */}
        <SectionTitle>Lab video demonstrations</SectionTitle>
        <p className="mt-2 text-sm text-zinc-900 max-w-3xl">
          Full playlist below, with individual lab videos embedded in each section.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border bg-white">
          <div className="relative aspect-[16/9] w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/videoseries?list=PLBkCR1HvIZEinFG499TMpVZYse8P9VpHZ"
              title="EEL4712C Lab Video Demonstrations"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Labs */}
        <SectionTitle>Labs</SectionTitle>

        <div className="mt-4 grid gap-4">
          {labs.map((lab) => (
            <Card
              key={lab.num}
              title={`Lab ${lab.num}: ${lab.title}`}
              subtitle="Design → simulate → synthesize → validate on hardware"
            >
              {/* Videos */}
              {lab.videoUrls?.map((url, idx) => {
                const vidId = youtubeIdFromUrl(url);
                return vidId ? (
                  <div key={url}>
                    {lab.videoLabels?.[idx] ? (
                      <p className="mt-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">
                        {lab.videoLabels[idx]}
                      </p>
                    ) : null}
                    <YouTubeEmbed
                      id={vidId}
                      title={lab.videoLabels?.[idx] ?? `Lab ${lab.num} demo`}
                    />
                  </div>
                ) : null;
              })}

              {/* Extra note */}
              {lab.extraNote ? (
                <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-zinc-700 leading-5">
                  {lab.extraNote}
                </div>
              ) : null}

              <ul className="mt-4 list-disc pl-5 leading-6">
                {lab.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                <ExternalLink href={lab.repoHref}>GitHub</ExternalLink>
                {lab.videoUrls?.map((url, idx) => (
                  <ExternalLink key={url} href={url}>
                    {lab.videoLabels?.[idx] ? `Video: ${lab.videoLabels[idx]}` : "Open video"}
                  </ExternalLink>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Pong callout */}
        <SectionTitle>Extra Credit: Pong</SectionTitle>
        <div className="mt-4 rounded-xl border bg-white p-5 text-sm text-zinc-900">
          <p className="leading-6">
            Alongside the labs, I built a fully functional 2-player VGA Pong game in VHDL/SystemVerilog as extra credit — start screen, scoreboard, game-over screen, ball physics, paddle controls, and 10-point win condition, all running as pure hardware logic on the DE10-Lite.
          </p>
          <div className="mt-4">
            <Link href="/projects/pong" className="text-blue-600 underline">
              View full Pong project page →
            </Link>
          </div>
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