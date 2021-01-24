const express = require('express');
const cors = require('cors');
const app = express();
const { LinkedInProfileScraper } = require('linkedin-profile-scraper');

app.use(cors());

app.get('/user/:userId', function (req, res) {

    const endpoint = `https://www.linkedin.com/in/${req.params['userId']}`;

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


})



app.listen(process.env.PORT || 3001)