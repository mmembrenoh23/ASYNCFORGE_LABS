
// 2. Estado inicial del idioma (Detectar guardado o por defecto español)
let currentLang = localStorage.getItem('selectedLanguage') || 'es';

const langSwitcherBtn = document.getElementById('lang-switcher');
const langFlag = document.getElementById('lang-flag');
const langText = document.getElementById('lang-text');

// 3. Función para aplicar los textos a la interfaz
function setLanguage(lang) {
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.innerText = i18n[lang][key];
        }
    });

    // Cambiar los atributos de los formularios si los tuvieras (placeholders)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (i18n[lang] && i18n[lang][key]) {
            element.placeholder = i18n[lang][key];
        }
    });

    // Actualizar el estado visual del botón selector
    if (lang === 'es') {
        langFlag.textContent = '🇺🇸';
        langText.textContent = 'English';
        document.documentElement.lang = 'es';
    } else {
        langFlag.textContent = '🇪🇸';
        langText.textContent = 'Español';
        document.documentElement.lang = 'en';
    }
}

// 4. Escuchador de eventos para alternar el idioma
langSwitcherBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('selectedLanguage', currentLang);
    setLanguage(currentLang);
});

// 5. Renderizar idioma correcto al cargar la página por primera vez
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});