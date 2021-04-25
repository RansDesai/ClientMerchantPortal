using ClientMerchantPortal.Context;
using System;
using System.Collections.Generic;
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
        public ActionResult AddMerchant()
        {
            return View();
        }

       
    }
}