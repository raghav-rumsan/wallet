import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { BOTTOM_NAVIGATION_OPTIONS } from "@routes/paths";
import Iconify from "@components/iconify";

const BottomNavigationBar = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          router.push(newValue);
        }}>
        {BOTTOM_NAVIGATION_OPTIONS.map((option, index) => (
          <BottomNavigationAction
            icon={
              option.icon ? (
                <Iconify {...option?.iconStyle} icon={option.icon} />
              ) : (
                ""
              )
            }
            key={index}
            label={option.label}
            value={option.path}
            sx={option?.sx}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;
