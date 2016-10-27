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
            haveSubtitles: true,
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
            category: 'Pets',
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

         videosArray.push({
            title: 'Dmitrii on fire',
            pictureUrl: 'https://i.ytimg.com/vi/3Nkb3g-yySs/hqdefault.jpg',
            length: '5:32',
            category: 'Music',
            subscribers: 20,
            date: new Date(2016, 3, 20),
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

         videosArray.push({
            title: 'Mountain range relax',
            pictureUrl: 'https://pixabay.com/static/uploads/photo/2015/11/07/11/34/mountains-landscape-1031267_960_720.jpg',
            length: '3:28',
            category: 'Nature',
            subscribers: 15,
            date: new Date(2016, 1, 15),
            haveSubtitles: true,
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

         videosArray.push({
            title: 'Little bro dogs running in the grass',
            pictureUrl: 'http://www.dogshowpictures.net/wp-content/uploads/2016/09/west-coast-dog-run-le-paws-voyage-about-the-most-wonderful-dog-run-wallpaper.jpg',
            length: '1:28',
            category: 'Pets',
            subscribers: 2,
            date: new Date(2014, 1, 15),
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

         videosArray.push({
            title: 'Hiking in Napoli coast',
            pictureUrl: 'https://www.holoholokauaiboattours.com/wp-content/uploads/2014/04/sailing-kauais-napali.jpg',
            length: '3:50',
            category: 'Nature',
            subscribers: 320,
            date: new Date(2016, 8, 29),
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
            console.log(video);
        }

        function getAllVideos (){
            return videosArray;
        }

        return{
            getAllVideos : getAllVideos,
            addVideo: addVideo,
            }

    });