// Placeholder: points at LinkedIn until a CV PDF exists.
// When you have one, drop it in `public/` (e.g. public/cv.pdf) and set this to "/cv.pdf".
export const CV_URL = "https://www.linkedin.com/in/juan-f-castano-438107204";

// The menu always says "CV". The About-page button says "LinkedIn" until
// CV_URL is a real PDF, then switches to "Download CV" by itself.
const isFile = CV_URL.toLowerCase().endsWith(".pdf");
export const CV_MENU_LABEL = "CV ↓";
export const CV_BUTTON_LABEL = isFile ? "Download CV" : "LinkedIn";
