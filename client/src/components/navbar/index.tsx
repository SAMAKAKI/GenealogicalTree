import {Navbar as NavbarNext, NavbarBrand, NavbarContent, NavbarItem, Button,DropdownItem, DropdownTrigger, Dropdown, DropdownMenu,Avatar } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { logout } from "../../app/slicers/userSlice";
import { useAppDispatch } from "../../app/hooks";

export const Navbar: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const handleLinkClick = (path: string) => {
    navigate(path);
  };

  const handleLogOut = () => {
    dispatch(logout())
    navigate('/auth')
  }

  return (
    <NavbarNext position="static">
      <NavbarBrand>
        <img src="./images/logo.png" alt="logo" className="w-1/6" onClick={() => handleLinkClick('/home')}/>
        <p onClick={() => handleLinkClick('/home')} className="font-bold text-inherit">Genealogical tree</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-2" justify="center">

        <NavbarItem isActive>
          cos
        </NavbarItem>

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Button  color="primary" onClick={() => handleLinkClick('/auth')}>Login</Button>
        </NavbarItem>
        <NavbarItem>
        <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="edit-tree" onClick={() => handleLinkClick('/tree')}>Edit Tree</DropdownItem>
            <DropdownItem key="home" onClick={() => handleLinkClick('/home')}>home</DropdownItem>
            <DropdownItem key="settings" onClick={() => handleLinkClick('/settings')}>My Settings</DropdownItem>
            
            
            <DropdownItem key="logout" color="danger" onClick={handleLogOut}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
        </NavbarItem>

      </NavbarContent>
    </NavbarNext>
  );
}