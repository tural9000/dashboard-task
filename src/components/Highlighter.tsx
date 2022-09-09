import IHighlighter from "../types/Highlighter";

const Highlighter = ({ value, search }: IHighlighter) => {
  const test = search && search.replace(/[#-}]/g, "\\$&");

  if (!search || search === "" || !value || value === "") {
    return <span style={{ margin: 0, padding: 0 }}>{value}</span>;
  }

  const parts = value.split(new RegExp(`(${test})`, "gi"));

  return (
    <span style={{ margin: 0, padding: 0 }}>
      {parts.map((part, i) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <mark style={{ backgroundColor: "yellow", display: "inline" }} key={i}>{part}</mark>
        ) : (
          <span style={{ margin: 0, padding: 0 }} key={i}>
            {part}
          </span>
        )
      )}
    </span>
  );
};

export default Highlighter;