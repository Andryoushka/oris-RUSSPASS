using Microsoft.AspNetCore.Mvc;
using RUSSPASS.API.Data;

namespace RUSSPASS.API.Controller;

[ApiController]
[Route("tours")]
public class ToursController : ControllerBase
{
    [HttpGet("all")]
    public IResult GetAllTours()
    {
        var tours = DataSeed.GetTours();

        return Results.Ok(tours);
    }

    [HttpGet("{id}")]
    public IResult GetTourById(int id)
    {
        var tour = DataSeed.GetTours();

        return Results.Ok(tour[id]);
    }

}
