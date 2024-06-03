// import React from 'react'
import "./PlayVideo.css"
// import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
// import jack from "../../assets/jack.png"
// import userprofile from "../../assets/user_profile.jpg"
import { useState,useEffect } from "react"
import {API_key,value_converter,time_converter} from "../../data.js"
import { useParams } from "react-router-dom"

export default function PlayVideo(props) 
{
  const {videoId} = useParams();

  const [apiData,setApiData] = useState(null);

  const [channelData,setChannelData] = useState(null);

  const [commentData,setCommentData] = useState([]);


  const fetchOtherData = async()=>{

    // Fetching Channel Data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_key}` ;

    await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));

    // Fetching Comment Data 

    const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${props.videoId}&key=${API_key}`;
    await fetch(commentData_url).then(res=>res.json()).then(data=>setCommentData(data.items));

    }




  const fetchVideoData = async()=>{
    // Fetching Videos Data
    const videDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoId}&regionCode=IN&key=${API_key}`;

    await fetch(videDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
  }

  useEffect(()=>{

    fetchVideoData();
  
  },[videoId]);

  useEffect(()=>{

    fetchOtherData();
  
  },[apiData])





  return (
    <div className="play-video">

      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe  src={`https://www.youtube.com/embed/${props.videoId}?autoplay=0`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>

        <div className="play-video-info">
          <p>
            {apiData ? value_converter(apiData.statistics.viewCount) : "Views" } &bull; {apiData ? time_converter(apiData.snippet.publishedAt) : "Date Here"}
          </p>

          <div>
            
            <span>
              <img src={like} alt="" />
              {apiData ? value_converter(apiData.statistics.likeCount) :"Likes"}
            </span>
            <span>
              <img src={dislike} alt="" />
              
            </span>
            <span>
              <img src={share} alt="" />
              Share
            </span>
            <span>
              <img src={save} alt="" />
              Watch later
            </span>

          </div>
        
        </div>

        <hr />

        <div className="publisher">
          <img src={channelData ? channelData.snippet.thumbnails.default.url : "Logo"} alt="" />
          <div>
            <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
            <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "Subscriber"}</span>
          </div>
          <button>Subscribe</button>
        </div>

        <div className="vid-description">
          <p>
            {apiData ? apiData.snippet.description.slice(0,550) + "..." :"Channel Description" }
          </p>
          {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, qui!</p> */}
          <hr />
          <h4>{apiData ? value_converter(apiData.statistics.commentCount) + " Comments" : ""}</h4>

          {
          commentData.map((item,index)=>{

            return(

              <div className="comment" key={index}>
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago </span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                  <span></span>
                </div>
              </div>
            </div>    
          
            )

          })}
      </div>

      
    </div>
  )
}
// {
//   "kind": "youtube#videoListResponse",
//   "etag": "ITL9CcEGX7jNumIgN6v7cwQG_lE",
//   "items": [
//     {
//       "kind": "youtube#video",
//       "etag": "cm0TFch_P73wSBD78YxgjJCy-EM",
//       "id": "Ks-_Mh1QhMc",
//       "snippet": {
//         "publishedAt": "2012-10-01T15:27:35Z",
//         "channelId": "UCAuUUnT6oDeKwE6v1NGQxug",
//         "title": "Your body language may shape who you are | Amy Cuddy | TED",
//         "description": "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           },
//           "standard": {
//             "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/sddefault.jpg",
//             "width": 640,
//             "height": 480
//           },
//           "maxres": {
//             "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/maxresdefault.jpg",
//             "width": 1280,
//             "height": 720
//           }
//         },
//         "channelTitle": "TED",
//         "tags": [
//           "Amy Cuddy",
//           "TED",
//           "TEDTalk",
//           "TEDTalks",
//           "TED Talk",
//           "TED Talks",
//           "TEDGlobal",
//           "brain",
//           "business",
//           "psychology",
//           "self",
//           "success"
//         ],
//         "categoryId": "22",
//         "liveBroadcastContent": "none",
//         "defaultLanguage": "en",
//         "localized": {
//           "title": "Your body language may shape who you are | Amy Cuddy | TED",
//           "description": "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED"
//         },
//         "defaultAudioLanguage": "en"
//       },
//       "contentDetails": {
//         "duration": "PT21M3S",
//         "dimension": "2d",
//         "definition": "hd",
//         "caption": "true",
//         "licensedContent": true,
//         "contentRating": {},
//         "projection": "rectangular"
//       },
//       "statistics": {
//         "viewCount": "24912181",
//         "likeCount": "434902",
//         "favoriteCount": "0",
//         "commentCount": "9852"
//       }
//     }
//   ],
//   "pageInfo": {
//     "totalResults": 1,
//     "resultsPerPage": 1
//   }
// }




