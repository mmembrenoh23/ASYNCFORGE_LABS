/**
 * Renderiza los plugins dinámicamente basándose en el idioma seleccionado.
 * @param {string} lang - 'en' o 'es'
 * @param {Array} pluginsList - Datos de plugins.json
 * @param {Object} i18n - Objeto con tus traducciones
 */
function renderPlugins(pluginsList, idioms) {
    const container = document.getElementById('plugins-grid');
    const langData = idioms.plugins;

    if( container == null){
        return;
    }

    document.getElementById("intro").innerHTML= langData.intro;
    document.getElementById("plugin-table-title").innerHTML=langData.plugin_table_title;

    container.innerHTML = pluginsList.map(plugin => {
        const data = langData[plugin.key_name];
        
        // Genera la lista de highlights
        const highlightsHtml = data.highlights
            .map(h => `<li class="text-sm text-gray-300">✅ ${h}</li>`)
            .join('');

        // Retorna el HTML de la tarjeta
        return `
            <div class="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[#11caa0] transition-all">
                <h2 class="text-2xl font-bold text-white mb-2">${data.title}</h2>
                <p class="text-gray-400 mb-6">${data.description}</p>
                <ul class="space-y-2 mb-8">${highlightsHtml}</ul>
                <button class="w-full bg-[#11caa0] text-gray-900 font-bold py-3 rounded-lg">
                    Download Pro - ${plugin.price_pro}
                </button>
            </div>
        `;
    }).join('');
}

function renderPluginsHome(pluginsList, idioms, lang) {
    const container = document.getElementById('plugins-grid-home');
    const langData = idioms.plugins;
    if( container == null){
        return;
    }

    console.log(lang)

    document.getElementById("featured-plugins-title").innerHTML= langData.plugin_table_title;
    container.innerHTML = pluginsList.map(plugin => {
        const data = langData[plugin.key_name];
        
       
        // Retorna el HTML de la tarjeta
        return `
            <div class="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:border-brandSuccess transition">
                <h3 class="text-xl font-bold text-white mb-2">${data.title}</h3>
                <p class="text-gray-400 mb-4">${data.description}</p>
                <a href="plugins.html" class="text-brandSuccess font-semibold">${lang == 'en'? 'Read More':"Leer mas"} → </a>
            </div>
            
        `;
    }).join('');
}



function renderComparisonTable(data) {
    const tableData = data;
    const container = document.getElementById('table-container');

    if( container == null){
        return;
    }

    let html = `
        <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse bg-white">
                <thead>
                    <tr class="bg-gray-800 text-white">
                        ${tableData.headers.map(h => `<th class="p-3 border">${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${tableData.rows.map(row => `
                        <tr class="border-b hover:bg-gray-50">
                            <td class="p-3 font-bold text-gray-700">${row.feature}</td>
                            <td class="p-3 text-center">${row.bf}</td>
                            <td class="p-3 text-center text-blue-600 font-bold">${row.bp}</td>
                            <td class="p-3 text-center">${row.of}</td>
                            <td class="p-3 text-center text-green-600 font-bold">${row.op}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>`;
    container.innerHTML = html;
}