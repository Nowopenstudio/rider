'use client';
    import { useEffect, useState } from 'react';
    import { parseCookies, setCookie } from 'nookies';
import React from 'react';
    
    // The following cookie name is important because it's Google-predefined for the translation engine purpose
    const COOKIE_NAME = 'googtrans';
    
    // We should know a predefined nickname of a language and provide its title (the name for displaying)
    interface LanguageDescriptor {
        name: string;
        title: string;
    }
    
    
    declare global {
        namespace globalThis {
            var __GOOGLE_TRANSLATION_CONFIG__: {
                languages: LanguageDescriptor[];
                defaultLanguage: string;
            };
        }
    }
    
    const LanguageSwitcher = () => {
        const [currentLanguage, setCurrentLanguage] = useState<string>();
        const [languageConfig, setLanguageConfig] = useState<any>();
    
        // Initialize translation engine
        useEffect(() => {
            // 1. Read the cookie
            const cookies = parseCookies();
            const existingLanguageCookieValue = cookies[COOKIE_NAME];
    
            let languageValue;
            if (existingLanguageCookieValue) {
                // 2. If the cookie is defined, extract a language nickname from there.
                const sp = existingLanguageCookieValue.split('/');
                if (sp.length > 2) {
                    languageValue = sp[2];
                }
            }
            // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue - use default one
            if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
                languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
            }
            if (languageValue) {
                // 4. Set the current language if we have a related decision.
                setCurrentLanguage(languageValue);
            }
            // 5. Set the language config.
            if (global.__GOOGLE_TRANSLATION_CONFIG__) {
                setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
            }
        }, []);
    
        // Don't display anything if current language information is unavailable.
        if (!currentLanguage || !languageConfig) {
            return null;
        }
    
        // The following function switches the current language
        const switchLanguage = (lang: string) => () => {
            // We just need to set the related cookie and reload the page
            // "/auto/" prefix is Google's definition as far as a cookie name
            setCookie(null, COOKIE_NAME, '/auto/' + lang);
            window.location.reload();
        };
    
        return (
            <React.Fragment>
                {languageConfig.languages.map((ld: LanguageDescriptor, i: number) => (
                    <>
                        {currentLanguage === ld.name ||
                        (currentLanguage === 'auto' && languageConfig.defaultLanguage === ld) ? (
                            <div className="px-1 text-black underline"><p className="langOption">
                                {ld.name}
                            </p></div>
                        ) : (
                            <a
                                key={`l_s_${ld}`}
                                onClick={switchLanguage(ld.name)}
                                className="px-1 text-gray"
                            >
                               <p className="langOption"> {ld.name}</p>
                            </a>
                        )}
                    </>
                ))}
           </React.Fragment>
        );
    };
    
    export { LanguageSwitcher, COOKIE_NAME };