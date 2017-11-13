using KalemTanimlari.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KalemTanimlari.Controllers
{

    public class KalemTanimiController : Controller
    {


        // GET: KalemTanimi
        public ActionResult KalemTanimi()
        {
            var ItemType = new[] {

                        new { Name = "Gelir",Id= 0 }
                        ,new {Name = "Gider",Id= 1 }


            };
            var ReportLot = new[] {

                        new { Name = "Gelir",Id= 0 }
                        ,new {Name = "Gider",Id= 1 }


            };
            var ApportionProcedure = new[] {

                        new { Name = "Gelir",Id= 0 }
                        ,new {Name = "Gider",Id= 1 }


            };
            var RelatedCompany = new[] {

                        new { Name = "Gelir",Id= 0 }
                        ,new {Name = "Gider",Id= 1 }


            };
            this.ViewData["ItemType"] = new SelectList(ItemType, "Id", "Name");
            this.ViewData["ReportLot"] = new SelectList(ReportLot, "Id", "Name");
            ViewData["ApportionProcedure"] = new SelectList(ApportionProcedure, "Id", "Name");
            ViewData["RelatedCompany"] = new SelectList(RelatedCompany, "Id", "Name");
            return View();
        }
      


    }
}
