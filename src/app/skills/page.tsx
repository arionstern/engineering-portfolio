import Page from "@/components/Page";

export default function SkillsPage() {
  return (
    <Page title="Skills" subtitle="Hardware, firmware, digital logic, and software tools I use regularly.">
      <h2>Hardware & Embedded Systems</h2>
      <ul>
        <li>ATxmega128A1U, Arduino, Raspberry Pi Pico</li>
        <li>SPI / I²C / UART, interrupts, timers/counters, PWM</li>
        <li>ADC / DAC, DMA-driven peripherals, sensor integration</li>
        <li>Breadboarding, soldering, oscilloscope / logic analyzer basics</li>
      </ul>

      <h2>Digital Logic / FPGA</h2>
      <ul>
        <li>DE10-Lite, Verilog/VHDL (whichever you used), FSMs, datapath/control separation</li>
        <li>Quartus Prime, ModelSim simulation, timing + waveform debugging</li>
      </ul>

      <h2>Programming</h2>
      <ul>
        <li>C / C++, Python, Java, AVR Assembly</li>
        <li>Data structures + algorithms (AVL, PageRank-style graph ranking)</li>
      </ul>

      <h2>Tools</h2>
      <ul>
        <li>Git/GitHub, VS Code, Linux CLI basics</li>
        <li>Matplotlib, Pygame, OpenCV</li>
        <li>Altium Designer (PCB design)</li>
      </ul>
    </Page>
  );
}
