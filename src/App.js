import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Counter from "./components/Counter";
import Mostrador from "./components/mostrador";
import { Route, Routes } from "react-router-dom";
import Counter_finalP from "./components/Counter_finalP";
import Tables from "./components/Tables";
import Home_Usuarios from './components/Home_Usuarios';
import Home_client from './components/Home_client';
import Home_detail from './components/Home_detail';
import Home_detail_no from './components/Home_detail_no';
import Home_detail_no2 from './components/Home_detail_no2';
import Pajo from './components/Pajo';
import Homeinformation from './components/Homeinformation';
import Home_crear from './components/Home_crear';
import Futura from './components/Futura';
import Articles from "./components/Articles";
import SingleArticleProduct from "./components/SingleArticleProduct";
import DigitalMenu from "./components/DigitalMenu";
import ProductionCenter from "./components/ProductionCenter";
import { EnlaceUser } from "./components/EnlaceUser";
import BHomeDelivery from "./components/BHomeDelivery";
import TableCounter1 from "./components/TableCounter1";
import TableDatos from "./components/TableDatos";
import TablePago from "./components/TablePago";
import TableInformation from "./components/TableInformation";
import Caja from './components/caja';
import Informacira from './components/Informacira';
import Historial from './components/Historial';
import Movimientos from './components/Movimientos';
import Home_Pedidos_paymet from "./components/Home_Pedidos_paymet";
import Home_Pedidos from "./components/Home_Pedidos";
import Home_Bebidas from "./components/Home_Bebidas";
import Home_Detalles from "./components/Home_Detalles";
import Kds from "./components/Kds";
import Login from "./components/Login";
import Usuarios from "./components/Usuarios";
import Home_mes from "./components/Home_mes";
import KdsRecibido from "./components/KdsRecibido";
import KdsPreparado from "./components/KdsPreparado";
import KdsFinalizado from "./components/KdsFinalizado";
import KdsEntregado from "./components/KdsEntregado";
import Home_pedidos_payment_edit from "./components/Home_pedidos_payment_edit";
import TableRecipt from "./components/TableRecipt";
import Home_usa_payment_edit from "./components/Home_usa_payment_edit";
import DeliveryDatos from "./components/DeliveryDatos";
import DeliveryPago from "./components/DeliveryPago";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter/mostrador" element={<Mostrador />} />
        <Route path="/counter/payment" element={<Counter_finalP />} />
        <Route path="/table" element={<Tables />} />
        <Route path="/home/usa/bhomedelivery" element={<BHomeDelivery />} />
        <Route path="/home/usa" element={<Home_Usuarios />} />
        <Route path="/home/usa/information" element={<Homeinformation />} />
        <Route path="/home/client" element={<Home_client />} />
        <Route path="/home/client/detail" element={<Home_detail />} />
        <Route path="/home/client/detail_no" element={<Home_detail_no />} />
        <Route path="/home/client/detail_no2" element={<Home_detail_no2 />} />
        <Route path="/home/client/crear" element={<Home_crear />} />
        <Route path="/home/client/pajo" element={<Pajo />} />
        <Route path="/Futura" element={<Futura />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/enlaceUser" element={<EnlaceUser />} />
        <Route path="/digitalmenu" element={<DigitalMenu />} />
        <Route path="/articles/singleatricleproduct" element={<SingleArticleProduct />} />
        <Route path="/digitalmenu/singleatricleproduct" element={<SingleArticleProduct />} />
        <Route path="/productioncenter" element={<ProductionCenter />} />
        <Route path="/table1" element={<TableCounter1 />} />
        <Route path="/table/datos" element={<TableDatos />} />
        <Route path="/table/pago" element={<TablePago />} />
        <Route path="/table/information" element={<TableInformation />} />
        <Route path="/caja" element={<Caja />} />
        <Route path="/caja/informacira" element={<Informacira />} />
        <Route path="/caja/historial" element={<Historial />} />
        <Route path="/caja/movimientos" element={<Movimientos />} />
        <Route path="/home_Pedidos/paymet" element={<Home_Pedidos_paymet />} />
        <Route path="/home_Pedidos/payment_edit" element={<Home_pedidos_payment_edit />} />
        <Route path="/home_Pedidos" element={<Home_Pedidos />} />
        <Route path="/home_Bebidas" element={<Home_Bebidas />} />
        <Route path="/home_Detalles" element={<Home_Detalles />} />
        <Route path="/kds" element={<Kds />} />
        <Route path="/kds/recibido" element={<KdsRecibido />} />
        <Route path="/kds/preparado" element={<KdsPreparado />} />
        <Route path="/kds/finalizado" element={<KdsFinalizado />} />
        <Route path="/kds/entregado" element={<KdsEntregado />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/home_mess" element={<Home_mes />} />
        <Route path="/tablerecipt" element={<TableRecipt />} />
        <Route path="/home/usa/information/payment_edit" element={<Home_usa_payment_edit />} />
        <Route path="/home/usa/bhomedelivery/datos" element={<DeliveryDatos />} />
        <Route path="/home/usa/bhomedelivery/pago" element={<DeliveryPago />} />
      </Routes>
    </div>
  );
}

export default App;