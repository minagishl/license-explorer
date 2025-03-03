import { useEffect, useState } from 'preact/hooks';
import { licenses, licenseAliases } from './licenses';
import { Language, LicenseAlias } from './types';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLicenses, setFilteredLicenses] = useState(licenses);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const lowercaseTerm = term.toLowerCase();

    const filtered = licenses.filter((license) => {
      // Search by license name and aliases
      const aliasMatch = licenseAliases.find(
        (alias: LicenseAlias) =>
          alias.name === license.name &&
          alias.aliases.some((a: string) =>
            a.toLowerCase().includes(lowercaseTerm)
          )
      );

      const normalMatch =
        license.name.toLowerCase().includes(lowercaseTerm) ||
        license.description[lang].toLowerCase().includes(lowercaseTerm) ||
        license.permissions[lang].some((p) =>
          p.toLowerCase().includes(lowercaseTerm)
        ) ||
        license.conditions[lang].some((c) =>
          c.toLowerCase().includes(lowercaseTerm)
        ) ||
        license.limitations[lang].some((l) =>
          l.toLowerCase().includes(lowercaseTerm)
        );

      return aliasMatch || normalMatch;
    });
    setFilteredLicenses(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">License Explorer</h1>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded ${
              lang === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleLanguageChange('en')}
          >
            English
          </button>
          <button
            className={`px-4 py-2 rounded ${
              lang === 'ja' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleLanguageChange('ja')}
          >
            Japanese
          </button>
        </div>
      </div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search licenses..."
          className="w-full px-4 py-2 border rounded"
          value={searchTerm}
          onInput={(e) => handleSearch((e.target as HTMLInputElement).value)}
        />
      </div>

      <div className="grid gap-6">
        {filteredLicenses.map((license) => (
          <div key={license.name} className="border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{license.name}</h2>
            <p className="mb-4">{license.description[lang]}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold mb-2">
                  {lang === 'en' ? 'Permissions' : '許可事項'}
                </h3>
                <ul className="list-disc pl-5">
                  {license.permissions[lang].map((permission) => (
                    <li key={permission}>{permission}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">
                  {lang === 'en' ? 'Conditions' : '条件'}
                </h3>
                <ul className="list-disc pl-5">
                  {license.conditions[lang].map((condition) => (
                    <li key={condition}>{condition}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">
                  {lang === 'en' ? 'Limitations' : '制限事項'}
                </h3>
                <ul className="list-disc pl-5">
                  {license.limitations[lang].map((limitation) => (
                    <li key={limitation}>{limitation}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
