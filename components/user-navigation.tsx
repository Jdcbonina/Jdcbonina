"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@heroui/react";

export default function UserNavigation() {
  const handleSendMessage = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "user/user.jpg",
            }}
            className="transition-transform"
            description=""
            name=""
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            {/* <p className="font-bold">Signed in as</p> */}
            <p className="font-bold">@JDCBonina</p>
          </DropdownItem>
          <DropdownItem key="download">
            <a href="/cv/Joey_Bonina_CV.pdf" download>
              Download CV
            </a>
          </DropdownItem>
          <DropdownItem
            key="hireme"
            color="primary"
            onPress={() => handleSendMessage("jdcbonina@gmail.com")}
          >
            Hire me
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
