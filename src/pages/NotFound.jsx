import { Link } from "react-router-dom";
import { PageHeader, PageSection } from "@/components/Page";

export const NotFound = () => (
  <PageSection>
    <PageHeader
      title="Page"
      accent="not found"
      description="That page doesn't exist. Head back home and pick something from the menu."
    />
    <div className="text-center">
      <Link to="/" className="cosmic-button">
        Back home
      </Link>
    </div>
  </PageSection>
);
