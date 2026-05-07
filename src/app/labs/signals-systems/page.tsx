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

type Lab = {
  num: number;
  title: string;
  bullets: string[];
  reportHref: string;
};

export default function SignalsSystemsPage() {
  const labs: Lab[] = [
    {
      num: 1,
      title: "MATLAB Fundamentals & Sinusoid Plotting",
      reportHref: "/reports/signals-systems/lab1.pdf",
      bullets: [
        "Plotted discrete and continuous sinusoids using stem and plot, with correct axis labeling in radians and seconds.",
        "Implemented a MATLAB function myroots(n, a) to compute all nth complex roots of any complex number using polar form and the roots-of-unity formula.",
        "Computed and displayed the 5th roots of −1 and the 11th roots of 2048j.",
        "Used UF's AI Navigator to generate a periodic, multi-frequency signal from a natural language prompt — exploring how signal properties must be specified with mathematical precision.",
      ],
    },
    {
      num: 2,
      title: "Audio Synthesis & ADSR Envelopes",
      reportHref: "/reports/signals-systems/lab2.pdf",
      bullets: [
        "Synthesized audio from sinusoidal components and saved .wav files with correct amplitude normalization.",
        "Built a multi-harmonic violin instrument model using a Fourier series with 6 harmonics (amplitudes and phases from a provided table).",
        "Implemented a full ADSR (attack-decay-sustain-release) envelope function and applied it to notes to simulate how physical instruments are struck.",
        "Composed and saved four distinct audio versions of the same song: pure sine, violin harmonics, ADSR-shaped violin, and an AI-enhanced instrument timbre.",
      ],
    },
    {
      num: 3,
      title: "Sampling Theory — Images & Video",
      reportHref: "/reports/signals-systems/lab3.pdf",
      bullets: [
        "Implemented a 2D image sub-sampler and observed aliasing artifacts in high-frequency regions when sampling with D=2 and D=4.",
        "Designed a 2D anti-aliasing filter using a 5-point averaging difference equation, applied it before sub-sampling, and compared results to show aliasing reduction.",
        "Built a video sampler with independent horizontal, vertical, and temporal sampling parameters.",
        "Demonstrated temporal aliasing by selecting Dt values that make a spinning wheel appear frozen or rotating backwards — justified using sampling theory.",
      ],
    },
    {
      num: 4,
      title: "Convolution — Echo, Distortion & Image Filtering",
      reportHref: "/reports/signals-systems/lab4.pdf",
      bullets: [
        "Implemented an echo effect y[n] = x[n] + A·x[n−s] using a shift function, with a 20,000-sample (~0.45s) delay at 44,100 Hz.",
        "Built a foldover distortion function that clips and reflects audio amplitude beyond a threshold, adding harmonic distortion — analyzed mathematically.",
        "Applied a Sobel-style edge detection kernel via 2D convolution, followed by thresholding and a 3×3 averaging (blur) filter on the binary edge image.",
        "Analyzed each filter's impulse response to explain whether it blurs, sharpens, or extracts edges.",
      ],
    },
    {
      num: 5,
      title: "Frequency Response & FIR Audio Filtering",
      reportHref: "/reports/signals-systems/lab5.pdf",
      bullets: [
        "Implemented FreqResponse(b, nk, w) to compute a FIR filter's complex frequency response H(e^jω) from coefficients and time indices.",
        "Verified that the frequency response method and direct convolution produce identical outputs for a known input signal — explaining edge differences.",
        "Identified and applied lowpass, highpass, and bandstop filters to audio, relating audible changes to the filter's magnitude response.",
        "Designed a 50-coefficient FIR highpass filter (cutoff 500 Hz) via AI prompt engineering and verified its magnitude and phase response.",
      ],
    },
    {
      num: 6,
      title: "DTFT Properties & Nulling Filters",
      reportHref: "/reports/signals-systems/lab6.pdf",
      bullets: [
        "Computed and plotted DTFT magnitude and phase for six signal types, identifying whether each is predominantly low- or high-frequency.",
        "Applied DTFT properties (scaling, time shift, modulation, convolution, magnitude-squaring) and verified each against theoretical predictions.",
        "Identified noise frequencies in a contaminated audio signal by inspecting its DTFT magnitude spectrum with 10,000+ frequency points.",
        "Designed and applied nulling FIR filters y[n] = x[n] − 2cos(ω₀)x[n−1] + x[n−2] to remove specific frequencies, then extended the approach to remove multiple tones from a second noisy signal.",
      ],
    },
    {
      num: 7,
      title: "Z-Transform, Pole-Zero Plots & Difference Equations",
      reportHref: "/reports/signals-systems/lab7.pdf",
      bullets: [
        "Computed and plotted impulse responses and pole-zero plots for eight Z-transform expressions, including FIR, IIR, and conjugate-pole systems.",
        "Modeled a college loan as a difference equation y[n] = (1+α)y[n−1] + x[n] and analyzed three repayment scenarios: no payment, fixed annual payment, and percentage-of-balance payment.",
        "Determined analytically when each repayment strategy causes the loan to reach zero, level out, or grow unboundedly.",
        "Identified the latest year n at which payments must start to fully pay off a $150,000 loan at 6% annual interest by year n=15.",
      ],
    },
    {
      num: 8,
      title: "IIR Filter Design in the Z-Domain",
      reportHref: "/reports/signals-systems/lab8.pdf",
      bullets: [
        "Designed basic IIR filter building blocks Ha(z) (all-pole) and Hb(z) (all-zero) with tunable center frequency ω and radius α/β, analyzing how each parameter shifts the impulse response, frequency response, and pole-zero plot.",
        "Cascaded multiple basic filters to build four composite filters and classified each as lowpass, highpass, bandpass, bandstop, or all-pass based on their magnitude responses.",
        "Re-designed the noisy audio denoising problem from Lab 6 using cascaded IIR nulling filters for sharper frequency removal.",
        "Designed an IIR reverb filter with perceptible multi-echo decay, implemented via MATLAB's filter function, and analyzed its impulse response to confirm reverb behavior.",
      ],
    },
    {
      num: 9,
      title: "Multi-Domain Filter Design",
      reportHref: "/reports/signals-systems/lab9.pdf",
      bullets: [
        "Designed a causal IIR lowpass filter (≤10 coefficients) to isolate a string bass from a mixed bass+trumpet recording, working simultaneously in time, frequency, and pole-zero domains.",
        "Designed a causal FIR highpass filter (≤20 coefficients) to isolate the trumpet from the same recording.",
        "For each filter, plotted and interpreted the input/output time-domain signals, DTFT magnitude spectra, impulse response, frequency response, and pole-zero plot.",
        "Saved filter coefficients in .mat files for reproducibility and verified audio quality of the separated instruments.",
      ],
    },
    {
      num: 10,
      title: "DFT, IDFT & FFT Performance",
      reportHref: "/reports/signals-systems/lab10.pdf",
      bullets: [
        "Implemented a DFT(x) function from the definition and compared its output against the DTFT at various signal lengths (55, 60, 65, 200 samples), analyzing how truncation and zero-padding affect spectral resolution.",
        "Implemented IDFT(X) and used DFT/IDFT pairs to perform circular convolution, comparing results to linear convolution and explaining the aliasing difference.",
        "Benchmarked DFT vs. FFT computation time on 10,000 audio samples using tic/toc — measuring the practical speedup of the FFT algorithm.",
        "Analyzed the full FFT of a 3+ minute song (44.1 kHz), noting that the equivalent DFT would take ~500 hours.",
      ],
    },
  ];

  return (
    <Page
      title="EEL 3135 — Signals & Systems"
      subtitle="Ten-lab MATLAB course covering discrete-time signals, sampling theory, convolution, frequency response, DTFT, Z-transforms, FIR/IIR filter design, and DFT/FFT — applied to audio, images, and video."
    >
      <div className="not-prose">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge>MATLAB</Badge>
          <Badge>Signal Processing</Badge>
          <Badge>FIR / IIR Filters</Badge>
          <Badge>DTFT / DFT / FFT</Badge>
          <Badge>Z-Transform</Badge>
          <Badge>Convolution</Badge>
          <Badge>Sampling Theory</Badge>
          <Badge>Audio Processing</Badge>
          <Badge>Image Filtering</Badge>
          <Badge>Pole-Zero Analysis</Badge>
        </div>

        {/* Labs */}
        <SectionTitle>Labs</SectionTitle>

        <div className="mt-4 grid gap-4">
          {labs.map((lab) => (
            <Card
              key={lab.num}
              title={`Lab ${lab.num}: ${lab.title}`}
            >
              <ul className="list-disc pl-5 leading-6">
                {lab.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                <ExternalLink href={lab.reportHref}>
                  Lab report (PDF)
                </ExternalLink>
              </div>
            </Card>
          ))}
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