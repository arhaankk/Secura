import React from "react";

const OutputCard = ({ output }) => {
  // Determine the card height based on whether output exists.
  const cardHeight = output ? "h-[700px]" : "h-[200px]";
  // Include transition classes for a smooth height change
  const cardClasses = `bg-gray-50 text-black p-6 rounded-xl shadow-md w-full ${cardHeight} overflow-y-auto transition-all duration-500`;

  // If output is not yet available, show the small card without additional content.
  if (!output) {
    return (
      <div className={cardClasses}>
        <h2 className="text-xl font-semibold mb-2">Code Analysis Report</h2>
      </div>
    );
  }

  // When output is available and is an object, display its structured content.
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

  // Fallback: Display output as plain text.
  return (
    <div className={cardClasses}>
      <h2 className="text-xl font-semibold mb-2">AI Output</h2>
      <p className="whitespace-pre-wrap">{output}</p>
    </div>
  );
};

export default OutputCard;
