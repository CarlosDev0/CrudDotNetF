using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dayvo.Datos.Cliente;
using Dayvo.DT.DTCliente;

namespace Crud1.Controllers.Cliente
{
    public class ClienteController : Controller
    {
        // GET: Cliente
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult ConsultarClientes() {
            DatosCliente dd = new DatosCliente();
            List<DTCliente> dTClientes = new List<DTCliente>();
            dTClientes = dd.consultarClientes();
            return Json(dTClientes, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GuardarCliente(DTCliente dTCliente) {
            DatosCliente dd = new DatosCliente();
            dd.GuardarCliente(dTCliente);

            List<DTCliente> dTClientes = new List<DTCliente>();
            dTClientes = dd.consultarClientes();
            return Json(dTClientes, JsonRequestBehavior.AllowGet);
        }
        public JsonResult ActualizarCliente(DTCliente dTCliente) {
            DatosCliente dd = new DatosCliente();
            

            List<DTCliente> dTClientes = new List<DTCliente>();
            dTClientes = dd.ActualizarCliente(dTCliente);
            return Json(dTClientes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult EliminarCliente(DTCliente dTCliente) {
            DatosCliente dd = new DatosCliente();
            

            List<DTCliente> dTClientes = new List<DTCliente>();
            dTClientes = dd.EliminarCliente(dTCliente);
            return Json(dTClientes, JsonRequestBehavior.AllowGet);
        }
    }
}