using ClientMerchantPortal.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ClientMerchantPortal.Controllers;

namespace ClientMerchantPortal.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        ClientMerchantEntities dbObj = new ClientMerchantEntities();
        public ActionResult Login()
        {
            return View();
        }

        
        public ActionResult LogginIn(LoginParameter model)
        {
            var isValid = false;
            LoginParameter Obj = new LoginParameter();

            List<LoginParameter> List = dbObj.LoginParameters.ToList();

           foreach(var item in List)
            {
                if(item.Password == model.Password &&  item.Username == model.Username)
                {
                     isValid = true;
                }
            }

            
                return RedirectToAction("Client");
            
        }

        
    }
}