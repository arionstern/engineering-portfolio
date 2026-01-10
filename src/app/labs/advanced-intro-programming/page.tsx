import Link from "next/link";
import Page from "@/components/Page";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs text-zinc-900">
      {children}
    </span>
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold text-zinc-900">{children}</h2>;
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

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-4 text-sm font-semibold text-zinc-900">{children}</h3>;
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

export default function AdvancedIntroProgrammingPage() {
  return (
    <Page
      title="COP3504C — Advanced Programming Fundamentals"
      subtitle="Coursework projects and labs demonstrating fundamentals across Python and C++: OOP, file I/O, debugging, data structures, and performance awareness."
    >
      <div className="not-prose">
        {/* Course overview */}
        <div className="rounded-xl border bg-white p-6">
          <div className="text-lg font-semibold text-zinc-900">Course focus</div>
          <p className="mt-3 text-sm leading-6 text-zinc-900">
            COP3504C emphasized writing correct, maintainable programs in both Python and C++.
            Across projects and labs, I practiced object-oriented design, robust command-line
            interfaces, file and binary I/O, algorithmic thinking, performance measurement,
            and systematic debugging. The capstone-style projects (TGA Processor and Minesweeper)
            are strong enough to stand alone and are featured on my Projects page.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>Python</Badge>
            <Badge>C++</Badge>
            <Badge>OOP</Badge>
            <Badge>CLI Design</Badge>
            <Badge>File I/O</Badge>
            <Badge>Binary Parsing</Badge>
            <Badge>Data Structures</Badge>
            <Badge>Profiling</Badge>
            <Badge>SFML</Badge>
            <Badge>Git</Badge>
          </div>
        </div>

        {/* Projects */}
        <SectionTitle>Projects</SectionTitle>

        <div className="grid gap-4">
          {/* Project 1 */}
          <Card
            title="Project 1 — Run-Length Encoder/Decoder (Python)"
            subtitle="Run-length encoding (RLE) system for pixel-art style images, supporting multiple input formats, precise output formatting, and byte-accurate encode/decode routines."
          >
            <div className="flex flex-wrap gap-2">
              <Badge>Python</Badge>
              <Badge>CLI</Badge>
              <Badge>Parsing</Badge>
              <Badge>Compression</Badge>
              <Badge>Validation</Badge>
              <Badge>Hex</Badge>
            </div>

            {/* Embedded video (adds color) */}
            <YouTubeEmbed id="6S-9yNFeqLU" title="RLE Project Demo" />

            <SubTitle>What it does</SubTitle>
            <ul className="mt-2 list-disc pl-5 leading-6">
              <li>
                Implemented lossless RLE compression for image byte arrays where pixels repeat in long runs
                (common in pixel art / console graphics).
              </li>
              <li>
                Enforced project constraints like “no run longer than 15” (splitting long runs cleanly).
              </li>
              <li>
                Built a standalone menu-driven program that loads data, prints images, and converts between
                flat, RLE, and hex representations (with output matching the spec exactly).
              </li>
            </ul>

            <SubTitle>Formats & conversions (robust parsing)</SubTitle>
            <ul className="mt-2 list-disc pl-5 leading-6">
              <li>
                Supported flat (unencoded) hex input and RLE hex input without delimiters, plus a human-readable
                RLE string format with “:” delimiters.
              </li>
              <li>
                Implemented reliable string ↔ byte conversions so data could round-trip correctly across formats.
              </li>
            </ul>

            <SubTitle>Core algorithms / required routines</SubTitle>
            <ul className="mt-2 list-disc pl-5 leading-6">
              <li>
                Implemented the full encode/decode pipeline (count runs, encode RLE, decoded length, decode RLE),
                plus conversion helpers like hex serialization and human-readable RLE rendering.
              </li>
              <li>
                Verified correctness with cross-tests (encode → decode round trip) and ensured printed output
                matched formatting expectations.
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <ExternalLink href="https://github.com/arionstern/COP3504-P1-RLE">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://youtu.be/6S-9yNFeqLU">Open video</ExternalLink>
            </div>
          </Card>

          {/* Project 2 */}
          <Card
            title="Project 2 — Pakudex (Python)"
            subtitle="Text-based creature registry built with clean OOP: separate Pakuri model + Pakudex manager, menu-driven UI, sorting/search, and carefully validated user input."
          >
            <div className="flex flex-wrap gap-2">
              <Badge>Python</Badge>
              <Badge>OOP</Badge>
              <Badge>CLI Menus</Badge>
              <Badge>Validation</Badge>
              <Badge>Search</Badge>
              <Badge>Sorting</Badge>
            </div>

            {/* Embedded video (adds color) */}
            <YouTubeEmbed id="ER-0loIROkg" title="Pakudex Project Demo" />

            <SubTitle>Architecture (two-module OOP design)</SubTitle>
            <ul className="mt-2 list-disc pl-5 leading-6">
              <li>
                Implemented two files: <code>pakuri.py</code> (Pakuri class) and <code>pakudex.py</code>
                (Pakudex class + driver).
              </li>
              <li>
                Kept class attributes private per spec and designed methods so the driver program handles
                printing while classes focus on logic/state.
              </li>
            </ul>

            <SubTitle>Pakuri model + computed stats</SubTitle>
            <ul className="mt-2 list-disc pl-5 leading-6">
              <li>
                Initialized Pakuri stats from species length using the provided formulas for attack/defense/stamina.
              </li>
              <li>
                Implemented read-only computed properties for combat power (CP) and health points (HP), plus
                a read-write level property.
              </li>
            </ul>

            <SubTitle>Pakudex manager behaviors</SubTitle>
            <ul className="mt-2 list-disc pl-5 leading-6">
              <li>
                Built species list retrieval, stat lookup, lexicographical sorting, add/remove operations, and
                evolution behavior (double level + increment attack) when species exists.
              </li>
              <li>
                Added robustness: duplicate checks, “no such species” failures, and strong input validation
                for level and menu inputs to prevent crashes.
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <ExternalLink href="https://github.com/arionstern/COP3504-P2-Pakudex">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://youtu.be/ER-0loIROkg">Open video</ExternalLink>
            </div>
          </Card>

        {/* Project 3 — TGA Image Processor */}
        <Card
        title="Project 3 — TGA Image Processor (C++)"
        subtitle="Low-level image processor that parses .tga files and applies layered pixel-level transformations with byte-accurate comparison utilities."
        >
        <div className="flex flex-wrap gap-2">
            <Badge>C++</Badge>
            <Badge>Binary I/O</Badge>
            <Badge>Image Ops</Badge>
            <Badge>Testing</Badge>
        </div>

        {/* Embedded video */}
        <YouTubeEmbed id="XHjKLgMSfKs" title="TGA Image Processor Demo" />

        <ul className="mt-3 list-disc pl-5 leading-6">
            <li>Implemented binary parsing of headers + pixel buffers for 24-bit uncompressed RGB TGA files.</li>
            <li>Applied per-pixel operations (Multiply, Subtract, Screen, Overlay) and channel transforms.</li>
            <li>Built byte-for-byte image comparison for regression testing against known outputs.</li>
            <li>Produced structured output files with safe file handling and predictable naming.</li>
        </ul>

        <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <ExternalLink href="https://youtu.be/XHjKLgMSfKs">Open video</ExternalLink>
            <Link href="/projects/tga-image-processor" className="text-blue-600 underline">
            View project →
            </Link>
        </div>
        </Card>

        {/* Project 4 — Minesweeper */}
        <Card
        title="Project 4 — Minesweeper (SFML, C++)"
        subtitle="Complete graphical Minesweeper clone in C++ using SFML with custom OOP architecture, event-driven UI, board loading, and win/loss logic."
        >
        <div className="flex flex-wrap gap-2">
            <Badge>C++</Badge>
            <Badge>SFML</Badge>
            <Badge>OOP</Badge>
            <Badge>Event Handling</Badge>
            <Badge>Game State</Badge>
        </div>

        {/* Embedded video */}
        <YouTubeEmbed id="uX2wB8WtoII" title="Minesweeper SFML Demo" />

        <ul className="mt-3 list-disc pl-5 leading-6">
            <li>Designed modular classes: Tile, GameBoard, Toolbox, and GameState.</li>
            <li>Handled left/right click actions and UI interaction (debug toggle, reset, test boards).</li>
            <li>Implemented reveal cascade, dynamic mine placement behavior, and win/loss tracking.</li>
            <li>Managed sprite sheets, textures, and draw calls for smooth rendering.</li>
        </ul>

        <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <ExternalLink href="https://youtu.be/uX2wB8WtoII">Open video</ExternalLink>
            <Link href="/projects/minesweeper" className="text-blue-600 underline">
            View project →
            </Link>
        </div>
        </Card>

        </div>

        {/* Lab Work Summary */}
        <SectionTitle>Lab Work Summary</SectionTitle>
        <Card
          title="COP3504C Labs (00–10)"
          subtitle="A progression from toolchain setup and structured Python programming into C++ OOP, data structures, Git workflows, profiling, and graphics programming."
        >
          <ul className="list-disc pl-5 leading-6">
            <li><strong>Lab 00:</strong> Toolchain setup (Python, PyCharm, terminal workflow, debugger basics, Git/GitHub readiness)</li>
            <li><strong>Lab 01:</strong> Scientific calculator (menu-driven design, memory variable, type conversion, input validation)</li>
            <li><strong>Lab 02:</strong> Find-Four / Connect Four clone (2D lists, board rendering, win checking, state management)</li>
            <li><strong>Lab 03:</strong> The Cow Says (cowsay clone, inheritance, overriding, file I/O text cows)</li>
            <li><strong>Lab 04:</strong> Time complexity & profiling (linear vs binary search timing, empirical big-O validation)</li>
            <li><strong>Lab 05:</strong> Software engineering & Git collaboration (branches/PRs, merge conflicts, debugging legacy code)</li>
            <li><strong>Lab 06:</strong> Image scaling tool (C++ Image class, scaling factors, memory-safe logic, CLI args + file I/O)</li>
            <li><strong>Lab 07:</strong> The Cow Strikes Back (ported OOP hierarchy to C++ with virtual functions and file input)</li>
            <li><strong>Lab 08:</strong> Return of the Cow (polymorphism with dynamic allocation, arrays of base pointers, virtual dispatch)</li>
            <li><strong>Lab 09:</strong> Linked list implementation (doubly linked list template, iterators, insert/erase, destructor safety)</li>
            <li><strong>Lab 10:</strong> Meme generator (SFML text-over-image pipeline, classes, positioning, output saving)</li>
          </ul>
        </Card>

        <div className="mt-10">
          <Link href="/labs" className="text-blue-600 underline">
            ← Back to Labs & Coursework
          </Link>
        </div>
      </div>
    </Page>
  );
}
