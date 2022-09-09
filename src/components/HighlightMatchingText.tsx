import React from "react";

const HighlightMatchingText = (text: string, matchingText: string) => {
  const matchRegex = RegExp(matchingText, "gi");

  const matches = [...text.matchAll(matchRegex)];

  return text.split(matchRegex).map((nonBoldText, index, arr) => (
    <React.Fragment key={index}>
      {nonBoldText}
      {index + 1 !== arr.length && <mark>{matches[index]}</mark>}
    </React.Fragment>
  ));
};

export default HighlightMatchingText;