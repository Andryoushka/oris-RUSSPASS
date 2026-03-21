namespace RUSSPASS.API.Models;

public class TourProgram
{
    public List<ProgramDay> Days { get; set; } = new();
}

public class ProgramDay
{
    public List<string> Events { get; set; } = new();
}