// {
//   "kind": "youtube#channelListResponse",
//   "etag": "3cV_9uEPDUmjXWpNhyIpKru8rdg",
//   "pageInfo": {
//     "totalResults": 1,
//     "resultsPerPage": 5
//   },
//   "items": [
//     {
//       "kind": "youtube#channel",
//       "etag": "HAQ09expkfEkP4PjGe4iWbcf27c",
//       "id": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
//       "snippet": {
//         "title": "Google for Developers",
//         "description": "Subscribe to join a community of creative developers and learn the latest in Google technology — from AI and cloud, to mobile and web.\n\nExplore more at developers.google.com\n\n",
//         "customUrl": "@googledevelopers",
//         "publishedAt": "2007-08-23T00:34:43Z",
//         "thumbnails": {
//           "default": {
//             "url": "https://yt3.ggpht.com/vY3uYs71A_JwVcigyd2tVRHwuj05_cYktQSuzRCxta-9VFxHFtKjGrwG9WFi8ijXITBL3CwPQQ=s88-c-k-c0x00ffffff-no-rj",
//             "width": 88,
//             "height": 88
//           },
//           "medium": {
//             "url": "https://yt3.ggpht.com/vY3uYs71A_JwVcigyd2tVRHwuj05_cYktQSuzRCxta-9VFxHFtKjGrwG9WFi8ijXITBL3CwPQQ=s240-c-k-c0x00ffffff-no-rj",
//             "width": 240,
//             "height": 240
//           },
//           "high": {
//             "url": "https://yt3.ggpht.com/vY3uYs71A_JwVcigyd2tVRHwuj05_cYktQSuzRCxta-9VFxHFtKjGrwG9WFi8ijXITBL3CwPQQ=s800-c-k-c0x00ffffff-no-rj",
//             "width": 800,
//             "height": 800
//           }
//         },
//         "localized": {
//           "title": "Google for Developers",
//           "description": "Subscribe to join a community of creative developers and learn the latest in Google technology — from AI and cloud, to mobile and web.\n\nExplore more at developers.google.com\n\n"
//         },
//         "country": "US"
//       },
//       "contentDetails": {
//         "relatedPlaylists": {
//           "likes": "",
//           "uploads": "UU_x5XG1OV2P6uZZ5FSM9Ttw"
//         }
//       },
//       "statistics": {
//         "viewCount": "274648990",
//         "subscriberCount": "2370000",
//         "hiddenSubscriberCount": false,
//         "videoCount": "6194"
//       }
//     }
//   ]
// }







// Comments Api

