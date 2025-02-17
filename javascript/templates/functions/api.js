export async function fetchJSON(url, option = {}) {
    const header = { Accept: 'application/json', ...option.headers };
    const r = await fetch(url, { ...option, headers: header });

    if (r.ok) {
        const rdata = await r.json();
        return rdata;
    }

    console.error(`Erreur serveur: ${r.status} ${r.statusText}`);
    throw new Error(`Erreur serveur (${r.status})`, { cause: r });
}
