using KalemTanimlari.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KalemTanimlari.Controllers
{
    public class KalemApiController : ApiController
    {
       
            public dynamic veriEkle()
        {
            using (OptimumTechEntities1 db = new OptimumTechEntities1())
            {
              dynamic  model = db.C_SYS_ItemInformation.ToList();
               
                return new
                {
                    aaData=model
                };
            }
        }
        public dynamic Kayit(kalemmodel modal)
        {



            using (OptimumTechEntities1 db = new OptimumTechEntities1())
            {

                C_SYS_ItemInformation tablo = new C_SYS_ItemInformation();

                tablo.ApportionProcedure = modal.ApportionProcedure;
                tablo.CopyFormula = modal.CopyFormula;
                tablo.CostAccount = modal.CostAccount;
                tablo.CostItem = modal.CostItem;
                tablo.CostRateOfVat = modal.CostRateOfVat;
                tablo.CostVatAccount = modal.CostVatAccount;
                tablo.CurrencyRate = modal.CurrencyRate;
                tablo.CutCreditAdvice = modal.CutCreditAdvice;
                tablo.ExpeditionaryRevenueCostItem = modal.ExpeditionaryRevenueCostItem;
                tablo.ExpenceCenterAccount = modal.ExpenceCenterAccount;
                tablo.GrossProfitAndLoss = modal.GrossProfitAndLoss;
                tablo.InternalAbstractAccount = modal.InternalAbstractAccount;
                tablo.InvoiceItemDisclosures = modal.InvoiceItemDisclosures;
                tablo.ItemCode = modal.ItemCode;
                tablo.ItemCurrency = modal.ItemCurrency;
                tablo.ItemId = modal.ItemId;
                tablo.ItemName = modal.ItemName;
                tablo.ItemSequence = modal.ItemSequence;
                tablo.ItemType = modal.ItemType;
                tablo.Modules = modal.Modules;
                tablo.RegulatoryArea = modal.RegulatoryArea;
                tablo.RelatedCompany = modal.RelatedCompany;
                tablo.ReportLot = modal.ReportLot;
                tablo.RevenueAccount = modal.RevenueAccount;
                tablo.RevenueItem = modal.RevenueItem;
                tablo.RevenueRateOfVat = modal.RevenueRateOfVat;
                tablo.RevenueVatAccount = modal.RevenueVatAccount;
                


                db.C_SYS_ItemInformation.Add(tablo);
                db.SaveChanges();
            }
            return "";
        }

        public dynamic Get(int Id)
        {
            using (OptimumTechEntities1 db = new OptimumTechEntities1())
            {
                C_SYS_ItemInformation tablo = db.C_SYS_ItemInformation.FirstOrDefault(x => x.ItemId == Id);
                return tablo;
            }
            
        }
        public dynamic Duzenle(kalemmodel modal)
        {
            using(OptimumTechEntities1 db=new OptimumTechEntities1())
            {
                C_SYS_ItemInformation tablo = db.C_SYS_ItemInformation.FirstOrDefault(x => x.ItemId == modal.ItemId);



                tablo.ApportionProcedure = modal.ApportionProcedure;
                tablo.CopyFormula = modal.CopyFormula;
                tablo.CostAccount = modal.CostAccount;
                tablo.CostItem = modal.CostItem;
                tablo.CostRateOfVat = modal.CostRateOfVat;
                tablo.CostVatAccount = modal.CostVatAccount;
                tablo.CurrencyRate = modal.CurrencyRate;
                tablo.CutCreditAdvice = modal.CutCreditAdvice;
                tablo.ExpeditionaryRevenueCostItem = modal.ExpeditionaryRevenueCostItem;
                tablo.ExpenceCenterAccount = modal.ExpenceCenterAccount;
                tablo.GrossProfitAndLoss = modal.GrossProfitAndLoss;
                tablo.InternalAbstractAccount = modal.InternalAbstractAccount;
                tablo.InvoiceItemDisclosures = modal.InvoiceItemDisclosures;
                tablo.ItemCode = modal.ItemCode;
                tablo.ItemCurrency = modal.ItemCurrency;
                tablo.ItemId = modal.ItemId;
                tablo.ItemName = modal.ItemName;
                tablo.ItemSequence = modal.ItemSequence;
                tablo.ItemType = modal.ItemType;
                tablo.Modules = modal.Modules;
                tablo.RegulatoryArea = modal.RegulatoryArea;
                tablo.RelatedCompany = modal.RelatedCompany;
                tablo.ReportLot = modal.ReportLot;
                tablo.RevenueAccount = modal.RevenueAccount;
                tablo.RevenueItem = modal.RevenueItem;
                tablo.RevenueRateOfVat = modal.RevenueRateOfVat;
                tablo.RevenueVatAccount = modal.RevenueVatAccount;

                db.SaveChanges();
            }
            return "";
        }

        public dynamic DELETE(int Id)
        {
            using(OptimumTechEntities1 db=new OptimumTechEntities1())
            {
                C_SYS_ItemInformation item = db.C_SYS_ItemInformation.FirstOrDefault(x => x.ItemId == Id);
                db.C_SYS_ItemInformation.Remove(item);
                db.SaveChanges();
                return "OK";

            }
        }
    }
    }

