using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ClientMerchantPortal.Models
{
    public class ClientDetails
    {
        [Key]
        public int CId { get; set; }
        public string Owener1Name { get; set; }
        public string Owener1Address { get; set; }
        public int Owener1ContactNo { get; set; }
        public string Owner1Positon { get; set; }
        public string Owener2Name { get; set; }
        public string Owener2Address { get; set; }
        public int Owener2ContactNo { get; set; }
        public string Owner2Positon { get; set; }
        public int BankAccount { get; set; }
    }
}