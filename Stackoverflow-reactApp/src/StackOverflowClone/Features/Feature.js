import React ,{useState,useEffect}from 'react'
import Question from './Question/Question';
import axios from 'axios';
function Feature() {
    const data = [
        {
            votes: "124",
            answers: "23",
            views: "12345",
            title: "Why is processing a sorted array faster than processing an unsorted array?",
            body: "Here is a piece of C++ code that shows some very peculiar behavior. For some strange reason, sorting the data miraculously makes the code almost six times faster: #include <algorithm> #include &...",
            tags: ["react", "web development", "c++"],
            user: {
                name: "vrund",
                profilePic: ""
            }
        },
        {
            votes: "2275",
            answers: "231",
            views: "234",
            title: "How do I undo the most recent local commits in Git?",
            body: "I accidentally committed the wrong files to Git, but didn't push the commit to the server yet. How can I undo those commits from the local repository?",
            tags: ["react", "web development", "c++"],
            user: {
                name: "pruthvi",
                profilePic: ""
            }
        },
        {
            votes: "124",
            answers: "23",
            views: "12345",
            title: "How do I delete a Git branch locally and remotely?",
            body: "I want to delete a branch both locally and remotely. Failed Attempts to Delete a Remote Branch $ git branch -d remotes/origin/bugfix error: branch 'remotes/origin/bugfix' not found. $ git branch -d ...",
            tags: ["react", "web development", "c++"],
            user: {
                name: "nakshi",
                profilePic: ""
            }
        },
        {
            votes: "124",
            answers: "23",
            views: "12345",
            title: "What is the difference between 'git pull' and 'git fetch'?",
            body: "What are the differences between git pull and git fetch?",
            tags: ["react", "web development", "c++"],
            user: {
                name: "vrunda",
                profilePic: ""
            }
        },
        {
            votes: "124",
            answers: "23",
            views: "12345",
            title: "What is the difference between 'git pull' and 'git fetch'?",
            body: "What are the differences between git pull and git fetch?",
            tags: ["react", "web development", "c++"],
            user: {
                name: "kruti",
                profilePic: ""
            }
        },
        {
            votes: "124",
            answers: "23",
            views: "12345",
            title: "What is the difference between 'git pull' and 'git fetch'?",
            body: "What are the differences between git pull and git fetch?",
            tags: ["react", "web development", "c++"],
            user: {
                name: "stk1",
                profilePic: ""
            }
        }
    ];
    let userData=[
        {
             "tags":[
             "flask",
             "iis",
             "wfastcgi"
          ],
          "owner":{
             "reputation":71,
             "user_id":11323942,
             "user_type":"registered",
             "profile_image":"https://www.gravatar.com/avatar/d040d48dc09031501a031acd841cd580?s=128&d=identicon&r=PG",
             "display_name":"Giulio",
             "link":"https://stackoverflow.com/users/11323942/giulio"
          },
         
          "view_count":47,
          "bounty_amount":500,
          "answer_count":1,
          "score":0,
          "last_activity_date":1613652159,
          "question_id":1,
          "title":"Long time to first byte for my Flask app homepage,"
       }];

    const [profile,setProfile]= useState([])
  
     let apiURL = 'https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow&key=gik4BOCMC7J9doavgYteRw((';;

useEffect(()=>{
    axios.get(apiURL).then((response)=>{
        console.log(response);

        return response.data.items
    }).then((data)=>{
       setProfile(data);
       //console.log("Questions",profile)
    })
},[])
    
    return (
        <div align="center" >
            <h2 > Top Questions</h2>
            <div  >
                {profile.map(function (item, i) {
                    return (
                        <div>
                            <Question data={item} />
                        </div>

                    )
                })
                }



            </div>

        </div>
    )
}

export default Feature