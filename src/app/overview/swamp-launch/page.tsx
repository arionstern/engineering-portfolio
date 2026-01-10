import Image from "next/image";
import Link from "next/link";
import Page from "@/components/Page";




function PCBSection({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: { src: string; label: string }[];
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
      <p className="mt-2 text-sm text-zinc-900 max-w-3xl">{description}</p>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {images.map((img) => (
          <div
            key={img.src}
            className="overflow-hidden rounded-lg border bg-white"
          >
            <div className="relative aspect-[4/3] w-full bg-zinc-50">
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="border-t bg-zinc-50 px-3 py-2 text-xs text-zinc-700">
              {img.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

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

export default function SwampLaunchPage() {
  return (
    <Page
      title="Swamp Launch — Avionics PCB Design & Payload Software"
      subtitle="Propulsion/Avionics PCB subgroup (Altium). Breakout → miniDAQ-style board for flight sensors."
    >
      <div className="not-prose">
        <div className="flex flex-wrap gap-2">
          <Badge>Altium</Badge>
          <Badge>PCB</Badge>
          <Badge>MTi-3 IMU</Badge>
          <Badge>NAU7802</Badge>
          <Badge>Teensy</Badge>
          <Badge>I²C</Badge>
          <Badge>UART</Badge>
          <Badge>Power</Badge>
        </div>

        {/* HERO IMAGE */}
        <div className="mt-6 overflow-hidden rounded-xl border bg-white">
          <div className="relative aspect-[16/9] w-full bg-zinc-50">
            <Image
              src="/swamp-launch/pcb3_3d.png"
              alt="Swamp Launch PCB design progress"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <SectionTitle>What I’m building</SectionTitle>
        <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-zinc-900">
          <li>Schematic capture + footprint selection (SnapEDA) + placement/routing under constraints.</li>
          <li>Sensor integration: MTi-3 IMU and NAU7802 load-cell ADC into Teensy-based avionics flow.</li>
          <li>Support circuits: regulators, connectors, Wheatstone-bridge interfaces, and I²C/UART data paths.</li>
        </ul>



        <SectionTitle>Boards</SectionTitle>

        <PCBSection
        title="Altium Fundamentals — Tutorial Board"
        description="Introductory Altium Designer board built by following guided tutorials. Focused on schematic capture, basic footprint assignment, net connectivity, and understanding the end-to-end PCB workflow from schematic to layout."
        images={[
            { src: "/swamp-launch/sch1.png", label: "Schematic" },
            { src: "/swamp-launch/pcb1_2d.png", label: "PCB Layout (2D)" },
            { src: "/swamp-launch/pcb1_3d.png", label: "PCB Layout (3D)" },
        ]}
        />

        <PCBSection
        title="Altium Practice — Flight Computer Integration"
        description="Independent Altium practice board focused on integrating a Teensy-based flight computer. Emphasized connector placement, signal routing, power distribution, and translating system-level requirements into a coherent PCB layout."
        images={[
            { src: "/swamp-launch/sch2.png", label: "Schematic" },
            { src: "/swamp-launch/pcb2_2d.png", label: "PCB Layout (2D)" },
            { src: "/swamp-launch/pcb2_3d.png", label: "PCB Layout (3D)" },
        ]}
        />

        <PCBSection
        title="Flight Computer Breakout — Avionics PCB"
        description="Actual avionics breakout board intended for flight use. Designed to interface sensors and peripherals with the flight computer, incorporating refined routing, power regulation, and connector placement informed by earlier iterations."
        images={[
            { src: "/swamp-launch/sch3.png", label: "Schematic" },
            { src: "/swamp-launch/pcb3_2d.png", label: "PCB Layout (2D)" },
            { src: "/swamp-launch/pcb3_3d.png", label: "PCB Layout (3D)" },
        ]}
        />







        <SectionTitle>Links</SectionTitle>
        <ul className="mt-3 list-disc pl-5 text-sm text-zinc-900">
          <li>
            <a className="text-blue-600 underline" href="#" target="_blank" rel="noopener noreferrer">
              Repo / docs (add later)
            </a>
          </li>
        </ul>

        <div className="mt-10">
          <Link href="/overview" className="text-blue-600 underline">
            ← Back to Overview
          </Link>
        </div>
      </div>
    </Page>
  );
}
