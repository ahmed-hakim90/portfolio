import { Media, Meta, Schema } from "@once-ui-system/core";
import { about, baseURL, home, person, social } from "@/resources";
import { getPosts } from "@/utils/utils";
import { resolveVisibleProjectLink } from "@/lib/project-links";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Tilt3D } from "@/components/Tilt3D";
import styles from "./page.module.scss";

const process = [
  ["01", "Discover", "Understand the operators, constraints, and outcome."],
  ["02", "Design", "Map the workflow into a clear product experience."],
  ["03", "Build", "Engineer the interface, data, and integrations."],
  ["04", "Verify", "Test critical paths, permissions, and edge cases."],
  ["05", "Release", "Deploy confidently, observe, and improve."],
] as const;

const layers = [
  ["Interface", "Responsive, accessible product experiences."],
  ["Logic", "Clear workflows, validation, and reliable state."],
  ["Integrations", "Secure APIs, commerce, payments, and automation."],
  ["Infrastructure", "Data, deployment, monitoring, and performance."],
] as const;

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const projects = getPosts(["src", "app", "work", "projects"])
    .filter((project) => project.metadata.featured)
    .sort((a, b) => (a.metadata.featuredOrder ?? 99) - (b.metadata.featuredOrder ?? 99))
    .slice(0, 6)
    .map((project) => ({
      title: project.metadata.title,
      category: project.metadata.category,
      role: project.metadata.role,
      summary: project.metadata.summary,
      image: project.metadata.images[0],
      heroImage: project.slug === "masar-valet"
        ? project.metadata.images[0]
        : project.metadata.images[1] || project.metadata.images[0],
      stack: project.metadata.stack?.slice(0, 4) ?? [],
      href: `/work/${project.slug}`,
      liveUrl: resolveVisibleProjectLink(project.slug, project.metadata.link, project.metadata.visibility),
    }));

  const masar = projects[0];
  const whatsapp = social.find((item) => item.icon === "whatsapp")?.link;
  const email = social.find((item) => item.icon === "email")?.link;

  return (
    <main className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Frontend Engineer · Operational Products · Remote</p>
          <h1>{person.name}</h1>
          <p className={styles.lead}>
            I build complete operational products — commerce platforms, SaaS tools, POS and ERP systems, and internal workflows teams rely on every day.
          </p>
          <p className={styles.intro}>
            I turn unclear handoffs into responsive interfaces, connect them to secure data and integrations, verify the critical journey, and take the product to a reliable release.
          </p>
          <p className={styles.meta}>Based in Cairo · Arabic and English · Available for selected remote products</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#selected-work">View projects <span>→</span></a>
            <a className={styles.secondaryButton} href={whatsapp || email || "/about"}>Contact me</a>
          </div>
          <a className={styles.focusLink} href="/work/masar-valet">
            <span>Current focus</span> Masar Valet <b>↗</b>
          </a>
        </div>

        {masar?.heroImage && (
          <div className={styles.heroVisual} aria-label="Masar Valet product interface">
            <div className={styles.heroHalo} />
            <Tilt3D maxTilt={5} className={styles.heroTilt}>
              <div className={styles.heroScreen}>
                <Media priority src={masar.heroImage} alt="Masar Valet operations interface" aspectRatio="16 / 10" sizes="(max-width: 768px) 92vw, 680px" />
              </div>
            </Tilt3D>
            <div className={styles.screenShadow} />
          </div>
        )}
      </section>

      <section className={styles.proofStrip} aria-label="Professional profile">
        <p>Complete products</p><p>Commerce + operations</p><p>Arabic + English RTL</p><p>Remote from Cairo</p>
      </section>

      <section id="selected-work" className={styles.workSection}>
        <ScrollReveal>
          <header className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>Selected systems</p><h2>Six operational products.<br />Built for real daily use.</h2></div>
            <p>End-to-end ownership across product, interface, data, and integrations — from first workflow to reliable release.</p>
          </header>
        </ScrollReveal>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delayMs={index * 50}>
              <article className={styles.projectRow}>
                <div className={styles.projectNumber}>{String(index + 1).padStart(2, "0")}</div>
                <div className={styles.projectCopy}>
                  <p className={styles.projectCategory}>{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Focus</dt><dd>{project.stack.join(" · ")}</dd></div></dl>
                  <div className={styles.projectLinks}>
                    <a href={project.href}>Read case study →</a>
                    {project.liveUrl && <a href={project.liveUrl}>Live product ↗</a>}
                  </div>
                </div>
                <Tilt3D maxTilt={4} className={styles.projectTilt}>
                  <a href={project.href} className={styles.projectVisual} aria-label={`Open ${project.title} case study`}>
                    {project.image && <Media src={project.image} alt={`${project.title} product interface`} aspectRatio="16 / 10" sizes="(max-width: 768px) 92vw, 620px" />}
                  </a>
                </Tilt3D>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={styles.depthSection}>
        <ScrollReveal>
          <div className={styles.depthCopy}>
            <p className={styles.eyebrow}>Engineering depth</p>
            <h2>Built on a disciplined,<br />layered foundation.</h2>
            <p>A frontend that respects the full system — from interface decisions to secure data and reliable deployment.</p>
            <a href="/about">Explore how I engineer →</a>
          </div>
        </ScrollReveal>
        <div className={styles.layerStage}>
          {projects.slice(0, 4).map((project, index) => (
            <div key={project.title} className={styles.layer} style={{ "--layer": index } as React.CSSProperties}>
              {project.image && <Media src={project.image} alt="" aspectRatio="16 / 10" sizes="520px" />}
            </div>
          ))}
        </div>
        <ol className={styles.layerNotes}>
          {layers.map(([title, detail], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{title}</strong><p>{detail}</p></div></li>)}
        </ol>
      </section>

      <section className={styles.processSection}>
        <ScrollReveal><div className={styles.processTitle}><p className={styles.eyebrow}>How I work</p><h2>A clear process.<br />From problem to product.</h2></div></ScrollReveal>
        <ol className={styles.processRail}>
          {process.map(([number, title, detail]) => <li key={title}><span>{number}</span><i /><h3>{title}</h3><p>{detail}</p></li>)}
        </ol>
      </section>

      <section className={styles.cta}>
        <p className={styles.eyebrow}>Selected collaborations</p>
        <h2>Let&apos;s build something<br />useful and lasting.</h2>
        <div><p>Have a complex operational problem worth solving? Let&apos;s turn it into a dependable product.</p><div className={styles.actions}><a className={styles.primaryButton} href={whatsapp || email || "/about"}>Start a conversation <span>→</span></a><a className={styles.secondaryButton} href="/work">All projects</a></div></div>
      </section>
    </main>
  );
}
