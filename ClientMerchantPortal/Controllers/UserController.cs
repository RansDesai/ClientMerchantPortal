using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ClientMerchantPortal.Context;


namespace ClientMerchantPortal.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        ClientMerchantEntities dbObj = new ClientMerchantEntities();
        public ActionResult AddorEdit(int id=0)
        {   
            LoginDetail dbObj = new LoginDetail();

            return View(dbObj);
        }

        [HttpPost]
        public ActionResult AddorEdit(LoginDetail model)
        {
            LoginDetail obj = new LoginDetail() { 
            Username = model.Username,
            Password = model.Password

            };
            dbObj.LoginDetails.Add(obj);
            dbObj.SaveChanges();
            return View("AddorEdit",new LoginDetail());

        }
    }
}