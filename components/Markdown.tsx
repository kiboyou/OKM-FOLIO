// Minimal, dependency-free markdown renderer: supports #/##/### headings and
// paragraphs (blank-line separated). Sufficient for blog content; can be
// swapped for react-markdown later.
export default function Markdown({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/);
  return (
    <>
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("### ")) return <h3 key={i}>{trimmed.slice(4)}</h3>;
        if (trimmed.startsWith("## ")) return <h2 key={i}>{trimmed.slice(3)}</h2>;
        if (trimmed.startsWith("# ")) return <h1 key={i}>{trimmed.slice(2)}</h1>;
        return (
          <p key={i}>
            {trimmed.split("\n").map((line, j) => (
              <span key={j}>
                {line}
                {j < trimmed.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        );
      })}
    </>
  );
}
