import Page from "@/components/Page";

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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs text-zinc-900">
      {children}
    </span>
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

export default function ExtraWorkPage() {
  return (
    <Page
      title="Extra Work"
      subtitle="Supplementary projects and exploratory builds that showcase curiosity, iteration, and hands-on learning beyond formal coursework."
    >
      <div className="not-prose">
        <SectionTitle>Pacman (Java)</SectionTitle>

        <Card
          title="Pacman Clone — Tutorial-based build with custom extensions"
          subtitle="High school project: followed a YouTube tutorial, then studied the codebase and implemented additional gameplay features."
        >
          <div className="flex flex-wrap gap-2">
            <Badge>Java</Badge>
            <Badge>Game Development</Badge>
            <Badge>Input Handling</Badge>
            <Badge>State Management</Badge>
            <Badge>Feature Extensions</Badge>
          </div>

          {/* Embedded videos */}
          <YouTubeEmbed id="UY1nPaPQ45c" title="Pacman Java Project Demo" />
          <YouTubeEmbed id="rpXV7obxWQU" title="Pacman Java Project Demo (Extended)" />

          <ul className="mt-4 list-disc pl-5 leading-6">
            <li>
              Built a complete Pacman clone by following a tutorial, then reverse-engineered
              the architecture to understand game state, rendering, and input flow.
            </li>
            <li>
              Implemented <strong>multiple levels</strong> with progression logic
              (<strong>press N</strong> to advance to the next level).
            </li>
            <li>
              Added <strong>tunnel mechanics</strong> allowing Pacman to wrap through
              walls, replicating classic arcade behavior.
            </li>
            <li>
              Introduced runtime controls for ghost management:
              <strong> A</strong> to add a ghost and <strong>S</strong> to remove a ghost.
            </li>
            <li>
              Focused on understanding and modifying an existing codebase rather than
              writing everything from scratch — an early exercise in code comprehension
              and feature extension.
            </li>
          </ul>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <ExternalLink href="https://youtu.be/UY1nPaPQ45c">
              Open video 1
            </ExternalLink>
            <ExternalLink href="https://youtu.be/rpXV7obxWQU">
              Open video 2
            </ExternalLink>
          </div>
        </Card>

        <SectionTitle>About this section</SectionTitle>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-900">
          This page highlights exploratory or supplementary work that doesn’t fit cleanly
          into my main Projects or Labs sections, but still demonstrates curiosity,
          technical growth, and hands-on experimentation. My most polished and
          production-level work is featured elsewhere in the portfolio.
        </p>
      </div>
    </Page>
  );
}
