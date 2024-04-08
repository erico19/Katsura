const { join } = require('path');
const { readdirSync, lstatSync } = require('fs');

/**
 * Retrieve language codes from the 'locales' directory.
 * @returns {string[]} Array of language codes.
 */
function getLanguageCodes() {
  const localesPath = join(__dirname, 'locales');
  const languageCodes = readdirSync(localesPath)
    .filter((fileName) => {
      const joinedPath = join(localesPath, fileName);
      const isDirectory = lstatSync(joinedPath).isDirectory();
      return isDirectory;
    });
  return languageCodes;
}

/**
 * Organize the language codes array with the default language first.
 * @param {string[]} languageCodes Array of language codes.
 * @param {string} defaultLanguage Default language code.
 * @returns {string[]} Organized array of language codes.
 */
function organizeLanguages(languageCodes, defaultLanguage) {
  const languages = [...languageCodes]; // Create a copy of the original array
  const defaultLanguageIndex = languages.indexOf(defaultLanguage);
  if (defaultLanguageIndex !== -1) {
    // Remove the default language from its original position and add it to the beginning
    languages.splice(defaultLanguageIndex, 1);
    languages.unshift(defaultLanguage);
  }
  return languages;
}

// Default language code
const defaultLanguage = 'en';

// Retrieve language codes from the 'locales' directory
const languageCodes = getLanguageCodes();

// Organize the language codes array
const languages = organizeLanguages(languageCodes, defaultLanguage);

module.exports = {
  languages,
  defaultLanguage,
};
