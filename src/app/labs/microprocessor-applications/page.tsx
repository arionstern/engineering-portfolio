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

function YouTubePlaylistEmbed({ listId, title }: { listId: string; title: string }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border bg-white">
      <div className="relative aspect-[16/9] w-full">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/videoseries?list=${listId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function LinksRow({
  reportHref,
  videoHref,
  extraVideoHref,
}: {
  reportHref?: string;
  videoHref?: string;
  extraVideoHref?: string;
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
      {reportHref ? <ExternalLink href={reportHref}>Lab report (PDF)</ExternalLink> : null}
      {videoHref ? <ExternalLink href={videoHref}>Open video</ExternalLink> : null}
      {extraVideoHref ? <ExternalLink href={extraVideoHref}>Open extra video</ExternalLink> : null}
    </div>
  );
}

export default function MicroprocessorApplicationsPage() {
  // Playlist + videos (your IDs)
  const playlistId = "PLBkCR1HvIZEgawSFEAFv748MNkq3RFX1q";

  return (
    <Page
      title="EEL4744C — Microprocessor Applications (ATxmega128A1U)"
      subtitle="Low-level embedded systems programming: AVR assembly + C, interrupts, timers, USART/SPI/ADC/DAC, DMA, and real hardware debugging on the uPAD platform."
    >
      <div className="not-prose">
        {/* Course overview */}
        <div className="rounded-xl border bg-white p-6">
          <div className="text-lg font-semibold text-zinc-900">Course overview</div>
          <p className="mt-3 text-sm leading-6 text-zinc-900">
            This course focuses on low-level embedded systems programming using the ATxmega128A1U (XMEGA AU family).
            Through hands-on labs, I developed skills in AVR assembly, C for embedded systems, microcontroller architecture,
            memory mapping, addressing modes, interrupt programming, timers/counters, USART/SPI/ADC/DAC, DMA, and real-time
            hardware debugging using Atmel Studio, the uPAD hardware platform, and the Digilent Analog Discovery (DAD).
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>ATxmega128A1U</Badge>
            <Badge>AVR Assembly</Badge>
            <Badge>Embedded C</Badge>
            <Badge>Interrupts</Badge>
            <Badge>Timers/Counters</Badge>
            <Badge>USART</Badge>
            <Badge>SPI</Badge>
            <Badge>ADC</Badge>
            <Badge>DAC</Badge>
            <Badge>DMA</Badge>
            <Badge>Atmel Studio</Badge>
            <Badge>Analog Discovery</Badge>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-zinc-50 p-4">
              <div className="text-sm font-semibold text-zinc-900">Video playlist</div>
              <p className="mt-2 text-sm leading-6 text-zinc-900">
                I like embedding the playlist at the top for quick browsing, and then embedding the best 1–2 videos per lab
                inside each lab section (so recruiters can skim the page and still see motion + hardware proof).
              </p>
              <div className="mt-3 text-sm">
                <ExternalLink href={`https://www.youtube.com/playlist?list=${playlistId}`}>
                  Open playlist
                </ExternalLink>
              </div>
            </div>

            <div className="rounded-xl border bg-zinc-50 p-4">
              <div className="text-sm font-semibold text-zinc-900">Lab reports</div>
              <p className="mt-2 text-sm leading-6 text-zinc-900">
                For each lab below, the “Lab report (PDF)” link assumes you’ll drop PDFs into something like
                <code className="px-1">/public/reports/eel4744c/</code> and then link them here (example:
                <code className="px-1">/reports/eel4744c/lab2.pdf</code>).
              </p>
            </div>
          </div>

          <YouTubePlaylistEmbed listId={playlistId} title="EEL4744C playlist" />
        </div>

        {/* Labs */}
        <SectionTitle>Labs</SectionTitle>

        <div className="grid gap-4">
          <Card
            title="Lab 1 — Introduction to AVR Assembly & XMEGA Architecture"
            subtitle="AVR assembly foundations: memory architecture, pointers (Z/Y), flash reads (LPM/ELPM + RAMPZ), SRAM writes, and simulator-based debugging."
          >
            <p className="text-sm leading-6">
              This lab introduced low-level embedded programming on the ATxmega128A1U using AVR assembly and Atmel Studio’s
              simulator/emulator, focusing on understanding the XMEGA memory architecture, assembler directives, and indirect
              addressing. I learned how to work with word-aligned program memory and byte-aligned SRAM, read flash using LPM/ELPM
              with the Z-pointer and RAMPZ, store data in SRAM using the Y-pointer, and use core instructions such as LD/LDD, ST/STD,
              IN/OUT, bit-tests, comparisons, and branches. I also used debugging tools like the Watch and Memory windows to verify
              execution. The final program iterated through an input table in program memory, applied filtering logic based on bit-7 and
              numeric thresholds, and wrote valid results into an output table in SRAM, producing the correct ASCII message “Nattychomp.”
            </p>

            <LinksRow
              reportHref="/reports/microp/lab1.pdf"
              // Add a Lab 1 video later if you want
            />
          </Card>

          <Card
            title="Lab 2 — I/O & Timing"
            subtitle="GPIO + memory-mapped I/O, software delays vs hardware timers (TCC0), scope verification, and an LED animation recorder/player using SRAM."
          >
            <p className="text-sm leading-6">
              This lab focused on learning how to interface the ATxmega128A1U with external hardware through memory-mapped I/O and how
              to implement timing using both software delays and hardware timer/counter modules. I configured GPIO ports to read DIP switches
              and drive the active-low LEDs on the OOTB Switch & LED Backpack, created precise timing loops using nested software delays, and
              verified their accuracy with the Analog Discovery oscilloscope. I then used Timer/Counter TCC0 to generate periodic toggles,
              tuning PER values experimentally to achieve accurate 55 ms timing with different prescalers and implementing a simple minute-tracking
              “watch” using overflow events. The lab concluded with a full LED animation creator that recorded frames from DIP switches in EDIT mode,
              stored them in SRAM, and played them back at 5 Hz in PLAY mode using a hardware timer.
            </p>

            <YouTubeEmbed id="XGyUD4n1tTk" title="Lab 2 demo" />
            <LinksRow
              reportHref="/reports/microp/lab2.pdf"
              videoHref="https://youtube.com/shorts/XGyUD4n1tTk?feature=share"
            />
          </Card>

          <Card
            title="Lab 3 — Interrupts"
            subtitle="PMIC + ISR design, timer overflow interrupts, port interrupts, asynchronous behavior, and timer-based switch debouncing."
          >
            <p className="text-sm leading-6">
              This lab introduced interrupt-driven programming on the ATxmega128A1U, including how the PMIC manages interrupt levels,
              how hardware flags trigger service routines, and how to configure both timer/counter and I/O port interrupts. I implemented
              a TCC0 overflow interrupt and verified timing via probing PC0 with the DAD. I then configured a falling-edge interrupt on S1
              to increment a counter and display it on the active-low LEDs while the main loop independently toggled the Blue PWM LED,
              demonstrating true asynchronous behavior. The final portion implemented robust switch debouncing using a timer-driven technique:
              disable PF2 interrupt on the edge, start TCC0 for a ~14 ms delay, check switch state in the overflow ISR, update counter, and re-enable.
            </p>

            <YouTubeEmbed id="qAPzeIWHZCE" title="Lab 3 demo" />
            <LinksRow
              reportHref="/reports/microp/lab3.pdf"
              videoHref="https://youtube.com/shorts/qAPzeIWHZCE?feature=share"
            />
          </Card>

          <Card
            title="Lab 4 — External Bus Interface (EBI)"
            subtitle="Memory-mapped external hardware + SRAM via EBI, address decoding, bus control signals, and logic-analyzer timing verification."
          >
            <p className="text-sm leading-6">
              This lab focused on learning how to design and use the ATxmega128A1U’s External Bus Interface (EBI) to map external hardware
              directly into the microcontroller’s data memory space. I built an external 8-bit input port and 8-bit output port using the 74HC573
              latch and 74HC574 flip-flop tied to DIP switches and a DIP LED bank. I configured SRAM 3-PORT ALE1 mode, performed full and partial
              address decoding, and wrote an assembly program to mirror switch inputs to LEDs. I then interfaced external SRAM on the OOTB Memory Base,
              copied a large data block from program memory into SRAM, and used timer interrupts to read/display bytes periodically. Finally, I captured
              CS/WE/RE/ALE/address/data waveforms on a Logic Analyzer to verify correct bus timing.
            </p>

            <YouTubeEmbed id="4vN3Ly5VN18" title="Lab 4 demo" />
            <YouTubeEmbed id="vPohwm4rvEo" title="Lab 4 extra demo" />
            <LinksRow
              reportHref="/reports/microp/lab4.pdf"
              videoHref="https://youtube.com/shorts/4vN3Ly5VN18?feature=share"
              extraVideoHref="https://youtube.com/shorts/vPohwm4rvEo?feature=share"
            />
          </Card>

          <Card
            title="Lab 5 — Asynchronous Serial Communication (USART)"
            subtitle="Baud config, polling vs interrupts, transmit strings from program memory, RX echo, and robust string input with editing."
          >
            <p className="text-sm leading-6">
              This lab introduced asynchronous serial communication on the ATxmega128A1U’s USART: configuring baud-rate registers, framing,
              and transmit/receive handling. I initialized USARTD0, transmitted characters and full strings from program memory (Z-pointer traversal),
              implemented RX polling using RXCIF and echo-back, then built a full string-input routine using the Y-pointer with carriage return and
              backspace/delete behavior. The lab concluded with an interrupt-driven echo program using the USART receive-complete ISR while the main loop
              continued toggling the BLUE_PWM LED to prove asynchronous operation.
            </p>

            <YouTubeEmbed id="HZPtYPEvidQ" title="Lab 5 demo" />
            <LinksRow
              reportHref="/reports/microp/lab5.pdf"
              videoHref="https://youtu.be/HZPtYPEvidQ"
            />
          </Card>

          <Card
            title="Lab 6 — Synchronous Serial Communication (SPI + IMU)"
            subtitle="SPI master (Mode 3) to LSM6DSL IMU, WHO_AM_I bring-up, sensor init, data-ready interrupt, and streamed accel/gyro data."
          >
            <p className="text-sm leading-6">
              This lab implemented SPI on the ATxmega128A1U to interface with the LSM6DSL IMU. I configured SPI master (Mode 3, MSB first),
              controlled chip select manually, verified WHO_AM_I, then initialized the sensor (reset, accelerometer enable, ±2g range, 104 Hz ODR).
              I used an external interrupt for data-ready, kept ISR work minimal (flag only), and handled SPI reads + USART streaming in the main loop.
              On each event, the program read 6 accelerometer bytes (little-endian) and streamed them to SerialPlot; extra credit extended this to gyro.
            </p>

            <YouTubeEmbed id="H6EKAbjXOyk" title="Lab 6 demo" />
            <YouTubeEmbed id="IF7sx5-vrH8" title="Lab 6 extra demo" />
            <LinksRow
              reportHref="/reports/microp/lab6.pdf"
              videoHref="https://youtube.com/shorts/H6EKAbjXOyk?feature=share"
              extraVideoHref="https://youtube.com/shorts/IF7sx5-vrH8?feature=share"
            />
          </Card>

          <Card
            title="Lab 7 — ADC & Event System"
            subtitle="12-bit signed differential ADC, event-triggered conversions, ISR capture, UART voltmeter formatting, and high-rate SerialPlot output."
          >
            <p className="text-sm leading-6">
              This lab configured ADCA in 12-bit signed differential mode and used the Event System to trigger conversions without CPU intervention.
              I started with manual CdS sampling, then used TCC0 overflow events to start conversions automatically while the ADC ISR captured results
              and toggled the BLUE_PWM LED. I extended this into a UART-based digital voltmeter (two decimals + hex value), then adapted output for
              SerialPlot by streaming raw low/high bytes at ~140 Hz. The final part added a USART RX interrupt so the user could switch inputs (CdS vs
              amplifier) by sending ‘C’ or ‘F’.
            </p>

            <YouTubeEmbed id="tCsjA2nR_CE" title="Lab 7 demo" />
            <YouTubeEmbed id="jJz6Q0D_v_o" title="Lab 7 extra demo" />
            <LinksRow
              reportHref="/reports/microp/lab7.pdf"
              videoHref="https://youtube.com/shorts/tCsjA2nR_CE?feature=share"
              extraVideoHref="https://youtube.com/shorts/jJz6Q0D_v_o?feature=share"
            />
          </Card>

          <Card
            title="Lab 8 — DAC, DMA & Synthesizer Keyboard"
            subtitle="Waveform generation with DAC + timers/events, DMA-driven LUT streaming for stable frequency, and a keyboard-controlled synth with sine/triangle modes."
          >
            <p className="text-sm leading-6">
              This lab explored waveform generation using the DAC, timers, events, and the DMA controller. I first generated fixed and LUT-based waveforms,
              then used timer interrupts + events to recreate sine waves at musical frequencies. To improve timing accuracy at higher frequencies, I transitioned
              to a DMA-triggered design: timer overflow events automatically moved samples from a 256-entry waveform table to the DAC, eliminating CPU latency.
              The final build implemented a complete synthesizer: 12 keyboard keys mapped to 6th-octave notes, USART input selected active note and updated the
              timer period, and an ‘s’ key swapped between sine and triangle tables by changing the DMA source. Output routed through the Analog Backpack amplifier
              to play tones on the speaker.
            </p>

            <YouTubeEmbed id="UtL0KdCwljs" title="Lab 8 demo" />
            <YouTubeEmbed id="YZsQlpcj9eY" title="Lab 8 extra demo" />
            <LinksRow
              reportHref="/reports/microp/lab8.pdf"
              videoHref="https://youtube.com/shorts/UtL0KdCwljs?feature=share"
              extraVideoHref="https://youtube.com/shorts/YZsQlpcj9eY?feature=share"
            />
          </Card>
        </div>

        {/* HW2 + Practical 2 */}
        <SectionTitle>Homework & Practicals</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="HW2 — Pulse-width Modulation (PWM)"
            subtitle="Timer/counter PWM to control RGB LED intensity (active-low LED behavior, duty-cycle intuition, and clean register configuration)."
          >
            <p className="text-sm leading-6">
              HW2 focused on using timer/counter PWM modes to control the intensity of the on-board active-low RGB LED by adjusting duty cycle.
              It reinforced practical timer configuration, correct multi-byte register access order, and “make it intuitive” LED control by inverting
              the pin logic so duty-cycle behavior matches expectations.
            </p>

            <YouTubeEmbed id="842GDx4qk8k" title="HW2 demo" />
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <ExternalLink href="https://youtube.com/shorts/842GDx4qk8k?feature=share">Open video</ExternalLink>
              {/* Put your HW2 PDF in /public/reports/eel4744c/ and use the path below */}
              <ExternalLink href="/reports/microp/hw2_pwm.pdf">HW2 PDF</ExternalLink>
            </div>
          </Card>

          <Card
            title="Practical 2 — IMU Orientation + DAC Output"
            subtitle="Accelerometer-driven orientation reporting (PuTTY/serial) + DAC voltage selection by orientation, with an independent timer-interrupt output pin."
          >
            <p className="text-sm leading-6">
              Practical 2 combined sensing + output + timing: we used the accelerometer to detect the microcontroller’s orientation and displayed the
              orientation over serial in PuTTY. Based on the current orientation, the program output a different voltage using the DAC, while also
              alternating the voltage on a separate pin using a timer interrupt (to demonstrate clean background timing alongside sensor-driven behavior).
            </p>

            <YouTubeEmbed id="0SLe2dOQR4g" title="Practical 2 demo" />
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <ExternalLink href="https://youtube.com/shorts/0SLe2dOQR4g?feature=share">Open video</ExternalLink>
              {/* Optional: add a PDF/report if you have one */}
              {/* <ExternalLink href="/reports/eel4744c/practical2.pdf">Practical 2 PDF</ExternalLink> */}
            </div>
          </Card>
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
