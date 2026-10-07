import { ListRows } from "@/components/ListRows";
import { PageHeader, PageSection, SectionHeader } from "@/components/Page";
import { engagement } from "@/data/engagement";
import { social } from "@/data/social";
import { videos, YOUTUBE_CHANNEL_URL } from "@/data/videos";

export const Social = () => (
  <PageSection id="social">
    <PageHeader
      title="Social"
      accent="& Engagement"
      description="Videos, talks, and where to find me online."
    />

    <SectionHeader
      title="YouTube"
      description="My channel is on its way. Videos will live here."
      link={{ href: YOUTUBE_CHANNEL_URL, label: "@engineernando ↗" }}
    />
    <ListRows items={videos} emptyMessage="Videos are coming soon." />

    <div className="mt-16">
      <SectionHeader
        title="Talks & Engagement"
        description="Talks, teaching, mentoring, and community work."
      />
      <ListRows
        items={engagement}
        emptyMessage="Talks and teaching will be listed here."
      />
    </div>

    <div className="mt-16">
      <SectionHeader title="Online" description="Where to find me." />
      <ListRows items={social} />
    </div>
  </PageSection>
);
