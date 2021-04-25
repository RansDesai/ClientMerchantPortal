using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ClientMerchantPortal.Context;
using System.Data.Entity;

namespace ClientMerchantPortal.Controllers
{
    public class ClientController : Controller
    {

        // GET: Client
        ClientMerchantEntities dbObj = new ClientMerchantEntities();
        public ActionResult Client()
        {
           
            return View();
        }

        [HttpPost]
        public ActionResult AddClient(ClientDetails model)
        {
            ClientDetails ClientObj = new ClientDetails();

            ClientObj.CId = model.CId;
            ClientObj.OwnerName1 = model.OwnerName1;
            ClientObj.OwnerAddress1 = model.OwnerAddress1;
            ClientObj.OwnerContactNo1 = model.OwnerContactNo1;
            ClientObj.OwnerPosition1 = model.OwnerPosition1;
            ClientObj.OwnerName2 = model.OwnerName2;
            ClientObj.OwnerAddress2 = model.OwnerAddress2;
            ClientObj.OwnerContactNo2 = model.OwnerContactNo2;
            ClientObj.OwnerPosition2 = model.OwnerPosition2;
            ClientObj.BankAccount = model.BankAccount;

            dbObj.ClientDetails1.Add(ClientObj);
            dbObj.SaveChanges();
            return View("Client");
        }



    }
}