using ClientMerchantPortal.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ClientMerchantPortal.Controllers
{
    public class TransactionController : Controller
    {
        ClientMerchantEntities dbObj = new ClientMerchantEntities();
        // GET: Transaction
        public ActionResult Transaction()
        {
            return View();
        }
        public ActionResult AddTransaction(TransactionDetail model)
        {
            TransactionDetail TransObj = new TransactionDetail();
            TransObj.TransDescription = model.TransDescription;
            TransObj.MerchantID = model.MerchantID;
            TransObj.MerchantName = model.MerchantName;
            TransObj.InvoiceNo = model.InvoiceNo;
            TransObj.AmountStatus = model.AmountStatus;
            TransObj.TransAmount = model.TransAmount;
            dbObj.TransactionDetails.Add(TransObj);
            dbObj.SaveChanges();

            return View("Transaction");
        }

        [HttpGet]
        public ActionResult ShowTransactions()
        {
            var TransList = dbObj.TransactionDetails.ToList();
            return View(TransList);
        }


        public ActionResult DeleteTransaction(int id)
        {
            var obj = dbObj.TransactionDetails.Where(x => x.TransId == id).First();
            dbObj.TransactionDetails.Remove(obj);
            dbObj.SaveChanges();
            var list = dbObj.TransactionDetails.ToList();

            return View("ShowTransactions", list);
        }
    }
}