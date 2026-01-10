import Link from "next/link";
import Page from "@/components/Page";
import { projects } from "@/data/projects";
// import Carousel from "@/components/Carousel";


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

export default function ProjectsPage() {
  return (
    <Page
      title="Projects"
      subtitle="Featured engineering work—designed to be skimmable for recruiters and deep enough for engineers."
    >
      <div className="not-prose grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.slug} className="rounded-xl border bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold text-zinc-900">
                  {p.title}
                </div>
                <div className="mt-1 text-sm text-zinc-900">{p.subtitle}</div>
              </div>

              {p.status ? (
                <span className="shrink-0 rounded-full border bg-zinc-50 px-3 py-1 text-xs text-zinc-900">
                  {p.status}
                </span>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <ul className="mt-4 list-disc pl-5 text-sm text-zinc-900">
              {p.highlights.slice(0, 4).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
              <Link href={`/projects/${p.slug}`} className="text-blue-600 underline">
                View details
              </Link>

              {p.links?.github && p.links.github !== "#" ? (
                <ExternalLink href={p.links.github}>GitHub</ExternalLink>
              ) : null}

              {p.links?.demo && p.links.demo !== "#" ? (
                <ExternalLink href={p.links.demo}>Demo</ExternalLink>
              ) : null}

              {p.links?.video && p.links.video !== "#" ? (
                <ExternalLink href={p.links.video}>Video</ExternalLink>
              ) : null}

             {p.links?.report ? (
  <li>
    {p.links.report.startsWith("http") ? (
      <ExternalLink href={p.links.report}>Report / PDF</ExternalLink>
    ) : (
      <a
        href={p.links.report}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Report / PDF
      </a>
    )}
  </li>
) : null}

            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
