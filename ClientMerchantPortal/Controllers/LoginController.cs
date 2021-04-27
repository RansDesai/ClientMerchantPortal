using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ClientMerchantPortal.Context;
using ClientMerchantPortal.Controllers;

namespace ClientMerchantPortal.Controllers
{
   
    public class LoginController : Controller
    {
        
       
        // GET: Login
        [HttpGet]
        public ActionResult Index()
        {

            
            return View();
        }

        //public ActionResult CheckLogin(LoginDetail model)
        //{

        //    List<LoginDetail> details = dbObj.LoginDetails.ToList();

        //    foreach(var item in details)
        //    {
        //        if(item.Username == model.Username && item.Password == model.Password)
        //        {
        //            var login = true;
        //            ViewData["Loginauth"] = login;
        //            return Redirect("/Home/");
        //        }
        //    }
            
        //    Response.Write("Invalid login credentials");
        //    return View("Index");
        //}

       
    }
}