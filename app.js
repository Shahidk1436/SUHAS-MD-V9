{
  "name": "SUHAS-MD-V8",
  "description": "Javascript WhatsApp bot made by Suhas Pathsindu",
  "logo": "https://telegra.ph/file/fa2ef290194c0cf1f8af3.jpg",
  "keywords": ["bot"],
  "success_url": "/",

  "env": {
    "SESSION_ID": {
      "description": "7YNyyTbY#f85vMK0P_l0idbXk_XwUzj0PbzZ5YPfx270oBhPwQCs",
      "required": true
    },  

    "ALIVE_IMG": {
      "description": "Put your alive img here.",
      "required": true
    },
    
    "ALIVE_MSG": {
      "description": "Put your alive msg here.",
      "required": true
    }   
},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
