import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { rust } from "@codemirror/lang-rust";
import { xml } from "@codemirror/lang-xml";
import { sql } from "@codemirror/lang-sql";
import { php } from "@codemirror/lang-php";
import { Extension } from "@codemirror/state";

export const getLanguageExtension = (fileName: string): Extension => {
  const ext = fileName.split(".")?.pop()?.toLowerCase();

  switch (ext) {
    case "js":
      return javascript();
    case "jsx":
      return javascript({ jsx: true });
    case "ts":
      return javascript({ typescript: true });
    case "tsx":
      return javascript({ typescript: true, jsx: true });
    case "html":
      return html();
    case "css":
      return css();
    case "json":
      return json();
    case "md":
      return markdown();
    case "py":
      return python();
    case "java":
      return java();
    case "cpp":
      return cpp();
    case "rs":
      return rust();
    case "xml":
      return xml();
    case "sql":
      return sql();
    case "php":
      return php();
    default:
      return [];
  }
};
