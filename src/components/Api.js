import React, { createContext, useState } from 'react'
export const happy=createContext()
const Api = (props) => {

    const [data,setData]=useState([
      {
        "Title" : " Katrina Kaif And Vicky Kaushal Might Share Screen Space In Jee Le Zaraa: Report - NDTV Movies",
        "CategoryName"  : "Bollywood",
        "PublishedDate" : "January 15 2022",
        "ImageAsset"    : "https://c.ndtvimg.com/2022-01/qtklueco_katrina-kaif-_625x300_13_January_22.jpg",
        "BlogContent"   : "The film will also star Priyanka Chopra and Alia Bhatt in the lead roles along with Katrina Kaif",
        "Likes"         : "1000K"
    },
    {
        "Title" : " Tabu to star in Ajay Devgn's 'Bholaa' - the remake of Tamil blockbuster 'Kaithi' - Exclusive! - Times of India",
        "CategoryName"  : "Bollywood",
        "PublishedDate" : "Januaury 14 2022",
        "ImageAsset"    : "https://static.toiimg.com/thumb/msid-88872893,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-46584/88872893.jpg",
        "BlogContent"   : "The Hindi remake of Tamil blockbuster movie Kaithi starring Ajay Devg"
    },
    {
      "id": 4,
      "name": "sports",
      "author": "",
      "title": "Womens IPL 2022 Starting From today",
      "description": "TB vs SW Match Prediction - Read to find out who will win today's match between Traiblazers and Supernovas Only on CricTracker.",
      "url": "https://www.crictracker.com/womens-t20-challenge-2022-tra-vs-sup-match-prediction-who-will-win-todays-match-between-trailblazers-and-supernovas/",
      "urlToImage": "https://www.crictracker.com/wp-content/uploads/2022/05/Smriti-Mandhana.jpg",
      "publishedAt": "2022-05-23T05:37:00Z",
      "content": "The 2022 edition of the Womens IPL is slated to start on May 23 (Monday) at the Maharashtra Cricket Association (MCA) Stadium, Pune. (Photo Source: Twitter/IPL)\r\nThe 2022 edition of the Womens T20 Ch… [+2647 chars]"
      },
       {
      "id": 5,
      "name": "sports",
      "author": "Steven Railston",
      "title": "Cristiano Ronaldo's friend sends cryptic.",
      "description": "Ronaldo's friend has sent a cryptic transfer message after the forward was absent from Man United's match vs Palace.",
      "url": "https://www.manchestereveningnews.co.uk/sport/football/transfer-news/man-united-ronaldo-transfer-message-24031540",
      "urlToImage": "https://i2-prod.manchestereveningnews.co.uk/sport/football/article24031533.ece/ALTERNATES/s1200/1_Ronaldo.png",
      "publishedAt": "2022-05-23T04:30:00Z",
      "content": "Cristiano Ronaldo's friend has sent a cryptic transfer message just hours after Man United lost to Crystal Palace on Sunday.\r\nRonaldo was absent as United lost 1-0 against Crystal Palace due to a hip… [+1286 chars]"
      },
       {
      "id": 6,
      "name": "sports",
      "author": "HT Sports Desk",
      "title": "Sunil Gavaskar hails India's 35-year-old star..",
      "description": "The India star has had an incredible IPL 2022 so far picking 11 wickets in 14 games and scoring 183 runs in 10 innings at a strike rate of 146.40 with one half-century score.",
      "url": "https://www.hindustantimes.com/cricket/he-showing-with-ball-and-bat-that-hello-pick-me-sunil-gavaskar-hails-india-s-35-year-old-star-r-ashwin-as-undroppable-for-2022-t20-world-cup-101653127996255.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/21/1600x900/gavaskar-t20-wc-getty_1650361440744_1653128486243.jpg",
      "publishedAt": "2022-05-23T04:24:25Z",
      "content": "The 2022 Indian Premier League (IPL) has thrown umpteen possibilities for India's probable T20 World Cup squad over the course of the last two months. Besides the mainstay options, veteran cricketers… [+1978 chars]"
      },
       {
      "id": 7,
      "name": "sports",
      "author": "NDTV Sports Desk",
      "title": "Watch: Behind-The-Scenes Look At Manchester City's.",
      "description": "Manchester City finished with 93 points, one ahead of Liverpool as they ended their rivals hopes of winning an unprecedented quadruple.",
      "url": "https://sports.ndtv.com/english-premier-league/watch-behind-the-scenes-look-at-manchester-citys-dressing-room-celebrations-after-premier-league-title-triumph-3000084",
      "urlToImage": "https://c.ndtvimg.com/2022-05/805ordcg_manchester-city-celebrations-twitter_625x300_23_May_22.jpg",
      "publishedAt": "2022-05-23T04:16:23Z",
      "content": "Manchester City had a straightforward task ahead of them on the last day of the season -- beat Aston Villa and be crowned Premier League champions. However, they found themselves trailing 0-2 to Vill… [+1528 chars]"
      },
      {
      "id": 8,
      "name": "sports",
      "author": "HT Sports Desk",
      "title": "Nitish Rana shares cryptic tweet.",
      "description": "Nitish Rana amassed 361 runs in 14 matches for Kolkata Knight Riders during the ongoing IPL edition.",
      "url": "https://www.hindustantimes.com/cricket/kkr-star-nitish-rana-shares-cryptic-tweet-after-missing-out-on-india-s-t20i-berth-for-south-africa-series-101653276928061.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/23/1600x900/nitish_rana_kkr_1617453290070_1653277063956.jfif",
      "publishedAt": "2022-05-23T03:43:20Z",
      "content": "Team selectors gave a maiden call-up for pace sensation Umran Malik and left-arm seamer Arshdeep Singh for the 18-member T20 squad picked for South Africa series on Sunday. While top names like Virat… [+2882 chars]"
      },
      {
      "id": 9,
      "name": "sports",
      "title": "Dinesh Karthik  in the Indian T20I squad.",
      "description": "We spoke to Dinesh Karthik, soon after he was named in the Indian T20I squad for the SA series, and he spoke about his self-belief, hours and days of prepara...",
      "url": "https://www.youtube.com/watch?v=JbHr1isZuis",
      "urlToImage": "https://i.ytimg.com/vi/JbHr1isZuis/maxresdefault.jpg",
      "publishedAt": "2022-05-23T03:30:03Z",
      "content": null
      },
      {
      "id": 10,
      "name": "sports",
      "author": "Nagraj Gollapudi",
      "title": "IPL 2022 playoffs: Super Over to determine results.",
      "description": "Final has a reserve day; table standings will be considered if no play is possible during any of the playoff matches",
      "url": "https://www.espncricinfo.com/story/ipl-2022-playoffs-rules-super-over-to-determine-results-in-case-of-disruption-or-rain-wash-out-1316258",
      "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/338500/338552.6.jpg",
      "publishedAt": "2022-05-23T00:24:56Z",
      "content": "NewsFinal has a reserve day; table standings will be considered if no play is possible during any of the playoff matches"
      },


      // technology
      {
        "id": 11,
        "name": "Technology",
        "author": "HT Tech",
        "title": "5 best travel apps you MUST have on phone.",
        "description": "If you're travelling soon, then these 5 best Travel apps will be proven best travel guides for you! Check the list here.",
        "url": "https://tech.hindustantimes.com/tech/news/5-best-travel-apps-you-must-have-on-phone-from-incredible-india-packpoint-to-google-maps-71653321131316.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2022/05/23/1600x900/IMG_3234_1648264812602_1653321541566.jpg",
        "publishedAt": "2022-05-23T15:59:43Z",
        "content": "Are you planning to travel? Well, when it comes to planning a long vacation or even a road trip, your smartphone is the best buddy that can help you to organise the trip or just show you the sights ."
        },
        
       {
        "id": 12,
        "name": "Technology",
        "author": "Mitchel Broussard",
        "title": "Deals: Amazon Discounting Apple's MagSafe Charger.",
        "description": "Today we're tracking a collection of discounts on Apple's charging accessories, including the MagSafe Charger, MagSafe Duo Charger, and...",
        "url": "https://www.macrumors.com/2022/05/23/deals-amazon-magsafe-charger/",
        "urlToImage": "https://images.macrumors.com/t/18WF9X0TZyzIhIPJ14fSjKIabuY=/2500x/article-new/2022/05/magsafe-charger-new-purple.jpg",
        "publishedAt": "2022-05-23T15:03:44Z",
        "content": "Today we're tracking a collection of discounts on Apple's charging accessories, including the MagSafe Charger, MagSafe Duo Charger, and MagSafe Battery Pack. All of these deals can be found on Amazon… [+1170 chars]"
        },
        {
        "id": 13,
        "name": "Technology",
        "author": "Andrew Myrick",
        "title": "Android apps for Windows get their most significant update yet .",
        "description": "Microsoft brings Android 12L to Windows before it's even available on many smartphones.",
        "url": "https://www.androidcentral.com/apps-software/windows-11-android-12l-apps",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/thimyQpk6bpV82doUaSJ4T-1200-80.jpg",
        "publishedAt": "2022-05-23T14:38:22Z",
        "content": "<ul><li>Microsoft has updated the Windows Subsystem for Android to Android 12L. </li><li>When the Subsystem was originally launched, it relied on Android 11. </li><li>The update is currently availabl… [+3377 chars]"
        },
        {
        "id": 14,
        "name": "Technology",
        "author": "Sarah Perez",
        "title": "Epic Games Bandcamp temporarily wins right .",
        "description": "Epic Games isnt just fighting the app stores over the right to process its own in-app payments in its popular game Fortnite, it’s also taken up its antitrust legal battle with the tech giants via Bandcamp, the internet music company Epic acquired in March. T…",
        "url": "https://techcrunch.com/2022/05/23/epic-games-bandcamp-temporarily-wins-right-to-use-its-own-payments-system-on-google-play/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1147500502.jpg?w=600",
        "publishedAt": "2022-05-23T14:27:24Z",
        "content": "Epic Games isnt just fighting the app stores over the right to process its own in-app payments in its popular game Fortnite, it’s also taken up its antitrust legal battle with the tech giants via Ba… [+3097 chars]"
        },
        {
          "id": 15,
          "name": "Technology",
          "author": "ET Spotlight Special",
          "title": "Wordle #338 Answer and Hint for today's Wordl.",
          "description": "Struggling with wordle today? Don't worry we've got you covered. Read this article to know the hints and answer for Wordle 338.",
          "url": "https://economictimes.indiatimes.com/news/international/us/wordle-338-answer-and-hint-for-todays-wordle-may-23/articleshow/91748832.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-91748810,width-1070,height-580,imgsize-29624,overlay-economictimes/photo.jpg",
          "publishedAt": "2022-05-23T15:04:00Z",
          "content": "As we begin a new week, here is today's Wordle. Well, this first word is an interesting one that may resonate particularly with some players, but it also has an element of challenge that makes it a l… [+1718 chars]"
          },
      

          // hollywood
          {
            "id": 17,
            "name": "Hollywood",
            "author": "Emily Mae Czachor",
            "title": "Chris Pratt And Katherine . .",
            "description": "\"We are so excited to announce the birth of our second daughter.\"",
            "url": "https://www.buzzfeed.com/emilymaeczachor/chris-pratt-and-katherine-schwarzenegger-welcome-baby-no-2",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/23/14/enhanced/9c2e2e069690/original-418-1653317199-3.jpg?crop=1083:567;65,0%26downsize=1250:*",
            "publishedAt": "2022-05-23T15:39:57Z",
            "content": null,
            },
            {
            "id": 18,
            "name": "Hollywood",
            "author": null,
            "title": "Noah Thompson talks winning 20th season.",
            "description": "Thompson is joined by runner-up HunterGirl after winning the singing competition during Sunday night's finale.READ MORE: https://gma.abc/3wBGlvGSUBSCRIBE to ...",
            "url": "https://www.youtube.com/watch?v=wh5-f8PhtcM",
            "urlToImage": "https://i.ytimg.com/vi/wh5-f8PhtcM/hqdefault.jpg",
            "publishedAt": "2022-05-23T15:24:26Z",
            "content": null,
            },
            {
            "id":19,
            "name": "Hollywood",
            "author": "Elizabeth Rosner, Ben Kesslen",
            "title": "Kate Moss will testify in Johnny Depp, ",
            "description": "Model Kate Moss is expected to be called to the stand this week in Johnny Depp’s bombshell defamation trial against Amber Heard, The Post exclusively learned Monday. The British fashion icon, 48, w…",
            "url": "https://nypost.com/2022/05/23/kate-moss-will-testify-in-johnny-depp-amber-heard-trial/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/05/moss-depp-comp.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2022-05-23T15:16:00Z",
            "content": "Model Kate Moss is expected to be called to the stand this week in Johnny Depps bombshell defamation trial against Amber Heard, The Post exclusively learned Monday.\r\nThe British fashion icon, 48, wil… [+3364 chars]"
            },
           {
            "id":20,
            "name": "Hollywood",
            "author": "Tom Breihan",
            "title": "The xx's Oliver Sim Shares New Song \"Hideous",
            "description": "",
            "url": "https://www.stereogum.com/2187613/the-xxs-oliver-sim-shares-new-song-hideous-about-living-with-hiv/music/",
            "urlToImage": "https://static.stereogum.com/uploads/2022/05/Oliver-Sim-1653315421.jpg",
            "publishedAt": "2022-05-23T14:41:00Z",
            "content": "The xxs Oliver Sim has been living in the public eye for well over a decade, but he’s always been a fairly reserved, mysterious presence. Today, Sim has told the world something that he’s been keepi… [+4808 chars]"
            },
            {
            "id": 21,
            "name": "Hollywood",
            "author": "Ellen Durney",
            "title": "Fans Think Kim Kardashian May Have Sneakily.",
            "description": "Its no secret that Pete made a number of references to Ye during his eight-year run on SNL. However, it seems Kim wasn’t going to let that prevent her from celebrating his departure from the show.",
            "url": "https://www.buzzfeednews.com/article/ellendurney/kim-kardashian-kanye-west-reference-in-pete-davidson-snl",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/23/14/enhanced/4e5322ead11c/original-12592-1653315741-17.jpg?crop=1244:651;5,11%26downsize=1250:*",
            "publishedAt": "2022-05-23T14:39:49Z",
            "content": null
            },
            {
            "id": 22,
            "name": "Hollywood",
            "author": null,
            "title": "Johnny Depp Trial: Cross-examination of doctor regarding Depp's .",
            "description": "The cross-examination of an orthopedic doctor who reviewed graphic photos and discussed Johnny Depp’s hand injury.DETAILS: https://bit.ly/3sQ31r8Subscribe to...",
            "url": "https://www.youtube.com/watch?v=pvu8-DSgKqI",
            "urlToImage": "https://i.ytimg.com/vi/pvu8-DSgKqI/hqdefault.jpg",
            "publishedAt": "2022-05-23T14:00:16Z",
            "content": null
            },
            {
            "id": 23,
            "name": "Hollywood",
            "author": "Riley Cardoza",
            "title": "Ellen DeGeneres seemingly reveals.",
            "description": "DeGeneres, who is the actress neighbor, told her audience that she often hears Lawrences “sweet” conversations with her little one.",
            "url": "https://pagesix.com/2022/05/23/jennifer-lawrences-babys-sex-seemingly-revealed-on-ellen/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/05/jennifer-lawrence-ellen-degeners-66.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2022-05-23T13:54:00Z",
            "content": "Is the cat out of the bag?\r\nEllen DeGeneres appeared to reveal the sex of Jennifer Lawrences 3-month-old baby when the actress made her final appearance on “The Ellen DeGeneres Show.”\r\n“People don’t… [+2326 chars]"
            },
            {
              "id": 24,
              "name": "Bollywood",
              "author": "Vickey Lalwani",
              "title": "Karan Johar's 50th Birthday: Hires ",
              "description": "Party means food and desserts. Karan Johar is a foodie himself, so is he not going to have the best? Well, Karan ha",
              "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/karan-johars-50th-birthday-hires-renowned-marut-sikka-and-harsha-kilachand-to-make-the-best-food-and-desserts-exclusive/articleshow/91762332.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-91762537,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-39002/91762537.jpg",
              "publishedAt": "2022-05-24T08:21:00Z",
              "content": "Party means food and desserts. Karan Johar is a foodie himself, so is he not going to have the best? Well, Karan has allocated the food and dessert-making for his 50th birthday bash at YRF to two top… [+1398 chars]"
              },
              {
              "id": 25,
              "name": "Bollywood",
              "author": "Krishna Priya Pallavi",
              "title": "Hina Khan wins again at the.",
              "description": "Cannes Film Festival 2022: Hina Khan delighted her followers today by dropping new pictures from the French Riviera. The star won the fashion game again with a magical look in a turquoise blue thigh-slit dress paired with a see-through slip. | Fashion Trends",
              "url": "https://www.hindustantimes.com/lifestyle/fashion/hina-khan-wins-again-at-cannes-2022-with-magical-look-in-thigh-slit-dress-paired-with-see-through-slip-all-pics-here-101653378854730.html",
              "urlToImage": "https://images.hindustantimes.com/img/2022/05/24/1600x900/hina_khan_1653379334646_1653379341455.jpg",
              "publishedAt": "2022-05-24T08:03:48Z",
              "content": "Cannes 2022: Actor Hina Khan is having a 'very good morning' in the French Riviera and all of this while winning the fashion game at the 75th annual Cannes Film Festival. The actor made her second ap… [+2232 chars]"
              },
               {
              "id": 26,
              "name": "Bollywood",
              "author": "Entertainment Desk",
              "title": "Hansal Mehtas Scam 2003 teaser: Gagan Dev Riar .",
              "description": "Hansal Mehta is gearing up to bring the story of Abdul Karim Telgi, the brain behind the stamp paper scam. Veteran theatre actor Gagan Dev Riar will play the lead role.",
              "url": "https://indianexpress.com/article/entertainment/web-series/scam-2003-teaser-gagan-dev-riar-abdul-karim-telgi-watch-teaser-video-7933198/",
              "urlToImage": "https://images.indianexpress.com/2022/05/abdul-telgi-scam-2003.jpg",
              "publishedAt": "2022-05-24T07:14:35Z",
              "content": "After the mammoth success of Scam 1992: The Harshad Mehta Story, Hansal Mehta announced a new season last year. Titled Scam 2003: The Telgi Story, the show is set in the life of Abdul Karim Telgi, a … [+1562 chars]"
              },
               {
              "id": 27,
              "name": "Bollywood",
              "author": "Trisha Sengupta",
              "title": "Panchayat Season 2: Appreciation posts to ",
              "description": "Panchayat Season 2 posts on Twitter, including memes, are creating quite a buzz. | Trending",
              "url": "https://www.hindustantimes.com/trending/panchayat-season-2-appreciation-posts-to-memes-on-series-take-over-twitter-101653373496334.html",
              "urlToImage": "https://images.hindustantimes.com/img/2022/05/24/1600x900/Memes_Panchayat_Season_2_Viral_Twitter_1653373746335_1653373752826.jpg",
              "publishedAt": "2022-05-24T06:58:56Z",
              "content": "Panchayat Season 2, a sequel of the show by same name, is creating a buzz online for all the right reasons. The performances of the lead characters of the show and the storyline are winning peoples h… [+1417 chars]"
              },
              {
              "id": 28,
              "name": "Bollywood",
              "author": "IANS",
              "title": "Amber Heard lost $50mn due to `fake ",
              "description": "An entertainment industry expert has testified that Hollywood actress Amber Heard lost $45 million to $50 million in endorsements and TV and film income over claims that she faked domestic violence allegations against former husband and star Johnny Depp.",
              "url": "https://zeenews.india.com/people/amber-heard-lost-50mn-due-to-fake-domestic-violence-claims-by-estranged-husband-johnny-depp-2466735.html",
              "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/05/24/1046002-amber-heard-johnny-depp.jpg",
              "publishedAt": "2022-05-24T06:56:16Z",
              "content": "Los Angeles: An entertainment industry expert has testified that Hollywood actress Amber Heard lost $45 million to $50 million in endorsements and TV and film income over claims that she faked domest… [+3583 chars]"
              },
              {
              "id": 29,
              "name": "Bollywood",
              "author": null,
              "title": "Dancer Creates Fusion Of Bharatnatyam .",
              "description": "Internet is full of content from creative people. From simultaneously sketching five superhero figures to realistic tattoos, many artists have awed the world with their incredible art.",
              "url": "https://www.ndtv.com/offbeat/dancer-creates-fusion-of-bharatnatyam-and-hip-hop-internet-in-awe-3003783",
              "urlToImage": "https://c.ndtvimg.com/2022-05/vp4e74d_bharatnatyam-girls_625x300_24_May_22.jpg",
              "publishedAt": "2022-05-24T06:32:48Z",
              "content": "Choreographer Usha Jey and two other women shows a mix of graceful Bharatnatyam and freestyle hip-hop.\r\nInternet is full of content from creative people. From simultaneously sketching five superhero … [+1619 chars]"
              },
              {
              "id": 30,
              "name": "Bollywood",
              "author": "etimes.in",
              "title": "Richa Chadha reacts to people celebrating .",
              "description": "Kangana Ranaut starrer 'Dhaakad' was released alongside Kartik Aaryan's 'Bhool Bhulaiyaa 2' on Friday. Despite an i",
              "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/richa-chadha-reacts-to-people-celebrating-the-failure-of-kangana-ranauts-dhaakad-says-they-are-expressing-dissent-in-whatever-way-they-can/articleshow/91758804.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-91758905,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-38894/91758905.jpg",
              "publishedAt": "2022-05-24T05:53:00Z",
              "content": null
              },
             {
              "id": 31,
              "name": "Bollywood",
              "author": "Amit Gurbaxani",
              "title": "Justin Bieber Is Taking His World Tour to India - Billboard",
              "description": "The \"Sorry\" star is returning for his first show in the country since 2017.",
              "url": "https://www.billboard.com/music/concerts/justin-bieber-tour-new-delhi-india-concert-justice-1235074341/",
              "urlToImage": "https://www.billboard.com/wp-content/uploads/2022/05/justin-bieber-mumbai-2017-live-billboard-1548.jpg?w=1024",
              "publishedAt": "2022-05-24T05:30:41Z",
              "content": "MUMBAI  As part of his ongoing Justice world tour, Justin Bieber will perform in India on Oct. 18, it was announced today. The show, which is being co-promoted by AEG Presents and Indian entertainme… [+1803 chars]"
              },
             {
              "id": 32,
              "name": "Bollywood",
              "author": "Manisha Mandal",
              "title": "The Archies: Suhana Khan stuns in an orange dress on ",
              "description": "The Archies: Suhana Khan is currently in Ooty as she is shooting for her debut film along with Agastya and Khushi Kapoor. The girl took to her Instagram and dropped her 22nd birthday celebration pictures and it was all things love.",
              "url": "https://www.bollywoodlife.com/photos/the-archies-suhana-khan-stuns-in-an-orange-dress-on-her-birthday-celebrates-with-agastya-nanda-and-khushi-kapoor-view-pics-entertainment-news-2081313/",
              "urlToImage": "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/MicrosoftTeams-image-2022-05-24T105049.699-600x315.jpg",
              "publishedAt": "2022-05-24T05:29:32Z",
              "content": "Suhana Khan celebrated her 22nd birthday with her first co-stars Agastya Nanda and Khushi Kapoor and more as they are in Ooty shooting for their first film The Archies directed by Zoya Akhtar. The gi… [+162 chars]"
              },
             {
              "id":32,
              "name": "Bollywood",
              "author": "Shantonil Nag",
              "title": "After Maybach, Priyanka Chopra receives a .",
              "description": "Priyanka Chopra updated her social media profiles with a new gift from Nick Jonas. Priyanka received a Polaris General All-Terrain-Vehicle. It was gifted to her by Nick Jonas. A couple of years ago, Nick Jonas gifted a Mercedes-Maybach S650 to Priyanka Chopra…",
              "url": "https://www.cartoq.com/after-maybach-priyanka-chopra-receives-a-polaris-atv-as-a-gift-from-nick-jonas/",
              "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/05/priyanka-chopra-polaris-gift-1.jpg",
              "publishedAt": "2022-05-24T05:09:33Z",
              "content": "Priyanka Chopra updated her social media profiles with a new gift from Nick Jonas. Priyanka received a Polaris General All-Terrain-Vehicle. It was gifted to her by Nick Jonas. A couple of years ago, … [+2723 chars]"
              },
              {
 
                "id": 33,
                "name": "Business",
               
                "author": "Moneycontrol News",
                "title": "Grasim Industries Q4 Result | Consolidated.",
                "description": "Revenue from operations surged 18% year-on-year (YoY) to Rs 28,811 crore against Rs 24,402 crore last year in the same quarter.",
                "url": "https://www.moneycontrol.com/news/business/earnings/grasim-industries-q4-result-consolidated-net-profit-surges-62-yoy-to-rs-2777-crore-8567341.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/11/grasim-industries-770x433.jpg",
                "publishedAt": "2022-05-24T10:31:11Z",
                "content": "Grasim Industries | CMP: Rs 1,401 | The stock was down over 3 percent after the company declared its March quarter earnings. Aditya Birla Group's flagship firm posted a consolidated net profit of Rs … [+3519 chars]"
              },
               {
               
                "id": 34,
                "name": "Business",
               
                "author": "Moneycontrol News",
                "title": "Government may limit sugar exports, ",
                "description": "The new move to curb sugar export is being seen by some as a new risk to global food prices",
                "url": "https://www.moneycontrol.com/news/business/economy/government-may-limit-sugar-exports-shares-take-a-sharp-knock-8563071.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2018/04/commodities_mclink_30apr-770x433.jpg",
                "publishedAt": "2022-05-24T08:43:15Z",
                "content": "Shares of sugar companies took a sharp knock after a Bloomberg news flash said the government was looking to limit exports of sugar. This was close on the heels of India slapping a ban on shipping wh… [+3105 chars]"
               },
               {
               
                "id": 35,
                "name": "Business",
               
                "author": "Gaurav Sharma",
                "title": "Aether Industries IPO is open: ",
                "description": "Brokerages are confident about the company’s prospects, given its inherent strengths and the growth likely in the Indian chemical industry. They have assigned a “subscribe” or “subscribe with caution” rating to the issue",
                "url": "https://www.moneycontrol.com/news/business/ipo/aether-industries-ipo-is-open-should-you-subscribe-8565871.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/05/IPO-2-770x433.jpg",
                "publishedAt": "2022-05-24T08:32:02Z",
                "content": "Aether Industries, a manufacturer of speciality chemicals, opened its initial public offer on May 24. The company makes advanced intermediates and speciality chemicals involving complex and different… [+4714 chars]"
               },
               {
               
                "id": 36,
                "name": "Business",
               
                "author": "Sonny",
                "title": "EXCLUSIVE: Toyota's Hybrid SUV To Rival .",
                "description": "Compact SUVs debut scheduled for June, will also have a badge-engineered Maruti Suzuki counterpart    Toyota’s upcoming compact SUV, code-named D22, will be called the Hyryder.    Will feature a highly localised hybrid powertrain to offer higher fuel economy…",
                "url": "https://www.cardekho.com/india-car-news/exclusive-toyotas-hybrid-suv-to-rival-creta-will-be-called-hyryder-29117.htm",
                "urlToImage": "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/29116/1653376763126/GeneralNews.jpg",
                "publishedAt": "2022-05-24T07:10:00Z",
                "content": "<ul><li>Toyotas upcoming compact SUV, code-named D22, will be called the Hyryder.\r\n</li><li>Will feature a highly localised hybrid powertrain to offer higher fuel economy.\r\n</li><li>The Hyryder will … [+1951 chars]"
               },
               {
               
                "id": 37,
                "name": "Business",
               
                "author": "Livemint",
                "title": "Lic To Consider Dividend Along With ",
                "description": "LIC share price was trading over a per cent higher in afternoon deals",
                "url": "https://www.livemint.com/market/stock-market-news/lic-to-consider-dividend-along-with-q4-results-next-week-11653375500402.html",
                "urlToImage": "https://images.livemint.com/img/2022/05/24/600x338/INDIA-LIC-39_1653375575549_1653375592800.jpg",
                "publishedAt": "2022-05-24T07:02:59Z",
                "content": "Life Insurance Corporation of India (LIC) on Tuesday informed that its board will meet next week on Monday to consider and approve the audited Annual Financial Results (standalone and consolidated) f… [+1125 chars]"
               },
               {
               
                "id":39,
                "name": "Business",
               
                "author": "Paarth Khatri",
                "title": "Hyundai Grand i10 Nios Corporate Edition ",
                "description": "Hyundai recently launched the Corporate Edition of the Grand i10 Nios. It is priced at Rs. 6.29 lakhs ex-showroom for the manual gearbox and Rs. 6.98 lakhs ex-showroom for the AMT gearbox. The new variant is based on the Magna variant.  Here, is a walkaround …",
                "url": "https://www.cartoq.com/hyundai-grand-i10-nios-corporate-edition-in-a-walkaround-video/",
                "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/05/hyundai-grand-i10-nios-corporate-edition-featured.jpg",
                "publishedAt": "2022-05-24T06:41:22Z",
                "content": "Hyundai recently launched the Corporate Edition of the Grand i10 Nios. It is priced at Rs. 6.29 lakhs ex-showroom for the manual gearbox and Rs. 6.98 lakhs ex-showroom for the AMT gearbox. The new va… [+2774 chars]"
               },
               {
               
                "id":40,
                "name": "Business",
               
                "author": "Seshan Vijayraghvan",
                "title": "Anand Mahindra Says Rohit Shetty ",
                "description": "The internet is filled with meme posts about director Rohit Shetty's love for blowing up Mahindra SUVs in his movies. One such post regarding the upcoming Scorpio-N recently caught the eye of Mahindra Group's Chairman, Anand Mahindra, and his reply is even fu…",
                "url": "https://www.carandbike.com/news/anand-mahindra-says-rohit-shetty-will-need-a-nuclear-bomb-to-blow-up-the-scorpio-n-3003673",
                "urlToImage": "https://c.ndtvimg.com/2022-05/hqahgfm4_anand-mahindra-says-rohit-shetty-will-need-a-nuclear-bomb-to-blow-up-the-scorpion_625x300_24_May_22.jpg",
                "publishedAt": "2022-05-24T06:25:03Z",
                "content": "Anyone who is familiar with the films of director Rohit Shetty, like the Singham series, Dilwale or Chennai Express, will know his love for blowing up cars for action sequences. In fact, a great deal… [+3889 chars]"
               
               },
               {
                "id": 41,
                "name": "Health",
               
                "author": "Nivedita Mishra",
                "title": "Best vitamins B supplements: ",
                "description": "The much-needed B group of vitamins is the building block of our body that gives us energy and boost our immunity.",
                "url": "https://www.hindustantimes.com/shop-now/health-and-beauty/best-vitamins-b-supplements-give-boost-to-your-immunity-energy-levels-101653379309663.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/05/24/400x225/Vitamin_B_Complex_1653388761451_1653388816199.jpg",
                "publishedAt": "2022-05-24T11:21:00Z",
                "content": null
               },
               {
                "id": 42,
                "name": "Health",
                "author": "Ridhi Suri",
                "title": "Monkeypox Vs Coronavirus: Which ",
                "description": "Experts believe that the monkeypox virus is less dangerous and lethal than COVID. Compared to the Monkeypox virus, COVID-19 is more dangerous as it can spread rapidly from one person to another.",
                "url": "https://www.indiatvnews.com/health/monkeypox-vs-coronavirus-which-one-is-a-bigger-threat-are-the-two-alike-covid19-2022-05-24-778988",
                "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/05/pjimage-2022-05-24t161125-1653388888.jpg",
                "publishedAt": "2022-05-24T10:42:37Z",
                "content": "At a time when the world is already struggling to deal with COVID19, reports of a monkeypox outbreak have raised concerns. Both the viruses are equally dangerous on the ground of transmission. Accord… [+3247 chars]"
               },
               {
                "id": 43,
                "name": "Health",
               
                "author": null,
                "title": "US releasing Monkeypox vaccine - 11Alive",
                "description": "The CDC is trying to get ahead of a potential outbreak.",
                "url": "https://www.youtube.com/watch?v=WXKi90jFJ7w",
                "urlToImage": "https://i.ytimg.com/vi/WXKi90jFJ7w/hqdefault.jpg",
                "publishedAt": "2022-05-24T10:34:04Z",
                "content": null
               
               },
               {
               
                "id": 44,
                "name": "Health",
               
                "author": "ABP News Bureau",
                "title": "No Need To Fear Over Spread Of Monkeypox, ",
                "description": "The monkeypox outbreak is currently reported in countries including the UK, the US and Canada.",
                "url": "https://news.abplive.com/tamil-nadu/no-need-to-fear-over-spread-of-monkeypox-says-tn-health-minister-ma-subramanian-1533452",
                "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/05/23/d76b1109b262faf8ce3877ca925d0a16_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
                "publishedAt": "2022-05-24T10:19:21Z",
                "content": "Chennai: Tamil Nadu Health Minister Ma Subramanian requested the people of the state to remain without fear over the spread of monkeypox fever. He also said that the transmission rate of the fever is… [+1591 chars]"
               },
               {
              
              
                "id": 45,
                "name": "Health",
               
                "author": null,
                "title": "Monkeypox Outbreak I Cases expected to",
                "description": "Monkeypox is a disease of close contact and the risk to the general public remains low. So says the head of the World Health Organization's Smallpox Secretar...",
                "url": "https://www.youtube.com/watch?v=o15SWsupr40",
                "urlToImage": "https://i.ytimg.com/vi/o15SWsupr40/maxresdefault.jpg",
                "publishedAt": "2022-05-24T10:18:02Z",
                "content": null
               
               },
               {
                "id": 46,
                "name": "Health",
               
                "author": "Mashum",
                "title": "Drug Consumption, Abuse, And Addiction",
                "description": "Since the beginning of the 2000s, the issue of drug addiction has become highly prominent. Please keep reading to find out more about it.",
                "url": "https://www.devdiscourse.com/article/health/2048512-drug-consumption-abuse-and-addiction-trends-across-the-united-states",
                "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/24_05_2022_15_37_15_1312848.jpg?width=920&format=jpeg",
                "publishedAt": "2022-05-24T10:15:20Z",
                "content": "Introduction\r\nUnlike the eastern section of the world, the western part, especially the USA, has put many stringent drug policies in place. However, the government was (or is) still unable to prevent… [+6234 chars]"
               },
               {
               
                "id": 47,
                "name": "Health",
               
                "author": null,
                "title": "Monkeypox Conspiracy Theories, ",
                "description": "Monkeypox has symptoms similar to smallpox but is far less severe, with most people recovering within weeks.",
                "url": "https://www.ndtv.com/world-news/monkeypox-conspiracy-theories-blaming-us-for-spread-swirl-in-china-3004566",
                "urlToImage": "https://c.ndtvimg.com/2022-05/jtn9hrmo_monkeypox-virus-reuters-650_625x300_24_May_22.jpg",
                "publishedAt": "2022-05-24T10:02:21Z",
                "content": "Over 100 suspected and confirmed cases have been reported in Europe, US outbreak. (Reuters Photo)\r\nChinese social media users are saying that the United States could be the source of the rise in monk… [+2535 chars]"
               },
               {
               
               
                "id": 48,
                "name": "Health",
               
                "author": "ET HealthWorld",
                "title": "Breakthrough Covid more likely in cancer, ",
                "description": "Breakthrough Covid-19 cases resulting in infections, hospitalisations and deaths are significantly more likely in cancer and Alzheimer's patients, according to two new studies.",
                "url": "https://health.economictimes.indiatimes.com/news/diagnostics/breakthrough-covid-more-likely-in-cancer-alzheimers-patients/91763377",
                "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-91763377,imgsize-22544,width-1200,height-628,overlay-ethealthworld/breakthrough-covid-more-likely-in-cancer-alzheimer-s-patients.jpg",
                "publishedAt": "2022-05-24T10:00:00Z",
                "content": "New York, BreakthroughCovid-19 cases resulting in infections, hospitalisations and deaths are significantly more likely in cancer and Alzheimer's patients, according to two new studies.\"breakthrough … [+2434 chars]"
               
               },
               {
               "id": 51,
               "name": "Bollywood",
               "author": null,
               "title": "Dancer Creates Fusion Of Bharatnatyam ",
               "description": "Internet is full of content from creative people. From simultaneously sketching five superhero figures to realistic tattoos, many artists have awed the world with their incredible art.",
               "url": "https://www.ndtv.com/offbeat/dancer-creates-fusion-of-bharatnatyam-and-hip-hop-internet-in-awe-3003783",
               "urlToImage": "https://c.ndtvimg.com/2022-05/vp4e74d_bharatnatyam-girls_625x300_24_May_22.jpg",
               "publishedAt": "2022-05-24T06:32:48Z",
               "content": "Choreographer Usha Jey and two other women shows a mix of graceful Bharatnatyam and freestyle hip-hop.\r\nInternet is full of content from creative people. From simultaneously sketching five superhero … [+1619 chars]"
               },
               {
                "id": 51,
                "name": "Health",
               
                "author": "Nivedita Mishra",
                "title": "Best vitamins B supplements: Give ",
                "description": "The much-needed B group of vitamins is the building block of our body that gives us energy and boost our immunity.",
                "url": "https://www.hindustantimes.com/shop-now/health-and-beauty/best-vitamins-b-supplements-give-boost-to-your-immunity-energy-levels-101653379309663.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/05/24/400x225/Vitamin_B_Complex_1653388761451_1653388816199.jpg",
                "publishedAt": "2022-05-24T11:21:00Z",
                "content": null
               },
               {
               "id": 51,
               "name": "sports",
               "title": "Dinesh Karthik  in the Indian T20I squad.",
               "description": "We spoke to Dinesh Karthik, soon after he was named in the Indian T20I squad for the SA series, and he spoke about his self-belief, hours and days of prepara...",
               "url": "https://www.youtube.com/watch?v=JbHr1isZuis",
               "urlToImage": "https://i.ytimg.com/vi/JbHr1isZuis/maxresdefault.jpg",
               "publishedAt": "2022-05-23T03:30:03Z",
               "content": null
               },
               {
               "id": 52,
               "name": "Health",
              
               "author": null,
               "title": "Monkeypox Conspiracy Theories,",
               "description": "Monkeypox has symptoms similar to smallpox but is far less severe, with most people recovering within weeks.",
               "url": "https://www.ndtv.com/world-news/monkeypox-conspiracy-theories-blaming-us-for-spread-swirl-in-china-3004566",
               "urlToImage": "https://c.ndtvimg.com/2022-05/jtn9hrmo_monkeypox-virus-reuters-650_625x300_24_May_22.jpg",
               "publishedAt": "2022-05-24T10:02:21Z",
               "content": "Over 100 suspected and confirmed cases have been reported in Europe, US outbreak. (Reuters Photo)\r\nChinese social media users are saying that the United States could be the source of the rise in monk… [+2535 chars]"
              },
              {
              "id": 52,
              "name": "Business",
             
              "author": "Livemint",
              "title": "Lic To Consider Dividend Along ",
              "description": "LIC share price was trading over a per cent higher in afternoon deals",
              "url": "https://www.livemint.com/market/stock-market-news/lic-to-consider-dividend-along-with-q4-results-next-week-11653375500402.html",
              "urlToImage": "https://images.livemint.com/img/2022/05/24/600x338/INDIA-LIC-39_1653375575549_1653375592800.jpg",
              "publishedAt": "2022-05-24T07:02:59Z",
              "content": "Life Insurance Corporation of India (LIC) on Tuesday informed that its board will meet next week on Monday to consider and approve the audited Annual Financial Results (standalone and consolidated) f… [+1125 chars]"
             },
             {
             "id": 52,
             "name": "sports",
             "title": "Dinesh Karthik  in the Indian T20I squad.",
             "description": "We spoke to Dinesh Karthik, soon after he was named in the Indian T20I squad for the SA series, and he spoke about his self-belief, hours and days of prepara...",
             "url": "https://www.youtube.com/watch?v=JbHr1isZuis",
             "urlToImage": "https://i.ytimg.com/vi/JbHr1isZuis/maxresdefault.jpg",
             "publishedAt": "2022-05-23T03:30:03Z",
             "content": null
             },

    ])
  return (
    <div>
      <happy.Provider value={[data,setData]}>
        {props.children }
      </happy.Provider>
    </div>
  )
}

export default Api
