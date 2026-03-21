using RUSSPASS.API.Data;

namespace RUSSPASS.API;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddControllers();

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.MapControllers();

        app.UseCors(x =>
        {
            x.WithHeaders().AllowAnyHeader();
            x.WithOrigins("http://localhost:5173");
            x.WithMethods().AllowAnyMethod();
        });

        app.Run();
    }
}
