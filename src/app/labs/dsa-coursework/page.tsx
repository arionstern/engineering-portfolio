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
    <div className="rounded-xl border bg-white p-6">
      <div className="text-lg font-semibold text-zinc-900">{title}</div>
      {subtitle && (
        <div className="mt-1 text-sm text-zinc-700">{subtitle}</div>
      )}
      <div className="mt-4 text-sm text-zinc-900">{children}</div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-xl font-semibold text-zinc-900">{children}</h2>;
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

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      {children}
    </a>
  );
}

export default function DSACourseworkPage() {
  return (
    <Page
      title="COP3530 — Data Structures & Algorithms"
      subtitle="Coursework focused on building core data structures and graph algorithms from first principles, with correctness, efficiency, and testing as first-class concerns."
    >
      <div className="not-prose">
        {/* Overview */}
        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm leading-6 text-zinc-900">
            COP3530 emphasized implementing data structures and algorithms from scratch,
            reasoning about correctness and invariants, and validating performance on
            realistic inputs. Projects covered balanced trees, graph-based ranking
            algorithms, and algorithm visualization using real-world datasets.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>C++</Badge>
            <Badge>Python</Badge>
            <Badge>AVL Trees</Badge>
            <Badge>Graphs</Badge>
            <Badge>PageRank</Badge>
            <Badge>Sorting Algorithms</Badge>
            <Badge>Big-O Analysis</Badge>
            <Badge>Testing</Badge>
          </div>
        </div>

        <SectionTitle>Major Course Projects</SectionTitle>

        {/* AVL TREE */}
        <Card
          title="AVL Tree Implementation & Analysis"
          subtitle="Self-balancing binary search tree implemented recursively in C++"
        >
          <YouTubeEmbed id="OUa65cFSCOM" title="AVL Tree Demo" />

          <ul className="mt-4 list-disc pl-5 leading-6">
            <li>
              Designed and implemented a fully self-balancing AVL tree using recursive
              insertion and deletion, maintaining strict height-balance invariants.
            </li>
            <li>
              Implemented single and double rotations (LL, RR, LR, RL) with helper
              functions to compute balance factors and update node heights on each
              recursive return.
            </li>
            <li>
              Managed dynamic memory using raw pointers with a custom node structure
              (left/right children, parent pointer, height, value).
            </li>
            <li>
              Handled edge cases including duplicate insertions, null subtrees, and
              root-only deletions; used post-order deletion to prevent memory leaks.
            </li>
            <li>
              Wrote a <code>checkBalance()</code> verification routine and custom test
              cases to validate tree integrity after worst-case rebalancing scenarios.
            </li>
            <li>
              Documented O(log n) time complexity for all operations and compared
              performance tradeoffs against unbalanced BSTs in a formal report.
            </li>
          </ul>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <ExternalLink href="https://github.com/arionstern/DSA-p1-AVL-Tree">
                GitHub
            </ExternalLink>
            <ExternalLink href="/reports/avl-tree-report.pdf">
                PDF Report
            </ExternalLink>
            </div>

        </Card>

        {/* PAGERANK */}
        <Card
          title="Simplified PageRank Algorithm"
          subtitle="Graph-based ranking algorithm using adjacency lists and power iteration"
        >
          <YouTubeEmbed id="Wzb21Ctd0Zo" title="PageRank Project Demo" />

          <ul className="mt-4 list-disc pl-5 leading-6">
            <li>
              Parsed directed edge lists with over 100,000 entries and constructed
              adjacency-list representations using hash maps for efficient traversal.
            </li>
            <li>
              Implemented PageRank using the power iteration method with damping factor
              d = 0.85 and convergence threshold ε = 1e-6.
            </li>
            <li>
              Included logic to correctly handle dead-end and dangling nodes by
              redistributing rank mass across the graph.
            </li>
            <li>
              Normalized rank vectors after each iteration to ensure numerical stability
              and reliable convergence.
            </li>
            <li>
              Validated correctness on chains, cycles, and star-topology graphs and
              verified convergence using L2 norm comparisons.
            </li>
            <li>
              Sorted and displayed top-ranked nodes using STL algorithms and built
              Catch2 test cases to validate rank stability.
            </li>
          </ul>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <ExternalLink href="https://github.com/arionstern/clion-p2-dsa-PageRank">
                GitHub
            </ExternalLink>
            <ExternalLink href="/reports/pagerank-report.pdf">
                PDF Report
            </ExternalLink>
            </div>

        </Card>

        {/* ELEVATION SORT */}
        <Card
          title="Elevation Sort Visualizer (Python, Pygame)"
          subtitle="Interactive visualization of sorting algorithms using real-world elevation data"
        >
          <YouTubeEmbed id="PtttdESWZPs" title="Elevation Sort Visualizer Demo" />

          <ul className="mt-4 list-disc pl-5 leading-6">
            <li>
              Built an interactive sorting visualizer using elevation data from the
              NOAA ETOPO1 dataset accessed via the BRIDGES API.
            </li>
            <li>
              Implemented Bubble, Insertion, Selection, Merge, Quick, and Heap Sort with
              real-time animations showing swaps, comparisons, and execution time.
            </li>
            <li>
              Added keyboard controls for shuffling, resetting, cycling color themes,
              and exiting the program.
            </li>
            <li>
              Designed a tooltip system displaying latitude, longitude, and elevation
              when hovering over data bars, with automatic positioning.
            </li>
            <li>
              Optimized rendering by minimizing redraws and benchmarking frame updates
              for smoother animations.
            </li>
            <li>
              Designed the tool as both an educational aid and a performance profiling
              environment for algorithm behavior.
            </li>
          </ul>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <ExternalLink href="https://github.com/arionstern/DSA_P3">
                GitHub
            </ExternalLink>
            <ExternalLink href="/reports/elevation-sort-report.pdf">
                PDF Report
            </ExternalLink>
            <Link
                href="/projects/elevation-sort-visualizer"
                className="text-blue-600 underline"
            >
                View full project →
            </Link>
            </div>

        </Card>

        <div className="mt-12">
          <Link href="/labs" className="text-blue-600 underline">
            ← Back to Labs & Coursework
          </Link>
        </div>
      </div>
    </Page>
  );
}
