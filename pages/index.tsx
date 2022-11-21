import {
  Sidebar,
  SidebarSection,
  SidebarToggleButton,
  SidebarOverlay,
  NavGroup,
  NavItem,
} from '@saas-ui/sidebar'
import {
  FiHome, FiSettings,
  FiPlus,
  FiInbox,
  FiHelpCircle,
  FiHash,
  FiUsers,
  FiSearch,
} from 'react-icons/fi'
import { AppShell } from '@saas-ui/app-shell'
import { HStack, Box, Image, Badge, Heading, useDisclosure, Text } from '@chakra-ui/react'
import { StarIcon, InfoIcon } from '@chakra-ui/icons'
export default function Home() {
  return (
    <AppShell
      navbar={
        <Box as="header" borderBottomWidth="1px" py="2" pl="20">
          <Image
            src="https://saas-ui.dev/favicons/favicon-96x96.png"
            boxSize="7"
          />
        </Box>
      }
      sidebar={
      <HStack spacing="0">
        <Sidebar
          variant="condensed"
          height="400px"
          bg="purple.500"
          borderWidth="0"
          width="12"
        >
          <SidebarSection>
            <Image
              src="https://saas-ui.dev/favicons/favicon-96x96.png"
              boxSize="7"
            />
          </SidebarSection>
          <SidebarSection>
            <NavItem icon={<FiHome size="1.2em" color="white" />}>Home</NavItem>
            <NavItem icon={<FiUsers size="1.2em" color="white" />} isActive>
              Users
            </NavItem>
            <NavItem icon={<FiSettings size="1.2em" color="white" />}>
              Settings
            </NavItem>
          </SidebarSection>
        </Sidebar>
        <Sidebar
          height="400px"
          //isResizable
          width="280px"
          minWidth="220px"
          maxWidth="320px"
        >
          <SidebarSection direction="row">
            <Heading size="sm" fontWeight="semibold">
              Users
            </Heading>
          </SidebarSection>
          <SidebarSection flex="1" overflowY="auto">
            <NavGroup>
              <NavItem icon={<FiUsers />} isActive>
                Overview
              </NavItem>
            </NavGroup>

            <NavGroup title="Teams" isCollapsible>
              <NavItem>Sales</NavItem>
              <NavItem>Support</NavItem>
            </NavGroup>

            <NavGroup title="Tags" isCollapsible>
              <NavItem
                label="Lead"
                icon={<Badge bg="purple.500" boxSize="2" borderRadius="full" />}
              >
                <Text>Lead</Text>
                <Badge opacity="0.6" borderRadius="full" bg="none" ms="auto">
                  83
                </Badge>
              </NavItem>
              <NavItem
                icon={<Badge bg="cyan.500" boxSize="2" borderRadius="full" />}
              >
                <Text>Customer</Text>
                <Badge opacity="0.6" borderRadius="full" bg="none" ms="auto">
                  210
                </Badge>
              </NavItem>
            </NavGroup>
          </SidebarSection>
          <SidebarSection>
            <NavItem icon={<FiHelpCircle />}>Documentation</NavItem>
          </SidebarSection>
        </Sidebar>
    </HStack>
      }
    >
      <Box as="main" px="20px" py="20px">Hello</Box>
    </AppShell>
    
  )
}