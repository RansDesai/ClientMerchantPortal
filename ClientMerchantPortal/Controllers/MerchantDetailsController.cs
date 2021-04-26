using ClientMerchantPortal.Context;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ClientMerchantPortal.Controllers
{
    public class MerchantDetailsController : Controller
    {
        // GET: MerchantDetails
        ClientMerchantEntities dbObj = new ClientMerchantEntities();
        public ActionResult Merchant()
        {
            var MerchantList = dbObj.MerchantDetails.ToList();
            ViewData["MyData"] = MerchantList;
            return View();
        }
        public ActionResult AddMerchant(MerchantDetail model)

        {
            MerchantDetail MerObj = new MerchantDetail
            {
                MerchantId = model.MerchantId,
                MerchantContact = model.MerchantContact,
                MerchantName = model.MerchantName,
                MerchantAdress = model.MerchantAdress,
                MerchantBankAcc = model.MerchantBankAcc,
                MerchantEmail = model.MerchantEmail
            };

                dbObj.MerchantDetails.Add(MerObj);
                dbObj.SaveChanges();

          
            ModelState.Clear();
            var TransList = dbObj.MerchantDetails.ToList();
            ViewData["MyData"] = TransList;

            return View("Merchant");


        }

        public ActionResult DeleteMerchant(int MerchantId)
        {
            var obj = dbObj.MerchantDetails.Where(x => x.MerchantId == MerchantId).First();
            dbObj.MerchantDetails.Remove(obj);
            dbObj.SaveChanges();
            var list = dbObj.MerchantDetails.ToList();
            ViewData["MyData"] = list;
            return View("Merchant");
        }
    }
}