namespace RUSSPASS.API.Models;

public class TourFilterDto
{
    public List<int> Duration { get; set; } = new();
    public List<string> Features { get; set; } = new();

    public bool IsEmpty()
    {
        return Duration.Count == 0
            && Features.Count == 0;
    }
}
