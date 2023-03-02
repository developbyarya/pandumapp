"use client";
import { useForm } from "react-hook-form";

enum Jenjang {
  TK = "tk",
  SD = "sd",
  SMP = "smp",
  SMA = "sma",
  MAHASISWA = "mahasiswa",
  LULUS = "lulus",
}

interface FormType {
  nama: string;
  tanggalLahir: Date;
  jenjang: Jenjang;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div>
        <label htmlFor="nama">Nama lengkap</label>
        <input type="text" id="nama" {...register("nama")} />
      </div>
      <div>
        <label htmlFor="tanggallahir">Tanggal Lahir</label>
        <input type="date" {...register("tanggalLahir")} id="tanggallahir" />
      </div>
      <div>
        <label htmlFor="jenjang">Jenjang</label>
        <select {...register("jenjang")} id="jenjang" className="uppercase">
          <option value="sd" className="uppercase">
            SD
          </option>
          <option value="smp" className="uppercase">
            SMP
          </option>
          <option value="sma">SMA</option>
          <option value="mahasiswa">Mahasiswa</option>
          <option value="lulus">Lulus</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
