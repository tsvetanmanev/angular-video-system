'use strict'

angular.module('myApp.videos', [])

    .factory('videos', function (){
        
        var videosArray = [];

        videosArray.push({
            title: 'Course introduction',
            pictureUrl: 'http://softuni.bg/picture.png',
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
            pictureUrl: 'http://softuni.bg/picture.png',
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

        function save (video){
            videosArray.push(video);
        }

        function list (){
            return videosArray;
        }
        

        return{
            list : list,
            save: save
            };

    });