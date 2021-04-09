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
            "company": "groupon",
            "title": "software development engineer",
            "location": "seattle, WA",
            "start_date": "july 2019"
        },
        "past": [
            {
                "company": "groupon",
                "title": "software development engineering intern",
                "location": "palo alto, CA",
                "start_date": "june 2018",
                "end_date": "september 2018"
            },
            {
                "company": "IDS @ ATT",
                "title": "software and QA intern",
                "location": "los angeles, CA",
                "start_date": "june 2017",
                "end_date": "november 2017"
            }
        ]
    },
    "locations": {
        "current": "seattle, WA",
        "hometown": "los angeles, CA",
        "past": "santa cruz, CA"
    }
}

document.getElementById("rishita_object").innerHTML = JSON.stringify(personal_info, undefined, 2);