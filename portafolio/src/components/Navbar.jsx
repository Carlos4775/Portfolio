import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { BusinessCenter, Face, School, ContactPhone } from "@material-ui/icons";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../img/logo.png";

const headersData = [
  {
    label: "Services",
    href: "#services",
    icon: <Face />,
  },
  {
    label: "Formation",
    href: "#formation",
    icon: <School />,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: <BusinessCenter />,
  },
  {
    label: "Contact Me",
    href: "#contact",
    icon: <ContactPhone />,
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#2E3445",
    padding: "0px 80px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "20px",
    "&:hover": {
      color: "#73CCA8",
    },
  },
  toolbar: {
    display: "flex",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  menuItem: {
    borderBottom: "6px solid #73CCA8",
    borderRadius: "2px",
  },
  listItem: {
    textDecoration: "none",
  },
}));

export default function Navbar() {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <img
          src={logo}
          alt="logo"
          height={120}
          width={210}
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        />

        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>
          <img
            src={logo}
            alt="logo"
            height="80px"
            width="auto"
            onClick={scrollToTop}
          />
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <List component="nav" aria-label="main menu">
        {headersData.map(({ label, href, icon }) => {
          return (
            <ListItem button key={label}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    to={href}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    {label}
                  </Link>
                }
              />
            </ListItem>
          );
        })}
      </List>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: Link,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
