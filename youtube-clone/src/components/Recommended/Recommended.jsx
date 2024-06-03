import "./Recommended.css"

import { API_key,value_converter } from "../../data"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Recommended(props) 
{
    const [apiData,setApiData] = useState([]);
    const fetchData = async()=>
    {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${props.categoryId}&key=${API_key}`;

        await fetch(relatedVideo_url).then(res => res.json()).then(data =>setApiData(data.items));
    }
    useEffect(()=>{
        fetchData();
    },[]);

  return (

    <div className="recommended">

        {apiData.map((item,index)=>{
            return (

                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={index}>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div className="vid-info">
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p>
                       {value_converter(item.statistics.viewCount)} Views
                    </p>
                </div>
            </Link>
    

            )

        })}
        

    </div>
  )
}

// Data from api
// {
//   "kind": "youtube#videoListResponse",
//   "etag": "-5t4Eeft2yxMwIjWSAPZt1eYEc4",
//   "items": [
//     {
//       "kind": "youtube#video",
//       "etag": "tB6ZgmJjxNh1bs6T2QLdhMYh7Cw",
//       "id": "U_LlX4t0A9I",
//       "snippet": {
//         "publishedAt": "2024-06-01T16:00:00Z",
//         "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
//         "title": "$10,000 Every Day You Survive In The Wilderness",
//         "description": "They survived longer than I expected lol\nFeast like a Beast with Zaxby’s new MrBeast Box, served with 4 Chicken Fingerz™, cheddar bites, fries, double Texas toast, two signature sauces, small drink…and a milk chocolate FEASTABLES BAR! Now available at Zaxby's for a limited time. Order today: https://www.zaxbys.com/mrbeast\n\nWant to check out the Galaxy S24? Head over to Samsung https://smsng.us/MrBS24\n\nPlease make sure you have an email address on your profile! \nWe will be reaching out from giveaway@mrbeastbusiness.com if you are selected as a winner!\n\nNew Merch - https://mrbeast.store\n\nCheck out Viewstats! - https://www.viewstats.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\nFor any questions or inquiries regarding this video, please reach out to chucky@mrbeastbusiness.com\n\nMusic Provided by https://www.extrememusic.com\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/U_LlX4t0A9I/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/U_LlX4t0A9I/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/U_LlX4t0A9I/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           },
//           "standard": {
//             "url": "https://i.ytimg.com/vi/U_LlX4t0A9I/sddefault.jpg",
//             "width": 640,
//             "height": 480
//           },
//           "maxres": {
//             "url": "https://i.ytimg.com/vi/U_LlX4t0A9I/maxresdefault.jpg",
//             "width": 1280,
//             "height": 720
//           }
//         },
//         "channelTitle": "MrBeast",
//         "categoryId": "24",
//         "liveBroadcastContent": "none",
//         "defaultLanguage": "en",
//         "localized": {
//           "title": "$10,000 Every Day You Survive In The Wilderness",
//           "description": "They survived longer than I expected lol\nFeast like a Beast with Zaxby’s new MrBeast Box, served with 4 Chicken Fingerz™, cheddar bites, fries, double Texas toast, two signature sauces, small drink…and a milk chocolate FEASTABLES BAR! Now available at Zaxby's for a limited time. Order today: https://www.zaxbys.com/mrbeast\n\nWant to check out the Galaxy S24? Head over to Samsung https://smsng.us/MrBS24\n\nPlease make sure you have an email address on your profile! \nWe will be reaching out from giveaway@mrbeastbusiness.com if you are selected as a winner!\n\nNew Merch - https://mrbeast.store\n\nCheck out Viewstats! - https://www.viewstats.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\nFor any questions or inquiries regarding this video, please reach out to chucky@mrbeastbusiness.com\n\nMusic Provided by https://www.extrememusic.com\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------"
//         },
//         "defaultAudioLanguage": "en"
//       },
//       "contentDetails": {
//         "duration": "PT26M44S",
//         "dimension": "2d",
//         "definition": "hd",
//         "caption": "true",
//         "licensedContent": true,
//         "contentRating": {},
//         "projection": "rectangular"
//       },
//       "statistics": {
//         "viewCount": "49853339",
//         "likeCount": "3545772",
//         "favoriteCount": "0",
//         "commentCount": "196342"
//       }
//     },
//     {
//       "kind": "youtube#video",
//       "etag": "q_FkQNh5X10D_gdBwj3hRqyok50",
//       "id": "l6KyBusa5Wo",
//       "snippet": {
//         "publishedAt": "2024-06-02T00:57:51Z",
//         "channelId": "UCurvRE5fGcdUgCYWgh-BDsg",
//         "title": "BRUTAL KO | Zhilei Zhang vs. Deontay Wilder Highlights (Queensberry vs. Matchroom - Riyadh Season)",
//         "description": "June 1, 2024 -- Zhilei Zhang vs. Deontay Wilder fight highlights from Riyadh, Saudi Arabia | Queensberry vs. Matchroom 5v5 | Riyadh Season\n\n@Turki_alalshikh \n\nSubscribe to our YouTube channel 👉 http://bit.ly/DAZNBoxingYouTube\nSubscribe to the DAZN X Series YouTube channel 👉 https://bit.ly/XSeriesYouTube \n\nSign up to DAZN now 👉 http://bit.ly/DAZNYoutube\n\nFollow DAZN Boxing On Social Media 👇\nTwitter: https://www.twitter.com/DAZNBoxing\nInstagram: https://www.instagram.com/DAZNBoxing\nFacebook: https://www.facebook.com/DAZN\n\nThe DAZN Boxing Show ► https://bit.ly/3EQ70HN\nDAZN Rewind ► https://bit.ly/32iAaRT\n\n#queensberryvsmatchroom #riyadhseason #5v5 #DAZN #DAZNBoxing #Boxing",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/l6KyBusa5Wo/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/l6KyBusa5Wo/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/l6KyBusa5Wo/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           },
//           "standard": {
//             "url": "https://i.ytimg.com/vi/l6KyBusa5Wo/sddefault.jpg",
//             "width": 640,
//             "height": 480
//           },
//           "maxres": {
//             "url": "https://i.ytimg.com/vi/l6KyBusa5Wo/maxresdefault.jpg",
//             "width": 1280,
//             "height": 720
//           }
//         },
//         "channelTitle": "DAZN Boxing",
//         "tags": [
//           "dazn",
//           "boxing",
//           "highlights",
//           "full fight",
//           "ko",
//           "knockout",
//           "top 10",
//           "The DAZN Boxing Show",
//           "Pelea",
//           "Boxeo",
//           "Pugile",
//           "dazn boxing"
//         ],
//         "categoryId": "17",
//         "liveBroadcastContent": "none",
//         "defaultLanguage": "en",
//         "localized": {
//           "title": "BRUTAL KO | Zhilei Zhang vs. Deontay Wilder Highlights (Queensberry vs. Matchroom - Riyadh Season)",
//           "description": "June 1, 2024 -- Zhilei Zhang vs. Deontay Wilder fight highlights from Riyadh, Saudi Arabia | Queensberry vs. Matchroom 5v5 | Riyadh Season\n\n@Turki_alalshikh \n\nSubscribe to our YouTube channel 👉 http://bit.ly/DAZNBoxingYouTube\nSubscribe to the DAZN X Series YouTube channel 👉 https://bit.ly/XSeriesYouTube \n\nSign up to DAZN now 👉 http://bit.ly/DAZNYoutube\n\nFollow DAZN Boxing On Social Media 👇\nTwitter: https://www.twitter.com/DAZNBoxing\nInstagram: https://www.instagram.com/DAZNBoxing\nFacebook: https://www.facebook.com/DAZN\n\nThe DAZN Boxing Show ► https://bit.ly/3EQ70HN\nDAZN Rewind ► https://bit.ly/32iAaRT\n\n#queensberryvsmatchroom #riyadhseason #5v5 #DAZN #DAZNBoxing #Boxing"
//         },
//         "defaultAudioLanguage": "en"
//       },
//       "contentDetails": {
//         "duration": "PT2M24S",
//         "dimension": "2d",
//         "definition": "hd",
//         "caption": "false",
//         "licensedContent": true,
//         "regionRestriction": {
//           "blocked": [
//             "BY",
//             "RU"
//           ]
//         },
//         "contentRating": {},
//         "projection": "rectangular"
//       },
//       "statistics": {
//         "viewCount": "3306027",
//         "likeCount": "32177",
//         "favoriteCount": "0",
//         "commentCount": "12089"
//       }
//     },
//     {
//       "kind": "youtube#video",
//       "etag": "ncxoadN0PcT-3pyHJRTvulr8Hqk",
//       "id": "tldOtltdPXY",
//       "snippet": {
//         "publishedAt": "2024-06-01T21:32:19Z",
//         "channelId": "UCET00YnetHT7tOpu12v8jxg",
//         "title": "Borussia Dortmund vs. Real Madrid: Extended Highlights | UCL Final | CBS Sports Golazo",
//         "description": "The all-time winningest team in UCL history, Real Madrid, face a Borussia Dortmund looking to cap a Cinderella run in the biggest match in club soccer.\n\n#cbssports #uclfinal #championsleague #borussiadortmund #realmadrid \n\nStream every UEFA Champions League match live on Paramount+: http://bit.ly/UCLonParamount\n\nWatch all the extended highlights from the UEFA Champions League HERE: http://bit.ly/ChampionsLeagueExtendedHighlights \n\nWatch the epic UCL punditry from Thierry Henry, Micah Richards, and Jamie Carragher HERE: http://bit.ly/CBSSportsGolazo\n\nFollow us across our social media! \n○ TWITTER: http://twitter.com/CBSSportsGolazo\n○ FACEBOOK: http://facebook.com/CBSSportsGolazo/\n○ INSTAGRAM: http://instagram.com/cbssportsgolazo\n○ TIK TOK: http://tiktok.com/@cbssportsgolazo\n\nSubscribe to our other CBS Sports Golazo channels!\n\nSubscribe to our other CBS Sports Golazo channels!\nhttps://www.youtube.com/@CBSSportsGolazoEurope\nhttps://www.youtube.com/@attackingthird\nhttps://www.youtube.com/@cbssportsgolazo-asia\nhttps://www.youtube.com/CBSSportsGolazo-SouthAmerica\n\nHome of Serie A, NWSL, Concacaf Men's and Women's Nations League and World Cup Qualifiers, Argentina’s Liga Profesional de Fútbol, Brazil’s Campeonato Brasileirão Série A and UEFA men’s club competitions including the Europa League, Europa Conference League and... 🎶 THE CHAAAMPIONSSS 🎶",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/tldOtltdPXY/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/tldOtltdPXY/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/tldOtltdPXY/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           },
//           "standard": {
//             "url": "https://i.ytimg.com/vi/tldOtltdPXY/sddefault.jpg",
//             "width": 640,
//             "height": 480
//           },
//           "maxres": {
//             "url": "https://i.ytimg.com/vi/tldOtltdPXY/maxresdefault.jpg",
//             "width": 1280,
//             "height": 720
//           }
//         },
//         "channelTitle": "CBS Sports Golazo",
//         "tags": [
//           "CBS",
//           "CBSGolazo",
//           "CBSStudio",
//           "ChampionsLeague",
//           "ChampionsLeagueHighlights",
//           "EuropaLeague",
//           "EuropeanFootball",
//           "EuropeanFutbol",
//           "EuropeanSoccer",
//           "Football",
//           "JamieCarragher",
//           "MicahRichards",
//           "SerieAHighlights",
//           "Soccer",
//           "ThierryHenry",
//           "UCL",
//           "UCLHighlights",
//           "UEFA",
//           "UEL"
//         ],
//         "categoryId": "17",
//         "liveBroadcastContent": "none",
//         "localized": {
//           "title": "Borussia Dortmund vs. Real Madrid: Extended Highlights | UCL Final | CBS Sports Golazo",
//           "description": "The all-time winningest team in UCL history, Real Madrid, face a Borussia Dortmund looking to cap a Cinderella run in the biggest match in club soccer.\n\n#cbssports #uclfinal #championsleague #borussiadortmund #realmadrid \n\nStream every UEFA Champions League match live on Paramount+: http://bit.ly/UCLonParamount\n\nWatch all the extended highlights from the UEFA Champions League HERE: http://bit.ly/ChampionsLeagueExtendedHighlights \n\nWatch the epic UCL punditry from Thierry Henry, Micah Richards, and Jamie Carragher HERE: http://bit.ly/CBSSportsGolazo\n\nFollow us across our social media! \n○ TWITTER: http://twitter.com/CBSSportsGolazo\n○ FACEBOOK: http://facebook.com/CBSSportsGolazo/\n○ INSTAGRAM: http://instagram.com/cbssportsgolazo\n○ TIK TOK: http://tiktok.com/@cbssportsgolazo\n\nSubscribe to our other CBS Sports Golazo channels!\n\nSubscribe to our other CBS Sports Golazo channels!\nhttps://www.youtube.com/@CBSSportsGolazoEurope\nhttps://www.youtube.com/@attackingthird\nhttps://www.youtube.com/@cbssportsgolazo-asia\nhttps://www.youtube.com/CBSSportsGolazo-SouthAmerica\n\nHome of Serie A, NWSL, Concacaf Men's and Women's Nations League and World Cup Qualifiers, Argentina’s Liga Profesional de Fútbol, Brazil’s Campeonato Brasileirão Série A and UEFA men’s club competitions including the Europa League, Europa Conference League and... 🎶 THE CHAAAMPIONSSS 🎶"
//         }
//       },
//       "contentDetails": {
//         "duration": "PT14M24S",
//         "dimension": "2d",
//         "definition": "hd",
//         "caption": "false",
//         "licensedContent": true,
//         "regionRestriction": {
//           "allowed": [
//             "US"
//           ]
//         },
//         "contentRating": {},
//         "projection": "rectangular"
//       },
//       "statistics": {
//         "viewCount": "1296418",
//         "likeCount": "16850",
//         "favoriteCount": "0",
//         "commentCount": "2440"
//       }
//     },
//     {
//       "kind": "youtube#video",
//       "etag": "l4PkEh4jsI8Pu6DIbwu_N7fVjHw",
//       "id": "b0hL4mJInm0",
//       "snippet": {
//         "publishedAt": "2024-06-01T17:00:30Z",
//         "channelId": "UCGwu0nbY2wSkW8N-cghnLpA",
//         "title": "I found out I have ADHD.",
//         "description": "shout out to BRAIN CHEMICAL DEFICIENCY!!!! I LOVE DOING ONE THING AND WITHERING AWAY!!!!! \n➤ merch :) https://jaidenanimations.com/\n\n✦ The Team ✦\nAdamX: https://twitter.com/AdamEHKS\nBrooskee: https://twitter.com/brooskeeb\nCiara: https://twitter.com/bresnahammy?lang=en\nCheckers: https://twitter.com/chexchess\nCorin: https://www.instagram.com/corinkeen/?hl=en\nColleen: https://twitter.com/SolarCitrus\nClaudia: https://twitter.com/HiyFi_\nDavidBaronArt: https://twitter.com/DavidBaronArt\nDee Helm: https://twitter.com/DeeRedHelm\nDenny: https://twitter.com/90PercentDenny\nDevon: https://www.youtube.com/@devonkong\nDuckdee: https://twitter.com/duckdeeArt\nEman: https://twitter.com/emanx3c\nFawnlouette: https://www.instagram.com/fawnlouette/\nFlippmeister: https://twitter.com/TheFlippmeister\nJaystarz: https://www.youtube.com/xjaystarzx\nJRF\nKam: https://twitter.com/dettlefff\nLeslie V\nPinkPapi: https://www.youtube.com/@PinkPapiYouTube\nRocketSockit: https://twitter.com/RocketSockit\nTiffanySeng: https://www.youtube.com/@TiffanySeng\nWeiden: https://www.instagram.com/weiden_ww/\nWillard: https://twitter.com/willardworm\nYin \nZangeiti: https://twitter.com/zangeiti\n------------------------------------------------------------------------------------\nSUBSCRIBE for more animations!\nhttps://www.youtube.com/@jaidenanimations\n\nMERCH:\nhttps://jaidenanimations.com/\n\nTWITTER:\nhttps://twitter.com/JaidenAnimation\n\nINSTAGRAM:\nhttps://instagram.com/jaiden_animations\n\nWanna Send Fanart?\nYou can send it to me through Twitter or Instagram (links above)\n------------------------------------------------------------------------------------\nMusic: nintendo (and one genshin one)\n------------------------------------------------------------------------------------\n#jaidenanimations #adhd #animation #jaiden",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/b0hL4mJInm0/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/b0hL4mJInm0/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/b0hL4mJInm0/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           },
//           "standard": {
//             "url": "https://i.ytimg.com/vi/b0hL4mJInm0/sddefault.jpg",
//             "width": 640,
//             "height": 480
//           },
//           "maxres": {
//             "url": "https://i.ytimg.com/vi/b0hL4mJInm0/maxresdefault.jpg",
//             "width": 1280,
//             "height": 720
//           }
//         },
//         "channelTitle": "JaidenAnimations",
//         "tags": [
//           "jaiden",
//           "animations",
//           "jaidenanimation",
//           "jaidenanimations",
//           "animation",
//           "adhd",
//           "adderall",
//           "diagnosis",
//           "autism"
//         ],
//         "categoryId": "1",
//         "liveBroadcastContent": "none",
//         "defaultLanguage": "en",
//         "localized": {
//           "title": "I found out I have ADHD.",
//           "description": "shout out to BRAIN CHEMICAL DEFICIENCY!!!! I LOVE DOING ONE THING AND WITHERING AWAY!!!!! \n➤ merch :) https://jaidenanimations.com/\n\n✦ The Team ✦\nAdamX: https://twitter.com/AdamEHKS\nBrooskee: https://twitter.com/brooskeeb\nCiara: https://twitter.com/bresnahammy?lang=en\nCheckers: https://twitter.com/chexchess\nCorin: https://www.instagram.com/corinkeen/?hl=en\nColleen: https://twitter.com/SolarCitrus\nClaudia: https://twitter.com/HiyFi_\nDavidBaronArt: https://twitter.com/DavidBaronArt\nDee Helm: https://twitter.com/DeeRedHelm\nDenny: https://twitter.com/90PercentDenny\nDevon: https://www.youtube.com/@devonkong\nDuckdee: https://twitter.com/duckdeeArt\nEman: https://twitter.com/emanx3c\nFawnlouette: https://www.instagram.com/fawnlouette/\nFlippmeister: https://twitter.com/TheFlippmeister\nJaystarz: https://www.youtube.com/xjaystarzx\nJRF\nKam: https://twitter.com/dettlefff\nLeslie V\nPinkPapi: https://www.youtube.com/@PinkPapiYouTube\nRocketSockit: https://twitter.com/RocketSockit\nTiffanySeng: https://www.youtube.com/@TiffanySeng\nWeiden: https://www.instagram.com/weiden_ww/\nWillard: https://twitter.com/willardworm\nYin \nZangeiti: https://twitter.com/zangeiti\n------------------------------------------------------------------------------------\nSUBSCRIBE for more animations!\nhttps://www.youtube.com/@jaidenanimations\n\nMERCH:\nhttps://jaidenanimations.com/\n\nTWITTER:\nhttps://twitter.com/JaidenAnimation\n\nINSTAGRAM:\nhttps://instagram.com/jaiden_animations\n\nWanna Send Fanart?\nYou can send it to me through Twitter or Instagram (links above)\n------------------------------------------------------------------------------------\nMusic: nintendo (and one genshin one)\n------------------------------------------------------------------------------------\n#jaidenanimations #adhd #animation #jaiden"
//         },
//         "defaultAudioLanguage": "en"
//       },
//       "contentDetails": {
//         "duration": "PT17M53S",
//         "dimension": "2d",
//         "definition": "hd",
//         "caption": "false",
//         "licensedContent": true,
//         "contentRating": {},
//         "projection": "rectangular"
//       },
//       "statistics": {
//         "viewCount": "3284609",
//         "likeCount": "376424",
//         "favoriteCount": "0",
//         "commentCount": "45528"
//       }
//     },
//     {
//       "kind": "youtube#video",
//       "etag": "RQgl7rbKCqdSUQtDeVMShe5-2WA",
//       "id": "22tVWwmTie8",
//       "snippet": {
//         "publishedAt": "2024-05-31T04:00:02Z",
//         "channelId": "UC20vb-R_px4CguHzzBPhoyQ",
//         "title": "Eminem - Houdini [Official Music Video]",
//         "description": "Eminem - Houdini\nListen: https://eminem.lnk.to/Houdini \n\nhttp://eminem.com\nhttps://www.facebook.com/eminem\nhttps://twitter.com/eminem\nhttps://www.instagram.com/eminem\n\nhttp://shadyrecords.com\nhttps://www.facebook.com/ShadyRecords/\nhttps://twitter.com/shadyrecords\nhttps://www.instagram.com/shadyrecords\n\nDirector: Rich Lee\nDirector of Photography: Chris Probst\nProducers: Justin Diener, Kathy Angstadt, Lisa Arianna\nProduction Company: Synapse\nFinishing: Flawless Post\n \nAI by Metaphysic\nSupervisors: Jo Plaete & Chris Ume\n\n#Eminem #Houdini #THEDEATHOFSLIMSHADY #COUPDEGRÂCE \n\nMusic video by Eminem performing Houdini. © 2024 Marshall B. Mathers III\n\nhttp://vevo.ly/7uCyh7",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/22tVWwmTie8/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/22tVWwmTie8/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/22tVWwmTie8/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           },
//           "standard": {
//             "url": "https://i.ytimg.com/vi/22tVWwmTie8/sddefault.jpg",
//             "width": 640,
//             "height": 480
//           },
//           "maxres": {
//             "url": "https://i.ytimg.com/vi/22tVWwmTie8/maxresdefault.jpg",
//             "width": 1280,
//             "height": 720
//           }
//         },
//         "channelTitle": "EminemVEVO",
//         "tags": [
//           "Eminem",
//           "Houdini",
//           "Hip",
//           "Hop",
//           "エミネム",
//           "에미넴",
//           "埃米纳姆",
//           "Slim Shady"
//         ],
//         "categoryId": "10",
//         "liveBroadcastContent": "none",
//         "localized": {
//           "title": "Eminem - Houdini [Official Music Video]",
//           "description": "Eminem - Houdini\nListen: https://eminem.lnk.to/Houdini \n\nhttp://eminem.com\nhttps://www.facebook.com/eminem\nhttps://twitter.com/eminem\nhttps://www.instagram.com/eminem\n\nhttp://shadyrecords.com\nhttps://www.facebook.com/ShadyRecords/\nhttps://twitter.com/shadyrecords\nhttps://www.instagram.com/shadyrecords\n\nDirector: Rich Lee\nDirector of Photography: Chris Probst\nProducers: Justin Diener, Kathy Angstadt, Lisa Arianna\nProduction Company: Synapse\nFinishing: Flawless Post\n \nAI by Metaphysic\nSupervisors: Jo Plaete & Chris Ume\n\n#Eminem #Houdini #THEDEATHOFSLIMSHADY #COUPDEGRÂCE \n\nMusic video by Eminem performing Houdini. © 2024 Marshall B. Mathers III\n\nhttp://vevo.ly/7uCyh7"
//         }
//       },
//       "contentDetails": {
//         "duration": "PT4M57S",
//         "dimension": "2d",
//         "definition": "hd",
//         "caption": "true",
//         "licensedContent": true,
//         "regionRestriction": {
//           "blocked": [
//             "BY",
//             "IO",
//             "KP",
//             "RU",
//             "SS"
//           ]
//         },
//         "contentRating": {},
//         "projection": "rectangular"
//       },
//       "statistics": {
//         "viewCount": "31415335",
//         "likeCount": "2220538",
//         "favoriteCount": "0",
//         "commentCount": "149332"
//       }
//     }
//   ],
//   "nextPageToken": "CAUQAA",
//   "pageInfo": {
//     "totalResults": 200,
//     "resultsPerPage": 5
//   }
// }
