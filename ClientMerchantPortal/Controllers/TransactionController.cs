using ClientMerchantPortal.Context;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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
            var TransList = dbObj.TransactionDetails.ToList();
            ViewData["MyData"] = TransList;
           
            return View();
        }

        public ActionResult AddTransaction(TransactionDetail model)
        {

            TransactionDetail TransObj = new TransactionDetail
            {
                TransDescription = model.TransDescription,
                MerchantID = model.MerchantID,
                MerchantName = model.MerchantName,
                InvoiceNo = model.InvoiceNo,
                AmountStatus = model.AmountStatus,
                TransAmount = model.TransAmount
            };


            if (model.TransId == 0)
            {
                dbObj.TransactionDetails.Add(TransObj);
                dbObj.SaveChanges();
                
            }
            else
            {
                dbObj.Entry(TransObj).State = EntityState.Modified;
                dbObj.SaveChanges();
            }
            ModelState.Clear();
            var TransList = dbObj.TransactionDetails.ToList();
            ViewData["MyData"] = TransList;

            return View("Transaction");
        }

        

        public ActionResult DeleteTransaction(int TransId)
        {
            var obj = dbObj.TransactionDetails.Where(x => x.TransId == TransId).First();
            dbObj.TransactionDetails.Remove(obj);
            dbObj.SaveChanges();
            var list = dbObj.TransactionDetails.ToList();
            ViewData["MyData"] = list;
            return View("Transaction");
        }

       
    }
}