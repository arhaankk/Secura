import React from "react";

const OutputCard = ({ output }) => {
  // Define a fixed height for the card.
  const cardClasses =
    "bg-white text-black p-6 rounded-xl shadow-md w-full h-[700px] overflow-y-auto";

  if (!output) {
    return (
      <div className={cardClasses}>
        <h2 className="text-xl font-semibold mb-2">Code Analysis Report</h2>
      </div>
    );
  }

  // If the output is an object, format each section nicely.
  if (typeof output === "object") {
    const { cwe, error, fix, explanation } = output;
    return (
      <div className={cardClasses}>
        <h2 className="text-xl font-semibold mb-4">Code Analysis Report</h2>
        {cwe && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              CWE: {cwe.id} - {cwe.title}
            </h3>
            <p>{cwe.description}</p>
          </div>
        )}
        {error && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Error: {error.location} - {error.attack_type}
            </h3>
            <p>{error.description}</p>
          </div>
        )}
        {fix && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Fix</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
              {fix.code}
            </pre>
            <p>{fix.description}</p>
          </div>
        )}
        {explanation && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Explanation</h3>
            <p>{explanation}</p>
          </div>
        )}
      </div>
    );
  }

  // Fallback: if output is not an object, display it as plain text.
  return (
    <div className={cardClasses}>
      <h2 className="text-xl font-semibold mb-2">AI Output</h2>
      <p className="whitespace-pre-wrap">{output}</p>
    </div>
  );
};

export default OutputCard;
