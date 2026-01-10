import Link from "next/link";
import Image from "next/image";
import Page from "@/components/Page";
import { projects } from "@/data/projects";
import Carousel from "@/components/Carousel";


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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Page title="Project Not Found">
        <p>That project doesn’t exist.</p>
        <p>
          <Link href="/projects" className="text-blue-600 underline">
            Back to Projects
          </Link>
        </p>
      </Page>
    );
  }

  const hero = project.media?.heroImage;
  const gallery = project.media?.gallery ?? [];
  const galleryMode = project.media?.galleryMode ?? "grid";
  const youtubeId = project.media?.youtubeId;
  const youtubePlaylistId = project.media?.youtubePlaylistId;

  return (
    <Page title={project.title} subtitle={project.subtitle}>
      <div className="not-prose">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs text-zinc-900"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Hero image */}
        {hero ? (
        <div className="mt-6 overflow-hidden rounded-xl border bg-white">
        <Image
            src={hero}
            alt={`${project.title} hero`}
            width={1600}
            height={900}
            className="h-auto w-full object-contain bg-zinc-50"
            priority
        />
        </div>

        ) : null}

        {/* Gallery */}
        {gallery.length ? (
        <>
            <SectionTitle>Screenshots</SectionTitle>

            <div className="mt-4">
            {galleryMode === "carousel" ? (
                <Carousel items={gallery} ariaLabel={`${project.title} screenshots`} />
            ) : (
                <div className="grid gap-3 md:grid-cols-2">
                {gallery.map((src) => (
                <div key={src} className="overflow-hidden rounded-xl border bg-white">
                    <Image
                    src={src}
                    alt="Project screenshot"
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain bg-zinc-50"
                    />
                </div>
                ))}

                </div>
            )}
            </div>
        </>
        ) : null}


        

        {/* YouTube embed */}
        {(youtubePlaylistId || (youtubeId && youtubeId !== "PASTE_YOUR_YOUTUBE_ID_HERE")) ? (
        <>
            <SectionTitle>Video</SectionTitle>
            <div className="mt-4 overflow-hidden rounded-xl border bg-white">
            <div className="relative aspect-[16/9] w-full">
                <iframe
                className="absolute inset-0 h-full w-full"
                src={
                    youtubePlaylistId
                    ? `https://www.youtube.com/embed/videoseries?list=${youtubePlaylistId}`
                    : `https://www.youtube.com/embed/${youtubeId}`
                }
                title={`${project.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            </div>
            </div>
        </>
        ) : null}

        {/* Structured sections */}
        {project.sections?.problem ? (
          <>
            <SectionTitle>Problem</SectionTitle>
            <p className="mt-3 text-zinc-900">{project.sections.problem}</p>
          </>
        ) : null}

        {project.sections?.approach?.length ? (
          <>
            <SectionTitle>Approach</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-zinc-900">
              {project.sections.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </>
        ) : null}

        {project.sections?.results?.length ? (
          <>
            <SectionTitle>Results</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-zinc-900">
              {project.sections.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </>
        ) : null}

        {project.sections?.whatILearned?.length ? (
          <>
            <SectionTitle>What I Learned</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-zinc-900">
              {project.sections.whatILearned.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </>
        ) : null}
        
        {project.sections?.problemsEncountered?.length ? (
        <>
            <SectionTitle>Problems Encountered</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-zinc-900">
            {project.sections.problemsEncountered.map((p) => (
                <li key={p}>{p}</li>
            ))}
            </ul>
        </>
        ) : null}

        {project.sections?.futureWork?.length ? (
        <>
            <SectionTitle>Future Work</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-zinc-900">
            {project.sections.futureWork.map((f) => (
                <li key={f}>{f}</li>
            ))}
            </ul>
        </>
        ) : null}




        {/* Links */}
        <SectionTitle>Links</SectionTitle>
        <ul className="mt-3 list-disc pl-5 text-zinc-900">
        {project.links?.github && project.links.github !== "#" ? (
            <li>
            <ExternalLink href={project.links.github}>
                GitHub Repository
            </ExternalLink>
            </li>
        ) : null}

        {project.links?.video ? (
            <li>
            <ExternalLink href={project.links.video}>
                Demo / Video
            </ExternalLink>
            </li>
        ) : null}

        {project.links?.demo ? (
            <li>
            <ExternalLink href={project.links.demo}>
                Live Demo
            </ExternalLink>
            </li>
        ) : null}

        {project.links?.report ? (
            <li>
            <ExternalLink href={project.links.report}>
                Final Report (PDF)
            </ExternalLink>
            </li>
        ) : null}
        </ul>


        <div className="mt-10">
          <Link href="/projects" className="text-blue-600 underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </Page>
  );
}
