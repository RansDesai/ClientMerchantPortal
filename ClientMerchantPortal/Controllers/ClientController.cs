using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ClientMerchantPortal.Models;

namespace ClientMerchantPortal.Controllers
{
    public class ClientController : Controller
    {
        // GET: Client
        public ActionResult Client()
        {
            var ClientDetails = new ClientDetails() { Owener1Name ="JB Hi-Fi"};
            return View(ClientDetails);
        }

       
    }
}