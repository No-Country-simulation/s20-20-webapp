import { useSession } from "next-auth/react";
import Image from "next/image";

export default function User() {
  const { data } = useSession();
  const user = data?.user;
  
  return <>
    <section className='profile'>
      <Image src={user?.image || "/default-profile-image.png"} alt="imagen de perfil" width={100} height={100} />
      <h2>{user?.name || user?.email || 'Mateo Gonzaléz'}</h2>
    </section>
  </>
}