import {invokeApi} from "./api";

export const buildYear = (year) => (year.to > year.from) ? `${year.from}-${year.to}` : year.from;

/**
 * Combine the search fields into a Spotify friendly query
 * @param formData
 * @returns {string}
 */
export const buildQuery = (formData) => {
    let {query, released, genre, year} = formData;
    let q = [query];
    if (genre && genre.length) {
        q.push(`genre:"${genre}"`)
    }
    switch (released) {
        case 'new_release':
            q.push('tag:new');
            break;
        case 'year_range':
            q.push(`year:"${buildYear(year)}"`);
            break;
    }
    return q.join(" ");
};

/**
 * Query spotify.
 * Using offset and limit it would be possible to later add pagination
 */
export async function querySpotify(formData) {
    let body = {
        query: buildQuery(formData),
        type: formData.type.join(","),
        offset: 0
    };
    return await invokeApi({method: "POST", path: "/search", body});
}
