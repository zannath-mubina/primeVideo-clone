import axios from "axios";
const MAX_TRAILERS = 8;

export const getTrailers = async (name, lang) => {
    let page = 1;
    let trailerDetails = [];
    while (trailerDetails.length < MAX_TRAILERS) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}discover/${name}`, {
                params: {
                    api_key: `${process.env.REACT_APP_TMDB_API_KEY}`,
                    include_adult: false,
                    include_video: true,
                    with_original_language: lang,
                    language: "en-US",
                    page: page,
                    sort_by: "popularity.desc"
                }
            });

            const trailersInResponse = res.data.results;
            
            const selectedTrailers = (await Promise.all(trailersInResponse.map(async(trailer) => {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}${name}/${trailer.id}/videos`, {
                    params: {
                        api_key: `${process.env.REACT_APP_TMDB_API_KEY}`
                    }
                });

                const trailerVdo = response.data.results.find((vdo) => (vdo.key && vdo.site === "YouTube" && vdo.type === "Trailer"));
                if(trailerVdo) {
                    return {
                        poster: trailer.backdrop_path || trailer.poster_path,
                        key: trailerVdo.key,
                        name: trailer.title || trailer.original_title || trailer.original_name,
                        summary: trailer.overview,
                        vote: trailer.vote_count
                    }
                }
            }))).filter(Boolean);

            trailerDetails.push(...selectedTrailers);
        } catch {
            console.error("Failed to fetch videos");
            return "Failed to fetch videos";
        }
        page++;
    }

    return trailerDetails;
}