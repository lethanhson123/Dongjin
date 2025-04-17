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
    services.AddTransient<Ihelp_categoryService, help_categoryService>();
services.AddTransient<Ihelp_keywordService, help_keywordService>();
services.AddTransient<Ihelp_relationService, help_relationService>();
services.AddTransient<Ihelp_topicService, help_topicService>();


    services.AddSingleton(HtmlEncoder.Create(allowedRanges: new[] { UnicodeRanges.All }));
    return services;
    }

    public static IServiceCollection AddRepository(this IServiceCollection services)
    {
    services.AddTransient<Ihelp_categoryRepository, help_categoryRepository>();
services.AddTransient<Ihelp_keywordRepository, help_keywordRepository>();
services.AddTransient<Ihelp_relationRepository, help_relationRepository>();
services.AddTransient<Ihelp_topicRepository, help_topicRepository>();


    return services;
    }
    }
    }


