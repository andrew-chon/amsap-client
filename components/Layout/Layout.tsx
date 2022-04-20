import { AppShell, Button, Group, Header } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <AppShell
        header={
          <Header height={60}>
            <Group sx={{ height: '100%' }} px={20}>
              <Link href='/signup' passHref>
                <Button>Sign In</Button>
              </Link>
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
