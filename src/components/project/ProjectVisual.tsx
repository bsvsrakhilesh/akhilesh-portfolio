import { ArrowRight } from "lucide-react";
import type { Project } from "../../types/project";

export default function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <figure className={`project-visual project-visual-${project.accent ?? "cyan"} ${compact ? "project-visual-compact" : ""}`}>
      <div className="project-visual-heading">
        <span>System diagram</span>
        <strong>{project.visual.label}</strong>
      </div>
      <ol className="project-visual-flow">
        {project.visual.steps.map((step, index) => (
          <li key={step}>
            <div className="project-visual-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
            {index < project.visual.steps.length - 1 && <ArrowRight aria-hidden="true" size={18} />}
          </li>
        ))}
      </ol>
      {!compact && <figcaption>{project.visual.caption}</figcaption>}
    </figure>
  );
}
