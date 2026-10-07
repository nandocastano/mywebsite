import { cn } from "@/lib/utils";
import { SHOW_PLACEHOLDERS } from "@/data/site";

// Rows used on the Publications and Social pages.
// Entries flagged `placeholder` render as dashed stubs (development only);
// entries with `href` are links. An empty list shows `emptyMessage`.
export const ListRows = ({ items, emptyMessage = "Coming soon." }) => {
  const visible = SHOW_PLACEHOLDERS
    ? items
    : items.filter((item) => !item.placeholder);

  if (visible.length === 0) {
    return (
      <p className="py-8 text-left text-foreground/60 border-b border-border">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul>
      {visible.map((item, index) => {
        const row = (
          <div
            className={cn(
              "flex items-start sm:items-baseline justify-between gap-4 sm:gap-6 py-5 border-b",
              item.placeholder
                ? "border-dashed border-border text-foreground/50"
                : "border-border"
            )}
          >
            <div className="text-left min-w-0">
              <h3 className="item-title">{item.title}</h3>
              <p className="mt-0.5 text-sm text-foreground/60">{item.meta}</p>
              {item.placeholder && (
                <span className="label mt-2 block sm:hidden">Placeholder</span>
              )}
            </div>
            {item.placeholder && (
              <span className="label hidden sm:block">Placeholder</span>
            )}
            {item.href && (
              <span aria-hidden="true" className="shrink-0 text-foreground/60">
                ↗
              </span>
            )}
          </div>
        );

        return (
          <li key={`${item.title}-${index}`}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                {row}
              </a>
            ) : (
              row
            )}
          </li>
        );
      })}
    </ul>
  );
};
