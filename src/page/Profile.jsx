import { useState } from "react";
import { ProfileComp } from "../components/items/ProfileComp";
import { EditProfileComp } from "../components/EditProfile";
import { SignOutButton } from "../components/items/SignOut";
import { PetWrap } from "../components/ProfilePetWrap";
import { Footer } from "../components/Footer";

export const Profile = () => {
  const [editFormShow, setEditFormShow] = useState(false);
  const [user, setUser] = useState({
    name: "Mas Elon",
    email: "elon@gmail.com",
    image: "/assets/image/iconuser2.png",
  });

  const onSubmit = (data) => {
    setEditFormShow(false);
    setUser((prev) => ({
      ...prev,
      name: data.name,
      image: data.img,
    }));
    console.log(user);
  };

  return (
    <>
      <div className="w-full px-10">
        <div className="max-w-[1200px] min-h-screen m-auto flex gap-6">
          {/* profile */}
          <div className="flex-1">
            <ProfileComp
              onclick={() => setEditFormShow(true)}
              username={user.name}
              email={user.email}
              image={user.image}
            />
            {editFormShow ? (
              <EditProfileComp
                user={user}
                onSubmit={onSubmit}
                onclose={() => setEditFormShow(false)}
              />
            ) : null}
            <div className="mt-9">
              <SignOutButton />
            </div>
          </div>
          {/* tambah hewan */}
          <div className="flex-[2]">
            <PetWrap />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
