
// 2. Estado inicial del idioma (Detectar guardado o por defecto español)
let currentLang = localStorage.getItem('selectedLanguage') || 'es';

const langSwitcherBtn = document.getElementById('lang-switcher');
const langFlag = document.getElementById('lang-flag');
const langText = document.getElementById('lang-text');


const pluginsData = {
    "plugins": [
        {
            "id": "bulk-importer",
            "key_name": "bulk_importer",
            "price_pro": "$39.99",
            "highlights_key": "bulk_importer.highlights"
          },
          {
            "id": "db-optimizer",
            "key_name": "db_optimizer",
            "price_pro": "$49.99",
            "highlights_key": "db_optimizer.highlights"
          }
    ]
};

const pluginsinfo = {
    "plugins": [
        {
            "id": "bulk-importer",
            "key_name": "bulk_importer",                
        },
        {
            "id": "db-optimizer",
            "key_name": "db_optimizer",                
        }
    ]
};

// 3. Función para aplicar los textos a la interfaz
function setLanguage(lang) {
    
    const translations = i18n[lang] ;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.innerHTML = `${i18n[lang][key]}`;
           
            
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

    
    // 1. Llamas a la función de renderizado
    renderPlugins(pluginsData.plugins, translations);

    // 2. Bonus: Renderizas la tabla comparativa con la misma lógica
    renderComparisonTable(translations.plugins.comparison_table);



    // 1. Llamas a la función de renderizado
    renderPluginsHome(pluginsinfo.plugins, translations, lang);
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

