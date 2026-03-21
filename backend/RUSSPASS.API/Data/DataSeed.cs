using System;
using System.Collections.Generic;
using RUSSPASS.API.Models;

namespace RUSSPASS.API.Data;

public static class DataSeed
{
    public static TourDto[] GetTours()
    {
        return new TourDto[]
        {
            new TourDto
            {
                Id = 1,
                Name = "Тур по столовке КФУ от Тимерхана Аглямыча",
                CardImage = "https://sun9-36.userapi.com/s/v1/ig1/KEjh6RQDfICyR9Ah3EovNvFKciBRx-Zr2qigaQSCC-3_36nn_A9YWHTqv5B1836jETQy_wbn.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&cs=2160x0",
                Location = "Татмач",
                Type = "tour",
                HotelStars = 0,
                Duration = 1,
                Features = new List<string> { "with_meals", "food_tours", "group_tours" },
                Price = 100,
                Gallery = new List<string>
                {
                    "https://sun9-32.userapi.com/s/v1/ig2/hAyvhnQLp0V4WuRLTZvV4hdZ3p3xLGFvKiCMCEL9XX9qBGGD-4qzLyfpJqj50ZiGxhiA5wfHmEydrx87VNXKVLlw.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,768x1024&from=bu&cs=768x0",
                    "https://sun9-32.userapi.com/s/v1/ig2/hAyvhnQLp0V4WuRLTZvV4hdZ3p3xLGFvKiCMCEL9XX9qBGGD-4qzLyfpJqj50ZiGxhiA5wfHmEydrx87VNXKVLlw.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,768x1024&from=bu&cs=768x0",
                    "https://sun9-32.userapi.com/s/v1/ig2/hAyvhnQLp0V4WuRLTZvV4hdZ3p3xLGFvKiCMCEL9XX9qBGGD-4qzLyfpJqj50ZiGxhiA5wfHmEydrx87VNXKVLlw.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,768x1024&from=bu&cs=768x0"
                },
                Description = "Гастрономическое приключение для бедных студентов. Порадуй свой желудок чем-то кроме доширака!",
                TourProgram = new TourProgram
                {
                    Days = new List<ProgramDay>
                    {
                        new ProgramDay
                        {
                            Events = new List<string>
                            {
                                "Встреча студентов в столовой в 08:00",
                                "Не забудь захватить студенческий!",
                                "Вкусно кушаем, никого не слушаем"
                            }
                        }
                    }
                }
            },

            new TourDto
            {
                Id = 2,
                Name = "Тур по Основам разработки современных приложений от Тимерхана Аглямыча",
                CardImage = "https://sun9-30.userapi.com/s/v1/ig1/39gOnJHS57KR3h1rZaXNbtUZGNNVl1ZNazWfCB2oQqj_7KdxMw3GvDLfdJIbxuFpkq_s5TIV.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&cs=1620x0",
                Location = "КФУ ИТИС",
                Type = "tour",
                HotelStars = 2,
                Duration = 2,
                Features = new List<string>() {"educational_tours", "author_tours", "group_tours"},
                Price = 200,
                Gallery = new List<string>
                {
                    "https://sun9-32.userapi.com/s/v1/ig2/hAyvhnQLp0V4WuRLTZvV4hdZ3p3xLGFvKiCMCEL9XX9qBGGD-4qzLyfpJqj50ZiGxhiA5wfHmEydrx87VNXKVLlw.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,768x1024&from=bu&cs=768x0",
                    "https://sun9-32.userapi.com/s/v1/ig2/hAyvhnQLp0V4WuRLTZvV4hdZ3p3xLGFvKiCMCEL9XX9qBGGD-4qzLyfpJqj50ZiGxhiA5wfHmEydrx87VNXKVLlw.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,768x1024&from=bu&cs=768x0",
                    "https://sun9-32.userapi.com/s/v1/ig2/hAyvhnQLp0V4WuRLTZvV4hdZ3p3xLGFvKiCMCEL9XX9qBGGD-4qzLyfpJqj50ZiGxhiA5wfHmEydrx87VNXKVLlw.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,768x1024&from=bu&cs=768x0"
                },
                Description = "Ведущий специалист по разработке программного обеспечения расскажет и покажет КАК ЭТО ДЕЛАЕТСЯ!",
                TourProgram = new TourProgram
                {
                    Days = new List<ProgramDay>
                    {
                        new ProgramDay
                        {
                            Events = new List<string>
                            {
                                "Введение в дисциплину",
                                "Знакомство с группой"
                            }
                        },
                        new ProgramDay
                        {
                            Events = new List<string>
                            {
                                "Знакомство с ASP.NET",
                                "Изучаем React"
                            }
                        }
                    }
                }
            }
        };
    }
}