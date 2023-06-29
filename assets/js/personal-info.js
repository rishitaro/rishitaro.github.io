var personal_info = {
    "name": "rishita roy",
    "education": {
        "school": "university of california, santa cruz",
        "degree": {
            "major": "computer science",
            "type": "bachelor of science",
            "awarded": "march 2019"
        }
    },
    "work": {
        "current": {
            "company": "spotify",
            "title": "software engineer II",
            "location": "seattle, WA",
            "start_date": "october 2022"
        },
        "previous": [{
            "company": "groupon",
            "location": "seattle, WA",
            "dates": "july 2019 → october 2022",
        }]
    },
    "locations": {
        "current": "seattle, WA",
        "hometown": "los angeles, CA",
        "past": "santa cruz, CA"
    }
}

document.getElementById("rishita_object").innerHTML = JSON.stringify(personal_info, undefined, 2);