const { LinkedInProfileScraper } = require('linkedin-profile-scraper')

export default function handler(req, res) {
    const {query: { user }} = req
    const endpoint = `https://www.linkedin.com/in/${user}`;
    // Plain Javascript
    (async() => {
    const scraper = new LinkedInProfileScraper({
        sessionCookieValue: 'AQEDAQNUJiMAUTz4AAABdy-VECwAAAF3U6GULE4AYkvABa-dUWhEp89fhW8GVb8GDpICEPbgz_XuS8PWlzhR_5GWuRULKqJW-zlYMlGVvehODd9DKZAHq-gv9s1eTKxPO_daiks_20PO232gXYrkY_j5',
        keepAlive: false
    });

    // Prepare the scraper
    // Loading it in memory
    await scraper.setup()

    const result = await scraper.run(endpoint)

    res.json(result)
    })()
}