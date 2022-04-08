import { AppShell, Button, Group, Header } from '@mantine/core';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  const onClick = () => {
    alert('clicked');
  };
  return (
    <>
      <AppShell
        header={
          <Header height={60}>
            <Group sx={{ height: '100%' }} px={20}>
              <Button onClick={onClick}>Sign In</Button>
            </Group>
          </Header>
        }
      >
        {children}
      </AppShell>
    </>
  );
};

export default Layout;
