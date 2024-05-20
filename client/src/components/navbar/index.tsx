import {Navbar as NavbarNext, NavbarBrand, NavbarContent, NavbarItem, Button,DropdownItem, DropdownTrigger, Dropdown, DropdownMenu,Avatar } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { logout, selectCurrentUser } from "../../app/slicers/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const Navbar: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)

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
        { user && (<NavbarItem>
        <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={`${user?.name || user?.username}`}
              size="sm"
              src={`${user?.avatarImage || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&psig=AOvVaw0IRFD3hBOeIhta8KVfncZs&ust=1716297680905000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJD5jp6pnIYDFQAAAAAdAAAAABAQ'}`}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.email}</p>
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
        </NavbarItem>)}

      </NavbarContent>
    </NavbarNext>
  );
}