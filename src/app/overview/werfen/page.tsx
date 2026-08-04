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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <div className="text-xs font-medium text-zinc-700">{label}</div>
      <div className="mt-2 text-lg font-semibold text-zinc-900">{value}</div>
    </div>
  );
}

function BulletBlock({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="mt-4 rounded-lg border bg-zinc-50 p-4">
      <div className="text-sm font-semibold text-zinc-900">{title}</div>
      <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-zinc-900">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Callout({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
      <div className="text-sm font-semibold text-zinc-900">{title}</div>
      <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-zinc-900">
        {items.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function WerfenPage() {
  return (
    <Page
      title="Werfen — Manufacturing Engineering Intern"
      subtitle="Orangeburg, NY | May 2026 – Present"
    >
      <div className="not-prose">
        <div className="flex flex-wrap gap-2">
          <Badge>Python</Badge>
          <Badge>win32com / xlwings</Badge>
          <Badge>SAP GUI Scripting</Badge>
          <Badge>Excel (VBA)</Badge>
          <Badge>Minitab COM</Badge>
          <Badge>Outlook COM</Badge>
          <Badge>Process Validation</Badge>
          <Badge>Change Orders</Badge>
          <Badge>Ergonomic Design</Badge>
        </div>

        <SectionTitle>At a glance</SectionTitle>
        <div className="grid gap-4 md:grid-cols-4">
          <Stat label="Data pipelines built" value="2" />
          <Stat label="Time saved" value="~89–95%" />
          <Stat label="Change orders authored" value="14" />
          <Stat label="Combined tests supported" value="500+" />
        </div>

        <SectionTitle>Automation pipelines</SectionTitle>
        <p className="mt-2 text-sm text-zinc-900 max-w-3xl">
          Built two end-to-end Python pipelines that replaced manual weekly
          data-pull workflows spanning SAP, Excel, Minitab, and Outlook —
          both driven entirely through Windows COM automation (win32com /
          xlwings), since none of these systems expose a plain file format
          or API that can be read or written directly. Each pipeline was
          built the same way: read the real system behavior empirically
          first (dozens of small exploratory test scripts against SAP,
          Excel, and Minitab), then write the automation against what was
          actually observed rather than what the documentation implied.
        </p>

        <BulletBlock
          title="Minitab Data Pull v0 — 5kD/5kE Run Chart Automation"
          bullets={[
            "Scans the 5kD and 5kE network lot folders for lots newer than the last recorded one, detects a lot as \u201cready\u201d by the presence of a homogeneity file (an instrument-exported Excel file), and copies just that file into a new dated weekly pull folder.",
            "Drives the existing CPKPPKPuller VBA macro through xlwings (not openpyxl) — the tracking workbook has live macros, SharePoint links, and formulas tied to an external GEM production file, all of which require a real running Excel instance to execute or refresh.",
            "Cleans and corrects every newly appended row: fills blank outlier cells, cross-checks the lot number against its source folder name to catch misnamed lots, validates the part number against a GEM production lookup, backfills filler/fill date when blank, and computes a fill-week number relative to prior weeks — then re-sorts the full history sheet chronologically so the new row lands in the right place.",
            "Pushes the cleaned row into the Minitab “Routine Monitoring” worksheet (validating the correct worksheet is actually open first), converting each value's type — text, numeric, or date — to match its destination column, since Minitab's COM columns don't infer type the way a spreadsheet cell does.",
            "Re-exports the run chart graphs and drafts the weekly Outlook reply-all email with the new graphs inlined via Content-ID (so they render in the email body, not as attachment icons) above the quoted thread — manual runtime of 45 min–1 hr cut to about 3–5 min.",
          ]}
        />

        <BulletBlock
          title="FF1 5K Lysing Tensile Automation"
          bullets={[
            "Automates the weekly bag seal-strength tensile pull directly from SAP (ZPP_WI) — no network folders involved on this side, unlike the sister project. Scans the GR Quantity results table backward from the bottom (a label-based control with no reliable sort order) to find lots newer than the last one recorded, then keeps only lots with a non-zero goods-receipt quantity.",
            "Opens each lot's GEM log document — an Excel workbook embedded in SAP as an Office Integration document — by deriving its likely document number from the work order, then verifying the opened file actually has real content rather than trusting a number match alone, since a derived number can land on a blank placeholder.",
            "Reads the real seal-strength readings and the true fill date from a separate header-page cell, deliberately not from the lot code text, since that can be wrong for a fill that runs past midnight.",
            "Flags anomalies for a human double-check — an overnight fill (readings spanning more than one calendar date), a mismatch between the lot-code-implied date and the real fill date, or a lot name that doesn't match the expected format.",
            "Writes results into the tracking Excel workbook and Minitab project with duplicate-prevention, fully regenerates the Boxplot and Xbar charts every run (a COM-driven data write silently resets Minitab's custom axis labels, so there's no way to “gently” update while preserving formatting), and drafts the summary email — manual runtime of 20–30 min cut to about 2–4 min.",
          ]}
        />

        <Callout
          title="Notable technical challenges solved along the way"
          items={[
            "SAP writes an opened document to a temp folder under an unpredictable filename for real (human-uploaded) documents — solved by polling for the most recently modified file rather than predicting a name, using a timestamp captured before the click.",
            "Minitab's COM API is only partially documented; real command syntax (e.g. that the Xbar chart command is literally XBARCHART, not the cosmetic name shown in the UI) was pulled from Minitab's own in-app Help/Session window rather than guessed — and ExecuteCommand() doesn't raise a Python exception on a Minitab-side syntax error, so success has to be verified by checking whether the command count actually increased.",
            "Excel's COM layer returns a timezone-aware pywintypes.datetime for date cells, which is a subclass of Python's datetime — an ordinary isinstance() check isn't enough to trust the value, since it can silently carry the wrong assumptions downstream.",
            "SAP's Documents List grid is the only robust way to reach a lot's embedded document — the routing tree's legacy grid control silently fails scripted clicks on fully completed orders even though it works fine on active ones and looks identical to a human.",
          ]}
        />

        <SectionTitle>Change orders & documentation</SectionTitle>
        <p className="mt-2 text-sm text-zinc-900 max-w-3xl">
          Spent a substantial part of the internship on CAPA-driven
          documentation work: marking up SPMs and Routers (RMUs), completing
          IAFs, and running spreadsheet validation assessments for a mock
          audit ampule filling documentation group.
        </p>
        <BulletBlock
          title="Engineering Change Orders (ECOs)"
          bullets={[
            "Authored 14 Engineering Change Orders updating SPMs/routers for the mock audit ampule filling documentation, plus supporting IAFs and spreadsheet validation assessments.",
            "Every change was grounded in direct floor observation — watching operators perform each step and asking questions — rather than working from the existing document alone, so the rewritten procedure matched how the process was actually being run, not just how it was written down.",
            "Completed initial markups for the related bulking documents as well; change orders for those are still in progress as of the end of the internship.",
            "Reviewed and walked every change through cross-functional approval with Product Support, QA, Supply Chain, and Engineering before it was finalized.",
          ]}
        />

        <SectionTitle>Equipment sourcing & process validation</SectionTitle>
        <BulletBlock
          title="Ergonomic Redesign: Leak Detector Table"
          bullets={[
            "The existing table for the leak detector machine was too tall for shorter operators to reach into or operate comfortably — measured the machine, the current table, and similar equipment/work areas in the room to define target dimensions from scratch.",
            "Used those measurements to calculate the internal water volume of the detector's tank and estimate the fully loaded machine weight, which set the minimum load capacity a replacement table would need — at least double the machine's weight plus whatever an operator might additionally load onto it.",
            "Defined a height window balancing two conflicting constraints: short enough for an operator to reach inside the detector and lift the heavy inner case out over the top lid, but tall enough that the machine's bottom-mounted buttons stay easily accessible.",
            "Compiled a comparison spreadsheet of candidate tables against every requirement (load capacity, footprint with clearance for the machine on top, height, material), matching stainless steel to standardize with the rest of the equipment in the room.",
            "Selected a ULINE stainless steel table meeting all criteria and completed the purchase requisition to order it.",
          ]}
        />

        <BulletBlock
          title="Instrument Testing & Validation"
          bullets={[
            "Ran 162 instrument tests supporting the 500 mL lightweight bottle weight-reduction initiative.",
            "Completed 150+ leak and burst seal tests on AVI2 bags across low, nominal, and high pressure settings using the department's seal tester (“the lobster pot”), and ordered its replacement once testing wrapped.",
            "Learned to operate and troubleshoot the automated Beacon composite stopper assembly machine, including how to correct it when errors occurred, and ran 12,000+ samples of 20mm and 13mm stoppers through it.",
          ]}
        />

        <SectionTitle>Cross-team collaboration</SectionTitle>
        <BulletBlock
          title="GEM Fast-Filler Tote Investigation (with fellow intern Luca)"
          bullets={[
            "Covered stopper-calibration work while Luca ran testing, and vice versa, so both workstreams kept moving in parallel through the investigation.",
            "Helped execute the scrap-out of completed test totes once testing wrapped: sorting by solution, staging on pallets in stacks no more than five totes tall, and looking up lot numbers to identify the material inside unlabeled totes before staging them.",
            "Labeled every stack with the correct material info and coordinated with floor operators to place emptied carts back in the correct GEM-area storage location.",
          ]}
        />

        <div className="mt-10">
          <Link href="/overview" className="text-blue-600 underline">
            ← Back to Overview
          </Link>
        </div>
      </div>
    </Page>
  );
}