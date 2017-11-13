using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KalemTanimlari.Startup))]
namespace KalemTanimlari
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
