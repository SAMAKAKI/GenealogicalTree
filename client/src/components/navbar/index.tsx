import {Navbar as NavbarNext, NavbarBrand, NavbarContent, NavbarItem, Button,DropdownItem, DropdownTrigger, Dropdown, DropdownMenu,Avatar } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom';
import { logout, selectCurrentUser } from "../../app/slicers/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
export const Navbar: React.FC = () => {
  const user = useAppSelector(selectCurrentUser)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <NavbarNext position="sticky">
      <NavbarBrand>
        <Link to={'/'} className="font-bold text-inherit text-xl flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="w-[50px]"/>
          Genealogical Tree
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link to={'/'} className="text-lg font-semibold hover:text-[#006FEE]">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={'/tree'} className="text-lg font-semibold hover:text-[#006FEE]">My Tree</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={'/about'} className="text-lg font-semibold hover:text-[#006FEE]">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={'/contact-us'} className="text-lg font-semibold hover:text-[#006FEE]">Contact Us</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        { !user && (<NavbarItem className="lg:flex">
          <Link to={'/auth'}>
            <Button color="primary">Login</Button>
          </Link>
        </NavbarItem>)}
        { user && (<NavbarItem>
        <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name={`${user?.name || user?.username}`}
              size="sm"
              src={`${user?.avatarImage || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.veryicon.com%2Ficons%2Finternet--web%2Fprejudice%2Fuser-128.html&psig=AOvVaw0U0Gu4qUd-7JQS8VONJl1z&ust=1716563885403000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjJ9vWIpIYDFQAAAAAdAAAAABAJ'}`}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="name">
              <p className="font-bold">{user?.name || user.username}</p>
            </DropdownItem>
            <DropdownItem key="profile">
              <p className="font-bold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings" onClick={() => navigate('/settings')}>Settings</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogOut}>Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
        </NavbarItem>)}
      </NavbarContent>
    </NavbarNext>
  );
}
