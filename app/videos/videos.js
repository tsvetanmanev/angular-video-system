'use strict'

angular.module('myApp.videos', [])

    .factory('videos', function videos(){
        
        var videosArray = [];

        videosArray.push({
            title: 'Course introduction',
            pictureUrl: 'http://www.highdefgeek.com/wp-content/uploads/2016/01/online_classes_casey.jpg',
            length: '3:32',
            category: 'IT',
            subscribers: 3,
            date: new Date(2014, 12, 15),
            haveSubtitles: false,
            comments: [
                            {
                                username: 'Pesho Peshev',
                                content: 'Congratulations Nakov',
                                date: new Date(2014, 12, 15, 12, 30, 0),
                                likes: 3,
                                websiteUrl: 'http://pesho.com/'
                            }
                        ]

            });

        videosArray.push({
            title: 'Cats dance',
            pictureUrl: 'https://farm4.staticflickr.com/3363/3659858487_3c615b01b9.jpg',
            length: '5:32',
            category: 'Fun',
            subscribers: 2,
            date: new Date(2016, 1, 15),
            haveSubtitles: false,
            comments: [
                            {
                                username: 'Pesho Peshev',
                                content: 'Congratulations Cathy',
                                date: new Date(2014, 12, 15, 12, 30, 0),
                                likes: 3,
                                websiteUrl: 'http://pesho.com/'
                            }
                        ]
        });

        function addVideo (video){
            videosArray.push(video);
        }

        function getAllVideos (){
            return videosArray;
        }
        

        return{
            getAllVideos : getAllVideos,
            addVideo: addVideo,
            }

    });