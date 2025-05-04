namespace MESService
{
    public static class ConfigureService
    {
        public static IServiceCollection AddJWT(this IServiceCollection services)
        {

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = GlobalHelper.Audience,
                    ValidIssuer = GlobalHelper.Issuer,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(GlobalHelper.Key))
                };
            });
            return services;
        }
        public static IServiceCollection AddContext(this IServiceCollection services)
        {
            services.AddDbContext<MESContext.Context.Context>
    (opts => opts.UseMySql(GlobalHelper.MariaDBConectionString, ServerVersion.AutoDetect(GlobalHelper.MariaDBConectionString)));
    return services;
    }
    public static IServiceCollection AddService(this IServiceCollection services)
    {
    services.AddTransient<IZ01Service, Z01Service>();
services.AddTransient<IZ02Service, Z02Service>();
services.AddTransient<IZ07Service, Z07Service>();
services.AddTransient<IZ05Service, Z05Service>();
services.AddTransient<IZ04Service, Z04Service>();
services.AddTransient<IA03Service, A03Service>();
services.AddTransient<IA01Service, A01Service>();
services.AddTransient<IA02Service, A02Service>();
services.AddTransient<IA04Service, A04Service>();
services.AddTransient<IA05Service, A05Service>();
services.AddTransient<IA06Service, A06Service>();
services.AddTransient<IA07Service, A07Service>();
services.AddTransient<IA09Service, A09Service>();
services.AddTransient<IV01Service, V01Service>();
services.AddTransient<IV02Service, V02Service>();
services.AddTransient<IV03Service, V03Service>();
services.AddTransient<IV04Service, V04Service>();
services.AddTransient<IV05Service, V05Service>();
services.AddTransient<IV06Service, V06Service>();
services.AddTransient<IV07Service, V07Service>();
services.AddTransient<IB09Service, B09Service>();
services.AddTransient<IB10Service, B10Service>();
services.AddTransient<IC13Service, C13Service>();
services.AddTransient<IC14Service, C14Service>();
services.AddTransient<IE04Service, E04Service>();
services.AddTransient<IE05Service, E05Service>();
services.AddTransient<IC16Service, C16Service>();
services.AddTransient<IC17Service, C17Service>();
services.AddTransient<IB01Service, B01Service>();
services.AddTransient<IB03Service, B03Service>();
services.AddTransient<IB02Service, B02Service>();
services.AddTransient<IB04Service, B04Service>();
services.AddTransient<IB05Service, B05Service>();
services.AddTransient<IB06Service, B06Service>();
services.AddTransient<IB11Service, B11Service>();
services.AddTransient<IB12Service, B12Service>();
services.AddTransient<IB07Service, B07Service>();
services.AddTransient<IB08Service, B08Service>();
services.AddTransient<IC01Service, C01Service>();
services.AddTransient<IC06Service, C06Service>();
services.AddTransient<IZ03Service, Z03Service>();
services.AddTransient<IC02Service, C02Service>();
services.AddTransient<IC05Service, C05Service>();
services.AddTransient<IC11Service, C11Service>();
services.AddTransient<IC09Service, C09Service>();
services.AddTransient<IC20Service, C20Service>();
services.AddTransient<IC03Service, C03Service>();
services.AddTransient<IC18Service, C18Service>();
services.AddTransient<IC19Service, C19Service>();
services.AddTransient<IC04Service, C04Service>();
services.AddTransient<IZ06Service, Z06Service>();
services.AddTransient<IC10Service, C10Service>();
services.AddTransient<IC12Service, C12Service>();
services.AddTransient<IC15Service, C15Service>();
services.AddTransient<IC08Service, C08Service>();
services.AddTransient<ID07Service, D07Service>();
services.AddTransient<ID02Service, D02Service>();
services.AddTransient<ID01Service, D01Service>();
services.AddTransient<ID03Service, D03Service>();
services.AddTransient<ID13Service, D13Service>();
services.AddTransient<ID14Service, D14Service>();
services.AddTransient<ID15Service, D15Service>();
services.AddTransient<ID16Service, D16Service>();
services.AddTransient<ID12Service, D12Service>();
services.AddTransient<ID04Service, D04Service>();
services.AddTransient<ID99Service, D99Service>();
services.AddTransient<ID05Service, D05Service>();
services.AddTransient<ID06Service, D06Service>();
services.AddTransient<ID09Service, D09Service>();
services.AddTransient<ID11Service, D11Service>();
services.AddTransient<IE01Service, E01Service>();
services.AddTransient<IE02Service, E02Service>();
services.AddTransient<IE03Service, E03Service>();
services.AddTransient<IE20Service, E20Service>();
services.AddTransient<IF01Service, F01Service>();
services.AddTransient<IF03Service, F03Service>();
services.AddTransient<IG01Service, G01Service>();
services.AddTransient<IG02Service, G02Service>();
services.AddTransient<IG03Service, G03Service>();
services.AddTransient<IG04Service, G04Service>();


    services.AddSingleton(HtmlEncoder.Create(allowedRanges: new[] { UnicodeRanges.All }));
    return services;
    }

    public static IServiceCollection AddRepository(this IServiceCollection services)
    {
    [Repository]

    return services;
    }
    }
    }


