using KalemTanimlari.Controllers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KalemTanimlari.Models
{
    public class kalemmodel
    {  
    
        public int ItemId { get; set; }
        [Display(Name = "Kalem Adı")]
        public string ItemName { get; set; }

        [Display(Name = "Kalem Kodu")]
        public string ItemCode { get; set; }
        [Display(Name = "İlgili Firma ")]
        public string RelatedCompany { get; set; }
        [Display(Name = "Kalem Sırası")]
        public int ItemSequence { get; set; }
        [Display(Name = "Kalem Dövizi ")]
        public string ItemCurrency { get; set; }
        [Display(Name = "Döviz Kur Bilgisi ")]
        public string CurrencyRate { get; set; }
        [Display(Name = "Kalem Türü ")]
        public string ItemType { get; set; }
        [Display(Name = "Rapor Grubu")]
        public string ReportLot { get; set; }
        [Display(Name = "Paylaştırma Kriteri")]
        public string ApportionProcedure { get; set; }
        [Display(Name = "Kopyalama Formülü")]
        public string CopyFormula { get; set; }
        [Display(Name = "Zorunlu Seçeneği")]
        public bool RegulatoryArea { get; set; }
        [Display(Name = "Brüt Kar/zarar ")]
        public bool GrossProfitAndLoss { get; set; }
        [Display(Name = "İndirim/Alacak Dekontu ")]
        public bool CutCreditAdvice { get; set; }
        [Display(Name = "Sefer İlişkin Gelir/Gider")]
        public bool ExpeditionaryRevenueCostItem { get; set; }
        [Display(Name = "İç Dekont")]
        public bool InternalAbstractAccount { get; set; }
        [Display(Name = "Fatura Kalem Açıklamaları")]
        public string InvoiceItemDisclosures { get; set; }
        [Display(Name = "Gelir Kalemi ")]
        public bool RevenueItem { get; set; }
        [Display(Name = "Gider Kalemi")]
        public bool CostItem { get; set; }
        [Display(Name = "Gelir Muhasebe Hesabı")]
        public string RevenueAccount { get; set; }
        [Display(Name = "Gider Muhasebe Hesabı")]
        public string CostAccount { get; set; }
        [Display(Name = "Gelir Masraf Yeri hesabı ")]
        public string ExpenceCenterAccount { get; set; }
        [Display(Name = "Gelir KDV Hesabı ")]
        public string RevenueVatAccount { get; set; }
        [Display(Name = "Gider KDV Hesabı ")]
        public string CostVatAccount { get; set; }
        [Display(Name = "Gelir KDV Oranı")]
        public decimal RevenueRateOfVat { get; set; }
        [Display(Name = "Gider KDV Oranı")]
        public decimal CostRateOfVat { get; set; }
        [Display(Name = "Kullanılacak Uygulamalar")]
        public bool Modules { get; set; }

    }
 
}