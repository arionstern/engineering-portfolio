import Page from "@/components/Page";
import Link from "next/link";

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
  return (
    <h2 className="mt-10 text-xl font-semibold text-zinc-900">{children}</h2>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <div className="text-xs font-medium text-zinc-700">{label}</div>
      <div className="mt-2 text-lg font-semibold text-zinc-900">{value}</div>
    </div>
  );
}

function ProjectCard({
  title,
  subtitle,
  bullets,
  href,
  tags,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  href?: string;
  tags?: string[];
}) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-semibold text-zinc-900">{title}</div>
          <div className="mt-1 text-sm text-zinc-700">{subtitle}</div>
        </div>

        {href ? (
          <Link
            href={href}
            className="shrink-0 rounded-lg border bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Details →
          </Link>
        ) : null}
      </div>

      {tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      ) : null}

      <ul className="mt-4 list-disc pl-5 leading-6">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function OverviewPage() {
  return (
    <Page
      title="Overview"
      subtitle="A quick snapshot of what I do best: embedded systems, digital logic, and performance-aware software."
    >
      <div className="not-prose">
        {/* Hero / About */}
        <div className="rounded-xl border bg-white p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="text-lg font-semibold text-zinc-900">
                Hardware–software focused computer engineering
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-900">
                I’m a Computer Engineering student at the University of Florida focused on
                embedded systems, digital logic, and performance-aware software. I like working
                close to the hardware–software boundary—building systems where timing, data flow,
                and reliability are measurable and intentional.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Embedded / Firmware</Badge>
                <Badge>SPI / I²C / UART</Badge>
                <Badge>Timers / Interrupts / PWM</Badge>
                <Badge>ADC / DAC / DMA</Badge>
                <Badge>FPGA / Digital Logic</Badge>
                <Badge>C / C++ / Python</Badge>
                <Badge>Altium PCB</Badge>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-2 md:justify-end">
              <Link
                href="https://github.com/arionstern"
                className="rounded-lg border bg-white px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/arion-stern-169173299/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                LinkedIn
              </Link>
              {/* If you have a resume page or a static PDF route, swap this href */}
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Resume
              </Link>

            </div>
          </div>
        </div>

        {/* Stats row (pulls straight from resume) */}
        <SectionTitle>At a glance</SectionTitle>
        <div className="grid gap-4 md:grid-cols-4">
          <Stat label="University" value="UF (HWCOE)" />
          <Stat label="GPA" value="4.00" />
          <Stat label="Credits" value="69" />
          <Stat label="Expected grad" value="May 2028" />
        </div>

        {/* Quick “strengths / interests / looking for” */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Card title="Strengths" subtitle="Where I add value fastest">
            <ul className="list-disc pl-5 leading-6">
              <li>Register-level embedded work + peripheral integration</li>
              <li>Debugging timing + data flow issues end-to-end</li>
              <li>Clean documentation, repeatable testing, and polish</li>
            </ul>
          </Card>

          <Card title="Interests" subtitle="What I want more of">
            <ul className="list-disc pl-5 leading-6">
              <li>Embedded firmware + real hardware interfaces</li>
              <li>Digital systems / FPGA design workflows</li>
              <li>Robotics + sensing + control pipelines</li>
            </ul>
          </Card>

          <Card title="Looking for" subtitle="Opportunities">
            <ul className="list-disc pl-5 leading-6">
              <li>Embedded/firmware internships</li>
              <li>Hardware–software research roles</li>
              <li>Teams doing bring-up, validation, and system integration</li>
            </ul>
          </Card>
        </div>

        {/* Skills */}
        <SectionTitle>Core technical skills</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Embedded systems">
            <div className="flex flex-wrap gap-2">
              <Badge>ATxmega128A1U</Badge>
              <Badge>Arduino</Badge>
              <Badge>Raspberry Pi Pico</Badge>
              <Badge>SPI</Badge>
              <Badge>I²C</Badge>
              <Badge>UART</Badge>
              <Badge>Timers</Badge>
              <Badge>Interrupts</Badge>
              <Badge>PWM</Badge>
              <Badge>ADC</Badge>
              <Badge>DAC</Badge>
              <Badge>DMA</Badge>
            </div>
            <ul className="mt-4 list-disc pl-5 leading-6">
              <li>Peripheral interfacing + sensor integration</li>
              <li>Interrupt-driven design + timing-safe patterns</li>
              <li>End-to-end debug (scope/logic tools + firmware)</li>
            </ul>
          </Card>

          <Card title="Digital logic / FPGA">
            <div className="flex flex-wrap gap-2">
              <Badge>DE10-Lite</Badge>
              <Badge>VHDL</Badge>
              <Badge>FSMs</Badge>
              <Badge>Datapath/Control</Badge>
              <Badge>Quartus</Badge>
              <Badge>ModelSim</Badge>
              <Badge>Waveforms</Badge>
            </div>
            <ul className="mt-4 list-disc pl-5 leading-6">
              <li>Structured digital design (FSM + datapath/control)</li>
              <li>Simulation + waveform-based verification</li>
              <li>CPU architecture + instruction-set thinking</li>
            </ul>
          </Card>

          <Card title="Programming">
            <div className="flex flex-wrap gap-2">
              <Badge>C</Badge>
              <Badge>C++</Badge>
              <Badge>Python</Badge>
              <Badge>Java</Badge>
              <Badge>AVR Assembly</Badge>
              <Badge>Data Structures</Badge>
            </div>
            <ul className="mt-4 list-disc pl-5 leading-6">
              <li>Modular design, readable code, and iteration speed</li>
              <li>Performance awareness (measure → change → verify)</li>
              <li>Comfortable in both low-level + application contexts</li>
            </ul>
          </Card>

          <Card title="Tools">
            <div className="flex flex-wrap gap-2">
              <Badge>Git/GitHub</Badge>
              <Badge>Linux CLI</Badge>
              <Badge>Microchip Studio</Badge>
              <Badge>WaveForms</Badge>
              <Badge>OpenCV</Badge>
              <Badge>Pygame</Badge>
              <Badge>Altium Designer</Badge>
              <Badge>Quartus</Badge>
              <Badge>ModelSim</Badge>
            </div>
            <ul className="mt-4 list-disc pl-5 leading-6">
              <li>Version control + clean repo structure</li>
              <li>Visualization for insight + debugging</li>
              <li>PCB workflow: schematic → footprints → layout</li>
            </ul>
          </Card>
        </div>

{/* Featured projects */}
<SectionTitle>Featured projects</SectionTitle>
<div className="grid gap-4 md:grid-cols-2">
  <ProjectCard
    title="Elevation Sort Visualizer"
    subtitle="Python • Pygame • NOAA elevation dataset"
    href="/projects/elevation-sort-visualizer"
    tags={["Algorithms", "Visualization", "Metrics", "UX"]}
    bullets={[
      "Animated multiple sorting algorithms on large elevation data.",
      "Added real-time metrics, tooltips, and user controls for exploration.",
      "Built for clarity and performance during interactive visualization.",
    ]}
  />

  <ProjectCard
    title="Embedded Color Detection System"
    subtitle="OpenCV (Python) + Arduino serial pipeline"
    href="/projects/embedded-color-detection"
    tags={["OpenCV", "HSV", "Serial", "Arduino", "UI"]}
    bullets={[
      "Built a real-time color detection pipeline (HSV + mask-based tracking).",
      "Streamed detection output to Arduino over serial for live LED/LCD feedback.",
      "Designed for stability under changing lighting conditions.",
    ]}
  />

  <ProjectCard
    title="Microprocessor Applications"
    subtitle="ATxmega128A1U • C + AVR Assembly labs"
    href="/labs/microprocessor-applications"
    tags={["Interrupts", "PWM", "SPI", "ADC", "DAC", "DMA"]}
    bullets={[
      "Interrupt/timer-driven firmware patterns and peripheral bring-up.",
      "Sensor and serial interfacing (SPI/USART) with repeatable debug workflows.",
      "Waveform generation and data movement concepts (DAC + DMA).",
    ]}
  />

  <ProjectCard
    title="Digital Logic Labs"
    subtitle="Structured digital design + verification workflow"
    href="/labs/digital-logic-labs"
    tags={["FSMs", "Datapath/Control", "Simulation", "Waveforms"]}
    bullets={[
      "Built and tested finite state machines and core digital components.",
      "Focused on correctness, timing reasoning, and waveform-based debugging.",
      "Documented lab outcomes with clean diagrams and repeatable results.",
    ]}
  />
</div>


        {/* Engineering Teams */}
        <SectionTitle>Engineering teams</SectionTitle>
        <div className="grid gap-4">
          <Card
            title="Swamp Launch (IREC Team) — Avionics PCB Design & Payload Software"
            subtitle="University of Florida | 2025 – Present"
          >
            <div className="flex flex-wrap gap-2">
              <Badge>Altium</Badge>
              <Badge>PCB</Badge>
              <Badge>IMU</Badge>
              <Badge>Load Cell ADC</Badge>
              <Badge>Teensy</Badge>
              <Badge>I²C</Badge>
              <Badge>UART</Badge>
              <Badge>Power / Regulators</Badge>
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border bg-zinc-50">
              <div className="relative aspect-[16/9] w-full">
                <img
                  src="/swamp-launch/pcb3_3d.png"
                  alt="Swamp Launch PCB design preview"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <ul className="mt-4 list-disc pl-5 leading-6">
              <li>
                Designing avionics breakout/DAQ-style hardware in Altium (schematic, footprints, placement, routing).
              </li>
              <li>
                Supporting sensor integration and data acquisition pipelines (IMU + load cell ADC) with serial protocols.
              </li>
              <li>
                Contributing to power + connectivity decisions (regulators, connectors, and interface considerations).
              </li>
            </ul>

            <div className="mt-4">
              <Link href="/overview/swamp-launch" className="text-blue-600 underline">
                View details →
              </Link>
            </div>
          </Card>
        </div>

        {/* Leadership & goals
        <SectionTitle>Leadership & goals</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="How I lead" subtitle="What I try to be known for">
            <ul className="list-disc pl-5 leading-6">
              <li>Ownership + follow-through</li>
              <li>Clear documentation and communication</li>
              <li>Debugging systematically (measure → isolate → fix)</li>
            </ul>
          </Card>

          <Card title="Career direction" subtitle="What I’m targeting">
            <ul className="list-disc pl-5 leading-6">
              <li>Short-term: deepen embedded + digital fundamentals</li>
              <li>Mid-term: contribute to team-based hardware/software builds</li>
              <li>Long-term: design reliable systems and grow into technical leadership</li>
            </ul>
          </Card>
        </div> */}

        {/* Experience (replace placeholders with real roles) */}
        <SectionTitle>Experience</SectionTitle>
        <div className="rounded-xl border bg-white p-5">
          <div className="mt-1 text-sm text-zinc-700">
            Selected professional experience (plus engineering teams/projects above).
          </div>

          <div className="mt-4 grid gap-4">
            <div className="rounded-lg border bg-zinc-50 p-4">
              <div className="text-sm font-semibold text-zinc-900">
                Lifeguard Instructor — Flagship First{" "}
                <span className="font-normal text-zinc-700">(Summer 2023)</span>
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-zinc-900">
                <li>Taught rescue techniques and CPR; supervised training simulations.</li>
                <li>Led instruction with safety-first execution and clear communication.</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-zinc-50 p-4">
              <div className="text-sm font-semibold text-zinc-900">
                Camp Counselor — Park Ridge Recreation{" "}
                <span className="font-normal text-zinc-700">(Summer 2022)</span>
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-zinc-900">
                <li>Supervised and organized daily activities for children; ensured safety and engagement.</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-zinc-50 p-4">
              <div className="text-sm font-semibold text-zinc-900">
                Video Auditor — Mr. Jeff LLC{" "}
                <span className="font-normal text-zinc-700">(2020–2021)</span>
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-zinc-900">
                <li>Conducted loss prevention audits and reported findings in organized spreadsheets.</li>
                <li>Practiced detail-oriented review and consistent reporting workflows.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Volunteering */}
        <SectionTitle>Volunteering</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Project Paterson" subtitle="Toy drive / community service">
            Seasonal volunteering supporting community giving initiatives.
          </Card>
          <Card title="Tri-Boro Food Pantry" subtitle="Volunteer support">
            Sorting/packing/distribution support.
          </Card>
          <Card title="Montvale Baseball Clinic" subtitle="Volunteer coaching/assistance">
            Assisted with youth baseball instruction and events.
          </Card>
          <Card title="Talbot Elementary STEM Outreach" subtitle="STEM support / outreach">
            Helped support STEM learning activities and student engagement.
          </Card>
        </div>

        {/* Honors (quick credibility section) */}
        <SectionTitle>Honors</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="UF Scholarships & Recognition"
            subtitle="Academic standing"
          >
            <ul className="list-disc pl-5 leading-6">
              <li>University of Florida Distinguished Scholar Waiver</li>
              <li>Dean’s List (Fall 2024, Spring 2025)</li>
            </ul>
          </Card>

          <Card
            title="Career interests"
            subtitle="Where I’m aiming"
          >
            <div className="flex flex-wrap gap-2">
              <Badge>Embedded Systems</Badge>
              <Badge>FPGA / Chip Design</Badge>
              <Badge>Robotics</Badge>
              <Badge>VLSI</Badge>
              <Badge>IoT</Badge>
              <Badge>Digital Verification</Badge>
              <Badge>Machine Learning</Badge>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  );
}
