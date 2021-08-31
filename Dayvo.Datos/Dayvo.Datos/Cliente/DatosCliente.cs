using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Dayvo.DT.DTCliente;

namespace Dayvo.Datos.Cliente
{
    public class DatosCliente
    {
        private static string Cadena = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        public List<DTCliente> consultarClientes()
        {
            try
            {

                using (IDbConnection db = new SqlConnection(Cadena))
                {
                    var consulta = @"SELECT *
                    FROM [DBPrueba].[dbo].[tblCliente]";
                    var ordenes = (List<DTCliente>)db.Query<DTCliente>(consulta);
                    return ordenes;
                }
            }
            catch (Exception ex) {
                throw ex;
            }
        }

        public List<DTCliente> GuardarCliente(DTCliente dTCliente) {
            try
            {

                using (IDbConnection db = new SqlConnection(Cadena))
                {
                    var consulta = @"GuardarCliente";
                    var parameters = new DynamicParameters();
                    parameters.Add("@Nombre", dTCliente.Nombre);
                    parameters.Add("@Direccion", dTCliente.Direccion);



                    // Se ejecuta la consulta.
                    var ListaClientes = (List<DTCliente>)db.Query<DTCliente>(consulta, parameters, commandType: CommandType.StoredProcedure);
                    return ListaClientes;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<DTCliente> ActualizarCliente(DTCliente dTCliente) {
            try
            {

                using (IDbConnection db = new SqlConnection(Cadena))
                {

                    var consulta = @"ActualizarCliente";
                    var parameters = new DynamicParameters();
                    parameters.Add("@Nombre", dTCliente.Nombre);
                    parameters.Add("@Direccion", dTCliente.Direccion);
                    parameters.Add("@Id", dTCliente.Id);


                    // Se ejecuta la consulta.
                    var ListaClientes = (List<DTCliente>)db.Query<DTCliente>(consulta, parameters, commandType: CommandType.StoredProcedure);
                    return ListaClientes;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        
        public List<DTCliente> EliminarCliente(DTCliente dTCliente)
        {
            try
            {

                using (IDbConnection db = new SqlConnection(Cadena))
                {

                    var consulta = @"EliminarCliente";
                    var parameters = new DynamicParameters();
                    parameters.Add("@Id", dTCliente.Id);


                    // Se ejecuta la consulta.

                    var ListaClientes = (List<DTCliente>)db.Query<DTCliente>(consulta, parameters, commandType: CommandType.StoredProcedure);
                    return ListaClientes;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}