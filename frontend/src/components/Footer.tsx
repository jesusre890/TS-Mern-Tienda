import { BiCopyright } from "react-icons/bi";

export default function Footer() {
  return (
    <section className="flex flex-col justify-center bg-gray-50 mt-12 ">
      <div className="flex flex-col gap-12 justify-center items-center md:justify-around my-8md:flex md:flex-row mt-10">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h3 className=" font-bold text-blue-gray-800 text-xl">Contacto</h3>
          <h4 className=" text-sm text-gray-600">Sede: Buenos Aires</h4>
          <h4 className=" text-sm text-gray-600">www.shoesshop.com/</h4>
        </div>
        <div>
          <div className="flex justify-center md:-mr-7">
            <a href="/"></a>
            <img src='' alt="" className=" w-32" />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h3 className=" font-bold text-blue-gray-800 text-xl">
            Información Legal
          </h3>
          <p className=" text-sm text-gray-600">Políticas de Privacidad</p>
          <p className=" text-sm text-gray-600">Políticas de Cookies</p>
          <p className=" text-sm text-gray-600">Aviso legal</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-5 mt-10 md:mb-5">
        <div className="flex items-center gap-2 font-medium text-gray-500 text-sm my-5 dark:text-slate-400">
          <BiCopyright />
          <div className="">Shoes Shop 2024</div>
        </div>
      </div>
    </section>
  );
}
