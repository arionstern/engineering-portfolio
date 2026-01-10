import Link from "next/link";
import Page from "@/components/Page";
import { labItems } from "@/data/labs";

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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold text-zinc-900">{children}</h2>;
}

export default function LabsPage() {
  const groups = {
    "Microprocessor Applications": labItems.filter((i) => i.area === "Microprocessor Applications"),
    "Digital Logic / FPGA": labItems.filter((i) => i.area === "Digital Logic / FPGA"),
    Coursework: labItems.filter((i) => i.area === "Coursework"),
  };

  return (
    <Page
      title="Labs & Coursework"
      subtitle="Fundamentals and class work—organized like my projects, but focused on technical depth and core skills."
    >
      <div className="not-prose">
        {(
          Object.keys(groups) as Array<keyof typeof groups>
        ).map((section) => (
          <div key={section}>
            <SectionTitle>{section}</SectionTitle>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {groups[section].map((item) => (
                <div key={item.slug} className="rounded-xl border bg-white p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold text-zinc-900">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-zinc-900">
                        {item.subtitle}
                      </div>
                    </div>

                    {item.status ? (
                      <span className="shrink-0 rounded-full border bg-zinc-50 px-3 py-1 text-xs text-zinc-900">
                        {item.status}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  <ul className="mt-4 list-disc pl-5 text-sm text-zinc-900">
                    {item.highlights.slice(0, 4).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                    <Link
                      href={`/labs/${item.slug}`}
                      className="text-blue-600 underline"
                    >
                      View details
                    </Link>

                    {item.links?.repo ? (
                      <ExternalLink href={item.links.repo}>Repo</ExternalLink>
                    ) : null}

                    {item.links?.report ? (
                      <ExternalLink href={item.links.report}>Report</ExternalLink>
                    ) : null}

                    {item.links?.video ? (
                      <ExternalLink href={item.links.video}>Video</ExternalLink>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
