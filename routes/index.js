const express = require('express');
const router = express.Router();
const api_helper = require('../helpers/APIHelper')

/* GET home page. */
router.get('/', function(req, res, next) {
    /*
    const resp = {
        total: 935,
        items: [
          {
            files: [
              {
                "url": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/wfo-7.pdf",
                "name": "English"
              }
            ],
            "age_range": null,
            "uid": "2c44a657cf514240974001460e05c42b",
            "weight": null,
            "occupations": null,
            "field_offices": [
              "washingtondc"
            ],
            "locations": null,
            "reward_text": null,
            "hair": null,
            "ncic": null,
            "dates_of_birth_used": null,
            "caution": null,
            "nationality": null,
            "age_min": null,
            "age_max": null,
            "scars_and_marks": null,
            "subjects": [
              "Capitol",
              "Seeking Information"
            ],
            "aliases": null,
            "race_raw": null,
            "suspects": null,
            "publication": "2021-01-07T20:04:00",
            "title": "VIOLENCE AT THE UNITED STATES CAPITOL",
            "coordinates": [
              
            ],
            "hair_raw": null,
            "languages": null,
            "complexion": null,
            "build": null,
            "details": "<p>The Federal Bureau of Investigation’s (FBI) Washington Field Office is seeking the public’s assistance in identifying individuals who made unlawful entry into the United States Capitol Building and assaulted federal law enforcement personnel on January 6, 2021, in Washington, D.C.</p>\r\n<p> </p>",
            "status": "na",
            "legat_names": null,
            "eyes": null,
            "person_classification": "Main",
            "description": "Washington, D.C.\r\nJanuary 6, 2021",
            "images": [
              {
                "large": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-49-afo.png/@@images/image/large",
                "caption": "Photograph #49 - AFO",
                "thumb": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-49-afo.png/@@images/image/thumb",
                "original": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-49-afo.png"
              },
              {
                "large": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-50-afo.png/@@images/image/large",
                "caption": "Photograph #50 - AFO",
                "thumb": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-50-afo.png/@@images/image/thumb",
                "original": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-50-afo.png"
              },
              {
                "large": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-51-afo.png/@@images/image/large",
                "caption": "Photograph #51 - AFO",
                "thumb": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-51-afo.png/@@images/image/thumb",
                "original": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-51-afo.png"
              },
              {
                "large": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-52-afo.png/@@images/image/large",
                "caption": "Photograph #52 - AFO",
                "thumb": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-52-afo.png/@@images/image/thumb",
                "original": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-52-afo.png"
              },
              {
                "large": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-53-afo.png/@@images/image/large",
                "caption": "Photograph #53 - AFO",
                "thumb": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-53-afo.png/@@images/image/thumb",
                "original": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-53-afo.png"
              },
              {
                "large": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-54-afo.png/@@images/image/large",
                "caption": "Photograph #54 - AFO",
                "thumb": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-54-afo.png/@@images/image/thumb",
                "original": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-54-afo.png"
              },
              {
                "large": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-55-afo.png/@@images/image/large",
                "caption": "Photograph #55 - AFO",
                "thumb": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-55-afo.png/@@images/image/thumb",
                "original": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-55-afo.png"
              },
              {
                "large": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-56-afo.png/@@images/image/large",
                "caption": "Photograph #56 - AFO",
                "thumb": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-56-afo.png/@@images/image/thumb",
                "original": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-56-afo.png"
              },
              {
                "large": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-57-afo.png/@@images/image/large",
                "caption": "Photograph #57 - AFO",
                "thumb": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-57-afo.png/@@images/image/thumb",
                "original": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-57-afo.png"
              },
              {
                "large": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-58-afo.png/@@images/image/large",
                "caption": "Photograph #58 - AFO",
                "thumb": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-58-afo.png/@@images/image/thumb",
                "original": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7/photograph-58-afo.png"
              }
            ],
            "possible_countries": null,
            "weight_min": null,
            "additional_information": null,
            "remarks": null,
            "path": "/wanted/seeking-info/violence-at-the-united-states-capitol-7",
            "sex": null,
            "eyes_raw": null,
            "weight_max": null,
            "reward_min": 0,
            "url": "https://www.fbi.gov/wanted/seeking-info/violence-at-the-united-states-capitol-7",
            "possible_states": null,
            "modified": "2021-01-11T18:10:53+00:00",
            "reward_max": 0,
            "race": null,
            "height_max": null,
            "place_of_birth": null,
            "height_min": null,
            "warning_message": null,
            "@id": "https://api.fbi.gov/@wanted-person/2c44a657cf514240974001460e05c42b"
          }]
        }
   
   
    res.send(resp)
  */

    api_helper.make_API_call('https://api.fbi.gov/wanted/v1/list')
    .then(response => {
        res.send(response)       
    })
    .catch(error => {
        res.send(error)
    })
    
});

router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express' });
  /* 
  api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
      res.json(response)
      res.render("test")
  })
  .catch(error => {
      res.send(error)
  })
  */
})

module.exports = router;



