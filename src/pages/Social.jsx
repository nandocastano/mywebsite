import { ListRows } from "@/components/ListRows";
import { PageHeader, PageSection, SectionHeader } from "@/components/Page";
import { engagement } from "@/data/engagement";
import { social } from "@/data/social";
import { YOUTUBE_CHANNEL_URL } from "@/data/videos";

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
      link={{ href: YOUTUBE_CHANNEL_URL, label: "@engineernando ↗︎" }}
    />

    <div className="mt-16">
      <SectionHeader
        title="Talks & Engagement"
        description="Talks, teaching, mentoring, and community work."
      />
      <ListRows items={engagement} />
    </div>

    <div className="mt-16">
      <SectionHeader title="Online" description="Where to find me." />
      <ListRows items={social} />
    </div>
  </PageSection>
);
