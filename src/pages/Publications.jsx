import { PageHeader, PageSection, SectionHeader } from "@/components/Page";
import { publicationGroups } from "@/data/publications";
import { writing } from "@/data/writing";

// Your own name is shown in bold; "et al." in italics.
const Authors = ({ names }) =>
  names.map((name, i) => (
    <span key={name + i}>
      {name.startsWith("Castaño") ? (
        <strong className="font-semibold text-foreground">{name}</strong>
      ) : name === "et al." ? (
        <em>{name}</em>
      ) : (
        name
      )}
      {i < names.length - 1 ? ", " : ""}
    </span>
  ));

const Entry = ({ item }) => {
  const link = item.href ?? item.doi;
  return (
    <li className="grid grid-cols-1 md:grid-cols-[6rem_1fr] gap-x-8 gap-y-1 py-6 border-b border-border text-left">
      <p className="font-serif text-xl tabular-nums text-primary md:pt-0.5">
        {item.year}
      </p>
      <div>
        <h3 className="item-title">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150 hover:text-primary"
            >
              {item.title}
              {"\u00A0"}
              <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            item.title
          )}
        </h3>
        {item.authors && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            <Authors names={item.authors} />
          </p>
        )}
        <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
          <em>{item.venue}</em>
          {item.detail ? `, ${item.detail}` : ""}.
        </p>
        {item.excerpt && (
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {item.excerpt}
          </p>
        )}
        {item.tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export const Publications = () => (
  <PageSection id="publications">
    <PageHeader
      title="Research"
      accent="Publications"
      description="Journal articles, conference proceedings, and presentations."
    />

    {publicationGroups.map((group, index) => (
      <div key={group.title} className={index > 0 ? "mt-16" : undefined}>
        <SectionHeader title={group.title} />
        <ol>
          {group.items.map((item) => (
            <Entry key={item.title} item={item} />
          ))}
        </ol>
      </div>
    ))}

    <div className="mt-16">
      <SectionHeader
        title="Writing"
        description="Engineering notes and systems thinking — ideas too long for a commit message."
      />
      {writing.length > 0 ? (
        <ol>
          {writing.map((item) => (
            <Entry key={item.title} item={item} />
          ))}
        </ol>
      ) : (
        <p className="py-8 text-left text-foreground/60 border-b border-border">
          Essays and engineering notes are coming soon.
        </p>
      )}
    </div>
  </PageSection>
);
