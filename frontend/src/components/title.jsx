import React, { useEffect, useState } from 'react';

const phrases = [
  "Welcome to Secura",
  "Your AI code guardian.",
  "Code vulnerabilities? We see them coming.",
  "Push safely. Deploy confidently."
];

const TitleMessage = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white whitespace-nowrap">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TitleMessage;
