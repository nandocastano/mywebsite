import { ListRows } from "@/components/ListRows";
import { PageHeader, PageSection, SectionHeader } from "@/components/Page";
import { publications } from "@/data/publications";
import { writing } from "@/data/writing";

export const Publications = () => (
  <PageSection id="publications">
    <PageHeader
      title="Selected"
      accent="Publications"
      description="Research outputs and engineering notes."
    />

    <SectionHeader
      title="Research"
      description="Papers, posters, and research outputs."
    />
    <ListRows
      items={publications}
      emptyMessage="Papers and posters will be listed here."
    />

    <div className="mt-16">
      <SectionHeader
        title="Writing"
        description="Engineering notes and systems thinking — ideas too long for a commit message."
      />
      <ListRows
        items={writing}
        emptyMessage="Essays and engineering notes are coming soon."
      />
    </div>
  </PageSection>
);
