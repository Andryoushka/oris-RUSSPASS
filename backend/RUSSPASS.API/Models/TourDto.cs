namespace RUSSPASS.API.Models;

public class TourDto
{
    public string Name { get; set; } = string.Empty;

    public string CardImage { get; set; } = string.Empty;

    public string Location { get; set; } = string.Empty;

    public string Type { get; set; } = string.Empty;

    public int HotelStars { get; set; }

    public int Duration { get; set; }

    public List<string> Features { get; set; } = new();

    public decimal Price { get; set; }

    public List<string> Gallery { get; set; } = new();

    public string Description { get; set; } = string.Empty;

    public TourProgram? TourProgram { get; set; }

    public int Id { get; set; }

}
