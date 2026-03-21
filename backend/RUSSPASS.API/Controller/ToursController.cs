using Microsoft.AspNetCore.Mvc;
using RUSSPASS.API.Data;
using RUSSPASS.API.Filters;
using RUSSPASS.API.Models;

namespace RUSSPASS.API.Controller;

[ApiController]
[Route("tours")]
public class ToursController : ControllerBase
{
    [HttpGet("all")]
    public IResult AllTours()
    {
        var tours = DataSeed.GetTours();

        return Results.Ok(tours);
    }

    [HttpGet("filtered")]
    public IResult FilteredTours([FromQuery] TourFilterDto filters)
    {
        var tours = DataSeed.GetTours();

        if (filters.IsEmpty())
            return Results.Ok(tours);

        var filtered = tours.Where(t => filters.Features.Any(f => t.Features.Contains(f))).ToArray() 
            ?? new TourDto[] { };

        return Results.Ok(filtered);
    }

    [HttpGet("{id}")]
    public IResult TourById(int id)
    {
        var tours = DataSeed.GetTours();

        if (id < 0 || id > tours.Length)
            return Results.NotFound("Индекс вышел за границы массива.");

        return Results.Ok(tours[id]);
    }

    [HttpGet("filetrs-info")]
    public IResult FiltersInfo()
    {
        var popular = new FilterSection()
        {
            Lable = "Популярное",
            Type = "checkbox",

            Items = new FilterItem[]
            {
                new FilterItem()
                {
                    Key = "2 ночи",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Золотое кольцо",
                    Value = false
                }
                ,new FilterItem()
                {
                    Key = "Экотуры",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "С проживанием",
                    Value = false
                },
            }
        };

        var duration = new FilterSection()
        {
            Lable = "Продолжительность",
            Type = "checkbox",

            Items = new FilterItem[]
            {
                new FilterItem()
                {
                    Key = "2 ночи",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "3 ночи",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "4 ночи",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "5 ночей",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "6 ночей",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "7 ночей",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "больше 7 ночей",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "один день",
                    Value = false
                },
            }
        };

        var type = new FilterSection()
        {
            Lable = "Тип",
            Type = "checkbox",

            Items = new FilterItem[]
            {
                new FilterItem()
                {
                    Key = "Групповые",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Индивидуальные",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Автобусные",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "По главным достопримечательностям",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Тематические",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "История",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Авторские",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Для познавательных путешествий",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Образовательные",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Событийные",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Этнотуры",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Экотуры",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Еда",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Золотое кольцо",
                    Value = false
                },
            }
        };

        var features = new FilterSection()
        {
            Lable = "Особенности",
            Type = "checkbox",

            Items = new FilterItem[]
            {
                new FilterItem()
                {
                    Key = "С перелетом",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "С проживанием",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "С питанием",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Туры выходного дня",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Недорогие туры",
                    Value = false
                },
                new FilterItem()
                {
                    Key = "Детям",
                    Value = false
                },
            }
        };

        return Results.Ok(new[] {popular, duration, features , type});
    }

}
