export async function fetchJSON (url, option = {}) {
    const header = {Accept: 'application/json', ...option.headers}
    const r = await fetch(url, {...option, headers: header})
    if (r.ok) {
        return r.json()
    }
    throw new Error('Erreur serveur', {cause: r})
}