// {
//   "kind": "youtube#commentThreadListResponse",
//   "etag": "gL9Ys-7ag4j1V8dmFAy04ilQSs0",
//   "nextPageToken": "Z2V0X25ld2VzdF9maXJzdC0tQ2dnSWdBUVZGN2ZST0JJRkNKMGdHQUVTQlFpSElCZ0FFZ1VJcUNBWUFCSUZDSWdnR0FBU0JRaUpJQmdBR0FBaURnb01DSkdEbmFBR0VMRG9yTmdE",
//   "pageInfo": {
//     "totalResults": 20,
//     "resultsPerPage": 20
//   },
//   "items": [
//     {
//       "kind": "youtube#commentThread",
//       "etag": "xWTsQmtTp7qtujwPD5eBNWs6ics",
//       "id": "UgwXM56v-878pDMuUsB4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "cGvNaM2FWcVDCSpglGuZHNHAnfw",
//           "id": "UgwXM56v-878pDMuUsB4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "\u003ca href=\"https://www.youtube.com/watch?v=_VB39Jo8mAQ&amp;t=405\"\u003e6:45\u003c/a\u003e Wow, glad your kids are so familiar with throwing money at strippers at such a young age. It&#39;ll serve them well.",
//             "textOriginal": "6:45 Wow, glad your kids are so familiar with throwing money at strippers at such a young age. It'll serve them well.",
//             "authorDisplayName": "@1QKGLH",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_myylSiSYfsymfqteUHnd8tLCjDqUAGPq-_czzHycImzg=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@1QKGLH",
//             "authorChannelId": {
//               "value": "UCrCDii_RMcnwEhzNiJ5hXkA"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-04-28T12:05:10Z",
//             "updatedAt": "2024-04-28T12:05:10Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "ykQLwD-FXi5eIVUWl404EYS_xDU",
//       "id": "UgxzQM1vXPdRqY1k2bB4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "hBTGsfb_6iS7OK6s4pIcHmlVU88",
//           "id": "UgxzQM1vXPdRqY1k2bB4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "The mask wearing jabbed cashless 666 society,... read the Bible.",
//             "textOriginal": "The mask wearing jabbed cashless 666 society,... read the Bible.",
//             "authorDisplayName": "@etienne7774",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mAqJb4G--_K5GIUtPf7ZaCiBexE5zTjIWyvGvZ7wo=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@etienne7774",
//             "authorChannelId": {
//               "value": "UCRJwf2D6LgN5rgGX7VBeh4w"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-02-07T12:14:00Z",
//             "updatedAt": "2024-02-07T12:14:00Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "FPUfxuYawCHsfCCmaNclv4-8l40",
//       "id": "UgxJRPGIe1qACkU9vrV4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "nCRsnDbiQvf9mQQYdNCGkxl4ZKs",
//           "id": "UgxJRPGIe1qACkU9vrV4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "This video was 8 years ago, but what happened to Sam Bankman Fried last year is what said in the video.",
//             "textOriginal": "This video was 8 years ago, but what happened to Sam Bankman Fried last year is what said in the video.",
//             "authorDisplayName": "@computerscienceengineering8710",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_nh3Kue1Esrdh8RbcZxg9xBiEyNjrQIeS1Xfb4a_uBiaw=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@computerscienceengineering8710",
//             "authorChannelId": {
//               "value": "UCgSXLFaEvKBWbwjjHo3W6CQ"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-01-24T04:18:03Z",
//             "updatedAt": "2024-01-24T04:18:03Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 2,
//         "isPublic": true
//       },
//       "replies": {
//         "comments": [
//           {
//             "kind": "youtube#comment",
//             "etag": "FzXT-cHdORnJzy-PGeiHVBk6-Y8",
//             "id": "UgxJRPGIe1qACkU9vrV4AaABAg.9zwY9z9YWlyA-Tkz_Q0xiC",
//             "snippet": {
//               "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//               "videoId": "_VB39Jo8mAQ",
//               "textDisplay": "Hi",
//               "textOriginal": "Hi",
//               "parentId": "UgxJRPGIe1qACkU9vrV4AaABAg",
//               "authorDisplayName": "@Raj-dd1tj",
//               "authorProfileImageUrl": "https://yt3.ggpht.com/BFp4jkFL4UtLlAvq8ir1-se4xTVnfT2DcjAMlTW1cUc8DTl6XUl_7jn1kuXsNFpxnZEf2Ulm=s48-c-k-c0x00ffffff-no-rj",
//               "authorChannelUrl": "http://www.youtube.com/@Raj-dd1tj",
//               "authorChannelId": {
//                 "value": "UCWeOHYar41NLKbHC4U80tKw"
//               },
//               "canRate": true,
//               "viewerRating": "none",
//               "likeCount": 0,
//               "publishedAt": "2024-02-06T11:13:00Z",
//               "updatedAt": "2024-02-06T11:13:00Z"
//             }
//           },
//           {
//             "kind": "youtube#comment",
//             "etag": "_NWL__a5t4KAzfogsYPWrzgUecs",
//             "id": "UgxJRPGIe1qACkU9vrV4AaABAg.9zwY9z9YWlyA-Tlfqs_90J",
//             "snippet": {
//               "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//               "videoId": "_VB39Jo8mAQ",
//               "textDisplay": "Hi",
//               "textOriginal": "Hi",
//               "parentId": "UgxJRPGIe1qACkU9vrV4AaABAg",
//               "authorDisplayName": "@Raj-dd1tj",
//               "authorProfileImageUrl": "https://yt3.ggpht.com/BFp4jkFL4UtLlAvq8ir1-se4xTVnfT2DcjAMlTW1cUc8DTl6XUl_7jn1kuXsNFpxnZEf2Ulm=s48-c-k-c0x00ffffff-no-rj",
//               "authorChannelUrl": "http://www.youtube.com/@Raj-dd1tj",
//               "authorChannelId": {
//                 "value": "UCWeOHYar41NLKbHC4U80tKw"
//               },
//               "canRate": true,
//               "viewerRating": "none",
//               "likeCount": 0,
//               "publishedAt": "2024-02-06T11:19:03Z",
//               "updatedAt": "2024-02-06T11:19:03Z"
//             }
//           }
//         ]
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "A2R528LUGbLXlDBOc2s4XGigCCs",
//       "id": "Ugy-_t6FGSzQcaYEJYF4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "KABEFd1Jx5gPWmZKCrITb8NSoHY",
//           "id": "Ugy-_t6FGSzQcaYEJYF4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "Brilliant",
//             "textOriginal": "Brilliant",
//             "authorDisplayName": "@beverleyyohanan9867",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lJYdCPpzJGGNcOhM_WGC6XIJEvaB4hVcBFhP0fLhvCGf8=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@beverleyyohanan9867",
//             "authorChannelId": {
//               "value": "UC-kjC2JVH7j9Lv5AbElDsDA"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-01-20T12:39:35Z",
//             "updatedAt": "2024-01-20T12:39:35Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "9GaI0OkSvXvF7wIivM2WOGeu_qk",
//       "id": "Ugx7Kt7-FI62gmW1Ozt4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "2aRPDS-II2NaAQMsl22N7qXH4Lg",
//           "id": "Ugx7Kt7-FI62gmW1Ozt4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "This is the start of a comment thread. 2024",
//             "textOriginal": "This is the start of a comment thread. 2024",
//             "authorDisplayName": "@zdwork-mg8wt",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mCM1B0rSjyqJwtR3L_Tosx7loqS5CcjAy7JuA1YMR9xzDwGzgpvOS7Mx5tZVOJx-ai7w=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@zdwork-mg8wt",
//             "authorChannelId": {
//               "value": "UCC7uxlvpgsDb2TT3_wX7tHQ"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-01-18T07:28:51Z",
//             "updatedAt": "2024-01-18T07:28:51Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "j9q_gsYx-uqqfR9uh0ZJIzMbd5A",
//       "id": "Ugy0EJR6Bo3mfeIkhaR4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "WDufA-R7QgO0iM_JOvYbWH6Beo0",
//           "id": "Ugy0EJR6Bo3mfeIkhaR4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "This is the start of a comment thread.",
//             "textOriginal": "This is the start of a comment thread.",
//             "authorDisplayName": "@zdwork-mg8wt",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mCM1B0rSjyqJwtR3L_Tosx7loqS5CcjAy7JuA1YMR9xzDwGzgpvOS7Mx5tZVOJx-ai7w=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@zdwork-mg8wt",
//             "authorChannelId": {
//               "value": "UCC7uxlvpgsDb2TT3_wX7tHQ"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-01-18T07:28:14Z",
//             "updatedAt": "2024-01-18T07:28:14Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "mZLpcJwprwhnAK0q3sZlvh-AAeQ",
//       "id": "UgyUblhNlygF1DNO8ex4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "iRykQdxMFvc4r9yLf-9ZFlsFVfM",
//           "id": "UgyUblhNlygF1DNO8ex4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "Wow, amazing video",
//             "textOriginal": "Wow, amazing video",
//             "authorDisplayName": "@PersediPL",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lM2aqe-b8N4EYJVvrYumTPKa9Nr0y-2ZFwQrDeDGF-Aw=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@PersediPL",
//             "authorChannelId": {
//               "value": "UCq1Sx31_mPqZ--dboO5YgZA"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-12-12T10:51:11Z",
//             "updatedAt": "2023-12-12T10:51:11Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "mgSOwlmZV38-n6nelg0cChGj_hM",
//       "id": "Ugwo09-f0k1JkUMotBp4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "p1EMWuUBv6QN2NY9V4cJACFbBAk",
//           "id": "Ugwo09-f0k1JkUMotBp4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "This is the start of a comment thread.",
//             "textOriginal": "This is the start of a comment thread.",
//             "authorDisplayName": "@c03lh09",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_krbujZLleisJdBpaL5cw4mBV2kPuMFxAdakQ2GoueCfA=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@c03lh09",
//             "authorChannelId": {
//               "value": "UCCJJyzxlUzcoVDeNkTqMf-Q"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-11-18T22:27:40Z",
//             "updatedAt": "2023-11-18T22:27:40Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "510HICTRCcuDqJaX0f8GtCGvq3s",
//       "id": "UgyoX1KsTZELUiULNHl4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "sR2HwbzyS-jBRxNjjxtsquwMGAo",
//           "id": "UgyoX1KsTZELUiULNHl4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "Damn. this hits hard.",
//             "textOriginal": "Damn. this hits hard.",
//             "authorDisplayName": "@harshnavaleofficial",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/LMLR01A1W8qHTy6mdBxcFERK4fi0Qh82OxTVRbxMFuF4w42wiH0L84QN9HNYV45HfJ35aIyR=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@harshnavaleofficial",
//             "authorChannelId": {
//               "value": "UC0Xha5xcMGQ50D3GzPb9DLA"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-09-07T06:04:39Z",
//             "updatedAt": "2023-09-07T06:04:38Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 1,
//         "isPublic": true
//       },
//       "replies": {
//         "comments": [
//           {
//             "kind": "youtube#comment",
//             "etag": "zsT-J4L5Y-lvS8_zLEJ7j9muxXs",
//             "id": "UgyoX1KsTZELUiULNHl4AaABAg.9uLos3JsCWR9vD67xzmL8M",
//             "snippet": {
//               "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//               "videoId": "_VB39Jo8mAQ",
//               "textDisplay": "It still does!",
//               "textOriginal": "It still does!",
//               "parentId": "UgyoX1KsTZELUiULNHl4AaABAg",
//               "authorDisplayName": "@Chadbelerique",
//               "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_k2MBvG9XLwRN9If4YzA0VF87BhAwOctBy8L32dSbG-AmH722OkziMXKiHaJkuGXf4ZlA=s48-c-k-c0x00ffffff-no-rj",
//               "authorChannelUrl": "http://www.youtube.com/@Chadbelerique",
//               "authorChannelId": {
//                 "value": "UC8qc5YuWeWhaw0opn-wXnyg"
//               },
//               "canRate": true,
//               "viewerRating": "none",
//               "likeCount": 0,
//               "publishedAt": "2023-09-28T17:22:28Z",
//               "updatedAt": "2023-09-28T17:22:28Z"
//             }
//           }
//         ]
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "VCp5eXTaOrVpWh5ugcxVYdslMWI",
//       "id": "UgwzPUrRGeLiY9am4c54AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "x-Viq0aqOkgb32qNUYn9lXrh7Zw",
//           "id": "UgwzPUrRGeLiY9am4c54AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "Moral of the story is that money is an allusion, but it has a very real consequences.",
//             "textOriginal": "Moral of the story is that money is an allusion, but it has a very real consequences.",
//             "authorDisplayName": "@christiansamaroo",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_kz8RLVigEXa6T6TZ0Mqatg8xYLZNyV9JB6AxRm0xc=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@christiansamaroo",
//             "authorChannelId": {
//               "value": "UCyuM7SoTgQa9Jdu2OxOCk9A"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-07-29T05:49:17Z",
//             "updatedAt": "2023-07-29T05:49:17Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "POmuf7-44UI-pgEjl90ieRSoaDs",
//       "id": "Ugx_i02QBBcSBveTcId4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "_DYQQFFePsMYbxqNvOlf4IyxTYk",
//           "id": "Ugx_i02QBBcSBveTcId4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "Я с канала онигири)",
//             "textOriginal": "Я с канала онигири)",
//             "authorDisplayName": "@user-fj8mz5dj4k",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_k9r6WJ86ZKY13Q5DBSpoTljiPaTWhtIkTV2nyUP7q25vk=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@user-fj8mz5dj4k",
//             "authorChannelId": {
//               "value": "UCG9gUnB7gdiKOMbDN26b7vQ"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 8,
//             "publishedAt": "2023-07-19T08:41:05Z",
//             "updatedAt": "2023-07-19T08:41:05Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 1,
//         "isPublic": true
//       },
//       "replies": {
//         "comments": [
//           {
//             "kind": "youtube#comment",
//             "etag": "6AIlmuIiPy2FUhs0TbyP9t1tPWk",
//             "id": "Ugx_i02QBBcSBveTcId4AaABAg.9sLM1BkOjty9sWAn_Aj5oK",
//             "snippet": {
//               "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//               "videoId": "_VB39Jo8mAQ",
//               "textDisplay": "тоже)",
//               "textOriginal": "тоже)",
//               "parentId": "Ugx_i02QBBcSBveTcId4AaABAg",
//               "authorDisplayName": "@mapper7221",
//               "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_meMdyLorOCdoD_D_1p7pZeWnFBcyVQotSmhyuwNKAJCw=s48-c-k-c0x00ffffff-no-rj",
//               "authorChannelUrl": "http://www.youtube.com/@mapper7221",
//               "authorChannelId": {
//                 "value": "UCn_7ph5Ltyh5HRX3Lpd12gQ"
//               },
//               "canRate": true,
//               "viewerRating": "none",
//               "likeCount": 0,
//               "publishedAt": "2023-07-23T13:34:37Z",
//               "updatedAt": "2023-07-23T13:34:37Z"
//             }
//           }
//         ]
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "m1-EEuG3E9mDct0Jf6S1_fx1uOQ",
//       "id": "Ugx8IBrZCreL8hAhWcB4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "bNUexWaswtG5Xbn3yzEk-t2N8ZI",
//           "id": "Ugx8IBrZCreL8hAhWcB4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "Fabricated story",
//             "textOriginal": "Fabricated story",
//             "authorDisplayName": "@timyjoned7783",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/wydZIYSV1czN2Nm2Z9T8WZ9ph7WYFrXu_LH7dPOkiF06wjqJpsnVrR3xnN1coEcMueSq9MBG1w=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@timyjoned7783",
//             "authorChannelId": {
//               "value": "UCWWuyUFkvQQWU6na5mystpg"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-07-01T15:39:20Z",
//             "updatedAt": "2023-07-01T15:39:20Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "g3lAwsQ959pvnhr3bd2gCHGriz0",
//       "id": "Ugx7NNwiies8B7Je32J4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "U1yhEejRuoktbBGSB4ef5h00DnQ",
//           "id": "Ugx7NNwiies8B7Je32J4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "Why should people pay for the government&#39;s printing? First the government needs to pay for all the money it created in natural resources and then we&#39;ll be talking.",
//             "textOriginal": "Why should people pay for the government's printing? First the government needs to pay for all the money it created in natural resources and then we'll be talking.",
//             "authorDisplayName": "@deliq9607",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/A5gHpOYtqK1BzXp6FMqDl-SokrisJmm6beA3cenmkPicWqe5kSbyFNBHlIeaf_SsCiCu_N7DAA=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@deliq9607",
//             "authorChannelId": {
//               "value": "UCinpVtHAEFJozvAp1jqOlfw"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-06-26T15:28:52Z",
//             "updatedAt": "2023-06-26T15:28:52Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "mNgLsVXUQ79CSGDSfyd6QI48R9M",
//       "id": "Ugz-46a7P7VDNy815MN4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "66UtzAtTKKhOELJmY4XTQYwD7A4",
//           "id": "Ugz-46a7P7VDNy815MN4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "speak well",
//             "textOriginal": "speak well",
//             "authorDisplayName": "@user-vj9ye7ot4b",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_nNFlQRQOXEKUeVEZz4vWHLgCJCkqv_XV_D7PEX3uk=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@user-vj9ye7ot4b",
//             "authorChannelId": {
//               "value": "UC5WaBdGo714ZbJew1-iOS7Q"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-06-12T09:36:19Z",
//             "updatedAt": "2023-06-12T09:36:19Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "SsbtRN_u6jPkAssJIq7wjQsqH9c",
//       "id": "UgyEuG0wREid1ekgxX14AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "awTAt78IYhnelyZKeq0kjRrpmBw",
//           "id": "UgyEuG0wREid1ekgxX14AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "Just to point out it has become very clear, it was stagnant wages, which have not been increasing with worker productivity that caused debt to increase. Not money becoming sort of more intangible.",
//             "textOriginal": "Just to point out it has become very clear, it was stagnant wages, which have not been increasing with worker productivity that caused debt to increase. Not money becoming sort of more intangible.",
//             "authorDisplayName": "@Alex-cw3rz",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_n0P3r2dt_xOW7IMpld2RrxGBWw0u14CCrewTD_k6rGgh-rAJJjEjQc9tcAQhDqX28vZA=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@Alex-cw3rz",
//             "authorChannelId": {
//               "value": "UCdzwSqzjr25gtTVKbGnoi2w"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 1,
//             "publishedAt": "2023-04-06T00:45:58Z",
//             "updatedAt": "2023-04-06T00:48:09Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "GuNF_hCZIXHucAGwmMvHPI0vpYY",
//       "id": "UgyI3LdbUz63ptzG3LN4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "Y-C8zOPYmrhZwjN01jtUwnz-YzM",
//           "id": "UgyI3LdbUz63ptzG3LN4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "\u003ca href=\"https://www.youtube.com/watch?v=_VB39Jo8mAQ&amp;t=480\"\u003e8:00\u003c/a\u003e So basically the plot of Trading Places.",
//             "textOriginal": "8:00 So basically the plot of Trading Places.",
//             "authorDisplayName": "@reggiethecommenter9137",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_kNn6ML5JlhLrSoExrtw_OWTxjwv-pPPh8GhTrE49w-bzrwzJrjG1FoMdgRo3BUt4v3Gw=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@reggiethecommenter9137",
//             "authorChannelId": {
//               "value": "UCbKbEb77FOZGMLUqRg0eTlg"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-03-27T03:42:35Z",
//             "updatedAt": "2023-03-27T03:42:35Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "wyB3PqfcycQKJEIUMHf9wtGTbJY",
//       "id": "UgyzE7AIgiVDZPiGVPZ4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "7JPXEP8d6jSpCanbTlzejtR4bmQ",
//           "id": "UgyzE7AIgiVDZPiGVPZ4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "ISNT THIS THE SIX FLAGS GUY MASCOT &quot;WE LIKE TO PARTY WE LIKE WE LIKE TO PARTY&quot;",
//             "textOriginal": "ISNT THIS THE SIX FLAGS GUY MASCOT \"WE LIKE TO PARTY WE LIKE WE LIKE TO PARTY\"",
//             "authorDisplayName": "@brian2970",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_kHaW8Z3uXwI83EcCIr30_G0BxFzR13kqLi6O0epDRUBbFKcrlzQtJw1GAwojpPuyl88Q=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@brian2970",
//             "authorChannelId": {
//               "value": "UCYiZ1wzSK-A-USYfNTbgecg"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-03-24T12:41:57Z",
//             "updatedAt": "2023-03-24T12:41:57Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "TXgYcOYH9_4cTuV_rd21cEJtQZE",
//       "id": "Ugx-OtfEBVb-LLkEm2l4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "EuW8KvQGbcOAB92CGMar9V3relg",
//           "id": "Ugx-OtfEBVb-LLkEm2l4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "I explained to my kids early on: If you owe the credit card company $500.00 at the end of the month.....and you pay $499.99 (one cent short) of it back....they will charge you interest  on the whole $500.00 you borrowed. It sounds crooked but that&#39;s what will happen....Always, ALWAYS pay the balance no matter what...or the cycle starts and you may never get out of it. Now days...the only thing they owe money on is their house...maybe a car......but that&#39;s it. I&#39;ve never bought a car on terms....my 3 houses are paid off and I&#39;m worth about 3 mil. I own a small, successful plumbing business.",
//             "textOriginal": "I explained to my kids early on: If you owe the credit card company $500.00 at the end of the month.....and you pay $499.99 (one cent short) of it back....they will charge you interest  on the whole $500.00 you borrowed. It sounds crooked but that's what will happen....Always, ALWAYS pay the balance no matter what...or the cycle starts and you may never get out of it. Now days...the only thing they owe money on is their house...maybe a car......but that's it. I've never bought a car on terms....my 3 houses are paid off and I'm worth about 3 mil. I own a small, successful plumbing business.",
//             "authorDisplayName": "@readmore3634",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/PA-dbvGSewKMtdGWLxi-Wg5sFX2_LhhW6V4nO4OmcbpUOQwCYXvgSbPkA9ZSSEL0wq4U369TeA=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@readmore3634",
//             "authorChannelId": {
//               "value": "UCv56OVFYQ4TuF3_4Or-1-bg"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 1,
//             "publishedAt": "2023-03-21T04:05:25Z",
//             "updatedAt": "2023-03-21T04:05:25Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "sAViGgevheQQPVh7okb39h0DLoE",
//       "id": "UgxU-jeT-AjkY5tkuGR4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "JIc4J5YXYF7zTNm26PUThb8Eldw",
//           "id": "UgxU-jeT-AjkY5tkuGR4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "I would have played like your youngest kid normally does... by and buy and buy cause at some point someone wants that property cause it completes the set...",
//             "textOriginal": "I would have played like your youngest kid normally does... by and buy and buy cause at some point someone wants that property cause it completes the set...",
//             "authorDisplayName": "@dakotapeters5654",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/uf1K6MpXzwNd6uCIIPHbLoWAB7dR9H6WH-PVNO7uMPj1SZf2ODZCmFkvqWwiq3fkjL8BNQAyaCg=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@dakotapeters5654",
//             "authorChannelId": {
//               "value": "UCuJ_rnRzx_UeX4sxxPU-FbQ"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-03-16T20:56:53Z",
//             "updatedAt": "2023-03-16T20:56:53Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 1,
//         "isPublic": true
//       },
//       "replies": {
//         "comments": [
//           {
//             "kind": "youtube#comment",
//             "etag": "qCGZlXAoU8x3lTvjFCB92Ov5fqo",
//             "id": "UgxU-jeT-AjkY5tkuGR4AaABAg.9nKns0P5Iq89nKsfdBFpuN",
//             "snippet": {
//               "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//               "videoId": "_VB39Jo8mAQ",
//               "textDisplay": "To add to it. Very few seem to care about the inequality and imbalances, probably cause there is more than 50% able to get by. However, the ones making the bottom 2% of money are the 20%-40% of the lower end population doing the jobs that take the most toll on they&#39;re bodies causing them to have to spend that much more on hospital bills and never able to catch up dieing on debt cause they work they&#39;re whole life&#39;s just to keep things floating and even if they did quit and find other jobs well let&#39;s face it they don&#39;t get those jobs that make easy money. And nobody that&#39;s within the to 20%-40% want to or would even attempt to work those jobs when they did quit. Not when they are the ones making at least 80% or more of the money... it&#39;s not balanced, and the rich wouldn&#39;t want it to be balanced... they feel they are worth more cause they used their head more and earned it. It&#39;s not true at all. If all the bottom 20%-40% just banded together one day and decided we&#39;re going to let the top 60%-80% fend for themselves, then the top 60%-80% wouldn&#39;t have no food water power electricity etc... cause all of the employees would have quit work. At least up to the point that nobody who knows how to do the work that keeps everyone alive is still working or helping the rest out... what would they do then... if they tried to force us that are in poverty to get back to work, they would have a fight on their hands that they couldn&#39;t win... and there are studies out there proving that just book knowledge isn&#39;t enough to get by when it comes to doing the jobs. So they would be screwed. Very few would survive being that they got lucky, and that&#39;s not saying they would survive long. Just survive. Not thrive. Just barely scrape by... just wait another generation, maybe 2. If it continues like it is going, then that&#39;s probably going to be exactly what happens.... not to come across with a negative outlook but speaking with truth cause I&#39;ve been hearing it my whole life growing up. But the upper-class and upper middle class haven&#39;t because most of them didn&#39;t start in poverty, and poverty then was the same as poverty now... I wonder if we got another Boston ☕️ party situation coming soon... if there is something we ought to know, it&#39;s better to confess it instead of having someone else blow the whistle on it all... at least then, there is a chance of fixing mistakes and making amendments. However, if there is something being hidden and those that are hidden from finding out about it or when they say enough is enough, then it&#39;s most likely too late... that&#39;s all just hypothetical, of course. Hopefully, things get solved. For the greater good of all. Funny that I&#39;ve only ever heard for the greater good when it comes to war and genocide ot things like that. But the only time it would actually be for the greater good of all would be now and times like now whenever there&#39;s imbalances that tip the scale of equality too much. 😉 something to think on. I&#39;ve been working slowly at articulating some big thoughts on the infrastructure &amp; structure of government and uniting everybody, but I have more work to do.🎉😊 have a good day",
//               "textOriginal": "To add to it. Very few seem to care about the inequality and imbalances, probably cause there is more than 50% able to get by. However, the ones making the bottom 2% of money are the 20%-40% of the lower end population doing the jobs that take the most toll on they're bodies causing them to have to spend that much more on hospital bills and never able to catch up dieing on debt cause they work they're whole life's just to keep things floating and even if they did quit and find other jobs well let's face it they don't get those jobs that make easy money. And nobody that's within the to 20%-40% want to or would even attempt to work those jobs when they did quit. Not when they are the ones making at least 80% or more of the money... it's not balanced, and the rich wouldn't want it to be balanced... they feel they are worth more cause they used their head more and earned it. It's not true at all. If all the bottom 20%-40% just banded together one day and decided we're going to let the top 60%-80% fend for themselves, then the top 60%-80% wouldn't have no food water power electricity etc... cause all of the employees would have quit work. At least up to the point that nobody who knows how to do the work that keeps everyone alive is still working or helping the rest out... what would they do then... if they tried to force us that are in poverty to get back to work, they would have a fight on their hands that they couldn't win... and there are studies out there proving that just book knowledge isn't enough to get by when it comes to doing the jobs. So they would be screwed. Very few would survive being that they got lucky, and that's not saying they would survive long. Just survive. Not thrive. Just barely scrape by... just wait another generation, maybe 2. If it continues like it is going, then that's probably going to be exactly what happens.... not to come across with a negative outlook but speaking with truth cause I've been hearing it my whole life growing up. But the upper-class and upper middle class haven't because most of them didn't start in poverty, and poverty then was the same as poverty now... I wonder if we got another Boston ☕️ party situation coming soon... if there is something we ought to know, it's better to confess it instead of having someone else blow the whistle on it all... at least then, there is a chance of fixing mistakes and making amendments. However, if there is something being hidden and those that are hidden from finding out about it or when they say enough is enough, then it's most likely too late... that's all just hypothetical, of course. Hopefully, things get solved. For the greater good of all. Funny that I've only ever heard for the greater good when it comes to war and genocide ot things like that. But the only time it would actually be for the greater good of all would be now and times like now whenever there's imbalances that tip the scale of equality too much. 😉 something to think on. I've been working slowly at articulating some big thoughts on the infrastructure & structure of government and uniting everybody, but I have more work to do.🎉😊 have a good day",
//               "parentId": "UgxU-jeT-AjkY5tkuGR4AaABAg",
//               "authorDisplayName": "@dakotapeters5654",
//               "authorProfileImageUrl": "https://yt3.ggpht.com/uf1K6MpXzwNd6uCIIPHbLoWAB7dR9H6WH-PVNO7uMPj1SZf2ODZCmFkvqWwiq3fkjL8BNQAyaCg=s48-c-k-c0x00ffffff-no-rj",
//               "authorChannelUrl": "http://www.youtube.com/@dakotapeters5654",
//               "authorChannelId": {
//                 "value": "UCuJ_rnRzx_UeX4sxxPU-FbQ"
//               },
//               "canRate": true,
//               "viewerRating": "none",
//               "likeCount": 0,
//               "publishedAt": "2023-03-16T21:38:53Z",
//               "updatedAt": "2023-03-16T21:38:53Z"
//             }
//           }
//         ]
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "yBXqYJEVLCHcc0eCR4ey92OXKAU",
//       "id": "UgzAaOv5cyEFPaSZrAl4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "hsSWMcAvfjEIxUCuZJTFS-1HDr4",
//           "id": "UgzAaOv5cyEFPaSZrAl4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "I’m 37 I didn’t buy myself new clothes for 12 years only thrift stores I have been wearing another man’s clothing my entire life I finally got a credit card and all I wanted was some new clothes I finally bought some and all my mom could say was how wasteful I was it’s sad cause I personally by myself no help built every house my family lives in and yet my room is totally unfinished but everyone else has nice stuff seems to me that money is real enough for a lot of people just not me",
//             "textOriginal": "I’m 37 I didn’t buy myself new clothes for 12 years only thrift stores I have been wearing another man’s clothing my entire life I finally got a credit card and all I wanted was some new clothes I finally bought some and all my mom could say was how wasteful I was it’s sad cause I personally by myself no help built every house my family lives in and yet my room is totally unfinished but everyone else has nice stuff seems to me that money is real enough for a lot of people just not me",
//             "authorDisplayName": "@christopherfodor8236",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_kRQwABMOKoFmn_GNN44jw0PYa0I0DKpJiVp9iEnxQ=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@christopherfodor8236",
//             "authorChannelId": {
//               "value": "UCA5Q6EQs40lDTK6sVwbzk5w"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-03-07T13:52:18Z",
//             "updatedAt": "2023-03-07T13:52:18Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     }
//   ]
// }
