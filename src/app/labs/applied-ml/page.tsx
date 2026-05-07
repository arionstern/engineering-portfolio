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

function ResultRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b py-1.5 last:border-0">
      <span className="text-zinc-700">{label}</span>
      <span className="font-mono text-zinc-900">{value}</span>
    </div>
  );
}

export default function AppliedMLPage() {
  return (
    <Page
      title="EEL 4930 — Applied Machine Learning"
      subtitle="Three project-based assignments applying regression, dimensionality reduction, and neural networks to real-world datasets — each with a 4-page IEEE-format technical report."
    >
      <div className="not-prose">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge>Python</Badge>
          <Badge>scikit-learn</Badge>
          <Badge>TensorFlow</Badge>
          <Badge>Linear Regression</Badge>
          <Badge>Lasso</Badge>
          <Badge>PCA</Badge>
          <Badge>SVM</Badge>
          <Badge>CNN</Badge>
          <Badge>GridSearchCV</Badge>
          <Badge>Jupyter</Badge>
        </div>

        {/* Project 1 */}
        <SectionTitle>Project 1: NYC Yellow Taxi Tip Prediction</SectionTitle>

        <Card
          title="OLS Linear Regression & Lasso Regularization"
          subtitle="Predicting tip amounts from 2023 NYC Yellow Taxi trip records using feature engineering, sklearn Pipelines, and 3-round 5-fold GridSearchCV hyperparameter tuning."
        >
          <ul className="list-disc pl-5 leading-6">
            <li>
              Engineered three features from raw trip data: day-of-week encoding, four-bucket time-of-day slot, and a leakage-safe pre_tip_total_amount combining all pre-gratuity charges — then removed total_amount to prevent target leakage.
            </li>
            <li>
              Built a full sklearn ColumnTransformer Pipeline with median imputation + StandardScaler for numerics and most-frequent imputation + one-hot encoding for categoricals, producing 357 total features.
            </li>
            <li>
              Conducted exploratory analysis showing fare_amount (r=0.60) and trip_distance (r=0.57) as the strongest continuous predictors, and payment_type as the dominant categorical signal — cash trips structurally record zero tip (Lasso β=−2.580).
            </li>
            <li>
              Tuned Lasso α via three successive GridSearchCV rounds (0.01→0.001 range narrowing), identifying α=0.004 as optimal. Lasso zeroed 301 of 357 features (84.3%), retaining 56 non-zero predictors and eliminating the multicollinear pre_tip_total_amount.
            </li>
            <li>
              Queens airport-corridor zones (132, 138) averaged $8.55–$8.73 per trip; Monday and Sunday nights were the highest-tipping day-time combinations ($4.06, $4.03).
            </li>
          </ul>

          {/* Results table */}
          <div className="mt-4 rounded-lg border bg-zinc-50 p-4 text-xs">
            <div className="mb-2 font-semibold text-zinc-900">Results</div>
            <ResultRow label="Linear Regression — Test R²" value="0.531" />
            <ResultRow label="Linear Regression — CV 95% CI" value="[0.486, 0.573]" />
            <ResultRow label="Lasso (α=0.004) — Test R²" value="0.582" />
            <ResultRow label="Lasso (α=0.004) — CV 95% CI" value="[0.518, 0.622]" />
            <ResultRow label="Features retained by Lasso" value="56 / 357" />
          </div>

          <div className="mt-4">
            <ExternalLink href="/reports/aml/project1.pdf">
              IEEE Report (PDF)
            </ExternalLink>
          </div>
        </Card>

        {/* Project 2 */}
        <SectionTitle>Project 2: Satellite Ship Detection — Dimensionality Reduction</SectionTitle>

        <Card
          title="PCA, Isomap, LLE + SVM / Logistic Regression"
          subtitle="Classifying 4,000 satellite images (80×80 RGB) as ship or no-ship, comparing nine pipelines across baseline classifiers, PCA, and manifold learning methods."
        >
          <ul className="list-disc pl-5 leading-6">
            <li>
              Flattened 80×80×3 images to 19,200-dimensional feature vectors and performed a stratified 80/20 split, then benchmarked Logistic Regression (F1=0.853) and SVM with RBF kernel (F1=0.936) as baselines — both tuned via 5-fold stratified GridSearchCV.
            </li>
            <li>
              Analyzed PCA cumulative explained variance: 107 components capture 90% of variance, but classification performance peaks at 270 components (SVM) and 550 components (Logistic Regression) — demonstrating that variance explained ≠ discriminative information retained.
            </li>
            <li>
              PCA + SVM achieved the best overall result (F1=0.944, accuracy=97.25%) while also reducing SVM training time from 16.92s to 12.61s by compressing 19,200 dimensions to 270 before kernel evaluation.
            </li>
            <li>
              Evaluated Isomap and LLE manifold learning with the same classifiers. Isomap + SVM (F1=0.924) and LLE + SVM (F1=0.918) were competitive but did not surpass PCA, while incurring significantly higher embedding overhead (9–13s).
            </li>
            <li>
              Misclassification analysis of the 21 errors from PCA + SVM identified two consistent failure modes: false positives from dock edges and wake structures mimicking hull signatures, and false negatives from low-contrast ships blending with surrounding water.
            </li>
          </ul>

          {/* Results table */}
          <div className="mt-4 rounded-lg border bg-zinc-50 p-4 text-xs">
            <div className="mb-2 font-semibold text-zinc-900">Pipeline Rankings (Test F1)</div>
            <ResultRow label="PCA + SVM (best)" value="0.9466 — 0.24s inference" />
            <ResultRow label="Baseline SVM" value="0.9364 — 6.22s inference" />
            <ResultRow label="Isomap + SVM" value="0.9243 — 2.15s inference" />
            <ResultRow label="LLE + SVM" value="0.9179 — 2.86s inference" />
            <ResultRow label="PCA + Logistic Regression" value="0.8615 — 0.37s inference" />
            <ResultRow label="Baseline Logistic Regression" value="0.8527 — 0.03s inference" />
          </div>

          <div className="mt-4">
            <ExternalLink href="/reports/aml/project2.pdf">
              IEEE Report (PDF)
            </ExternalLink>
          </div>
        </Card>

        {/* Project 3 */}
        <SectionTitle>Project 3: Multi-Label Lung Disease Classification</SectionTitle>

        <Card
          title="CNN Design, Class Imbalance Mitigation & Threshold Tuning"
          subtitle="Multi-label classification of 14 thoracic diseases from 78,468 chest X-ray images (ChestMNIST, 28×28px) using TensorFlow CNNs with soft loss weighting and validation-set threshold tuning."
        >
          <ul className="list-disc pl-5 leading-6">
            <li>
              The dataset exhibits severe class imbalance with positive rates ranging from 0.18% (Hernia) to 17.7% (Infiltration). A baseline CNN trained with standard binary cross-entropy achieves 94.9% accuracy but collapses to near-zero positive predictions — the all-negative failure mode that makes accuracy a misleading metric here.
            </li>
            <li>
              Designed a two-block CNN: Conv2D(32)→MaxPool→Conv2D(64)→MaxPool→Dense(128, ReLU)→Dropout(0.3)→Dense(14, sigmoid), totaling 422,158 trainable parameters. All three model variants share this architecture.
            </li>
            <li>
              Compared two class-imbalance mitigation strategies: hard weighting (neg/pos ratio — Hernia weight 543.9) caused gradient instability and over-prediction; soft weighting (√(neg/pos) — Hernia weight 23.3) produced stable training with meaningful positive predictions across all 14 classes.
            </li>
            <li>
              Applied threshold tuning across 40 evenly spaced values (0.05–0.50) on the validation set, identifying threshold=0.334 as optimal (val F1=0.278). At the default threshold of 0.5, test F1=0.171; at 0.334, test F1=0.275 — a 60% relative improvement with AUC=0.803 unchanged.
            </li>
            <li>
              Per-class ROC analysis showed strongest discrimination for Effusion (AUC=0.80) and Pneumothorax (AUC=0.75), with Infiltration (AUC=0.65) being the most difficult. Hernia (42 positives in 22,433 test images) achieved only 3 true positives at threshold 0.334, highlighting the fundamental limit of 28×28 resolution for rare conditions.
            </li>
          </ul>

          {/* Results table */}
          <div className="mt-4 rounded-lg border bg-zinc-50 p-4 text-xs">
            <div className="mb-2 font-semibold text-zinc-900">Test Set Results (Soft-Weighted CNN)</div>
            <ResultRow label="Default threshold (0.5) — F1" value="0.171" />
            <ResultRow label="Default threshold (0.5) — Binary Accuracy" value="94.1%" />
            <ResultRow label="Tuned threshold (0.334) — F1" value="0.275 (+61%)" />
            <ResultRow label="Tuned threshold (0.334) — Binary Accuracy" value="88.8%" />
            <ResultRow label="AUC (threshold-independent)" value="0.803" />
            <ResultRow label="Model parameters" value="422,158 (1.61 MB)" />
          </div>

          <div className="mt-4">
            <ExternalLink href="/reports/aml/project3.pdf">
              IEEE Report (PDF)
            </ExternalLink>
          </div>
        </Card>

        <div className="mt-10">
          <Link href="/labs" className="text-blue-600 underline">
            ← Back to Labs & Coursework
          </Link>
        </div>
      </div>
    </Page>
  );
}