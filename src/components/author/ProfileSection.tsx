import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Modal from "./Modal";

function ProfileSection() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [ShowModal, setShowModal] = useState(false);
  const [passChange, setpassChange] = useState(false);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      nom: "Bou",
      prenom: "Ali",
      email: "Bou.ali@gmail.com",
      tel: "0645454545",
      adresse: "Marrakech, 40000",
      image: "/ali.jpg",
      oldpassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  const defaultValues = {
    nom: "Bou",
    prenom: "Ali",
    email: "Bou.ali@gmail.com",
    tel: "0645454545",
    adresse: "Marrakech, 40000",
    image: "/ali.jpg",
  };

  const onSubmit = (data: schemaValues) => {
    if (data) {
      console.log(data);
    }
  };

  function handleModal() {
    setShowModal(!ShowModal);
  }

  function handleModalClose() {
    if (ShowModal) {
      setShowModal(false);
    }
  }

  return (
    <div className="listingSection__wrap" onClick={handleModalClose}>
      <h2 className="text-3xl font-bold text-center">Mon profil</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white dark:bg-neutral-900 rounded-md relative"
      >
        <div className="flex flex-col gap-5 my-5">
          <input
            type="file"
            accept=""
            id="image"
            hidden
            onChange={handleImageChange}
          />

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <Image
                src={imagePreview || defaultValues.image}
                alt="profile photo"
                className="w-full h-full object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                width={170}
                height={170}
              />
            </div>

            <label
              htmlFor="image"
              className="text-white text-base font-light active:scale-[.99] hover:bg-[#5dadf8] bg-[#67b6ff] py-2 px-6 rounded-lg"
            >
              Télécharger une photo
            </label>
          </div>

          {!passChange ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-4 items-center justify-center w-[90%] mx-auto">
              <div className="w-full">
                <label htmlFor="nom" className="text-[.9rem] text-neutral-600">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  placeholder={defaultValues.nom}
                  className="w-full rounded-md bg-[#f5f5f5] border-0 outline-neutral-600 "
                  {...register("nom")}
                />
                {errors.nom && (
                  <span className="text-sm text-red-700 font-light">
                    {errors.nom.message}
                  </span>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="prenom"
                  className="text-[.9rem] text-neutral-600"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  placeholder={defaultValues.prenom}
                  className="w-full rounded-md bg-[#f5f5f5] border-0 outline-neutral-600 "
                  {...register("prenom")}
                />
                {errors.prenom && (
                  <span className="text-sm text-red-700 font-light">
                    {errors.prenom.message}
                  </span>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="email"
                  className="text-[.9rem] text-neutral-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={defaultValues.email}
                  className="w-full rounded-md bg-[#f5f5f5] border-0 outline-neutral-600 "
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-sm text-red-700 font-light">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="w-full">
                <label htmlFor="tel" className="text-[.9rem] text-neutral-600">
                  Tél
                </label>
                <input
                  type="tel"
                  id="tel"
                  placeholder={defaultValues.tel}
                  className="w-full rounded-md bg-[#f5f5f5] border-0 outline-neutral-600"
                  {...register("tel")}
                />
                {errors.tel && (
                  <span className="text-sm text-red-700 font-light">
                    {errors.tel.message}
                  </span>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="adresse"
                  className="text-[.9rem] text-neutral-600"
                >
                  Adresse
                </label>
                <input
                  type="text"
                  id="adresse"
                  placeholder={defaultValues.adresse}
                  className="w-full rounded-md bg-[#f5f5f5] border-0 outline-neutral-600"
                  {...register("adresse")}
                />
                {errors.adresse && (
                  <span className="text-sm text-red-700 font-light">
                    {errors.adresse.message}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-y-5 items-center justify-center md:w-[70%] w-[90%] mx-auto">
              <div className="w-full">
                <label
                  htmlFor="oldpass"
                  className="text-[.9rem] text-neutral-600"
                >
                  Old password
                </label>
                <input
                  type="password"
                  id="oldpass"
                  placeholder="Old password..."
                  className="w-full rounded-md bg-[#f5f5f5] border-0 outline-neutral-600 "
                  {...register("oldpassword")}
                />
                {errors.oldpassword && (
                  <span className="text-sm text-red-700 font-light">
                    {errors.oldpassword.message}
                  </span>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="newpass"
                  className="text-[.9rem] text-neutral-600"
                >
                  New password
                </label>
                <input
                  type="password"
                  id="newpass"
                  placeholder="New password..."
                  className="w-full rounded-md bg-[#f5f5f5] border-0 outline-neutral-600 "
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-sm text-red-700 font-light">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="confirmpass"
                  className="text-[.9rem] text-neutral-600"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmpass"
                  placeholder="Confirm password..."
                  className="w-full rounded-md bg-[#f5f5f5] border-0 outline-neutral-600"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <span className="text-sm text-red-700 font-light">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <button
              type="submit"
              className="text-white sm:w-[400px] text-lg font-medium active:scale-[.99] hover:bg-[#5dadf8] bg-[#67b6ff] py-3 px-6 rounded-md"
            >
              Sauvegarder
            </button>

            <button
              onClick={() => setpassChange(!passChange)}
              type="button"
              className="text-neutral-500 text-base font-light active:scale-[.99] border border-neutral-400 py-2 px-4 rounded-xl"
            >
              {passChange ? "Revenir" : "Changer mon mot de passe"}
            </button>

            <button
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              onClick={handleModal}
              type="button"
              className="text-red-700 text-base font-light active:scale-[.99] border border-red-500 py-2 px-4 rounded-xl"
            >
              Supprimer mon compte
            </button>
          </div>
        </div>

        {ShowModal && <Modal handleModal={handleModal} />}

        {ShowModal && (
          <div className="w-full h-full absolute top-0 left-0 backdrop-blur-sm"></div>
        )}
      </form>
    </div>
  );
}

const schema = z
  .object({
    nom: z.string().min(1, "Le nom est requis"),
    prenom: z.string().min(1, "Le prénom est requis"),
    email: z
      .string()
      .email("L'adresse email est invalide")
      .min(1, "L'email est requis"),
    tel: z.string().min(1, "Le numéro de téléphone est requis"),
    adresse: z.string().min(1, "L'adresse est requise"),
    image: z.string().min(1, "L'adresse est requise"),
    oldpassword: z
      .string()
      .min(10, { message: "Password must be at least 10 characters." }),
    password: z
      .string()
      .min(10, { message: "Password must be at least 10 characters." }),
    confirmPassword: z
      .string()
      .min(10, { message: "Password must be at least 10 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type schemaValues = z.infer<typeof schema>;

export default ProfileSection;
