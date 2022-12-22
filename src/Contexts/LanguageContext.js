import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [lang, setLang] = useState(navigator?.language.split("-")[0].toLowerCase() || "en");
  const [translation, setTranslation] = useState(null);

  const setNewTranslation = async (lang) => {
    setTranslation(
      await import(`../constants/languages/${lang}.json`).then((res) => {
        return JSON.parse(JSON.stringify(res));
      })
    );
  };

  useEffect(() => {
    if (!lang) return;
    setNewTranslation(lang);
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, translation }}>{props.children}</LanguageContext.Provider>;
}
